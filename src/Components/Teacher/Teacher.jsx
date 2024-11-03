import { Link, useParams } from "react-router-dom";
import { teachers } from '../../data/dummy';
import noPic from '../../assets/images/noimg.jpg'
import NotFound from "../Globals/NotFound";
import star from '../../assets/images/star.svg'

const Teacher = () => {
    const { id } = useParams();
    const teacherItm = teachers.find((t) => +id === +t.id);

    console.log(teacherItm);

    return <>
        {teacherItm ? <section className="py-16">
            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
                <aside className="flex flex-col gap-6">
                    <div className="aspect-[35/48] overflow-hidden rounded-2xl lg:rounded-3xl  sticky top-24">
                        <img src={teacherItm.image || noPic} className="size-full object-cover" alt="teacher profile pic" />
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
                            {teacherItm.name}
                        </h2>
                        <p className="text-[#667085] lg:text-[#5A5570] text-sm lg:text-lg leading-[180%] lg:leading-[180%]">
                            مدرس {teacherItm.subjects.join(' و ')}
                        </p>
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col gap-6 lg:gap-4 bg-[#F9F9FB] rounded-2xl lg:rounded-3xl">
                        <h2 className="text-[#090129] text-base lg:text-xl leading-normal lg:leading-normal font-semibold lg:font-medium">
                            نبذة تعريفية
                        </h2>
                        <p className="flex items-center gap-1 text-[#FAC515] text-xl font-medium">
                            <img src={star} alt="star" width='32' height='32' />
                            {teacherItm.rate.toFixed(1)}
                        </p>
                        <p className="text-[#667085] lg:text-[#5A5570] text-base leading-[180%]">
                            {teacherItm.Introduction}
                        </p>
                    </div>

                    <div className="p-8 lg:p-10 flex flex-col gap-6 lg:gap-4 bg-[#F9F9FB] rounded-2xl lg:rounded-3xl">
                        <h2 className="text-[#090129] text-base lg:text-xl leading-normal lg:leading-normal font-semibold lg:font-medium">
                            الخبرات
                        </h2>
                        <ul className="flex flex-col divide-y divide-[E6E6EA]">
                            {
                                teacherItm.experience.map((exp, index) => <li key={index} className="flex items-start gap-6 py-4 first:pt-0 last:pb-0">
                                    <span className="text-[#090129] leading-normal font-medium">{index < 10 ? "0" + (index + 1) : index}</span>
                                    <span className="flex flex-col gap-1.5">
                                        <strong className="text-[#090129] text-base leading-normal font-medium">
                                            {exp.title}
                                        </strong>
                                        <span className="text-[#090129] text-xs leading-normal">
                                            {exp.school}
                                        </span>
                                        <span className="text-[#5A5570] text-sm leading-[180%]">
                                            {exp.desc}
                                        </span>
                                        <span className="text-[#8E8A9D] text-xs leading-normal">
                                            {exp.startDate} إلى {exp.endDate}
                                        </span>
                                    </span>
                                </li>)
                            }
                        </ul>
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
                                    {teacherItm.country}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[#8E8A9D] text-sm leading-normal">
                                    المحافظة
                                </span>
                                <p className="text-[#090129] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                                    {teacherItm.city}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <span className="text-[#8E8A9D] text-sm leading-normal">
                                    الحي
                                </span>
                                <p className="text-[#090129] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                                    {teacherItm.location}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section> : <NotFound />}


    </>
};

export default Teacher;
