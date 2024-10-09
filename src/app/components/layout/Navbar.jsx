"use client";
import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="container 40 hidden mx-auto sm:flex flex-col lg:flex-row justify-between items-center terminus-font mt-3 border-neutral-900 border ">
        <div className="flex w-full lg:w-1/2 h-full items-center justify-center">
          <Image
            className="p-4 basis-1/12"
            aria-hidden="true"
            src="/images/logo.png"
            alt="Abstract"
            width={16}
            height={16}
            loading="lazy"
          />
          <div className="basis-4/12 bg-[#00ffe6] h-full"></div>
          <div className="basis-7/12 bg-neutral-800 bg-opacity-40 h-full"></div>
        </div>

        <div className="flex w-full lg:w-1/2 basis-1/2 justify-between divide-x divide-neutral-700 m-4 items-center uppercase">
          <div className="flex justify-center items-center w-full basis-2/6 relative">
            <div>About</div>
            <div className="absolute -bottom-5 text-sm text-neutral-600 left-0">
              001
            </div>
          </div>
          <div className="flex justify-center items-center w-full basis-1/6 relative">
            <div>
              <FaDiscord />
            </div>
            <div className="absolute -bottom-5 text-sm text-neutral-600 left-0">
              002
            </div>
          </div>
          <div className="flex justify-center items-center w-full basis-2/6 relative">
            <div>LAUNCH ultiverse</div>
            <div className="absolute -bottom-5 text-sm text-neutral-600 left-0">
              003
            </div>
          </div>
          <div className="flex justify-center items-center w-full basis-1/6 relative">
            <div>
              <FaTwitter />
            </div>
            <div className="absolute -bottom-5 text-sm text-neutral-600 left-0">
              004
            </div>
          </div>
          <div className="flex justify-center items-center w-full basis-1/6 relative">
            <div>
              <Image
                aria-hidden="true"
                src="/images/menu.png"
                alt="menu"
                width={36}
                height={36}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </nav>
      <nav className="container 40 mx-auto sm:hidden flex justify-between items-center terminus-font mt-3 border-neutral-900 border">
        <div className="flex w-full h-full items-center justify-between p-4">
          <Image
            className="p-2"
            aria-hidden="true"
            src="/images/logo.png"
            alt="Abstract"
            width={16}
            height={16}
            loading="lazy"
          />

          <div className="flex items-center space-x-4">
            <FaDiscord className="text-xl text-neutral-600" />
            <FaTwitter className="text-xl text-neutral-600" />
            <Image
              aria-hidden="true"
              src="/images/menu.png"
              alt="menu"
              width={36}
              height={36}
              loading="lazy"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
