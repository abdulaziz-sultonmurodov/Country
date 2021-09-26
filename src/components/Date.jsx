import React, { useState } from "react";

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

  const [hours, setHours] = useState("");

  function time() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    setHours(
      ("0" + (h - countries[lastSegment - 1].timeZone)).substr(-2) +
        ":" +
        ("0" + m).substr(-2) +
        ":" +
        ("0" + s).substr(-2)
    );
  }

  setInterval(time, 1000);
  return (
    <aside className="bg-blue-500 text-white font-bold py-6 my-2 rounded-lg">
      <section className="text-4xl text-center mb-4">{hours}</section>
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
