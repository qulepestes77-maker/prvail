import { useState } from 'react';
import { useRouter } from 'next/router';
import { useNotification } from '../context/NotificationContext';
import { auth, firestore } from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await setDoc(doc(firestore, 'users', user.uid), {
          email: user.email,
          subscription: 'Free',
          generations: 0,
          createdAt: serverTimestamp()
        });
        showNotification('Account created successfully!', 'success');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        showNotification('Logged in successfully!', 'success');
      }
      router.push('/app');
    } catch (err: any) {
      showNotification(err.message || 'An error occurred.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-brand-med border border-brand-light rounded-lg p-8">
      <h2 className="text-2xl font-bold text-center text-brand-text mb-6">
        {isSignUp ? 'Create Your Account' : 'Log In to PRVAIL'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 bg-brand-dark border border-brand-light rounded-lg text-brand-text"
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-brand-accent hover:opacity-90 text-white font-bold py-3 px-4 rounded-lg transition-opacity disabled:bg-brand-gray"
        >
          {isLoading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Log In')}
        </button>
      </form>
      <div className="text-center mt-6">
        <button 
          onClick={() => setIsSignUp(!isSignUp)} 
          className="text-brand-gray hover:text-brand-text transition-colors"
        >
          {isSignUp ? 'Already have an account? Log In' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
