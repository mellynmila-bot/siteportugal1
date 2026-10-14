import React from 'react';
import { SparkleIcon } from './SparkleIcon';

interface MarqueeProps {
  items: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#DFBA73] via-[#D4AF37] to-[#C5A880] text-[#0A0A0A] py-3.5 border-y border-[#E5C378] shadow-sm z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-10 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-display shrink-0">
          {items.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <SparkleIcon size={13} color="#0A0A0A" className="shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for smooth infinite loop */}
        <div className="flex items-center gap-10 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-display shrink-0 pl-10">
          {items.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <SparkleIcon size={13} color="#0A0A0A" className="shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
