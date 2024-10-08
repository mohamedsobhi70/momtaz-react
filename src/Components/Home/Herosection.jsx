
const Herosection = () => {
    return <section className="min-h-[calc(100vh-66px)] bg-[#090129] relative">
        <div className="container py-96">
            <div className="lg:w-2/3 mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-center text-white text-7xl leading-normal font-semibold">
                        أحجز حصة لأولادك مع
                        <span className="text-black relative inline-block py-1 px-2">
                            <span className="bg-[#D5F379] rotate-6 rounded-2xl inline-block size-full absolute inset-1/2 -translate-y-1/2 translate-x-1/2"></span>
                            <span className="relative">
                                أفضل
                            </span>
                        </span>
                        المعلمين.
                    </h1>
                    <p className="text-[#7D89B0] text-xl text-center leading-relaxed">
                        لدينا باقة من أفضل المعلمين حول المملكة  لجميع التخصصات ومختلف الأعمار ، إحجز الأن معهم.
                    </p>
                </div>
            </div>
        </div>
    </section>;
};
export default Herosection;
