import { Link } from "react-router-dom";
import cta from '../../assets/images/aboutcta.png'
import shape1 from '../../assets/images/aboutctashap-1.svg'
import shape2 from '../../assets/images/aboutctashap-2.svg'
import shape3 from '../../assets/images/aboutctashap-3.svg'

const Cta = () => {
    return <section className="py-16 lg:py-20 bg-[#090129] overflow-hidden relative">
        <img src={shape1} alt="shape" className='absolute hidden lg:block right-[5%] top-3' />
        <img src={shape2} alt="shape" className='absolute hidden lg:block right-1/3 top-24' />
        <img src={shape3} alt="shape" className='absolute hidden lg:block right-1/4 -bottom-4' />
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
                <h2 className="text-center lg:text-right text-white text-2xl leading-normal lg:text-5xl lg:leading-normal font-semibold">
                    هل تريد مساعدة؟
                    <br />
                    تواصل معنا
                </h2>
                <p className="text-center lg:text-right text-[#7D89B0] text-sm lg:text-base leading-5 lg:leading-normal font-medium">
                    هنا سنقوم بوصف الميزة بشكل مفصل في سطر أو <br />سطرين حتي تصل بشكل آوضح للمستخدم.
                </p>
                <div className="flex flex-col lg:flex-row lg:items-center gap-3 w-full relative">
                    <Link to='/' className="btn-md btn-tertiary text-sm font-medium">
                        إرسال عبر البريد الألكتروني
                    </Link>
                    <Link to='/' className="btn-md btn-gray-secondary text-sm font-medium">
                        بدء محادثة مباشرة
                    </Link>
                </div>
            </div>
            <div className="flex place-content-center">
                <img src={cta} width="518" height="408" alt="CTA" />
            </div>
        </div>
    </section>;
};

export default Cta;
