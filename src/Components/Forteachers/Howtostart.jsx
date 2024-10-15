
import icon1 from '../../assets/images/num-1.png'
import icon2 from '../../assets/images/num-2.png'
import icon3 from '../../assets/images/num-3.png'
import icon4 from '../../assets/images/num-4.png'
import screen from '../../assets/images/mmtaz-screen.jpg'
const Howtostart = () => {

    const howToStart = [
        {
            id: 1,
            title: 'سجّل بياناتك',
            description: "ابدأ مع ممتاز من خلال تسجيل بياناتك كمعلم. عند مراجعة البيانات، نرسل لك أنه تم قبولك في شبكة المعلمين",
            icon: icon1
        },
        {
            id: 2,
            title: 'خطط لمحتواك',
            description: "ابدأ بتخطيط المنهج للمراحل التعليمية والمواد الدراسية التي تريد تدريسها وحول رسالتك في الحياة إلى منهج للمستقبل",
            icon: icon2
        },
        {
            id: 3,
            title: 'حدد أفضل أوقاتك',
            description: "اختر المواعيد المتاحة لك لكي يختر منها الطلبة وأولياء الأمور منها أوقات الدروس",
            icon: icon3
        },
        {
            id: 4,
            title: 'ابدأ واجعل الجميع يعرفك',
            description: "سيساعدك ممتاز إلى تسويق خدماتك للطلبة ومساعدتك على تقديم الحلول المثالية لزيادة أرباحك كمعلم",
            icon: icon4
        },
    ]
    return <section className="py-16 lg:py-24 overflow-x-hidden overflow-y-visible px-[30px] lg:px-0">
        <div className="container flex flex-col gap-16">
            <div className="flex flex-col gap-3 items-center">
                <span className="text-[#8E8A9D] text-sm leading-5 lg:text-base lg:leading-normal text-center lg:text-start">
                    خطوات البدا
                </span>
                <h2 className="text-[#090129] text-2xl leading-normal lg:text-[32px] lg:leading-normal font-semibold text-center lg:text-start">
                    كيف يمكنك بدء الربح من ممتاز؟
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div className="flex flex-col gap-6 lg:gap-16">
                    {howToStart.map(item => <div className="flex gap-6" key={item.id}>
                        <div className=" flex items-start gap-3">
                            <img src={item.icon} width="48" height="48" alt="Number 1" />
                        </div>
                        <div className="flex flex-col gap-3 flex-1">
                            <h2 className="text-[#090129] text-xl leading-normal font-semibold">
                                {item.title}
                            </h2>
                            <p className="text-[#8E8A9D] text-base leading-normal ">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    )}
                </div>

                <div className="relative">
                    <div className="lg:absolute lg:w-[872px] lg:h-full start-0 bottom-0 bg-[#E8E8E8] p-4 lg:p-12 overflow-hidden">
                        <img src={screen} className="border-4 border-[#090129] rounded-xl" width="768" height="512" alt="Screen shoot" />
                    </div>
                </div>
            </div>

        </div>
    </section>;
};

export default Howtostart;
