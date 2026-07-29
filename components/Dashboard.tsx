
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
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {user?.email}</p>
        </div>
        <button 
          onClick={handleLogout} 
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Subscription Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-400 mb-4">Subscription Plan</h3>
          <p className="text-5xl font-bold text-white">{userData?.subscription || 'Loading...'}</p>
          {userData?.subscription === 'Free' && (
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-opacity">
              Upgrade to Pro
            </button>
          )}
        </div>

        {/* Usage Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-400 mb-4">Daily Usage</h3>
          {userData?.subscription === 'Free' ? (
            <div>
              <p className="text-white mb-2">{userData?.generations || 0} / 5 generations used</p>
              <div className="w-full bg-gray-700 rounded-full h-4 border border-gray-600">
                <div 
                  className="bg-blue-500 h-full rounded-full" 
                  style={{ width: `${usagePercentage}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <p className="text-white">You have unlimited generations on the Pro plan.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
