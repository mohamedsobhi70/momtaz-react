import { useState } from "react";
import arrow from '../../assets/images/acc-arrow.svg'

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className="accordion-item" onClick={() => setIsOpen(!isOpen)}>
        <div className="grow flex flex-col gap-4">
            <h3 className="accordion-title origin-center">
                {title}
            </h3>
            <p className={`accordion-content ${isOpen ? "open" : ''}`} >
                {content}
            </p>
        </div>
        <span className='accordion-icon'>
            <img src={arrow} alt='arrow' width='20' height='20' className={`transition-transform duration-200 ${isOpen ? "-scale-y-100" : ''}`} />
        </span>
    </div>;
};

export default Accordion;
