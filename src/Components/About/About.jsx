import about from '../../assets/images/about-us-covr.jpeg'
import Advantages from '../Globals/Advantages';
import Cta from '../Globals/Cta';
import Faqs from '../Globals/Faqs';

import Herosection from "./Herosection";
import Team from './Team';

const About = () => {
  return <>
    <Herosection />
    <section className="pt-8 lg:pt-[233px] flex flex-col gap-12">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24 px-[30px] lg:px-2">
        <div className="col-span-1 lg:col-span-1 flex flex-col gap-2.5">
          <h2 className="text-center lg:text-right text-[#090129] text-2xl leading-normal lg:text-[40px] lg:leading-normal font-semibold">
            من نحن
          </h2>
          <p className="text-center lg:text-right text-[#8E8A9D] text-sm lg:text-xl leading-5 lg:leading-normal">
            تعرف أكثر عن ممتاز وأهدافنا، من أين بداءت القصة!
          </p>
        </div>
        <p className="col-span-1 lg:col-span-2 text-center lg:text-right text-[#3A3454] text-sm lg:text-lg leading-[180%] lg:leading-[180%]">
          هنا يمكننا وصف المنصة وأهدافها في سطر أو عدة أسطر مثل هذا المثال ، هنا يمكننا وصف المنصة
          وأهدافها في سطر أو عدة أسطر مثل هذا المثال ، هنا يمكننا وصف المنصة وأهدافها في سطر أو عدة أسطر
          مثل هذا المثال ، هنا يمكننا وصف المنصة وأهدافها في سطر أو عدة أسطر مثل هذا المثال .
        </p>
      </div>
      <div className="aspect-[2/1] overflow-hidden">
        <img src={about} className="size-full object-cover" width="1814" height="1020" alt="about us cover" />
      </div>
    </section>
    <Team />
    <Advantages iconColor="primary" />
    <Faqs />
    <Cta />
  </>;
};

export default About;
