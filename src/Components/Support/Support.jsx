import { useState } from "react";

const Support = () => {
    const [isSent, setIsSent] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        setTimeout(() => {
            setIsSent(false);
        }, 3000);
    }

    return <section className="pt-16 lg:pt-20 flex flex-col gap-12">
        <div className="container flex flex-col gap-16">
            <header className='flex flex-col gap-3'>
                <h2 className="section-title text-center">
                    الدعم الفنى
                </h2>
                <p className="section-exc text-center">
                    تواصل مع مركز الدعم الخاص بنا للحصول على ما تحتاجه.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8">
                <div className="flex flex-col justify-center gap-6 lg:gap-10 rounded-2xl bg-[#090129] p-8 relative overflow-hidden">
                    <svg className="opacity-10 absolute top-10 start-10 rotate-12"
                        xmlns="http://www.w3.org/2000/svg"
                        width="500"
                        height="500"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="#D5F379"
                            strokeMiterlimit="10"
                            strokeWidth="1.5"
                            d="M21.97 18.33c0 .36-.08.73-.25 1.09s-.39.7-.68 1.02c-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a29 29 0 0 1-3.28-2.8 28.4 28.4 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41Q2 8.1 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13s.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                        ></path>
                        <path
                            stroke="#D5F379"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7"
                        ></path>
                    </svg>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="#D5F379"
                                strokeMiterlimit="10"
                                strokeWidth="1.5"
                                d="M21.97 18.33c0 .36-.08.73-.25 1.09s-.39.7-.68 1.02c-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a29 29 0 0 1-3.28-2.8 28.4 28.4 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41Q2 8.1 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13s.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z"
                            ></path>
                            <path
                                stroke="#D5F379"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M18.5 9c0-.6-.47-1.52-1.17-2.27-.64-.69-1.49-1.23-2.33-1.23M22 9c0-3.87-3.13-7-7-7"
                            ></path>
                        </svg>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <h3 className="text-xl font-semibold text-white">
                                الهاتف
                            </h3>
                            <a className="text-[#7D89B0] text-xs lg:text-sm font-medium" href="tel:+1(012) 345 678 90">
                                +1(012) 345 678 90
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="#D5F379"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"
                            ></path>
                            <path
                                stroke="#D5F379"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"
                            ></path>
                            <path
                                stroke="#D5F379"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4M16 19.43 17.58 21 21 17M7 10.5v3M12 10.5v3M17 10.5v3"
                            ></path>
                        </svg>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <h3 className="text-xl font-semibold text-white">
                                البريد الإلكترونى
                            </h3>
                            <a className="text-[#7D89B0] text-xs lg:text-sm font-medium" href="mailto:example@email.com">
                                example@email.com
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="#D5F379"
                                strokeWidth="1.5"
                                d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
                            ></path>
                            <path
                                stroke="#D5F379"
                                strokeWidth="1.5"
                                d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
                            ></path>
                        </svg>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <h3 className="text-xl font-semibold text-white">
                                العنوان
                            </h3>
                            <p className="text-[#7D89B0] text-xs lg:text-sm font-medium">
                                مكة المكرمة - المملكة العربية السعودية
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-5">

                            <div className="flex flex-col gap-2">
                                <label htmlFor="con-name" className="text-xs lg:text-sm font-semibold">
                                    الاسم
                                </label>
                                <input type="text" id="con-name" name="con-name" className="w-full input-sm inpt-primary p-4" placeholder="الاسم"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="con-email" className="text-xs lg:text-sm font-semibold">
                                    البريد الإلكترونى
                                </label>
                                <input type="text" id="con-email" name="con-email" className="w-full input-sm inpt-primary p-4" placeholder="البريد الإلكترونى"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="con-messg" className="text-xs lg:text-sm font-semibold">
                                    الرساله
                                </label>
                                <textarea name="con-messg" id="con-messg" className="w-full input-sm inpt-primary p-4" rows="10" placeholder="الرساله"></textarea>
                            </div>
                            <input type="submit" value="ارسال" className="btn-lg btn-secondary" />
                        </div>

                        <div className={`fixed  w-full start-0 ${isSent ? 'opacity-100 visible top-32 transition-all duration-300 ' : 'opacity-0 invisible top-20 lg:top-48'}`}>
                            <div className="container p-6 border border-[#4ade80] bg-[#f0fdf4] rounded-2xl flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-[#4ade80] flex justify-center items-center">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 3.99992L3.58 6.82992L9.25 1.16992" stroke="white" strokeWidth="1.5"></path>
                                    </svg>
                                </span>
                                <p className="text-16-24 text-[#010513E5] font-bold flex-1">
                                    تم ارسال رسالتك بنجاح
                                </p>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4744.272999997595!2d39.82877365945943!3d21.422521874218035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74d3fb493%3A0x55d1f94f8e094785!2z2KfZhNmF2LPYrNivINin2YTYrdix2KfZhQ!5e1!3m2!1sar!2seg!4v1730399092552!5m2!1sar!2seg"
            className="w-full aspect-video lg:aspect-[5/2]"
            title="locationonmap"></iframe>
    </section>;
};

export default Support;
