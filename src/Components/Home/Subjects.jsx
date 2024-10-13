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
                loop={true}
                spaceBetween={36}
                slidesPerView={2.5} // default number of slides for desktop
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
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        اللغة العربية
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#9481AB] "></div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        اللغة الأنجليزية
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#3A3454]">
                        <img src={sub3} alt="" />
                    </div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الرياضيات
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#BEA6DB]">
                        <img src={sub4} alt="" />
                    </div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الكيمياء
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#D5F379] ">
                        <img src={sub5} alt="" />
                    </div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الفيزياء
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#EADDF9]">
                        <img src={sub6} alt="" />
                    </div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الأحياء
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#5D6B98]">
                        <img src={sub7} alt="" />
                    </div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الجغرافيا
                    </Link>
                </SwiperSlide>
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="sub-icon bg-[#5D6B98]"></div>
                    <Link to='/' className="text-center text-[#23262F] text-xl font-semibold leading-normal transition-colors duration-300 hover:text-[#953DF5]">
                        الفلسفة
                    </Link>
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <button className='btn-gray-secondary btn-md sub-prev-btn px-3'>
                        <img src={prv} alt="prev" className='ltr:rotate-180' width='20' height='20' />
                    </button>
                    <button className='btn-gray-secondary btn-md sub-next-btn px-3'>
                        <img src={nxt} alt="next" className='ltr:rotate-180' width='20' height='20' />
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
