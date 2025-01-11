import React, { memo, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your logo images
import Logo1 from "../assets/logos/logo1.png";
import Logo2 from "../assets/logos/logo2.png";
import Logo3 from "../assets/logos/logo3.png";
import Logo4 from "../assets/logos/logo4.png";
import Logo5 from "../assets/logos/logo5.png";
import Logo6 from "../assets/logos/logo6.png";

const Slider = memo(() => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
      id="RecognizedBy"
    >
      {/* Section Header */}
      <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] leading-none"
            style={{
              overflow: "visible",
              whiteSpace: "nowrap",
              lineHeight: "1.3",
            }}
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Recognized by
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          Trusted to bring visionary ideas to life through cutting-edge innovation and creativity.
        </p>
      </div>

      {/* Slider Section */}
      <div
        className="wrapper mt-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="item item1">
          <img src={Logo1} alt="Brand 1" className="logo-image" />
        </div>
        <div className="item item2">
          <img src={Logo2} alt="Brand 2" className="logo-image" />
        </div>
        <div className="item item3">
          <img src={Logo3} alt="Brand 3" className="logo-image" />
        </div>
        <div className="item item4">
          <img src={Logo4} alt="Brand 4" className="logo-image" />
        </div>
        <div className="item item5">
          <img src={Logo5} alt="Brand 5" className="logo-image" />
        </div>
        <div className="item item6">
          <img src={Logo6} alt="Brand 6" className="logo-image" />
        </div>
      </div>

      <style jsx>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        * {
          margin: 0;
        }

        .wrapper {
          width: 90%;
            max-width: 1536px;
            margin-inline: auto;
            margin-top: 1rem;
            height: 120px; /* Adjust height to fit logos */
            overflow: hidden;
            display: flex; /* Flexbox layout */
            gap: 100px; /* Uniform space between logos */
            align-items: center;
            justify-content: center;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0)
          );
          -webkit-mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 20%,
            rgba(0, 0, 0, 1) 80%,
            rgba(0, 0, 0, 0)
          );
        }

        @keyframes scrollLeft {
          to {
            left: -200px;
          }
        }

        .item {
        flex: 0 0 auto; /* Prevent shrinking */
        width: 150px; /* Adjust logo width */
          height: 100px;
          position: absolute;
          left: max(calc(200px * 6), 100%);
          animation-name: scrollLeft;
          animation-duration: 30s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item1 {
          animation-delay: calc(30s / 6 * (6 - 1) * -1);
        }

        .item2 {
          animation-delay: calc(30s / 6 * (6 - 2) * -1);
        }

        .item3 {
          animation-delay: calc(30s / 6 * (6 - 3) * -1);
        }

        .item4 {
          animation-delay: calc(30s / 6 * (6 - 4) * -1);
        }

        .item5 {
          animation-delay: calc(30s / 6 * (6 - 5) * -1);
        }

        .item6 {
          animation-delay: calc(30s / 6 * (6 - 6) * -1);
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
});

export default Slider;