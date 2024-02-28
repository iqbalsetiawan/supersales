import React from "react";
import Company1 from "../assets/companies/Frame 51.png";
import Company2 from "../assets/companies/Frame 52.png";
import Company3 from "../assets/companies/Frame 53.png";
import Company4 from "../assets/companies/Frame 54.png";
import Company5 from "../assets/companies/Frame 55.png";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Trusted by leading companies
        </p>
        <div className="brands-list">
          <div className="wrapper">
            {[...Array(5)].map((_, i) => (
              <React.Fragment key={i}>
                <img src={Company1} alt="Company 1" />
                <img src={Company2} alt="Company 2" />
                <img src={Company3} alt="Company 3" />
                <img src={Company4} alt="Company 4" />
                <img src={Company5} alt="Company 5" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
