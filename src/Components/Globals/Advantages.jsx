import verify from '../../assets/images/verify.svg'
import messages from '../../assets/images/messages.svg'
import documentText from '../../assets/images/document-text.svg'
const Advantages = () => {
    const advantage = [
        {
            icon: verify,
            title: 'مدرسين معتمدين وذوي خبرة',
            description: 'هنا سنقوم بوصف الميزة بشكل مفصل في سطر أو سطرين حتي تصل بشكل آوضح للمستخدم.'
        },
        {
            icon: messages,
            title: 'تواصل داخلي مع المعلم',
            description: 'هنا سنقوم بوصف الميزة بشكل مفصل في سطر أو سطرين حتي تصل بشكل آوضح للمستخدم.'
        },
        {
            icon: documentText,
            title: 'تقارير مستوي دورية ومفصلة',
            description: 'هنا سنقوم بوصف الميزة بشكل مفصل في سطر أو سطرين حتي تصل بشكل آوضح للمستخدم.'
        }
    ]

    return <section className="py-16 lg:py-20">
        <div className="container flex flex-col gap-12">
            <header className='flex flex-col gap-3'>
                <h2 className="section-title text-center">
                    مزايا منصتنا
                </h2>
                <p className="section-exc text-center">
                    شاهد آهم مزايا منصتنا.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    advantage.map((el, index) => <div key={index} className='flex flex-col items-center gap-4 lg:gap-6 p-4'>
                        <span className="bg-[#D5F379] p-3 rounded-[20px] flex items-center justify-center">
                            <img src={el.icon} width="32" height="32" alt="verify icon" />
                        </span>
                        <h3 className="text-center text-[#000000E5] text-xl leading-normal lg:text-2xl lg:leading-normal font-semibold">
                            {el.title}
                        </h3>
                        <p className="text-center text-sm lg:text-base text-[#5D6B98] leading-normal lg:leading-normal">
                            {el.description}
                        </p>
                    </div>)
                }
            </div>
        </div>
    </section>;
};

export default Advantages;
