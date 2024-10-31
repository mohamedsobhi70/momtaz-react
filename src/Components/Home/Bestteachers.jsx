import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import prv from '../../assets/images/right-arrow.svg'
import nxt from '../../assets/images/left-arrow.svg'
import star from '../../assets/images/star.svg'
import verifyTeacher from '../../assets/images/verify-teacher.svg'
import noimg from '../../assets/images/noimg.jpg'
import teacher1 from '../../assets/images/tacher-1.png'
import teacher2 from '../../assets/images/tacher-2.png'
import teacher3 from '../../assets/images/tacher-3.png'

const Bestteachers = () => {

    const bestTeachers = [
        { id: 1, name: "أ/ محمد مسعد خالد", tags: 'علوم وفيزياء', stages: ["الإبتدائية", "المتوسطة"], rating: 5, rateno: 412, img: teacher1 },
        { id: 2, name: "أ/ محمد خالد مسعد", tags: 'علوم وكيمياء', stages: ["الثانويه", "المتوسطة"], rating: 4.2, rateno: 421 },
        { id: 3, name: "أ/ مسعد محمد خالد", tags: 'رياضيات وفيزياء', stages: ["الإبتدائية", "الثانوية"], rating: 4.8, rateno: 142, img: teacher2 },
        { id: 4, name: "أ/ خالد مسعد محمد", tags: 'رياضيات', stages: ["الإبتدائية", "الثانوية"], rating: 3.8, rateno: 142, img: teacher3 },
        { id: 5, name: "أ/ خالد مسعد محمد", tags: 'كيمياء', stages: ["الإبتدائية"], rating: 2.8, rateno: 12 },
    ]
    return <section className='bg-[#F9F9FB] py-20'>
        <div className="container flex flex-col gap-12">

            <header className='flex flex-col gap-3'>
                <h2 className="section-title text-center">
                    أفضل المعلمين
                </h2>
                <p className="section-exc text-center">
                    أختر آفضل المعلملين في المملكة في غضون ثواني.
                </p>
            </header>
            <Swiper
                className='w-full'
                loop={true}
                spaceBetween={24}
                navigation={{ nextEl: '.bteacher-next-btn', prevEl: '.bteacher-prev-btn' }}
                breakpoints={{
                    420: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3.5 },
                    1200: { slidesPerView: 4 },
                }}
                modules={[Navigation]}
            >
                {
                    bestTeachers.map((teacher) => {
                        return <SwiperSlide key={teacher.id} className='!h-auto lg:p-4 !flex flex-col lg:gap-6 rounded-xl lg:rounded-3xl border lg:border-none border-[#E6E6EA] overflow-hidden hover:bg-white !transition-colors !duration-300 cursor-grab'>
                            <Link to='' className="lg:rounded-2xl overflow-hidden relative">
                                <span className="absolute size-full top-0 left-0 bg-[#00000033]"></span>
                                {teacher.img ?
                                    <img src={teacher.img} className="size-full object-cover" width="200" height="200" alt="teacher" />
                                    : <img src={noimg} className="size-full object-cover" width="600" height="600" alt="no-image" />}

                            </Link>

                            {/* <!-- teacher informations  --> */}
                            <div className="flex flex-col gap-2 lg:gap-3 p-4 lg:p-0 bg-white lg:bg-transparent grow">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-[#111322] text-base lg:text-xl leading-normal lg:leading-normal font-semibold truncate">
                                        <Link to=''>
                                            {teacher.name}
                                        </Link>
                                    </h2>
                                    <span className="w-6 h-6">
                                        <img src={verifyTeacher} width="24" height="24" alt="verify-teacher" />
                                    </span>
                                </div>
                                <p className="text-[#5D6B98] text-xs lg:text-sm leading-normal lg:leading-5 font-medium">
                                    🧬 علوم وفيزياء
                                </p>
                                <p className="text-[#5D6B98] text-xs lg:text-sm leading-normal lg:leading-5 font-medium">
                                    المراحل: {teacher.stages.join(" ، ")}

                                </p>
                                <p className="flex items-center gap-3 mt-auto">
                                    <span className="flex items-center gap-1 lg:gap-2 text-[#111322] text-sm lg:text-base leading-normal lg:leading-normal font-semibold">
                                        <img src={star} width="24" height="24" alt="star" />
                                        {teacher.rating}
                                    </span>
                                    <span className="text-[#7D89B0] text-xs lg:text-sm leading-normal lg:leading-normal font-medium">
                                        ({teacher.rateno} تقييم)

                                    </span>
                                </p>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <button className='btn-gray-secondary btn-md bteacher-prev-btn px-3'>
                        <img src={prv} alt="prev" className='ltr:rotate-180' width='20' height='20' />
                    </button>
                    <button className='btn-gray-secondary btn-md bteacher-next-btn px-3'>
                        <img src={nxt} alt="next" className='ltr:rotate-180' width='20' height='20' />
                    </button>
                </div>
                <Link to='teachers' className='btn-gray-secondary btn-md'>
                    تصفح جميع المعلمين
                </Link>
            </div>

        </div>
    </section>;
};

export default Bestteachers;
