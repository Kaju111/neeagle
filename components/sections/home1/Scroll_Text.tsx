import Image from "next/image";

export default function Scroll_Text() {
  const items = [
    { image: "/assets/images/clients/Cutind.png", alt: "Award winning" },
    { image: "/assets/images/clients/Geetimala.png", alt: "Award winning" },
    {
      image: "/assets/images/clients/GreenGrassFilms.png",
      alt: "Award winning",
    },
    { image: "/assets/images/clients/JTF.png", alt: "Award winning" },
    { image: "/assets/images/clients/MedhiStudio.png", alt: "Award winning" },
    { image: "/assets/images/clients/noie.png", alt: "Award winning" },
    { image: "/assets/images/clients/Riki.png", alt: "Award winning" },
    { image: "/assets/images/clients/SecondMemory.png", alt: "Award winning" },
    { image: "/assets/images/clients/SonicHub.png", alt: "Award winning" },
    { image: "/assets/images/clients/UKIFlims.png", alt: "Award winning" },
    { image: "/assets/images/clients/Upstyle.png", alt: "Award winning" },
  ];
  return (
    <>
      <section className="scroll-text-section">
        <div className="sub-title">
          <span>Trusted by </span>
        </div>
        <div className="marquee-container marquee-slider">
          <div className="text-inner">
            {items.map((item, index) => (
              <div key={index} className="single-text-box">
                <div className="shape">
                  <span className="shape-1"></span>
                  <span className="shape-2"></span>
                  <span className="shape-3"></span>
                  <span className="shape-4"></span>
                  <span className="shape-5"></span>
                  <span className="shape-6"></span>
                  <span className="shape-7"></span>
                  <span className="shape-8"></span>
                </div>
                <div className="image-wrapper">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={173}
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
