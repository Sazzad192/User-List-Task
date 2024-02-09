import React from "react";
import bannerImage from "../../../images/Banner/bg-hero.jpg";

const Landing = () => {
  return (
    <div
      className="aspect-auto bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="max-w-7xl mx-auto min-h-[42rem] flex items-center px-4 xl:px-0">
        <div className="space-y-3">
          <h1 className="text-6xl font-semibold tracking-tight text-primary-500">
            User List Application
          </h1>
          <p className="text-2xl font-semibold tracking-tight text-gray-700">
            Easy Management System!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Landing;