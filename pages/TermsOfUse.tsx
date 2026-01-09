
import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="py-24 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
        <p className="text-sm italic">Last updated: May 20, 2026</p>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p>By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">2. Intellectual Property</h2>
          <p>All content on this website, including designs, code, and images, is the intellectual property of Deni Trio Saputra unless otherwise stated. Unauthorized reproduction is prohibited.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">3. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">4. Disclaimer</h2>
          <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900">5. Modifications</h2>
          <p>Deni Trio Saputra may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
