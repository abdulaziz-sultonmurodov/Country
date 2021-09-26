import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Homepage = () => {
  const [url, setUrl] = useState("/");
  useEffect(() => {
    const path = window.location.pathname;
    setUrl(path);
  }, [url]);

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {}, []);
  return (
    <>
      <Header url={url} setSearchWord={setSearchWord} />
      <Card searchWord={searchWord} />
    </>
  );
};

export default Homepage;
