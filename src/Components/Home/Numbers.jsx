import React from "react";

const Numbers = () => {
    const ourNums = [
        { id: "1", num: "2،342+", type: "حصة في مختلف المواد" },
        { id: "2", num: "15,523+", type: "مدرس مسجل لدينا" },
        { id: "3", num: "6,202+", type: "طالب وطالبة في جميع المراحل" }];

    return <section className="bg-[#EADDF9] py-12">
        <div className="container flex flex-col gap-6">
            <h2 className="text-center text-black text-2xl font-medium">
                أرقامنا في صناعة تعليم أفضل.
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    ourNums.map(el =>
                        <div key={el.num} className="flex flex-col gap-2 border-e border-[#8E8A9D] last:border-0">
                            <h3 className="text-center text-black text-5xl font-semibold">
                                {el.num}
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
