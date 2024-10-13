import { useLocation } from "react-router-dom";
import Herosection from "./Herosection";
import Numbers from "./Numbers";
import { useEffect } from "react";
import Subjects from "./Subjects";
import Bestteachers from "./Bestteachers";
import TestimonialSlider from "../Globals/TestimonialSlider";
import Faqs from "../Globals/Faqs";
import Advantages from "../Globals/Advantages";

const Home = () => {
    // To move to a specific section
    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);


    return <>
        <Herosection />
        <Numbers />
        <Subjects />
        <Bestteachers />
        <Advantages iconColor='tertiary' />
        <TestimonialSlider />
        <Faqs />
    </>;
};

export default Home;
