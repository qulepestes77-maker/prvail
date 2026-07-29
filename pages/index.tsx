
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { remoteConfig } from '../lib/firebase';
import { fetchAndActivate, getString } from 'firebase/remote-config';
import { FiBarChart2, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [ctaText, setCtaText] = useState('Get Started for Free');

  useEffect(() => {
    if (remoteConfig) {
      // Set default values
      remoteConfig.defaultConfig = {
        'landing_cta_text': 'Get Started for Free',
      };

      fetchAndActivate(remoteConfig)
        .then((activated) => {
          if (activated) {
            const newCtaText = getString(remoteConfig, 'landing_cta_text');
            if (newCtaText) {
                setCtaText(newCtaText);
            }
          }
        })
        .catch((err) => {
          console.error('Error fetching remote config:', err);
        });
    }
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <Header />
      {/* Hero Section */}
      <section className="text-white bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Next-Gen Insights for <br className="hidden sm:block" /> Product-Led Growth
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-400 max-w-3xl">
            Our new AI-powered platform helps you understand user behavior, optimize your product, and drive growth. Get the insights you need to build better products, faster.
          </p>
          <div className="flex justify-center">
            <Link
              href="/login"
              className="inline-flex text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-medium title-font text-white mb-4">Why Choose Us?</h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Below are some of the reasons why our platform is the best choice for your business.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FiBarChart2 size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">Real-Time Analytics</h2>
                <p className="leading-relaxed text-base">Monitor user engagement and product performance in real-time with our dynamic dashboards.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FiMessageSquare size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">AI-Powered Insights</h2>
                <p className="leading-relaxed text-base">Leverage generative AI to get actionable insights and recommendations from your data.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 mb-5 flex-shrink-0">
                <FiTrendingUp size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">Growth Optimization</h2>
                <p className="leading-relaxed text-base">Identify opportunities for growth and optimize your product for maximum impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
