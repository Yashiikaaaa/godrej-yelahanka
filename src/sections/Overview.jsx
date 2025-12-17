import React from 'react';
import image from '../assets/overviewgodrejyela.jpg';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
            Elevate Your Lifestyle at Godrej Yelahanka, North Bengaluru
          </span>
          <br />
          
          <span>
            <br /> 
            <p> 
             Godrej Yelahanka is an upcoming ultra-premium residential address in North Bengaluru, offering refined living in a prime, well-connected neighborhood. Designed by Godrej Properties, the project promises luxury, quality construction, and strong long-term value, with EOI now open for early access. <p />
            <br/>
            <p> Spread across 10 acres with 9 high-rise towers, the development features spacious 3, 3.5 & 4.5 BHK luxe residences, thoughtfully planned for modern families. With premium specifications, elegant layouts, and a tentative price of ₹18,000 PSF, Godrej Yelahanka sets a new benchmark for upscale living with possession expected in 4 years.</p>
            
            </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
