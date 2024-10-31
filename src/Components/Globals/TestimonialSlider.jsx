import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import prv from '../../assets/images/right-arrow.svg'
import nxt from '../../assets/images/left-arrow.svg'
import test1 from '../../assets/images/testimonials-1.png'
const TestimonialSlider = () => {
    return (
        <section className="py-16 lg:py-24 bg-[#F9F9FB]" id="testimonials">
            <div className="container flex flex-col gap-16 lg:gap-24">
                <header className="flex flex-col gap-3">
                    <h2 className="section-title text-center">
                        تجارب المستخدمين
                    </h2>
                    <p className="section-exc text-center">
                        شاهد و أستمع الأن الي تجارب مستخدمينا ورأيهم في منصتنا.
                    </p>
                </header>
                <div className="flex flex-col gap-8 lg:gap-12 w-full">
                    <Swiper
                        className='w-full'
                        spaceBetween={24}
                        loop={true}
                        navigation={{ nextEl: '.testimonials-next-btn', prevEl: '.testimonials-prev-btn' }}
                        breakpoints={{
                            420: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2 },
                        }}
                        modules={[Navigation]}
                    >
                        <SwiperSlide className='testimonials-item'>
                            <div className="size-24 rounded-[36px] overflow-hidden">
                                <img src={test1} className="size-full object-cover" width="96" height="96" alt="testimonials-1" />
                            </div>
                            <p className="text-[#30374F] text-sm lg:text-lg leading-relaxed lg:leading-relaxed">
                                “منصة التعلم الإلكترونية Momtaz قد غيرت تجربتي التعليمية بالفعل. الدروس التفاعلية والمحتوى المرئي المشوق يجعلان الدراسة ممتعة ويساعداني على فهم المفاهيم الصعبة بسهولة. واجهة المنصة سهلة الاستخدام وتصفحها بشكل بديهي، ويمكنني الوصول بسهولة إلى مواد الدورات ومتابعة تقدمي. أنصح بشدة بمنصة Momtaz لجميع الطلاب الذين يبحثون عن حلاً شاملاً وفعّالًا للتعلم الإلكتروني.”
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs py-1 px-2 text-[#404968] font-medium leading-normal rounded-lg bg-[#DAC5F4]">
                                    ولي أمر
                                </span>
                                <span className='text-[#090129] text-lg font-semibold'>
                                    سارة علي
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='testimonials-item'>
                            <div className="size-24 rounded-[36px] overflow-hidden">
                                <img src={test1} className="size-full object-cover" width="96" height="96" alt="testimonials-1" />
                            </div>
                            <p className="text-[#30374F] text-sm lg:text-lg leading-relaxed lg:leading-relaxed">
                                “منصة التعلم الإلكترونية Momtaz قد غيرت تجربتي التعليمية بالفعل. الدروس التفاعلية والمحتوى المرئي المشوق يجعلان الدراسة ممتعة ويساعداني على فهم المفاهيم الصعبة بسهولة.
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs py-1 px-2 text-[#404968] font-medium leading-normal rounded-lg bg-[#DDF594]">
                                    طالبة
                                </span>
                                <span className='text-[#090129] text-lg font-semibold'>
                                    سارة علي
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='testimonials-item'>
                            <div className="size-24 rounded-[36px] overflow-hidden">
                                <img src={test1} className="size-full object-cover" width="96" height="96" alt="testimonials-1" />
                            </div>
                            <p className="text-[#30374F] text-sm lg:text-lg leading-relaxed lg:leading-relaxed">
                                “منصة التعلم الإلكترونية Momtaz قد غيرت تجربتي التعليمية بالفعل. الدروس التفاعلية والمحتوى المرئي المشوق يجعلان الدراسة ممتعة ويساعداني على فهم المفاهيم الصعبة بسهولة. واجهة المنصة سهلة الاستخدام وتصفحها بشكل بديهي، ويمكنني الوصول بسهولة إلى مواد الدورات ومتابعة تقدمي. أنصح بشدة بمنصة Momtaz لجميع الطلاب الذين يبحثون عن حلاً شاملاً وفعّالًا للتعلم الإلكتروني.”
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs py-1 px-2 text-[#404968] font-medium leading-normal rounded-lg bg-[#DAC5F4]">
                                    ولي أمر
                                </span>
                                <span className='text-[#090129] text-lg font-semibold'>
                                    سارة علي
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='testimonials-item'>
                            <div className="size-24 rounded-[36px] overflow-hidden">
                                <img src={test1} className="size-full object-cover" width="96" height="96" alt="testimonials-1" />
                            </div>
                            <p className="text-[#30374F] text-sm lg:text-lg leading-relaxed lg:leading-relaxed">
                                “منصة التعلم الإلكترونية Momtaz قد غيرت تجربتي التعليمية بالفعل. الدروس التفاعلية والمحتوى المرئي المشوق يجعلان الدراسة ممتعة ويساعداني على فهم المفاهيم الصعبة بسهولة.
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs py-1 px-2 text-[#404968] font-medium leading-normal rounded-lg bg-[#DDF594]">
                                    طالبة
                                </span>
                                <span className='text-[#090129] text-lg font-semibold'>
                                    سارة علي
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='testimonials-item'>
                            <div className="size-24 rounded-[36px] overflow-hidden">
                                <img src={test1} className="size-full object-cover" width="96" height="96" alt="testimonials-1" />
                            </div>
                            <p className="text-[#30374F] text-sm lg:text-lg leading-relaxed lg:leading-relaxed">
                                “منصة التعلم الإلكترونية Momtaz قد غيرت تجربتي التعليمية بالفعل. الدروس التفاعلية والمحتوى المرئي المشوق يجعلان الدراسة ممتعة ويساعداني على فهم المفاهيم الصعبة بسهولة. واجهة المنصة سهلة الاستخدام وتصفحها بشكل بديهي، ويمكنني الوصول بسهولة إلى مواد الدورات ومتابعة تقدمي. أنصح بشدة بمنصة Momtaz لجميع الطلاب الذين يبحثون عن حلاً شاملاً وفعّالًا للتعلم الإلكتروني.”
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-xs py-1 px-2 text-[#404968] font-medium leading-normal rounded-lg bg-[#DAC5F4]">
                                    ولي أمر
                                </span>
                                <span className='text-[#090129] text-lg font-semibold'>
                                    سارة علي
                                </span>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                    <div className="flex justify-center items-center">
                        <div className="flex items-center gap-5">
                            <button className='btn-gray-secondary btn-md testimonials-prev-btn px-3'>
                                <img src={prv} alt="prev" className='ltr:rotate-180' width='20' height='20' />
                            </button>
                            <button className='btn-gray-secondary btn-md testimonials-next-btn px-3'>
                                <img src={nxt} alt="next" className='ltr:rotate-180' width='20' height='20' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
