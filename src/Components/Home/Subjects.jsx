import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import sub3 from '../../assets/images/cat-3.svg'
import sub4 from '../../assets/images/cat-4.svg'
import sub5 from '../../assets/images/cat-5.svg'
import sub6 from '../../assets/images/cat-6.svg'
import sub7 from '../../assets/images/cat-7.svg'
import prv from '../../assets/images/right-arrow.svg'
import nxt from '../../assets/images/left-arrow.svg'
import { Navigation } from 'swiper/modules';

const Subjects = () => {
    return <section className='bg-white py-20'>
        <div className="container flex flex-col gap-12">

            <header className='flex flex-col gap-3'>
                <h2 className="section-title text-center">
                    المواد العلمية
                </h2>
                <p className="section-exc text-center">
                    أختر المادة العلمية المهتم بها ليظهر لك المدرسيين المتخصصين لهذه المادة.
                </p>
            </header>
            <Swiper
                className='w-full'
                spaceBetween={36}
                slidesPerView={6} // default number of slides for desktop
                navigation={{ nextEl: '.sub-next-btn', prevEl: '.sub-prev-btn' }}
                breakpoints={{
                    420: { slidesPerView: 2.5 }, // mobile
                    768: { slidesPerView: 4 }, // tablet
                    1024: { slidesPerView: 7 }, // desktop
                }}
                modules={[Navigation]} // Import Navigation module
            >
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#B9C0D4]"></div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        اللغة العربية
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#9481AB] "></div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        اللغة الأنجليزية
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#3A3454]">
                        <img src={sub3} alt="" />
                    </div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        الرياضيات
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#BEA6DB]">
                        <img src={sub4} alt="" />
                    </div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        الكيمياء
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#D5F379] ">
                        <img src={sub5} alt="" />
                    </div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        الفيزياء
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#EADDF9]">
                        <img src={sub6} alt="" />
                    </div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        الأحياء
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#5D6B98]">
                        <img src={sub7} alt="" />
                    </div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        الجغرافيا
                    </p>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#5D6B98]"></div>
                    <p className="text-center text-[#23262F] text-xl font-semibold leading-normal">
                        الفلسفة
                    </p>
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <button className='btn-gray-secondary btn-md sub-prev-btn px-3'>
                        <img src={prv} alt="" />
                    </button>
                    <button className='btn-gray-secondary btn-md sub-next-btn px-3'>
                        <img src={nxt} alt="" />
                    </button>
                </div>
                <Link to='subjects' className='btn-gray-secondary btn-md'>
                    تصفح جميع المواد العلمية
                </Link>
            </div>

        </div>
    </section>;
};

export default Subjects;
