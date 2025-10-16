const { onCall } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getVertexAI } = require('firebase-admin/vertex-ai');

initializeApp();

exports.generateCode = onCall(async (request) => {
  const { prompt } = request.data;
  const { auth } = request;

  if (!auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'The function must be called while authenticated.'
    );
  }

  if (!prompt) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'The function must be called with a "prompt" argument.'
    );
  }

  const vertexAI = getVertexAI();
  const generativeModel = vertexAI.getGenerativeModel({
    model: 'gemini-1.0-pro-001',
  });

  try {
    const result = await generativeModel.generateContent(prompt);
    const response = await result.response;
    const code = response.text();

    await getFirestore().collection("snippets").add({
      prompt,
      code,
      userId: auth.uid,
      createdAt: new Date(),
    });

    return { code };
  } catch (error) {
    console.error("Error generating code:", error);
    throw new functions.https.HttpsError('internal', 'Failed to generate code.');
  }
});
