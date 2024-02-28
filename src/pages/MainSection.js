import { useEffect, useState } from "react";

import Star1 from "../assets/icons/star.svg";
import Star2 from "../assets/icons/star-1.svg";
import Star3 from "../assets/icons/star-2.svg";
import Info from "../assets/icons/play.svg";

import Person1 from "../assets/person/Border-1.png";
import Person2 from "../assets/person/Border.png";
import Person3 from "../assets/person/Border-2.png";

import MainImage from "../assets/POS - Catalog - Tablet screen.jpg";

import YellowButton from "../components/Button";

const AnimatedStar = ({ className, src, alt }) => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div className={`${className} ${animation ? "grow-rotate" : ""}`}>
      <img src={src} alt={alt} className="w-10 h-10" />
    </div>
  );
};

const Person = ({ src, alt, classNameTitle, title }) => {
  return (
    <div className="relative fade-in-up">
      <img src={src} alt={alt} className="w-20 h-20 rounded-full" />
      <span
        className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-white text-sm font-bold py-1 px-4 rounded-full ${classNameTitle}`}
      >
        {title}
      </span>
    </div>
  );
};

const MainSection = () => {
  return (
    <main className="container mx-auto my-8 max-w-3xl px-4 sm:px-6 lg:px-8">
      <section className="relative text-center my-12">
        <AnimatedStar
          className="absolute sm:top-0 -top-10 left-0"
          src={Star1}
          alt="Star1"
        />
        <AnimatedStar
          className="absolute bottom-0 right-0"
          src={Star2}
          alt="Star2"
        />
        <AnimatedStar
          className="absolute -right-5 top-1/2 hidden sm:block"
          src={Star3}
          alt="Star3"
        />
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
          Field sales software for humans
        </h1>
        <p className="text-gray-600 font-sans font-normal mb-6">
          Supersales enables your team to perform at the highest level, yet stay
          human. With a sleek design and an easy-to-navigate app.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="sm:max-w-xs">
            <YellowButton text="Book a demo" />
          </div>
          <div className="sm:max-w-xs flex justify-center">
            <button className="font-sans text-sm text-[#414141] flex items-center">
              <img src={Info} alt="Info" className="mr-2" /> See how it works
            </button>
          </div>
        </div>
      </section>
      <section className="relative text-center my-12">
        <img src={MainImage} alt="Web Browser Prototype" className="mx-auto" />
        <div className="absolute bottom-0 left-0 transform -translate-x-10 -translate-y-44 hidden sm:block">
          <Person
            src={Person1}
            alt="Sales"
            classNameTitle="bg-[#0084BD]"
            title="Sales"
          />
        </div>

        <div className="absolute top-0 right-0 transform translate-x-0 -translate-y-8 sm:translate-x-10 sm:translate-y-8">
          <Person
            src={Person2}
            alt="Client"
            classNameTitle="bg-[#5DC021]"
            title="Client"
          />
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-10 -translate-y-20 hidden sm:block">
          <Person
            src={Person3}
            alt="Sales Manager"
            classNameTitle="bg-[#EE8B16] whitespace-nowrap"
            title="Sales Manager"
          />
        </div>
      </section>
    </main>
  );
};

export default MainSection;
