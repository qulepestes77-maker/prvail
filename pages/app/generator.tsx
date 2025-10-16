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
    return <p className="text-center p-8">Loading...</p>;
  }

  return (
    <AppLayout>
      <AI_Interaction />
    </AppLayout>
  );
};

export default GeneratorPage;
