import React from "react";
import Cta from "../Globals/Cta";
import Faqs from "../Globals/Faqs";
import TestimonialSlider from "../Globals/TestimonialSlider";
import Services from "./Services";
import Howtostart from "./Howtostart";
import Herosection from "./Herosection";

const Forteachers = () => {
    return <>
        <Herosection />
        <Services />
        <Howtostart />
        <TestimonialSlider />
        <Faqs />
        <Cta />
    </>;
};

export default Forteachers;
