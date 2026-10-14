import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/content';
import { SparkleIcon } from './SparkleIcon';

interface ReviewsSectionProps {
  t: any;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ t }) => {
  return (
    <section id="avaliacoes" className="py-20 bg-[#121212] relative border-t-2 border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-[#A855F7] text-xs font-bold uppercase tracking-widest shadow-[2px_2px_0px_#A855F7]">
            <SparkleIcon size={12} className="text-[#A855F7]" />
            <span>{t.reviewsSection.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            {t.reviewsSection.title}
          </h2>

          <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.reviewsSection.subtitle}
          </p>

          {/* 5.0 Rating Banner */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-900 border-2 border-yellow-400/60 shadow-[3px_3px_0px_#EAB308]">
              <div className="flex text-yellow-400">
                {'★★★★★'.split('').map((s, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-white">
                5.0 ★ Avaliação Máxima
              </span>
            </div>
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#18181b] p-6 border-2 border-zinc-800 hover:border-[#A855F7] shadow-[5px_5px_0px_#000000] hover:shadow-[5px_5px_0px_#A855F7] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div>
                    <p className="text-sm font-extrabold text-white">{review.name}</p>
                    <p className="text-[11px] text-zinc-400">{review.date}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="pt-3 pb-2">
                  <span className="inline-block px-2 py-0.5 bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-[#A855F7]">
                    {review.service}
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  "{review.text}"
                </p>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle size={13} />
                  <span>{t.reviewsSection.verifiedCustomer}</span>
                </span>
                <span className="text-zinc-500 font-mono">★★★★★</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
