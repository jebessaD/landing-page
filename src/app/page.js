"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "./components/common/Modal";
import LandingModal from "./components/landing/landingModal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [isHueLoaded, setIsHueLoaded] = useState(false);
  const [isFadedHueLoaded, setIsFadedHueLoaded] = useState(false);
  const [isCenterLoaded, setIsCenterLoaded] = useState(false);

  return (
    <div className="flex justify-between flex-col">
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LandingModal setIsOpen={setIsOpen} />
      </Modal>
      <main className="flex flex-col mt-28 md:mt-56">
        <div className="flex md:mr-56 relative justify-center items-center flex-col">
          <Image
            className={`absolute z-40 mix-blend-multiply ${
              isHueLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            aria-hidden="true"
            src="/images/hue.png"
            alt="Abstract"
            width={600}
            height={600}
            loading="lazy"
            onLoad={() => setIsHueLoaded(true)}
          />

          <Image
            className={`absolute z-0 brightness-200 blur-lg contrast-200 saturate-200 ${
              isFadedHueLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            aria-hidden="true"
            src="/images/hue.png"
            alt="Faded abstract"
            width={130}
            height={130}
            loading="lazy"
            onLoad={() => setIsFadedHueLoaded(true)}
          />

          <Image
            className={`z-10 absolute ${
              isCenterLoaded ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            aria-hidden="true"
            src="/images/center.png"
            alt="Central"
            width={750}
            height={750}
            loading="lazy"
            onLoad={() => setIsCenterLoaded(true)}
          />
        </div>

        <div className="flex flex-row items-end -mt-20 justify-around md:-ml-12 p-6 md:p-0">
          <div className="flex flex-col space-y-6 mt-24 md:mt-0 z-40 mix-blend-difference">
            <Image
              className="animate-slideRight w-[250px] sm:w-[400px] lg:w-[500px]"
              aria-hidden="true"
              src="/images/immersive.png"
              alt="Immersive"
              width={500}
              height={200}
            />
            <Image
              className="md:ml-40 sm:ml-20 ml-10 animate-slideLeft w-[250px] sm:w-[400px] lg:w-[500px]"
              aria-hidden="true"
              src="/images/metauerse.png"
              alt="MetaUrsE concept image"
              width={500}
              height={200}
            />
          </div>
          <div className="relative">
            <div className=" flex-col space-y-2 hidden md:flex">
              <Image
                className=""
                aria-hidden="true"
                src="/images/video.png"
                alt="video"
                width={340}
                height={340}
              />
              <button
                onClick={() => setIsOpen(true)}
                className="hover:cursor-zoom-in"
              >
                <Image
                  className="absolute top-[40%] right-[39%] animate-pulse"
                  aria-hidden="true"
                  src="/images/playButton.png"
                  alt="MetaUrsE immersive concept image"
                  width={80}
                  height={80}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="relative p-6 flex justify-center items-center w-full md:hidden">
   
          <Image
            className=""
            aria-hidden="true"
            src="/images/video.png"
            alt="video"
            width={440}
            height={440}
          />
          <button
            onClick={() => setIsOpen(true)}
            className="hover:cursor-zoom-in absolute animate-pulse"
          >
            <Image
              className=" "
              aria-hidden="true"
              src="/images/playButton.png"
              alt="MetaUrsE immersive concept image"
              width={80}
              height={80}
            />
          </button>
          
        </div>
      </main>
    </div>
  );
}
