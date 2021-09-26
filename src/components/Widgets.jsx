import React from "react";
import Currency from "./Currency";
import DateCountry from "./Date";
import Weather from "./Weather";

const Widgets = ({ countries, lastSegment }) => {
  return (
    <aside>
      <DateCountry countries={countries} lastSegment={lastSegment} />
      <Currency countries={countries} lastSegment={lastSegment} />
      <Weather countries={countries} lastSegment={lastSegment} />
    </aside>
  );
};

export default Widgets;
