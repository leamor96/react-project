import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./GoToTop.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="go-to-top" onClick={scrollToTop}>
          <BsFillArrowUpCircleFill/>
        </div>
      )}
    </>
  );
};

export default GoToTop;
