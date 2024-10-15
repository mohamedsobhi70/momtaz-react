import icon1 from "../../assets/images/ser-icon-1.svg"
import icon2 from "../../assets/images/ser-icon-2.svg"
import icon3 from "../../assets/images/ser-icon-3.svg"
import icon4 from "../../assets/images/ser-icon-4.svg"

const Services = () => {
    const services = [
        {
            id: 1,
            title: "حدد المقابل المناسب",
            description: "يقدم ممتاز أسعار تنافسية للمعلمين وحرية اختيار المقابل المناسب لدروسك",
            icon: icon1
        },
        {
            id: 2,
            title: "درّس في أي وقت تريده ",
            description: "تستطيع ممارسة شغفك في التعليم أي وقت تريده وتحديد عدد الساعات المتاحة لك",
            icon: icon2
        },
        {
            id: 3,
            title: "درّب أكثر من 400 طالب وطالبة ",
            description: "من خلال ممتاز، تستطيع الوصول بإلهامك وعلمك لمئات الطلبة في جميع المراحل التعليمية",
            icon: icon3
        },
        {
            id: 4,
            title: "تعّلم كيف تُعّلم",
            description: "يقدم ممتاز تدريبات مهنية في مجال التعليم من خلال محاضرات ودعم من الخبراء لنمو المسار المهني للمعلمين",
            icon: icon4
        },
    ]
    return <section className="py-16 lg:py-24 px-[30px] lg:px-0">
        <div className="container grid lg:grid-cols-3 gap-[30px] items-start">
            <div className="flex flex-col gap-3">
                <h2 className="text-[#090129] text-2xl leading-normal lg:text-[32px] lg:leading-normal font-semibold">
                    ماذا يستطيع ممتاز تقديمه لك كمعلم أو معلمة؟
                </h2>
                <p className="text-[#8E8A9D] text-sm leading-5 lg:text-xl lg:leading-normal">
                    إذا كان شغفك هو تغيير مسارات المستقبل، فشغفنا تغيير مسار حياتك أيضًا
                </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:gap-y-16">
                {services.map(serv =>
                    <div className="service-item" key={serv.id}>
                        <div className="service-icon">
                            <img src={serv.icon} width="32" height="32" alt="services icon" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[#090129] text-xl leading-normal font-semibold text-center lg:text-start">
                                {serv.title}
                            </h2>
                            <p className="text-[#8E8A9D] text-base leading-normal text-center lg:text-start">
                                {serv.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>;
};

export default Services;
