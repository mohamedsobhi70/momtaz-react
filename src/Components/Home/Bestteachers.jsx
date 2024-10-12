import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import prv from '../../assets/images/right-arrow.svg'
import nxt from '../../assets/images/left-arrow.svg'

const Bestteachers = () => {
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
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                modules={[Navigation]}
            >
                <SwiperSlide className='!flex flex-col gap-5'>
                    <div className="bteacher-img">
                        <img src="https://via.placeholder.com/200" alt="teacher" />
                    </div>
                </SwiperSlide>

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
