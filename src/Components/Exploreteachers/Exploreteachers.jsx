import Filter from "./Filter";
import Teachercard from "./Teachercard";
import { teachers } from '../../data/dummy'
import { useCallback, useEffect, useState } from "react";

const Exploreteachers = () => {

    const [filteredTeachers, setFilteredTeachers] = useState(teachers);
    const [teacherName, setTeacherName] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');


    const subjectsWithCounts = [...new Set(teachers.flatMap(teacher => teacher.subjects))].sort()
        .map(subject => [
            subject,
            teachers.filter(teacher => teacher.subjects.includes(subject)).length
        ]);
    const gradesWithCounts = [...new Set(teachers.flatMap(teacher => teacher.grades))].sort()
        .map(grade => [
            grade,
            teachers.filter(teacher => teacher.grades.includes(grade)).length
        ]);




    const filterTeachers = useCallback(() => {
        setFilteredTeachers(
            teachers.filter(it =>
                (teacherName === '' || it.name.toLowerCase().includes(teacherName.toLowerCase())) &&
                (subject === '' || it.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()))) &&
                (grade === '' || it.grades.some(g => g.toLowerCase().includes(grade.toLowerCase())))
            )
        );
    }, [teacherName, subject, grade]); // Include dependencies used in filterTeachers


    const handleSearchTeacher = (e) => {
        setTeacherName(e.target.value.trim());
    };

    const handleSearchSub = (e) => {
        setSubject(e.target.value.trim());
    };

    const handleSearchGrade = (e) => {
        setGrade(e.target.value.trim());
    };

    useEffect(() => {
        filterTeachers();
    }, [filterTeachers]);

    return <section className="py-16">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Filter handleSearchTeacher={handleSearchTeacher}
                handleSearchSub={handleSearchSub}
                handleSearchGrade={handleSearchGrade}
                grades={gradesWithCounts}
                subjects={subjectsWithCounts} />

            {
                filteredTeachers.length === 0 ? <p className="lg:col-span-2 border h-fit rounded-3xl p-8 text-center text-[#f73737] text-sm leading-5 lg:text-xl my-auto">
                    لا يوجد معلمون تطابق بحثك.
                </p> : <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-fit">
                    {filteredTeachers.map(teacher => <Teachercard key={teacher.id} teacher={teacher} />)}
                </div>
            }

        </div>
    </section>;
};

export default Exploreteachers;
