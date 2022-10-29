import React from 'react'
import './HomeScreen.css'
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./Request";
function HomeScreen(){
    return(
        <div className="homeScreen">
            <Nav/>

            <Banner/>

            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow/>
            <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            {/*this is an interface left for further development of personalized movie recommendation*/}
            {/*<Row title="Personalized Recommendation"/>*/}
        </div>
    )
}

export default HomeScreen