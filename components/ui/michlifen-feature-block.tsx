import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface FeatureColumnProps {
  imageSrc: string;
  imageAlt: string;
  titleMain: string;
  titleAccent: string;
  description: React.ReactNode;
  collapsedContent: React.ReactNode;
  buttonLabel: string;
  buttonHref: string;
  isExternal?: boolean;
  staggered?: boolean;
  showWaveIcon?: boolean;
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({
  imageSrc,
  imageAlt,
  titleMain,
  titleAccent,
  description,
  collapsedContent,
  buttonLabel,
  buttonHref,
  isExternal,
  staggered,
  showWaveIcon
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn(
      "flex flex-col gap-[33px] w-full max-w-[597px]",
      staggered && "mt-0 lg:mt-[178.9px]"
    )}>
      {/* Image Figure */}
      <figure className="w-full h-[372.8px] overflow-hidden transition-all duration-[2000ms] ease-in-out [clip-path:inset(0px)]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover align-middle"
          loading="lazy"
        />
      </figure>

      {/* Textual Content */}
      <div className="flex flex-col">
        <h2 className="font-['Playfair_Display',_serif] text-[30.4px] leading-[39.52px] flex flex-col transition-all duration-800 ease-in-out">
          <span className="text-black">{titleMain}</span>
          <span className="text-[#A48344]">{titleAccent}</span>
        </h2>

        <div className="mt-[24px] text-black font-['Montserrat',_sans-serif] text-[16px] leading-[24px] font-normal transition-all duration-800 ease-in-out">
          {description}
        </div>

        {/* Collapsible Section */}
        <div className="flex flex-col">
          <div 
            className={cn(
              "grid transition-all duration-500 ease-in-out overflow-hidden",
              isExpanded ? "grid-rows-[1fr] opacity-100 visible mt-[8px]" : "grid-rows-[0fr] opacity-0 invisible"
            )}
          >
            <div className="min-h-0 overflow-hidden text-black font-['Montserrat',_sans-serif] text-[16px] leading-[24px]">
              {collapsedContent}
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-[9.6px] mt-[24px] w-fit h-[32px] pb-[8px] text-black font-['Montserrat',_sans-serif] text-[16px] font-medium underline decoration-[1.6px] underline-offset-[0.3em] hover:underline-offset-[0.5em] transition-[text-underline-offset] duration-500 cursor-pointer"
            aria-expanded={isExpanded}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="22" height="22" 
              viewBox="0 0 22 22"
              className="align-middle transition-transform duration-300"
            >
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M11 22 0 11 11 0l11 11z" />
                <path d="M7.04 10.575h7.376" className="stroke-[1.65px]" />
                {!isExpanded && <path d="M11 7.712v7.376" className="stroke-[1.65px]" />}
              </g>
            </svg>
            <span>{isExpanded ? 'Read less' : 'Read more'}</span>
          </button>
        </div>

        {/* Action Button */}
        <div className="mt-[32px] transition-all duration-800 ease-in-out">
          {showWaveIcon ? (
            <a
              href={buttonHref}
              className="group relative inline-flex items-center gap-[11.2px] text-[#A48344] font-['Montserrat',_sans-serif] text-[16px] leading-[24px] cursor-pointer"
            >
              <svg 
                width="14" height="14" 
                viewBox="0 0 40 38"
                className="transition-transform duration-800 group-active:scale-x-[1.3]"
              >
                <g stroke="#A48344" strokeWidth="2" fill="none">
                  {/* Static Lines */}
                  <path d="M0 6h40" className="group-hover:opacity-0 transition-opacity duration-500" />
                  <path d="M0 19h40" className="group-hover:opacity-0 transition-opacity duration-500" />
                  <path d="M0 32h40" className="group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Wave Lines (Animated on Hover) */}
                  <path 
                    d="M-40 6q5-5 10 0t10 0 10 0T0 6t10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0" 
                    className="opacity-0 group-hover:opacity-100 animate-wave-scroll" 
                  />
                  <path 
                    d="M-40 19q5-5 10 0t10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0" 
                    className="opacity-0 group-hover:opacity-100 animate-wave-scroll" 
                  />
                  <path 
                    d="M-40 32q5-5 10 0t10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0 10 0" 
                    className="opacity-0 group-hover:opacity-100 animate-wave-scroll" 
                  />
                </g>
              </svg>
              <span className="font-medium">{buttonLabel}</span>
            </a>
          ) : (
            <a
              href={buttonHref}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group relative inline-flex items-center justify-center px-[24px] py-[12px] bg-[#A48344] text-white font-['Montserrat',_sans-serif] text-[16px] leading-[24px] rounded-[24.8px] border border-[#A48344] transition-all duration-500 hover:bg-[#8e713a] overflow-hidden"
            >
              {/* Pattern Overlay on Active/Hover */}
              <div className="absolute inset-0 opacity-30 transition-all duration-1200 [clip-path:polygon(0_0,100%_0,50%_0,50%_0)] group-active:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2759%27 height=%2760%27 fill=%27none%27 viewBox=%270 0 59 60%27%3E%3Cg opacity=%27.7%27%3E%3Cpath fill=%27%23fff%27 d=%27m29.57 11.363-2.606 2.606 2.607 2.607 2.606-2.607z%27/%3E%3Cpath stroke=%27%23fff%27 stroke-width=%27.359%27 d=%27m29.57 11.363-2.606 2.606 2.607 2.607 2.606-2.607z%27/%3E%3C/g%3E%3C/svg%3E')] bg-repeat-x bg-center bg-[length:auto_150%]" />
              <span className="relative z-10">{buttonLabel}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const MichlifenFeatureBlock: React.FC = () => {
  return (
    <div className="relative z-[1] w-full max-w-[1296.8px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[33px] lg:gap-[102.9px] font-['Montserrat',_sans-serif] py-12">
      <FeatureColumn
        imageSrc="https://www.michlifen.com/_ipx/w_3000&f_webp&q_80&fit_cover/cdn/f16a36fa6288ca26a4d3b0682ca4475eba502bfa04789bd9ee7ab3ce9ab43e09/image/optimized-mfn_00573.jpg"
        imageAlt="Wooden room with bed, sofa, coffee table, fireplace and French doors opening onto an outdoor terrace."
        titleMain="A 5-star"
        titleAccent="luxury mountain experience"
        description={
          <>
            <p>Everything is beautiful and refined.</p>
            <p className="mt-2">
              From <strong>the finest materials</strong> of marble, hardwood, slate and stone to furnishings from <strong>prestige brands</strong>, everything has been lovingly thought through. Think Ralph Lauren sofas, Chellini furniture and fabrics by Pierre Frey and Rubelli, all enhanced with exquisite Limoges porcelain and gold-leaf mosaics!
            </p>
          </>
        }
        collapsedContent={
          <p>
            The Michlifen Resort & Golf Hotel is a <strong>5-star mountain getaway</strong>, exuding elegance and refinement.
          </p>
        }
        buttonLabel="Discover our Rooms & Suites"
        buttonHref="/en/room-suites/"
        showWaveIcon
      />

      <FeatureColumn
        staggered
        imageSrc="https://www.michlifen.com/_ipx/w_3000&f_webp&q_80&fit_cover/cdn/f16a36fa6288ca26a4d3b0682ca4475eba502bfa04789bd9ee7ab3ce9ab43e09/image/optimized-mfn_00350.jpg"
        imageAlt="A person in a waiter's uniform crosses a room with sofas, armchairs, and lamps, in a setting with stone walls and exposed beams."
        titleMain="Nothing"
        titleAccent="but authentic"
        description={
          <>
            <p>
              Where <strong>refinement and authenticity</strong> intertwine in perfect harmony.
            </p>
            <p className="mt-2">
              <strong>Everything here speaks of nature</strong>. Timahdit stone columns, logs in the style of an American lodge, fir and other woods combined with slate, driftwood, hides, rammed earth and, of course, the magnificent Tataoui decorative ceilings that adorn our spa…
            </p>
          </>
        }
        collapsedContent={
          <p>
            The Michlifen Resort & Golf Hotel is <strong>a celebration of nature and its many treasures</strong>.
          </p>
        }
        buttonLabel="Book your Stay"
        buttonHref="https://be.synxis.com/?chain=5375&hotel=31268&level=hotel&locale=en-EN&currency=MAD&productcurrency=MAD&rooms=1"
        isExternal
      />
    </div>
  );
};

export default MichlifenFeatureBlock;
