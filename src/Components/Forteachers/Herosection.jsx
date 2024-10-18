import { Link } from "react-router-dom";
import play from '../../assets/images/play-circle.svg'
import teacher1 from '../../assets/images/pop-teacher-1.jpg'
import teacher2 from '../../assets/images/pop-teacher-2.jpg'
import teacher3 from '../../assets/images/pop-teacher-3.jpg'
import teacher4 from '../../assets/images/pop-teacher-4.jpg'
import star from '../../assets/images/yel-star.svg'

const Herosection = () => {
    return <section className="py-16 lg:py-24  bg-[#090129] flex items-center">
        <div className="container grid lg:grid-cols-2 gap-[30px] items-center px-[30px] lg:px-0">

            <div className="flex flex-col gap-10 items-start">
                <div className="flex flex-col gap-5">
                    <h2 className="text-white text-[32px] lg:text-5xl leading-normal lg:leading-normal font-semibold">
                        ألهم الآلاف بعلمك وأنت منهم
                    </h2>
                    <p className="text-[#E6E6EA] text-xl leading-normal">
                        سجّل كمعلم في ممتاز وابدأ التدريس ٤٠٠+ طالب في المملكة
                    </p>
                </div>
                <Link to='/' className="btn-tertiary btn-lg lg:px-16">
                    أنضم إلينا
                </Link>
            </div>

            <div className="grid grid-rows-3 grid-cols-3 gap-[30px]">
                <div className="col-span-2 row-span-3 flex flex-col rounded-2xl overflow-hidden">
                    <div className="grow">
                        <img src={teacher1} className="w-full h-full object-cover" width="312" height="312" alt="teacher" />
                    </div>
                    <div className="p-6 flex flex-col gap-3 bg-white shrink-0">
                        <div className="flex flex-col gap-1">
                            <h3 className="teacher-name text-[#090129] text-sm lg:text-xl leading-normal lg:leading-normal font-semibold">
                                <Link to='/'>
                                    أ/ عادل التهامي محمود
                                </Link>
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="text-[#FAC515] flex items-center gap-1 text-sm leading-normal font-medium">
                                    <img src={star} width="16" height="16" alt="star" />
                                    5.0
                                </span>
                                <span className="text-[#090129] text-[10px] lg:text-xs leading-normal lg:leading-normal">
                                    (412 تقييم)
                                </span>
                            </div>
                        </div>
                        <p className="text-[#090129] text-sm leading-[180%]">
                            تم تقييمي كا آفضل معلم للعام الحالي من الإدارة التعليمية في المملكة وأحب التدريس تم
                            تقييمي كا آفضل معلم للعام الحالي من الإدارة التعليمية في المملكة وأحب التدريس
                        </p>
                    </div>
                </div>


                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden">
                        <div className="play-overlay absolute w-full h-full top-0 left-0 bg-[#0000004D] flex justify-center items-center z-[1]">
                            <button type="button" aria-label="play Video" className="play-vid">
                                <img src={play} width="48" height="48" alt="Play Video" />
                            </button>
                        </div>
                        <img src={teacher2} className="w-full h-full object-cover" width="312" height="312" alt="teacher" />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden">
                        <div className="play-overlay absolute w-full h-full top-0 left-0 bg-[#0000004D] flex justify-center items-center z-[1]">
                            <button type="button" aria-label="play Video" className="play-vid">
                                <img src={play} width="48" height="48" alt="Play Video" />
                            </button>
                        </div>
                        <img src={teacher3} className="w-full h-full object-cover" width="312" height="312" alt="teacher" />
                </div>
                <div className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden">
                        <div className="play-overlay absolute w-full h-full top-0 left-0 bg-[#0000004D] flex justify-center items-center z-[1]">
                            <button type="button" aria-label="play Video" className="play-vid">
                                <img src={play} width="48" height="48" alt="Play Video" />
                            </button>
                        </div>
                        <img src={teacher4} className="w-full h-full object-cover" width="312" height="312" alt="teacher" />
                </div>
            </div>
        </div>
    </section>;
};

export default Herosection;
