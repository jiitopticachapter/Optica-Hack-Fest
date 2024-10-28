import { useState, useEffect } from "react";
import { GetQuotes } from "./GetQuotes";
import React from 'react';
import { Link } from "react-router-dom";
import '../styling/Display.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Display = () => {
    const [quotes, setQuotes] = useState("Thought");

    useEffect(() => {
        GetQuotes().then((data) => {
            setQuotes(data.attachments[0].text);
        }).catch(error => console.error("Error fetching quote:", error));
    }, []);

    async function GetQ() {
        try {
            const response = await fetch('https://icanhazdadjoke.com/slack', {
                headers: { 'Accept': 'application/json' }
            });
            const jokeData = await response.json();
            setQuotes(jokeData.attachments[0].text);
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    }

    return (
        <>
            <div className="DispContainer">
                {/* <button onClick={GetQ}>Generate</button> */}
                <div className="buttonContainer">
                    <button onClick={GetQ} className="buttonC">Quote</button>
                </div>
                <div className="quote">{quotes}</div>
                <Link to={'/'} className="home">HOME</Link>
            </div>
            <footer>
                <a href="https://www.instagram.com/sh4urya.r/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://github.com/ShauryaRahlon" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </footer>


        </>
    );
}

export default Display;
