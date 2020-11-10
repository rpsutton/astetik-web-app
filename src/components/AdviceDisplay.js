import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import DisplaySection from "./DisplaySection";
import {backgrounds} from "../styles/backgrounds";
import Spinner from "react-bootstrap/Spinner";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import CustomModal from "./CustomModal";

const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
  return fetch(url)
  .then(resp => resp.json())
}
const API = { get }

function generateRandomNumber(num) {
  return Math.floor(Math.random() * Math.floor(num));
}

function HeroSection(props) {   

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState("");
  const [background, setBackground] = useState("https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1615&q=80");
  const [modalShow, setModalShow] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [countdown, setCountdown] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

    const getQuotes = useCallback(() => { 
      API.get(API_URL)
        .then(data => {
        setData(data.slip.advice);
        setBackground(backgrounds[generateRandomNumber(26)]);})
        .then(() => {
          window.setTimeout(setIsLoaded(true), 3000);
          setCountdown(true);
        })
        .catch(error => console.log(error));
     }, [])

    function searchQuote(keyword) {
      API.get(API_URL+"/search/"+keyword)
        .then(data => {
        const arrayLength = data.slips.length;
        if(arrayLength > 1) {
          const index = generateRandomNumber(arrayLength-1);
          setData(data.slips[index].advice);
          setBackground(backgrounds[generateRandomNumber(26)]);
          console.log(data);
          setShowAlert(false);
        } else {
          setData(data.slips[0].advice)
          setBackground(backgrounds[generateRandomNumber(26)]);
          console.log(data);
          setShowAlert(false);
        }})
        .then(() => {
          setTimeout(setIsLoaded(true), 5000);
          setModalShow(false);
          setCountdown(true);
        })
        .catch(error => {
          console.log(error.name)
          if (error.name === "TypeError") {
            console.log("We could not find a matching quote :(");
            setShowAlert(true);
          }
        }).finally(setIsLoaded(true))
    }
    
    useEffect(() => {
        getQuotes();
    }, [getQuotes])

    const handlekeywordchange = (ev) => {
      if(showAlert) {
        setKeyword(ev.target.value);
        setShowAlert(false);
      }
      setKeyword(ev.target.value);
    };

    if (!isLoaded) {
      return (
        <section className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
        <Spinner color="white" animation="grow" role="status" style={{height: "10vh", width: "10vh"}}/>
        </section>
      )
    }
    else {
    return (
        <DisplaySection
        bg={props.bg}
        textColor={props.textColor}
        size={props.size}
        bgImage={background}
        bgImageOpacity={"50%"}
        >
            <Container className="text-center">
                <SectionHeader
                title={data}
                size={1}
                spaced={true}
                giant={true}
                />
                <CustomModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  keyword={keyword}
                  handlekeywordchange={handlekeywordchange}
                  searchQuote={searchQuote}
                  showAlert={showAlert}
                  setIsLoaded={setIsLoaded}
                />
                <section className="d-flex flex-row justify-content-center align-content-center">
                  {countdown && (
                    <CountdownCircleTimer
                    isPlaying
                    duration={5}
                    colors={[
                      ['#fff', 0.33],
                    ]}
                    size={50}
                    strokeWidth={6}
                    onComplete={() => setCountdown(false)}
                    >
                    {({ remainingTime }) => remainingTime}
                  </CountdownCircleTimer>
                  )}
                <Button 
                  className={(props.buttonColor)}
                  disabled={(countdown? true : false)} 
                  size="lg"
                  onClick={() => {
                  getQuotes();
                  setIsLoaded(false);
                }}
                >
                  Generate new advice
                </Button>
                <h5 className="mt-2 ml-2 mr-2">or</h5>
                <Button onClick={() => setModalShow(true)}>
                <span className="icon">
                <i className="fas fa-search" />
                </span>
                </Button>
                </section>
            </Container>
        </DisplaySection>
    );
  }
}

export default HeroSection;
