
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';
import AppLayout from '../../components/AppLayout';
import AI_Interaction from '../../components/AI_Interaction';

const GeneratorPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <AppLayout>
      <AI_Interaction />
    </AppLayout>
  );
};

export default GeneratorPage;
