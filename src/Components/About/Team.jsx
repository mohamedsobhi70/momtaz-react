import { Link } from "react-router-dom";
import noimg from '../../assets/images/noimg.jpg'
import team1 from '../../assets/images/team-1.png'
import team2 from '../../assets/images/team-2.png'
import team3 from '../../assets/images/team-3.png'
import team4 from '../../assets/images/team-4.png'

const Team = () => {
    const teamMembers = [
        { id: "1", name: "خالد علي", role: "المدير التقني", img: team1 },
        { id: "2", name: "م/ سيد محمد", role: "مصمم تجربة مستخدم" },
        { id: "3", name: "م/ سارة علي", role: "المدير التقني", img: team2 },
        { id: "4", name: "خالد علي", role: "كاتب محتوي تقني", img: team3 },
        { id: "5", name: "خالد علي", role: "المدير التقني", img: team4 },
        { id: "6", name: "م/ سميرة علي", role: "مسؤلة المحتوي التعليمي", img: team1 },
    ]
    return <section className="py-16 lg:py-20 bg-[#F9F9FB]">
        <div className="container flex flex-col gap-10 lg:gap-16">
            <header className="flex flex-col items-center gap-3 px-[30px] lg:px-0">
                <h2 className="text-center section-title">
                    فريق منصة ممتاز
                </h2>
                <p className="text-center section-exc">
                    تعرف علي فريقنا المميز، الذي ساعد في أنشاء وإدارة المنصة.
                </p>
            </header>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    teamMembers.map(member =>
                        <li key={member.id} className="p-3.5 flex flex-col gap-4 bg-white rounded-[32px]">
                            <div className="h-60 rounded-3xl overflow-hidden">
                                {
                                    member.img ?
                                        <img src={member.img} className="w-full h-full object-cover" width="261" height="261" alt="team member" /> :
                                        <img src={noimg} className="w-full h-full object-cover" width="200" height="200" alt="team member" />
                                }

                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-[#333745] lg:text-xl leading-normal font-semibold">
                                    <Link to="/">
                                        {member.name}
                                    </Link>
                                </h3>
                                <p className="text-sm lg:text-base text-[#5D6B98] leading-normal lg:leading-relaxed">
                                    {member.role}
                                </p>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    </section>;
};

export default Team;
