import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface ReviewsSectionProps {
  t: any;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ t }) => {
  return (
    <section id="avaliacoes" className="py-20 sm:py-24 bg-white text-stone-900 relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-[#D4AF37]/50 text-[#B38715] text-xs font-bold uppercase tracking-widest">
            <SparkleIcon size={12} color="#B38715" />
            <span>{t.reviewsSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight font-display">
            {t.reviewsSection.title}
          </h2>

          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t.reviewsSection.subtitle}
          </p>

          {/* 5.0 Rating Banner */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-stone-50 border border-[#D4AF37]/50 shadow-sm">
              <div className="flex text-[#D4AF37]">
                {'★★★★★'.split('').map((s, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-stone-900 tracking-wide">
                5.0 ★ Avaliação Máxima
              </span>
            </div>
          </div>
        </div>

        {/* 6 Reviews Grid (No avatar initial circles, no Google Maps mentions in feedback cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 border border-stone-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div>
                    <p className="text-sm font-bold text-stone-900">{review.name}</p>
                    <p className="text-[11px] text-stone-500 mt-0.5">{review.date}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex text-[#D4AF37]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="pt-3.5 pb-2">
                  <span className="inline-block px-2.5 py-0.5 bg-amber-50 border border-[#D4AF37]/30 text-[11px] font-medium text-[#B38715]">
                    {review.service}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-stone-600 leading-relaxed pt-1.5 font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle size={13} className="text-emerald-600" />
                  <span>{t.reviewsSection.verifiedCustomer}</span>
                </span>
                <span className="text-[#D4AF37] tracking-widest">★★★★★</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
