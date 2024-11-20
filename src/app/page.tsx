"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui/button";

// Array of image paths for the Swiper carousel
const images = [
  "/Slides/Slide-1.jpg",
  "/Slides/Slide-2.jpg",
  "/Slides/Slide-3.jpg",
  "/Slides/Slide-4.jpg",
  "/Slides/Slide-6.jpg",
  "/Slides/Slide-7.jpg",
  "/Slides/Slide-8.jpg",
  "/Slides/Slide-9.jpg",
];

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center px-4 py-8 h-fit md:py-24"
        // Background image and styling for the hero section
        style={{
          backgroundImage: `url('/Main-Images/bg_house.jpg')`,
          opacity: 50, // Adjust opacity for the background
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="pt-8 md:pt-16 space-y-6">
              {/* Heading for Governor Sindh */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#004B87]">
                Governor Sindh
              </h2>
              <h3 className="text-2xl md:text-3xl text-[#004B87]">
                Kamran Khan Tessori
              </h3>

              <div className="space-y-2">
                {/* Subheading: Certifications */}
                <h4 className="text-2xl md:text-3xl font-semibold text-[#00A3E0]">
                  Certified Cloud
                </h4>
                <h4 className="text-2xl md:text-3xl font-semibold text-[#00A3E0]">
                  Applied Generative AI
                </h4>
                <h4 className="text-2xl md:text-3xl font-semibold text-[#00A3E0]">
                  Engineer (GenEng)
                </h4>
              </div>

              {/* Salary Info */}
              <p className="text-xl md:text-2xl text-[#004B87] font-medium">
                Earn up to $5,000 / month
              </p>
              <p className="text-lg text-[#004B87]">
                Now admissions are open in Hyderabad
              </p>

              {/* Apply Now Button */}
              <Button className="w-screen md:w-auto mx-auto md:mx-0 bg-[#004B87] text-white py-2 px-4 rounded text-lg font-medium hover:bg-[#003666] content-center transition-colors">
                APPLY NOW             
              </Button>

              <div className="h-fit w-full flex justify-center flex-col items-center pt-5 md:w-1/2 md:py-10">
                {/* Display Accepted Applications Count */}
                <div className="text-4xl md:text-5xl font-bold text-[#004B87]">
                  562,143
                </div>
                <div className="text-[#004B87]">Accepted Applications</div>
              </div>
            </div>

            {/* Governor Image */}
            <div className="justify-center md:m-auto md:justify-end">
              <Image
                src="/Main-Images/Kamran-Tessori.png"
                width={1600}
                height={1000}
                alt="Governor Sindh Portrait"
                className="relative mt-7 w-full max-h-fit h-screen items-end"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action (CTA) Section */}
      <div className="bg-gradient-to-b from-gray-100 to-white px-4 py-8">
        <h1 className="text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] font-extrabold m-auto md:w-[95%] text-[#004B87]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>

        <div className="max-w-7xl mx-auto">
          {/* CTA Description */}
          <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
            The pace of technological change is accelerating, big players like
            Microsoft, Amazon, Google, and OpenAI are winning by providing
            infrastructure, large AI foundation models, frameworks, 3D Metaverse
            experiences, and massive distribution networks. Solopreneurs trained
            in this program will win by automating work typically outsourced to
            employees, by directly connecting to customers by eliminating the
            middleman, and by developing vertical metaverses, thus paving the
            way for the first billion-dollar valued solopreneur businesses.
          </p>
        </div>
      </div>

      {/* Cards Images Section */}
      <div className="grid lg:mx-24 md:mx-12 sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0">
        {["Card-1.jpg", "Card-2.jpg", "Card-3.jpg"].map((card, index) => (
          <Image
            key={index}
            src={`/Cards/${card}`}
            width={1920}
            height={1080}
            alt={`Governor Sindh Testimonials ${index + 1}`}
            className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
          />
        ))}
      </div>

      {/* Image Slider Section */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {/* Dynamically rendered Swiper slides */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex lg:flex-row mt-7 sm:mx-auto justify-around">
              {/* Slide Image */}
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={600}
                height={200}
                className="rounded-lg flex gap-4 mx-4 my-2 shadow-2xl shadow-black max-w-fit object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
