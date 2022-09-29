import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowName="Upcoming" height={true} url={requests.getUpcoming} />
      <Row rowName="Popular" height={false} url={requests.getPopular} />
      <Row rowName="Trending" height={false} url={requests.getTrending} />
      <Row rowName="Top Rated" height={false} url={requests.getTopRated} />
      <Row rowName="Horror" height={false} url={requests.getHorror} />
    </div>
  );
};

export default Home;
