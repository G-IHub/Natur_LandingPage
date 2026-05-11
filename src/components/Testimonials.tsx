import React from 'react';

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[1, 2, 3, 4].map((star) => (
      <svg key={star} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#fafafa] font-[Inter]">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-xs tracking-widest uppercase mb-4">TESTIMONIALS</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1a202c]">Read What Our Customers Are Saying About Natur</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col">
            <StarRating />
            <p className="text-[#333] text-[0.95rem] leading-relaxed mb-10 flex-grow">
              "Before using Natur, I was confused about which natural remedies to take for my chronic pain. I was getting conflicting advice everywhere. With Natur's personalized guidance using African herbs, I finally understood which remedies work for MY body. I feel much more confident managing my health naturally now."
            </p>
            <div className="mt-auto">
              <p className="font-bold text-[#1a202c] text-[0.9rem]">Awoniyi Funke</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col">
            <StarRating />
            <p className="text-[#333] text-[0.95rem] leading-relaxed mb-10 flex-grow">
              "Natur was a game-changer for me. I had been experiencing constant fatigue and wasn't sure which natural approach to take. The personalized recommendation I received was quick, accurate, and transformative. I feel energized within weeks. It's a huge relief to know there's a reliable platform for personalized natural wellness."
            </p>
            <div className="mt-auto">
              <p className="font-bold text-[#1a202c] text-[0.9rem]">Mary Goodluck</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg border border-gray-100 flex flex-col">
            <StarRating />
            <p className="text-[#333] text-[0.95rem] leading-relaxed mb-10 flex-grow">
              "I used to rely on random online searches for health remedies, but it often led to confusion and wasted money on products that didn't work. Now, with Natur, I get reliable, expert-backed natural recommendations instantly. It's convenient and reassuring to have trustworthy guidance when I need it."
            </p>
            <div className="mt-auto">
              <p className="font-bold text-[#1a202c] text-[0.9rem]">Nifemi Olaiya</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
