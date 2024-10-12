import Accordion from "./Accordion";

const Faqs = () => {

    let faqs = [
        {
            title: "هل هناك نسخة تجريبية مجانية متاحة؟",
            content: "نعم ، يمكنك تجربتنا مجانًا لمدة 30 يومًا. إذا كنت ترغب في ذلك ، فسنقدم لك مكالمة مجانية ومخصصة لمدة 30 دقيقة لتنشيطك وتشغيلك في أسرع وقت ممكن.نعم ، يمكنك تجربتنا مجانًا لمدة 30 يومًا. إذا كنت ترغب في ذلك ، فسنقدم لك مكالمة مجانية ومخصصة لمدة 30 دقيقة."
        },
        {
            title: "هل يمكنني تغيير خطتي لاحقًا؟",
            content: "نعم ،يمكنني تغيير خطتي لاحقًا."
        },
        {
            title: "ما هي سياسة الإلغاء الخاصة بك؟",
            content: "نعم هي سياسة الإلغاء الخاصة بك"
        },
        {
            title: "هل يمكن إضافة معلومات أخرى إلى الفاتورة؟",
            content: "نعم يمكن إضافة معلومات أخرى إلى الفاتورة ."
        },
        {
            title: "كيف تعمل الفواتير؟",
            content: "نعم .تعمل الفواتير"
        },
        {
            title: "كيف أقوم بتغيير البريد الإلكتروني الخاص بحسابي؟",
            content: "نعم .أقوم بتغيير البريد الإلكتروني الخاص بحسابي"
        },
    ]
    return <section className="py-16 lg:py-24 bg-white">
        <div className="container flex flex-col gap-16 lg:gap-24">
            <header className="flex flex-col gap-3">
                <h2 className="section-title text-center">
                    الاسئلة الشائعة
                </h2>
                <p className="section-exc text-center">
                    في دقائق بسيطة أعرف أكثر عن كيفية أستخدام منصتنا.
                </p>
            </header>

            <div className="lg:mx-auto lg:w-8/12 flex flex-col gap-4">
                {/* accordion Item  */}
                {faqs.map((el, index) =>
                    <Accordion key={index} title={el.title} content={el.content} />
                )}
            </div>

        </div>
    </section>;
};

export default Faqs;
