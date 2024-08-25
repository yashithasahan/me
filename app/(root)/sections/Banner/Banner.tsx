"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Me from "@/public/images/me.png";
import MeLight from "@/public/images/me_light.png";
import PrimaryButton from "@/app/components/buttons/primaryButton/PrimaryButton";
import Firefly from "@/app/components/firefly/FireFly";
import { TypeAnimation } from "react-type-animation";

const Banner: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if dark mode is currently enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setDarkMode(isDarkMode);
    };

    // Check for dark mode on mount
    checkDarkMode();

    // Create a mutation observer to watch for class changes on the <html> element
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    // Start observing the <html> element for changes in the "class" attribute
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup the observer on unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Function to check screen size and set `isMobile`
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming 'md' is 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="flex flex-row px-2 items-start justify-between pt-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 w-full overflow-hidden">
      {!isMobile && (
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="relative w-auto h-screen z">
            {" "}
            <Firefly count={20} />
            <Image
              src={darkMode ? Me : MeLight}
              alt="Yashitha Sahan"
              layout="fit"
              objectFit="cover"
              className="rounded-lg w-auto md:w-[350px]  h-screen md:h-auto "
            />
          </div>
        </div>
      )}
      <div className="relative md:w-1/2 overflow-hidden z-20 text-xl mb-6 min-w-52 ">
        <Firefly count={8} />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello I&apos;m
          <br />
          <span className="text-green-600 dark:text-green-400">
            Yashitha Sahan
          </span>
        </h1>

        <div className="mb-4">
          <TypeAnimation
            cursor={true}
            sequence={[
              "Software Developer",
              1000,
              "Experienced Programmer",
              1000,
              "Full Stack Developer",
              1000,
              "Tech Enthusiast",
              1000,
              "Lifelong Learner",
              1000,
              "Exploring the World of Code",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>
        <PrimaryButton />
      </div>{" "}
      {isMobile && (
        <div>
          <div className="relative w-[300px] h-full overflow-hidden">
            <Image
              src={darkMode ? Me : MeLight}
              alt="Yashitha Sahan"
              objectFit="fill"
              className="rounded-lg w-[200px] scale-x-[-1]"
            />
          </div>
        </div>
      )}
    </section>
  );
};
export default Banner;
