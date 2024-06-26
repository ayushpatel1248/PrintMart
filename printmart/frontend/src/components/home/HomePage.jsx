import React from "react";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Pfeature from "../productFeature/PFeature";
import Team from "../team/Team";
import ContactUs from "../contactus/ContactUs";
const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <HeroSection />
      <div className="bg-white h-5"></div>
      <div className="bg-[url(https://scooboo.in/cdn/shop/files/doorstep_delivery-footer-wt.jpg?v=1716264660&width=2400)] h-[250px] bg-cover bg-center bg-no-repeat mb-8 md:h-[600px] justify-end">
        <div className="col-end-2 ps-96 ms-96">
          <h1 className="w-full text-right pe-32 text-4xl	pt-24 font-bold	text-white">
            STATIONERY AT YOUR CLASS
          </h1>
          <h3 className="text-right pe-32 text-2xl pt-5 font-bold	text-white col-end-2">
            Stationery delivered right to your class – fast, convenient, and
            affordable.
          </h3>
          <a
            href="#"
            className="flex-none ms-16 rounded-full bg-gray-900 px-3.5 py-3 mt-32 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Shop now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <Pfeature/>
      <Team/>
      <ContactUs/>
    </>
  );
};

export default HomePage;
