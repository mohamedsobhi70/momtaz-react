import Filter from "./Filter";
import Teachercard from "./Teachercard";
import { teachers } from '../../data/dummy';
import { useCallback, useEffect, useState } from "react";

const Exploreteachers = () => {
    const [filteredTeachers, setFilteredTeachers] = useState(teachers);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [selectedGrades, setSelectedGrades] = useState([]);
    const [teacherName, setTeacherName] = useState('');

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

    const gendesrWithCounts = [...new Set(teachers.flatMap(teacher => teacher.gender))].sort()
        .map(gender => [
            gender,
            teachers.filter(teacher => teacher.gender.includes(gender)).length
        ]);

    // Filter function considering teacherName and selectedSubjects
    const filterTeachers = useCallback(() => {
        setFilteredTeachers(
            teachers.filter(teacher =>
                (teacherName === '' || teacher.name.toLowerCase().includes(teacherName.toLowerCase())) &&
                (selectedSubjects.length === 0 || teacher.subjects.some(subject => selectedSubjects.includes(subject))) &&
                (selectedGrades.length === 0 || teacher.grades.some(grade => selectedGrades.includes(grade)))
            )
        );
    }, [teacherName, selectedSubjects, selectedGrades]);

    // Handle input for teacher name
    const handleSearchTeacher = (e) => {
        setTeacherName(e.target.value.trim());
    };

    // Handle subject selection for filtering
    const handleSearchSubject = (subject) => {
        setSelectedSubjects(prevSubjects =>
            prevSubjects.includes(subject)
                ? prevSubjects.filter(s => s !== subject)
                : [...prevSubjects, subject]
        );
    };
    // Handle grades selection for filtering
    const handleSearchGrades = (grade) => {
        setSelectedGrades(prevGrade =>
            prevGrade.includes(grade)
                ? prevGrade.filter(s => s !== grade)
                : [...prevGrade, grade]
        );
    };

    // Update filteredTeachers whenever teacherName or selectedSubjects change
    useEffect(() => {
        filterTeachers();
    }, [filterTeachers]);

    return (
        <section className="py-16">
            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Filter
                    handleSearchTeacher={handleSearchTeacher}
                    allGrades={gradesWithCounts}
                    allGenders={gendesrWithCounts}
                    allSubjects={subjectsWithCounts}
                    handleSearchSubject={handleSearchSubject}
                    handleSearchGrades={handleSearchGrades}
                />

                {filteredTeachers.length === 0 ? (
                    <p className="lg:col-span-2 border h-fit rounded-3xl p-8 text-center text-[#f73737] text-sm leading-5 lg:text-xl my-auto">
                        لا يوجد معلمون تطابق بحثك.
                    </p>
                ) : (
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 h-fit">
                        {filteredTeachers.map(teacher => (
                            <Teachercard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Exploreteachers;
