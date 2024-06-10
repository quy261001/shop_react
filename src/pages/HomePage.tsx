import { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link } from "react-router-dom";
export function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    // Call handleScroll when component mounts to determine initial scroll position
    handleScroll();

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuList = [
    {
      id: "main",
      title: "Main",
      link: "main",
      isHashLink: true,
    },
    {
      id: "news",
      title: "News",
      link: "news",
      isHashLink: true,
    },
    {
      id: "game-intro",
      title: "Game Intro",
      link: "game-intro",
      isHashLink: true,
    },
    {
      id: "secretfiles",
      title: "Dossiers",
      link: "secretfiles",
      isHashLink: false,
    },
    {
      id: "event",
      title: "Online Merch",
      link: "event",
      isHashLink: false,
    },
    {
      id: "gallery",
      title: "Gallery",
      link: "gallery",
      isHashLink: false,
    },
  ];

  return (
    <>
      <div className="relative w-full bg-[#161616] h-10">
        <div className="relative mx-auto my-0">
          <a
            href="http://netmarble.com/"
            className="absolute bg-[url('https://sgimage.netmarble.com/common/gnb/v2/pc/img/gnb_logo.png')] bg-no-repeat h-10 w-[146px]"
          ></a>
        </div>
      </div>
      <div className="wrapper relative mb-[2000px]">
        <header
          className={`${
            isScrolled ? "fixed" : "absolute"
          } left-0 top-0 z-20 w-full h-20 text-white bg-black-header`}
        >
          <div className="relative flex items-center z-[2] h-full my-0 mx-auto px-10">
            <div className="h-full">
              <button className="h-full">
                <img
                  src="https://sgimage.netmarble.com/mobile/game/sololv/brand/v1/img/af69d1e66a14.png"
                  alt=""
                />
              </button>
            </div>
            <nav className="ml-[60px] h-full">
              <ul className="flex gap-[55px] h-full intern">
                {menuList.map((item) => (
                  <li key={item.id}>
                    {item.isHashLink ? (
                      <ScrollLink
                        className="relative leading-[80px] h-20 font-bold text-[18px]"
                        activeClass="text-blue-500"
                        spy={true}
                        to={item.link}
                        smooth={true}
                        offset={-70}
                        duration={0.1}
                      >
                      {item.title}
                      </ScrollLink>
                    ) : (
                      <Link
                        className="relative leading-[80px] h-20 font-bold text-[18px]"
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="bg-black-header z-[22]"></div>
          </div>
        </header>
        {showScrollTopButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white"
          >
            xcvxcvxcvcx
          </button>
        )}
      </div>
      {/* Các phần tử mục tiêu */}
      <Element id="main"   className="pt-20 pb-[2000px]">
        <h2>Main Section</h2>
        {/* Nội dung của bạn */}
      </Element>
      <Element id="news"   className="pt-20 pb-[2000px]">
        <h2>News Section</h2>
        {/* Nội dung của bạn */}
      </Element>
      <Element id="game-intro" className="pt-20 pb-[2000px]">
        <h2>Game Intro Section</h2>
        {/* Nội dung của bạn */}
      </Element>
    </>
  );
}
