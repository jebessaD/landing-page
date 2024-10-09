import Image from "next/image";

const LandingModal = ({ setIsOpen }) => {
  return (
    <div className="flex relative justify-center items-center flex-col">
      <Image
        className="p-6 m-auto"
        aria-hidden="true"
        src="/images/multiverse.png"
        alt="Immersive experience visual"
        width={1000}
        height={1000}
        style={{ filter: "drop-shadow(0 0 1px #00FFE6)" }}
      />

      <Image
        className="absolute -z-10"
        aria-hidden="true"
        src="/images/vector.png"
        alt="Faded abstract"
        width={1200}
        height={1200}
      />
      <Image
        className="absolute z-0 mix-blend-multiply blur-lg"
        aria-hidden="true"
        src="/images/hue.png"
        alt="Faded abstract"
        width={800}
        height={800}
      />
      <button onClick={() => setIsOpen(false)}>
        <Image
          className="absolute z-6 bottom-12 left-12"
          aria-hidden="true"
          src="/images/closeIcon.png"
          alt="Faded abstract"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default LandingModal;
