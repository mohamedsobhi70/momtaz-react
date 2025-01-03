import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import reg from '../../assets/images/register.png';
import cuate from '../../assets/images/cuate.png';
import rightArrow from '../../assets/images/right-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const RegLayout = ({ children }) => {
    return <main className="grid lg:grid-cols-2 min-h-screen">
        <div className="flex flex-col">

            <header className="py-6 px-[30px] lg:p-8 flex items-center gap-8 justify-between bg-[#FAF8FE] lg:bg-white">
                <Link to="/" className="hidden lg:block">
                    <img src={logo} width="106" height="46" alt="Logo" />
                </Link>
                <Link to="/" className="lg:hidden">
                    <img src={rightArrow} width="24" height="24" alt="arrow" />
                </Link>
            </header>

            <div className="h-full px-[30px] lg:px-[100px] flex flex-col lg:justify-center lg:gap-8">
                {children}
            </div>


            <footer className="p-8 hidden lg:flex items-center gap-8 justify-between">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link to='/terms' className="text-[#5D6B98] text-sm leading-normal">
                            الشروط والأحكام
                        </Link>
                    </li>
                    <li>
                        <Link to='/privacy-policy' className="text-[#5D6B98] text-sm leading-normal">
                            سياسة الخصوصية
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link to='/' className="text-[#5D6B98] text-sm leading-normal" aria-label="telegram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1642_182072)">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57348 13.2411C5.65819 13.2678 5.74596 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6857 15.9067 12.0769 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"
                                        fill="#B9C0D4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1642_182072">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="sr-only">telegram Icon</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="text-[#5D6B98] text-sm leading-normal" aria-label="instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.1308 1.00135C13.9335 0.998273 14.7361 1.00634 15.5386 1.02555L15.752 1.03325C15.9984 1.04205 16.2415 1.05305 16.5351 1.06625C17.7055 1.12125 18.504 1.30604 19.2047 1.57773C19.9307 1.85712 20.5422 2.23551 21.1538 2.84709C21.713 3.39664 22.1458 4.06139 22.422 4.79512C22.6937 5.4958 22.8785 6.29547 22.9335 7.46583C22.9467 7.75842 22.9577 8.00262 22.9665 8.24901L22.9731 8.4624C22.9927 9.26448 23.0011 10.0668 22.9984 10.8691L22.9995 11.6897V13.1306C23.0022 13.9333 22.9938 14.736 22.9742 15.5385L22.9676 15.7519C22.9588 15.9982 22.9478 16.2413 22.9346 16.535C22.8796 17.7054 22.6926 18.504 22.422 19.2046C22.1467 19.9391 21.7138 20.6044 21.1538 21.1538C20.6038 21.7129 19.9387 22.1457 19.2047 22.422C18.504 22.6937 17.7055 22.8785 16.5351 22.9335C16.2415 22.9467 15.9984 22.9577 15.752 22.9665L15.5386 22.9731C14.7362 22.9927 13.9335 23.0011 13.1308 22.9984L12.3103 22.9995H10.8704C10.0678 23.0022 9.26509 22.9938 8.46265 22.9742L8.24926 22.9676C7.98815 22.9581 7.72709 22.9471 7.4661 22.9346C6.29576 22.8796 5.4972 22.6926 4.79544 22.422C4.06143 22.1463 3.39657 21.7135 2.84744 21.1538C2.28762 20.6041 1.85444 19.9389 1.57811 19.2046C1.30642 18.504 1.12163 17.7054 1.06663 16.535C1.05438 16.274 1.04338 16.013 1.03363 15.7519L1.02813 15.5385C1.00785 14.736 0.998687 13.9333 1.00063 13.1306V10.8691C0.997565 10.0668 1.00563 9.26449 1.02483 8.4624L1.03253 8.24901C1.04133 8.00262 1.05233 7.75842 1.06553 7.46583C1.12053 6.29437 1.30532 5.4969 1.577 4.79512C1.8535 4.06103 2.28753 3.39646 2.84854 2.84819C3.3973 2.28804 4.06173 1.85445 4.79544 1.57773C5.4972 1.30604 6.29466 1.12125 7.4661 1.06625L8.24926 1.03325L8.46265 1.02775C9.26471 1.00748 10.067 0.998316 10.8693 1.00025L13.1308 1.00135ZM12.0001 6.50117C11.2714 6.49086 10.5479 6.62549 9.87165 6.89723C9.19543 7.16897 8.57996 7.5724 8.061 8.08407C7.54205 8.59575 7.12996 9.20547 6.84869 9.87779C6.56742 10.5501 6.42258 11.2716 6.42258 12.0004C6.42258 12.7292 6.56742 13.4507 6.84869 14.1231C7.12996 14.7954 7.54205 15.4051 8.061 15.9168C8.57996 16.4285 9.19543 16.8319 9.87165 17.1036C10.5479 17.3754 11.2714 17.51 12.0001 17.4997C13.4587 17.4997 14.8576 16.9202 15.889 15.8888C16.9204 14.8574 17.4998 13.4585 17.4998 11.9999C17.4998 10.5412 16.9204 9.14234 15.889 8.11092C14.8576 7.07951 13.4587 6.50117 12.0001 6.50117ZM12.0001 8.70109C12.4384 8.69302 12.874 8.77237 13.2813 8.93451C13.6886 9.09666 14.0595 9.33835 14.3724 9.64546C14.6853 9.95257 14.9338 10.319 15.1035 10.7232C15.2732 11.1274 15.3606 11.5615 15.3607 11.9999C15.3608 12.4383 15.2735 12.8723 15.1039 13.2766C14.9344 13.6809 14.686 14.0474 14.3732 14.3546C14.0604 14.6618 13.6896 14.9036 13.2823 15.0659C12.875 15.2282 12.4395 15.3077 12.0012 15.2998C11.126 15.2998 10.2867 14.9521 9.66784 14.3333C9.049 13.7144 8.70134 12.8751 8.70134 11.9999C8.70134 11.1247 9.049 10.2854 9.66784 9.66651C10.2867 9.04766 11.126 8.69999 12.0012 8.69999L12.0001 8.70109ZM17.7748 4.85122C17.4199 4.86543 17.0843 5.01638 16.8383 5.27248C16.5922 5.52857 16.4548 5.86994 16.4548 6.22508C16.4548 6.58022 16.5922 6.92158 16.8383 7.17767C17.0843 7.43377 17.4199 7.58473 17.7748 7.59893C18.1394 7.59893 18.4891 7.45407 18.747 7.19621C19.0048 6.93836 19.1497 6.58864 19.1497 6.22398C19.1497 5.85932 19.0048 5.50959 18.747 5.25174C18.4891 4.99388 18.1394 4.84902 17.7748 4.84902V4.85122Z"
                                    fill="#B9C0D4" />
                            </svg>

                            <span className="sr-only">instagram Icon</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className="text-[#5D6B98] text-sm leading-normal" aria-label="faceboock">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1642_182069)">
                                    <path
                                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                        fill="#B9C0D4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1642_182069">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="sr-only">twitter Icon</span>
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>


        <div className="hidden lg:flex flex-col gap-8 justify-center bg-[#3A3454]">

            <Swiper
                className='w-full'
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ el: '.reg-swiper-pagination', clickable: true }}
                modules={[Autoplay, Pagination]}             >
                <SwiperSlide className='!flex flex-col items-center justify-center gap-16 px-8 '>
                    <img src={reg} width="486" height="442" alt="r" />
                    <div className=" flex flex-col items-center gap-8 max-w-[512px]">
                        <div className="flex flex-col items-center gap-6">
                            <h2 className="text-center text-[#D1B6F1] text-[40px] leading-normal font-semibold">
                                تابع تقارير طفلك
                            </h2>
                            <p className="text-center text-[#B9C0D4] text-base leading-normal font-medium">
                                من خلال منصتنا يرسل لك المعلم بشكل دوري تقارير عن حالة الطفل الدراسية وتقدمه داخل المنصة.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!flex flex-col items-center justify-center gap-16 px-8 '>
                    <img src={cuate} width="402" height="442" alt="r" />
                    <div className=" flex flex-col items-center gap-8 max-w-[512px]">
                        <div className="flex flex-col items-center gap-6">
                            <h2 className="text-center text-[#D1B6F1] text-[40px] leading-normal font-semibold">
                                تواصل مع الالاف المعلمين!
                            </h2>
                            <p className="text-center text-[#B9C0D4] text-base leading-normal font-medium">
                                العثور علي المعلمين ذو الخبرة أصبح أسهل بكثير تضم منصتنا العديد من المعلمين علي مستوي المملكة ولديهم خبرة كبيرة في مجال التعليم.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='!flex flex-col items-center justify-center gap-16 px-8 '>
                    <img src={reg} width="486" height="442" alt="r" />
                    <div className=" flex flex-col items-center gap-8 max-w-[512px]">
                        <div className="flex flex-col items-center gap-6">
                            <h2 className="text-center text-[#D1B6F1] text-[40px] leading-normal font-semibold">
                                تابع تقارير طفلك
                            </h2>
                            <p className="text-center text-[#B9C0D4] text-base leading-normal font-medium">
                                من خلال منصتنا يرسل لك المعلم بشكل دوري تقارير عن حالة الطفل الدراسية وتقدمه داخل المنصة.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="reg-swiper-pagination flex gap-2 items-center justify-center"></div>

        </div>


    </main>;
};

export default RegLayout;
