import { useState } from 'react';
import { Link } from 'react-router-dom';
import star from '../../assets/images/star.svg'
import noimg from '../../assets/images/noimg.jpg'

const Teachercard = ({ teacher }) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleClick = () => { setIsSelected(!isSelected); };
    return <div className={`border rounded-3xl p-6 flex flex-col gap-5 transition-colors delay-300 cursor-pointer ${isSelected ? "border-[#7839EE]" : "border-[#E6E6EA]"}`} onClick={handleClick}>
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
    </div>;
};

export default Teachercard;
