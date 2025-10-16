import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const { user, userData } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const usagePercentage = userData ? (userData.generations / 5) * 100 : 0;

  return (
    <div>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-text">Dashboard</h1>
          <p className="text-brand-gray">Welcome back, {user?.email}</p>
        </div>
        <button 
          onClick={handleLogout} 
          className="bg-brand-light hover:bg-brand-gray text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Subscription Card */}
        <div className="bg-brand-med border border-brand-light rounded-lg p-6">
          <h3 className="text-xl font-semibold text-brand-gray mb-4">Subscription Plan</h3>
          <p className="text-5xl font-bold text-brand-text">{userData?.subscription || 'Loading...'}</p>
          {userData?.subscription === 'Free' && (
            <button className="mt-4 bg-brand-accent hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg transition-opacity">
              Upgrade to Pro
            </button>
          )}
        </div>

        {/* Usage Card */}
        <div className="bg-brand-med border border-brand-light rounded-lg p-6">
          <h3 className="text-xl font-semibold text-brand-gray mb-4">Daily Usage</h3>
          {userData?.subscription === 'Free' ? (
            <div>
              <p className="text-brand-text mb-2">{userData?.generations || 0} / 5 generations used</p>
              <div className="w-full bg-brand-dark rounded-full h-4 border border-brand-light">
                <div 
                  className="bg-brand-accent h-full rounded-full" 
                  style={{ width: `${usagePercentage}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <p className="text-brand-text">You have unlimited generations on the Pro plan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
