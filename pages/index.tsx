import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { remoteConfig } from '../lib/firebase';
import { fetchAndActivate, getString } from 'firebase/remote-config';

const HomePage = () => {
  const [ctaText, setCtaText] = useState('Get Started');
  const [ctaColor, setCtaColor] = useState('bg-brand-accent');

  useEffect(() => {
    // Set default values for Remote Config
    remoteConfig.defaultConfig = {
      'landing_cta_text': 'Get Started',
      'landing_cta_color': 'bg-brand-accent',
    };

    fetchAndActivate(remoteConfig)
      .then((activated) => {
        if (activated) {
          console.log('Remote config values activated');
          setCtaText(getString(remoteConfig, 'landing_cta_text'));
          setCtaColor(getString(remoteConfig, 'landing_cta_color'));
        } else {
          console.log('No new remote config values to activate');
        }
      })
      .catch((err) => {
        console.error('Error fetching remote config:', err);
      });
  }, []);

  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-6xl font-extrabold text-brand-text mb-4 leading-tight">
          Communications Intelligence <br/> for the Modern Enterprise
        </h1>
        <p className="text-xl text-brand-gray mb-10 max-w-3xl mx-auto">
          PRVAIL is an enterprise-grade platform for real-time monitoring, narrative analysis, and strategic planning. Make better decisions with data-driven insights.
        </p>
        <Link 
          href="/login" 
          className={`inline-block ${ctaColor} hover:opacity-90 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all transform hover:scale-105`}
        >
          {ctaText}
        </Link>
      </div>

      <div className="py-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-brand-med border border-brand-light rounded-lg transform hover:-translate-y-2 transition-transform">
          <h3 className="text-2xl font-bold text-brand-text mb-2">Real-Time Monitoring</h3>
          <p className="text-brand-gray">Leverage our powerful AI to monitor communications and gain insights as they happen.</p>
        </div>
        <div className="p-8 bg-brand-med border border-brand-light rounded-lg transform hover:-translate-y-2 transition-transform">
          <h3 className="text-2xl font-bold text-brand-text mb-2">Narrative Analysis</h3>
          <p className="text-brand-gray">Understand the story behind the data with advanced narrative and sentiment analysis.</p>
        </div>
        <div className="p-8 bg-brand-med border border-brand-light rounded-lg transform hover:-translate-y-2 transition-transform">
          <h3 className="text-2xl font-bold text-brand-text mb-2">Strategic Planning</h3>
          <p className="text-brand-gray">Use our data-driven insights to inform your strategy and make better decisions.</p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
