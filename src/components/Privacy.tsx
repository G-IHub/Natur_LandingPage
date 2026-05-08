import React from 'react';

const Privacy: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Your privacy comes first</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1a202c] mb-6">We are committed to protecting your health data.</h2>
          <p className="text-text-muted text-[1rem] leading-relaxed">
            Your health information is used solely to provide your personalized wellness guidance. We do not sell, share, or use your data for advertising or any third-party purposes — ever. Our practices are guided by the principles of HIPAA, GDPR, and NDPR data privacy frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-20">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#f0fdf4] flex justify-center items-center mb-6 shadow-sm">
              <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1a202c] mb-4">Your data stays yours</h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed">
              We never sell or share your personal health information with third parties, advertisers, or data brokers under any circumstance.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#fff1f2] flex justify-center items-center mb-6 shadow-sm">
              <svg className="w-6 h-6 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1a202c] mb-4">Used only for your wellness</h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed">
              Any information you share is used exclusively to generate your personalized natural remedy plan — nothing else.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#eff6ff] flex justify-center items-center mb-6 shadow-sm">
              <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[#1a202c] mb-4">Guided by global standards</h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed">
              Our data handling practices are guided by HIPAA, GDPR, and NDPR principles — because your trust is the foundation of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
