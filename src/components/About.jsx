import React from 'react'
import Common from './Common'
import web from "../images/about.png";

function About() {
    return (
        <>
            <Common name='Welcome to about page' imgsrc={web} btname="Contact us" />
        </>
    )
}

export default About;
