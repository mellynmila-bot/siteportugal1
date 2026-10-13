import React from 'react';
import { SparkleIcon } from './SparkleIcon';

interface MarqueeProps {
  items: string[];
}

export const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[#A855F7] text-white py-3 border-y-2 border-black shadow-[0_4px_0_#000000] z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-display shrink-0">
          {items.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <SparkleIcon size={14} className="text-black shrink-0" />
            </React.Fragment>
          ))}
        </div>

        {/* Second repetition for smooth infinite loop */}
        <div className="flex items-center gap-8 text-xs sm:text-sm font-extrabold uppercase tracking-widest font-display shrink-0 pl-8">
          {items.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <SparkleIcon size={14} className="text-black shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
