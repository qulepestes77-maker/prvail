import Auth from '../components/Auth';
import Layout from '../components/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center py-16">
        <Auth />
      </div>
    </Layout>
  );
};

export default LoginPage;
