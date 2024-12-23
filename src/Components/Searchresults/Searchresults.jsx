import React from "react";
import { useSelector } from "react-redux";
import { teachers } from "../../data/dummy";
import noimg from '../../assets/images/noimg.jpg'
import { Link } from "react-router-dom";
import star from '../../assets/images/star.svg'
import notfound from '../../assets/images/404.png'

const Searchresults = () => {
    const searchQuery = useSelector((state) => state.search.query);
    const searchRes = teachers.filter(teacher => teacher.name.includes(searchQuery)
        || teacher.subjects.some(subject => subject.includes(searchQuery))
        || teacher.grades.some(grade => grade.includes(searchQuery))
    );

    return <section className="py-20">
        {
            searchRes.length ? <div className="container flex flex-col gap-12">
                <header className="flex flex-col gap-3">
                    <h2 className="section-title text-center flex gap-2 justify-center items-center">
                        {searchRes.length} نتيجة خاصه بـ
                        " {searchQuery} "
                    </h2>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchRes.map(teacher =>
                        <div key={teacher.id} className="border rounded-3xl p-6 flex flex-col gap-5 transition-colors delay-300 cursor-pointer">
                            <div className="teacher-card-img">
                                <img src={teacher.image || noimg} alt="teacher" className='size-full object-cover' />
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="border border-[#E6E6EA] rounded-3xl overflow-hidden size-16 shrink-0">
                                    <img src={teacher.image || noimg} alt="teacher" className='size-full object-cover' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link to={`/teacher/${teacher.id}`} className='text-[#090129] font-semibold line-clamp-1'>
                                        {teacher.name}
                                    </Link>
                                    <div className="flex items-center gap-1">
                                        <p className="flex items-center gap-1 text-[#FAC515] text-sm font-medium">
                                            <img src={star} alt="star" width='16' height='16' />
                                            {teacher.rate.toFixed(1)}
                                        </p>
                                        <span className='text-[#8E8A9D] text-xs'>
                                            ( {teacher.ratingno} تقييم)
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-.5">
                                <span className="text-sm text-[#8E8A9D] font-medium font-Tajawal">
                                    مواد علمية يدرسها:
                                </span>
                                <p className='text-[#3A3454] font-medium'>
                                    {teacher.subjects.sort().join(" , ")}
                                </p>
                            </div>
                        </div>)
                    }
                </div>
            </div> : <div className="container flex flex-col justify-center md:items-center gap-12">
                <img src={notfound} width='592' height='395' alt="page-not-found" />
                <div className="flex flex-col gap-3">
                    <h2 className="section-title text-center font-black capitalize">
                        آسفين! لا يوجد نتائج تطابق بحثك الخاص بـ 
                         "<span className="text-[#E62E05]"> {searchQuery} </span>" حاليا
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-3 lg:gap-4">
                    <Link to='/' className='btn-lg btn-primary'>
                        الصفحة الرئيسية
                    </Link>
                    <Link to='/explore-teacher' className='btn-lg btn-secondary'>
                        تصفح جميع المعلمين
                    </Link>
                </div>
            </div>
        }

    </section>;
};

export default Searchresults;
