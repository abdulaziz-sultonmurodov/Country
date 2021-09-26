import React, { useState } from 'react'

const DateCountry = ({countries, lastSegment}) => {
    let date = new Date()
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    let week = date.getDay()

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
        ]
        const weeks = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
           ]
let monthName = months[month]
let weekName = weeks[week - 1]


   
    const[hours, setHours] = useState("")

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  setHours(  ("0" + (h - countries[lastSegment - 1].timeZone)).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2))
  
}

setInterval(time, 1000);
    return (
        <aside className="bg-blue-500 text-white font-bold py-6 my-2 rounded-lg">
            <section className="text-4xl text-center mb-4">{hours}</section>
            <section className="text-center text-xl tracking-widest">{day}/{monthName}/{year}</section>
            <section className="text-center text-xl tracking-widest">{weekName}</section>
        </aside>
    )
}

export default DateCountry
