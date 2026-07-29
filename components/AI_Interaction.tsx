
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import { firestore } from '../lib/firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { getFunctions, httpsCallable } from 'firebase/functions';

const AI_Interaction = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, userData } = useAuth();
  const { showNotification } = useNotification();

  const handleGenerate = async () => {
    if (!prompt || !user) {
      showNotification('You must be logged in and provide a prompt.', 'error');
      return;
    }

    setIsLoading(true);
    setGeneratedCode('');

    try {
      if (userData?.subscription === 'Free' && userData?.generations >= 5) {
        showNotification('You have reached your daily generation limit.', 'error');
        throw new Error('Daily generation limit reached.');
      }

      const functions = getFunctions();
      const generateCode = httpsCallable(functions, 'generateCode');
      const result = await generateCode({ prompt });
      const data = result.data as { code: string };
      
      setGeneratedCode(data.code);
      showNotification('Code generated successfully!', 'success');

      const userDocRef = doc(firestore, 'users', user.uid);
      await updateDoc(userDocRef, { generations: increment(1) });

    } catch (error: any) {
      if (error.message !== 'Daily generation limit reached.') {
        showNotification(error.message || 'Failed to generate code.', 'error');
      }
      console.error("Error generating code:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    showNotification('Code copied to clipboard!', 'success');
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
      <h1 className="text-3xl font-bold text-white mb-6">AI Generator</h1>
      
      <div className="mb-6">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here, e.g., 'Create a semantic HTML structure for a hero section...'"
          className="w-full h-32 p-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div className="text-center mb-6">
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed transition duration-300 ease-in-out flex items-center justify-center w-48 mx-auto"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Code'
          )}
        </button>
      </div>

      {generatedCode && (
        <div className="bg-gray-900 border border-gray-700 text-white p-6 rounded-lg relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Generated Code:</h3>
            <button onClick={handleCopy} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-3 rounded-lg text-sm transition-colors">
              Copy
            </button>
          </div>
          <pre className="whitespace-pre-wrap">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default AI_Interaction;
