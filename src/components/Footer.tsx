import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
        </div>
        <div className="container mx-auto px-4">
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                <a
                  href="https://openweathermap.org/"
                  className="text-gray-600 hover:text-gray-900"
                >
                  OpenWeather Test Project
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
