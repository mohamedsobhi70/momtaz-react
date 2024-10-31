import shape1 from '../../assets/images/hero-shape-1.png'
import shape2 from '../../assets/images/hero-shape-2.png'
import shape3 from '../../assets/images/hero-shape-3.png'
import shape4 from '../../assets/images/hero-shape-4.png'
import shape5 from '../../assets/images/hero-shape-5.png'
import shape6 from '../../assets/images/hero-shape-6.png'
import shape7 from '../../assets/images/hero-shape-7.png'
import play from '../../assets/images/play-circle.svg'
import about from '../../assets/images/about-us.jpeg'
const Herosection = () => {
    return <section className="bg-[#DAC5F4] py-16 lg:py-[114px] relative">
        <img src={shape1} alt="shape" className='absolute hidden lg:block left-3/4 top-16 opacity-10' />
        <img src={shape2} alt="shape" className='absolute hidden lg:block right-1/4 top-80' />
        <img src={shape3} alt="shape" className='absolute hidden lg:block left-1/4 top-4' />
        <img src={shape4} alt="shape" className='absolute hidden lg:block left-0 xl:left-[10%] top-20' />
        <img src={shape5} alt="shape" className='absolute hidden lg:block left-3/4 bottom-20 opacity-10' />
        <img src={shape6} alt="shape" className='absolute hidden lg:block left-1/2 -translate-x-1/2 bottom-10 opacity-10' />
        <img src={shape7} alt="shape" className='absolute hidden lg:block left-0 xl:left-[10%] bottom-10' />

        <div className="container flex justify-center px-[30px] lg:px-0">
            <div className="flex flex-col items-center gap-16 lg:mx-auto">

                <div className=" flex flex-col gap-4">
                    <h2 className="text-center text-[#090129] text-2xl lg:text-5xl leading-normal lg:leading-normal font-semibold">
                        أعرف أكثر عن منصة ممتاز
                        <br />
                        رؤيتنا ، أهدافنا في صناعة تعليم أفضل في المملكة !
                    </h2>
                    <p className="text-center text-[#584C65] text-sm lg:text-xl leading-[180%] lg:leading-[180%]">
                        نظام متكامل مصمم خصيصاً للمعلمين لأستقبال حجوزاتهم والإدارة
                        <br />
                        الكاملة للطلاب والمواعيد وتقارير تقدمهم بشكل دوري ، أنضم ألينا الأن.
                    </p>
                </div>
                <div className="aspect-[2/1] max-w-4xl lg:-mb-56 rounded-xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 size-full bg-[#0000004d] flex items-center justify-center">
                        <button type="button">
                            <img src={play} width="64" height="64" alt="play" />
                            <span className="sr-only">Play Icon</span>
                        </button>
                    </div>
                    <img src={about} className="h-full w-full object-cover" width="1633" height="1089" alt="about" />
                </div>
            </div>
        </div>

    </section>;
};

export default Herosection;
