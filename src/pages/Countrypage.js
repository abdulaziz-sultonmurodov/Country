import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import SimpleMap from "../components/Map";
import Widgets from "../components/Widgets";
import { countries } from "../data/countryInfo";

const Countrypage = () => {
  const url = window.location.pathname;
  const lastSegment = url.split("/").pop();
  const video = countries[lastSegment - 1].video;
  const { pathname } = useLocation();
  const language = localStorage.getItem("language");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [open, setOpen] = useState(false);
  const openWidgets = () => setOpen(!open);
  return (
    <>
      <Header url={url} />
      <main className="flex flex-col lg:flex-row justify-evenly items-start">
        <div className="px-4 font-bold text-xl lg:hidden flex items-center w-full justify-between my-4">
          <span onClick={openWidgets} className="cursor-pointer">
            {language === "Ru"
              ? "Виджеты"
              : language === "Uz"
              ? "Vidjetlar"
              : "Widgets"}
          </span>{" "}
          <IoChevronDown
            onClick={openWidgets}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        <section
          className={
            open ? "top-30 flex flex-col px-4 mb-14 lg:hidden" : "hidden"
          }
        >
          <Widgets countries={countries} lastSegment={lastSegment} />
        </section>
        <section className="flex flex-col w-full px-4 lg:px-0 lg:w-6/12 relative">
          <div className="relative flex flex-col items-center justify-center">
            <img
              className="w-full h-80 bg-gray-200 bg-cover bg-center rounded-2xl flex items-center justify-center hover:brightness-90 transition filter brightness-50"
              src={countries[lastSegment - 1].img}
              alt={countries[lastSegment - 1].name}
            />
            <p className="text-white font-bold absolute text-4xl">
              {language === "Ru"
                ? countries[lastSegment - 1].capitalRu
                : language === "Uz"
                ? countries[lastSegment - 1].capitalUz
                : countries[lastSegment - 1].capital}
            </p>
          </div>
          <section className="flex flex-col items-center justify-start">
            <div className=" rounded-b-lg px-4">
              <div className="pt-8 pb-8">
                <h1 className="text-2xl font-bold text-gray-700 text-center">
                  {language === "Ru"
                    ? countries[lastSegment - 1].capitalRu
                    : language === "Uz"
                    ? countries[lastSegment - 1].capitalUz
                    : countries[lastSegment - 1].capital}
                </h1>
                <p className="text-sm text-gray-600 text-center">
                  {language === "Ru"
                    ? countries[lastSegment - 1].nameRu
                    : language === "Uz"
                    ? countries[lastSegment - 1].nameUz
                    : countries[lastSegment - 1].name}
                </p>
                <p className="text-sm text-gray-600 mt-5 leading-6">
                  {language === "Ru"
                    ? countries[lastSegment - 1].infoRu
                    : language === "Uz"
                    ? countries[lastSegment - 1].infoUz
                    : countries[lastSegment - 1].info}
                </p>
              </div>
            </div>
          </section>
          <section className="my-10 flex flex-col justify-center items-center">
            <h1 className="text-gray-800 text-3xl mb-4">
              {" "}
              {language === "Ru"
                ? "Галерея"
                : language === "Uz"
                ? "Galereya"
                : "Gallery"}
            </h1>
            <Gallery countries={countries} lastSegment={lastSegment} />
          </section>
          <section className="flex flex-col justify-center items-center">
            <h1 className="text-gray-800 text-3xl mb-4">
              {language === "Ru"
                ? "Экскурсия по городу"
                : language === "Uz"
                ? "Shahar bo'ylab sayohat"
                : "City Tour"}
            </h1>
            <iframe
              width="100%"
              height="300"
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </section>
          <section className="my-10 px-0 lg:mx-auto flex flex-col items-center">
            <h1 className="text-gray-800 text-3xl mb-4">
              {language === "Ru"
                ? "Kарта"
                : language === "Uz"
                ? "Xarita"
                : "Map"}
            </h1>
            <SimpleMap countries={countries} lastSegment={lastSegment} />
          </section>
        </section>
        <section className="top-30 hidden lg:flex lg:flex-col">
          <Widgets countries={countries} lastSegment={lastSegment} />
        </section>
      </main>
    </>
  );
};

export default Countrypage;
