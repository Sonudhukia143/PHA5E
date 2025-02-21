import { useState } from "react";
import "../styles/Homepage.css";
import { useRef } from "react";

export default function Homepage() {
  const imgRef = useRef([]);
  const [color, setColor] = useState(true);
  const [position, setPosition] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mouseEnteredImage = (index) => {
    setColor(false);
    setHoveredIndex(index);
  }

  const mouseLeavedImage = (index) => {
    setColor(true);
    setPosition((prev) => ({ ...prev , [index]:{x:0,y:0}}));
    setHoveredIndex(null);
  }

  const handleMouseMove = (e, index) => {
    const ref = imgRef.current[index];

    const centerY = ref.getBoundingClientRect().height / 2;
    const centerX = ref.getBoundingClientRect().width / 2;
    const leftToCenter = ref.getBoundingClientRect().left + centerX;
    const topToCenter = ref.getBoundingClientRect().top + centerY;

    if (e.clientX - leftToCenter > 60 || e.clientY - topToCenter > 60) {
      setPosition((prev) => ({ ...prev,[index]:{ x: e.clientX - leftToCenter, y: e.clientY - topToCenter }} ));
    } else if (e.clientX - leftToCenter > -60 || e.clientY - topToCenter > -60) {
      setPosition((prev) => ({ ...prev,[index]:{x: e.clientX - leftToCenter, y: e.clientY - topToCenter }} ));
    }
    else {
      setPosition((prev) => ({ ...prev , [index]:{ x: 0, y: 0 }}));
    }
  }

  const imgData = [
    {h1:"BIGGER",h2:"SCIENCE",p:"Imersive Experience/Web GL/Gaming"},
    {h1:"MUCEM",p:"Experential Website"},
    {h1:"UNGANISHA",p:"Experential Website/Web GL/Gaming"},
    {h1:"OLIVE TREE",p:"Interactive Installation"}
  ]

  return (
    <>
      {/* Large Screen View */}
      <div className="homepage hidden md:flex flex-col justify-center items-center h-screen w-full text-white bg-black text-[10vw] leading-none uppercase font-bold" id="mobile-div">
        <h1 className={color ? `homepageText` : `homepageText imageHover`}>IMAGINING</h1>
        <h1 className={color ? `homepageText` : `homepageText imageHover`}>UNIQUE</h1>
        <h1 className={color ? `homepageText` : `homepageText imageHover`}>CONCEPTS</h1>
        <h1 className={color ? `homepageText` : `homepageText imageHover`}>AND DIGITAL</h1>
        <h1 className={color ? `homepageText` : `homepageText imageHover`}>EXPERIENCES</h1>

      {
        ["ps1", "ps2", "ps3", "ps4"].map((className, index) => (
          <span
            key={index}
            ref={(el) => (imgRef.current[index] = el)}
            className={`image ${className} ${hoveredIndex !== null && hoveredIndex !== index ? "black-vector" : ""}`}
            onMouseEnter={() => mouseEnteredImage(index)}
            onMouseLeave={() => mouseLeavedImage(index)}
            onMouseMove={(e) => handleMouseMove(e,index)}
        style={{
          transform: `translate(${position[index]?.x || 0}px, ${position[index]?.y || 0}px)`,
          transition: position[index]?.x?`2s ease`:"2s ease",
        }}>
          {
            position[index]?.x != 0 && position[index]?.x != undefined?        
            <span className="textps1">
            <h1>{imgData[index]?.h1}</h1>
            <h1>{imgData[index]?.h2}</h1>
            <p>{imgData[index].p}</p>
          </span>:""
          }
        </span>
      ))
    }

      </div >

      {/* Mobile Screen View */}
      < div className="homepage flex md:hidden flex-col justify-center items-center h-screen w-full text-white bg-black text-[12vw] leading-tight uppercase font-bold text-center" id="full-screen" >
        <h1 className="homepageText">IMAGINING</h1>
        <h1 className="homepageText">UNIQUE</h1>
        <h1 className="homepageText">CONCEPTS</h1>
        <h1 className="homepageText">--AND</h1>
        <h1 className="homepageText">DIGITAL</h1>
        <h1 className="homepageText">EXPER--</h1>
        <h1 className="homepageText">IENCES</h1>
        <span className="imagemb mb1">
        </span>
        <span className="imagemb mb2">
        </span>
        <span className="imagemb mb3">
        </span>
        <span className="imagemb mb4">
        </span>
      </div >
    </>
  );
}
