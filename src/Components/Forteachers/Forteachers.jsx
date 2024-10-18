import React from "react";
import Cta from "../Globals/Cta";
import Faqs from "../Globals/Faqs";
import TestimonialSlider from "../Globals/TestimonialSlider";
import Services from "./Services";
import Howtostart from "./Howtostart";
import Herosection from "./Herosection";
import about from '../../assets/images/about.png'

const Forteachers = () => {
    return <div className="" style={{ backgroundImage: `url(${about})` }}>
        <Herosection />
        <Services />
        <Howtostart />
        <TestimonialSlider />
        <Faqs />
        <Cta />
    </div>;
};

export default Forteachers;
