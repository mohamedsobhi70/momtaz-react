import { Link } from "react-router-dom";
import profileImg from '../../assets/images/poster-1.png'
const Teacher = () => {
    return <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="flex flex-col gap-6">
                <div className="aspect-[35/48] overflow-hidden rounded-2xl lg:rounded-3xl  sticky top-24">
                    <img src={profileImg} className="size-full object-cover" alt="" />
                </div>

                <div className="border border-t-[6px] backdrop:blur-sm border-[#D1B6F1] bg-[#faf8fee0] rounded-2xl lg:rounded-3xl px-[30px] py-8 lg:p-8 flex flex-col gap-6 w-full sticky bottom-10">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#090129] text-base lg:text-2xl leading-normal lg:leading-normal font-semibold lg:font-medium">
                            أحجز الأن
                        </h2>
                        <p className="text-[#8E8A9D] text-sm lg:text-lg leading-[180%]">
                            خصم 50% عند أول حجز لك علي المنصة.
                        </p>

                    </div>
                    <div className="flex flex-col gap-3">

                        <Link to="/" className="btn-primary btn-lg">
                            حجز شهري
                        </Link>

                        <Link to="/" className="btn-gray-secondary btn-lg">
                            حجز حصة تجريبية
                        </Link>

                    </div>

                </div>

            </aside>

            <div className="lg:col-span-2 flex flex-col gap-8">

                <div className="p-8 lg:p-10 flex flex-col gap-6 lg:gap-4 border border-b-[6px] backdrop:blur-sm border-[#D1B6F1] bg-[#faf8fee0] rounded-2xl lg:rounded-3xl">
                    <h2 className="text-[#090129] text-lg lg:text-2xl leading-normal lg:leading-normal font-semibold">
                        عبدالرحمن مصطفي عبد الجواد
                    </h2>
                    <p className="text-[#667085] lg:text-[#5A5570] text-sm lg:text-lg leading-[180%] lg:leading-[180%]">
                        مدرس رياضيات
                    </p>
                </div>
                <div className="p-8 lg:p-10 flex flex-col gap-6 lg:gap-4 bg-[#F9F9FB] rounded-2xl lg:rounded-3xl">
                    <h2 className="text-[#090129] text-base lg:text-xl leading-normal lg:leading-normal font-semibold lg:font-medium">
                        نبذة تعريفية
                    </h2>
                    <p className="text-[#667085] lg:text-[#5A5570] text-sm lg:text-base leading-[180%] lg:leading-[180%]">
                        مرحباً، أنا سعيد أبو السعود مدرس خبرة أكثر من +7 سنوات في التدريس للمنهج السعودي وخاصة
                        المواد العلمية والرياضة مثل ( الكيمياء - الفيزياء - الرياضة البحته ) ودرست لأكثر من
                        +20,000
                        طالب علي مستوي المملكة في خلال رحلتي والصفوف الدراسية للمراحل العمرية الكبيرة ( إعدادي و
                        ثانوي ) يمكنك التواصل معي في أي وقت لبدء الحجز.
                    </p>
                </div>

                <div className="p-8 lg:p-10 flex flex-col gap-6 lg:gap-4 bg-[#F9F9FB] rounded-2xl lg:rounded-3xl">
                    <h2 className="text-[#090129] text-base lg:text-xl leading-normal lg:leading-normal font-semibold lg:font-medium">
                        خبراتك
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-6">
                            <span className="text-[#090129] leading-normal font-medium">01</span>
                            <div className="flex flex-col gap-1.5">
                                <h2 className="text-[#090129] text-base leading-normal font-medium">
                                    مدرسة رياضيات للمرحلة الاعدادية
                                </h2>
                                <span className="text-[#090129] text-xs leading-normal">
                                    مدرسة التوفيقية للغات
                                </span>
                                <p className="text-[#5A5570] text-sm leading-[180%]">
                                    وصف قصير عن فترة الخبرة وصف قصير عن فترة الخبرة وصف قصير عن فترة الخبرة وصف
                                    قصير
                                    عن فترة الخبرة
                                </p>
                                <span className="text-[#8E8A9D] text-xs leading-normal">
                                    فبراير 2018 إلي الان
                                </span>
                            </div>
                        </div>
                        <span className="border-t border-[#E6E6EA]"></span>
                        <div className="flex items-start gap-6">
                            <span className="text-[#090129] leading-normal font-medium">02</span>
                            <div className="flex flex-col gap-1.5">
                                <h2 className="text-[#090129] text-base leading-normal font-medium">
                                    مدرسة رياضيات للمرحلة الاعدادية
                                </h2>
                                <span className="text-[#090129] text-xs leading-normal">
                                    مدرسة التوفيقية للغات
                                </span>
                                <p className="text-[#5A5570] text-sm leading-[180%]">
                                    وصف قصير عن فترة الخبرة وصف قصير عن فترة الخبرة وصف قصير عن فترة الخبرة وصف
                                    قصير
                                    عن فترة الخبرة
                                </p>
                                <span className="text-[#8E8A9D] text-xs leading-normal">
                                    فبراير 2018 إلي الان
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 lg:p-10 flex flex-col gap-6 lg:gap-4 bg-[#F9F9FB] rounded-2xl lg:rounded-3xl">
                    <h2 className="text-[#090129] text-base lg:text-xl leading-normal lg:leading-normal font-semibold lg:font-medium">
                        الموقع
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-3 lg:gap-4">
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[#8E8A9D] text-sm leading-normal">
                                الدولة
                            </span>
                            <p className="text-[#090129] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                                المملكة العربية السعودية
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[#8E8A9D] text-sm leading-normal">
                                المحافظة
                            </span>
                            <p className="text-[#090129] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                                الرياض
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[#8E8A9D] text-sm leading-normal">
                                الحي
                            </span>
                            <p className="text-[#090129] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                                التعاون
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>;
};

export default Teacher;
