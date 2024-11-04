import React from "react";
import CountUp from "react-countup";
const Numbers = () => {
    const ourNums = [
        { id: "1", num: "2342", type: "حصة في مختلف المواد" },
        { id: "2", num: "15523", type: "مدرس مسجل لدينا" },
        { id: "3", num: "6202", type: "طالب وطالبة في جميع المراحل" }];

    return <section className="bg-[#EADDF9] py-12">
        <div className="container flex flex-col gap-6">
            <h2
                className="text-center text-black text-2xl font-medium">
                أرقامنا في صناعة تعليم أفضل.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
                {
                    ourNums.map(el =>
                        <div key={el.id} className="flex flex-col gap-2 border-e lg:border-[#8E8A9D] last:border-0">
                            <h3 className="text-center text-black text-5xl font-semibold">
                                <CountUp end={+(el.num)} duration={1.4} prefix="+" enableScrollSpy={true} />
                            </h3>
                            <p className="text-center text-[#3A3454] font-medium">
                                {el.type}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    </section>;
};

export default Numbers;
