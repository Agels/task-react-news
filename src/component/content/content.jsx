// import { Card } from "antd";

import React from "react";
import Cardx from "./Card";
import Search from "../Search/search";
import { Spin, Result } from "antd";
export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: false,
    };
  }

  showfirst(words) {
    this.setState({ loading: true });
    const api_key = "5576511f5d8a4fbfa6f186306439f6e5";
    let url = "";
    if (words === "showAll") {
      url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${api_key}`;
    } else {
      url = `https:newsapi.org/v2/everything?q=${words}&popularity=popularity&language=id&apiKey=${api_key}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ news: result.articles }, () =>
          this.setState({ loading: false })
        );
      })
      .catch((error) => console.log("error", error));
  }

  componentDidMount = () => {
    console.log("this did mount");
    this.showfirst("showAll");
  };

  search = (e) => {
    let words = e.target.value;
    if (words === "") {
      words = "showAll";
    } else {
      words = e.target.value;
    }

    this.showfirst(words);
  };
  render() {
    const { loading, news } = this.state;
    return (
      <div>
       
        <Search onChangeSearch={this.search} />

        {loading ? (
          <Spin size="large" style={{ marginLeft: 650, marginTop: 30 }} />
        ) : news.length !== 0 ? (
          <Cardx news={news} />
        ) : (
          <Result status="warning" title="Data tidak ditemukan." />
        )}

        {console.log("this render")}
      </div>
    );
  }
}
