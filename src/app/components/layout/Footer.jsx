import Image from "next/image";

const Footer = () => {
  return (
    <footer className="terminus-font flex justify-start px-8 items-center ">
      <Image
        aria-hidden="true"
        src="/images/wave.png"
        alt="Wave ICon"
        width={26}
        height={26}
      />
      <p className="mt-auto flex md:w-1/3 md:px-4 text-sm">
        UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND
        IMMERSIVE GAMING METAVERSE.
      </p>
    </footer>
  );
};

export default Footer;
