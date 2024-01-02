import { useState } from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import { useEffect } from "react";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./Request";

function HomeScreen() {
    return (
        <div className="homeScreen">
            {/* NAV */}
            <Nav />

            {/* Banner */}
            <Banner />
            {/* Row */}
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRate} isLargeRow />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} isLargeRow />
            <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} isLargeRow />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
            <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} isLargeRow />
        </div>
    );
}

export default HomeScreen;
