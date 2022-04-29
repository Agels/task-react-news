import React from "react";
import Cardx from "./Card";
import Search from "../Search/search";
import { useState, useEffect } from "react";
import { Spin, Result } from "antd";

const Content = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState("showAll");

  useEffect(() => {
    const fetchData = async()=>  {
  
    const api_key = "5576511f5d8a4fbfa6f186306439f6e5";
    try {
      let url = "";
      if (words !== "showAll") {
        url = `https:newsapi.org/v2/everything?q=${words}&popularity=popularity&language=id&apiKey=${api_key}`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${api_key}`;
      }
      setLoading(true);
      const fetchUrl = await fetch(url);
      const res = await fetchUrl.json();
      setNews(res.articles);
     
    } catch (error) {
      console.log('error');
    }
    setLoading(false);
  }
    fetchData();
    console.log(words);
  }, [words]);


  const search = (e) => {
    const search = e.target.value;

    if (search === "") {
      setWords("showAll");
    } else {
      setWords(search);
    }

  };
  return (
      
    <div>
      <Search onChangeSearch={search} />
      {loading ? (
        <Spin size="large" style={{ marginLeft: 650, marginTop: 30 }}  />
      ) : news.length > 0 ? (
        <Cardx news={news} />
      ) : (
        <Result status="warning" title="Data tidak ditemukan." />
      )}
    </div>
  );
};
export default Content;
