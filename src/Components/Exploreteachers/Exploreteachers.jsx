import Filter from "./Filter";
import Teachercard from "./Teachercard";
import { teachers } from '../../data/dummy'

const Exploreteachers = () => {
    return <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Filter />
            <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6 h-fit">
                {teachers.map(teacher => <Teachercard key={teacher.id} teacher={teacher} />)}

            </div>
        </div>
    </section>;
};

export default Exploreteachers;
