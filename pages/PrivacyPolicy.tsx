
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p className="text-sm italic">Last updated: May 20, 2026</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
          <p>We only collect information that you voluntarily provide through our contact form, such as your name and email address. This information is used solely to respond to your inquiries.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">2. How We Use Information</h2>
          <p>Your information is used to communicate with you regarding project inquiries, services, or collaboration opportunities. We do not sell or rent your personal information to third parties.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">3. Cookies</h2>
          <p>This website uses minimal technical cookies to ensure a smooth browsing experience. No tracking or marketing cookies are used without your explicit consent.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">4. Third-Party Links</h2>
          <p>Our portfolio may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">5. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at denitriosaputra@gmail.com.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
