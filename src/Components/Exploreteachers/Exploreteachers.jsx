import Filter from "./Filter";

const Exploreteachers = () => {
    return <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Filter />
            <div className="lg:col-span-2 h-[1000px] border rounded-3xl"></div>
        </div>
    </section>;
};

export default Exploreteachers;
