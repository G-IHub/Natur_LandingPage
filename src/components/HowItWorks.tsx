import React from 'react';
import chatIcon from '../assets/chat.svg';
import describeIcon from '../assets/describe.svg';
import personalIcon from '../assets/personal.svg';
import professionalIcon from '../assets/professional.svg';

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-24 bg-white font-[Inter]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
            How it works
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a202c]">
            How Natur Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col">
            <div className="bg-[#f0fdf4] rounded-2xl p-10 flex justify-center items-center h-[240px] mb-6">
              <img
                src={chatIcon}
                alt="Start a Chat"
                className="w-[100px] h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#1a202c] mb-2">
              Start a Chat
            </h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed mb-2 flex-grow">
              Begin a conversation with Natur on WhatsApp and get instant
              access to personalized natural wellness support.
            </p>
            <a
              href="https://wa.me/2349059575287?text=Hi%2C%20I'd%20like%20to%20check%20my%20symptoms"
              className="text-[#1a202c] font-bold text-sm hover:text-primary transition-colors"
            >
              Start Here
            </a>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col">
            <div className="bg-[#f3e8ff] rounded-2xl p-10 flex justify-center items-center h-[240px] mb-6">
              <img
                src={describeIcon}
                alt="Describe Your Symptoms"
                className="w-[100px] h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#1a202c] mb-2">
              Describe Your Symptoms
            </h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed flex-grow">
              Share your health concerns in detail. Natur analyzes them using
              African medicinal knowledge and modern diagnostics to understand
              what you're experiencing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col">
            <div className="bg-[#fff7ed] rounded-2xl p-10 flex justify-center items-center h-[240px] mb-6">
              <img
                src={personalIcon}
                alt="Get Personalized Natural Guidance"
                className="w-[100px] h-auto object-contain"
              />
            </div>
            <h3 className="text-sm font-bold text-[#1a202c] mb-2">
              Get Personalized Natural Guidance
            </h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed flex-grow">
              Receive expert-backed recommendations using African herbs,
              lifestyle adjustments, and natural remedies tailored to your
              specific health condition.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col">
            <div className="bg-[#eff6ff] rounded-2xl p-10 flex justify-center items-center h-[240px] mb-6">
              <img
                src={professionalIcon}
                alt="Access Professional Consultations"
                className="w-[100px] h-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-[#1a202c] mb-2">
              Access Professional Consultations
            </h3>
            <p className="text-text-muted text-[0.85rem] leading-relaxed flex-grow">
              When needed, Natur connects you to certified G-Natures health
              advisors, herbal specialists, or nutrition experts for deeper
              guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
