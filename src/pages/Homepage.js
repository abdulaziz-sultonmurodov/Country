import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const Homepage = () => {
  const [url, setUrl] = useState("/");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    const path = window.location.pathname;
    setUrl(path);
  }, [url]);

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const store = localStorage.getItem("language");
    setLanguage(store);
  }, []);
  return (
    <>
      <Header url={url} setSearchWord={setSearchWord} />
      <Card searchWord={searchWord} language={language} />
    </>
  );
};

export default Homepage;
