import React from "react";

const DateCountry = ({ countries, lastSegment }) => {
  let date = new Date();
  let month = date.getMonth();
  let day = date.getDate();
  let year = date.getFullYear();
  let week = date.getDay();

  const language = localStorage.getItem("language");

  const months = [
    "January",
    "Februray",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthsUz = [
    "Yanvar",
    "Februray",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentyabr",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];
  const monthsRu = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Может",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weeksRu = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const weeksUz = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];

  let monthName =
    language === "Ru"
      ? monthsRu[month]
      : language === "Uz"
      ? monthsUz[month]
      : months[month];

  let weekName =
    language === "Ru"
      ? weeksRu[week]
      : language === "Uz"
      ? weeksUz[week]
      : weeks[week];

  const timeZone = new Date().toLocaleTimeString("en-GB", {
    timeZone: countries[lastSegment - 1].timeZone,
  });

  return (
    <aside className="bg-blue-500 text-white font-bold py-6 my-2 rounded-lg">
      <section className="text-4xl text-center mb-4">{timeZone}</section>
      <section className="text-center text-xl tracking-widest">
        {day}/{monthName}/{year}
      </section>
      <section className="text-center text-xl tracking-widest">
        {weekName}
      </section>
    </aside>
  );
};

export default DateCountry;
