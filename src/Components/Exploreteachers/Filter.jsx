import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion } from '@mui/material';
import search from '../../assets/images/search-lg.svg'

const Filter = ({ handleSearchTeacher, allGrades, allSubjects, allGenders, handleSearchSubject, handleSearchGrades,handleSearchGenders }) => {


    return <aside className='divide-y divide-[#E6E6EA] rounded-[32px] border border-[#E6E6EA] overflow-hidden h-fit lg:sticky lg:top-24'>

        <Accordion className='before:hidden !shadow-none p-6' disableGutters defaultExpanded>
            <AccordionSummary
                expandIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6004 7.45801L11.1671 12.8913C10.5254 13.533 9.47539 13.533 8.83372 12.8913L3.40039 7.45801" stroke="#090129" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
                aria-controls="search-content"
                id="search-header"
                className='text-[#090129] font-medium !p-0 !min-h-fit'
            >
                البحث
            </AccordionSummary>
            <AccordionDetails className='!p-0 !pt-6'>
                <div className="relative">
                    <input type="search" name="search-teacher" id="search-teacher" placeholder='أبحث عن الصفوف والمعلمين.'
                        className='w-full input-sm inpt-primary' onChange={handleSearchTeacher} />
                    <img src={search} alt="search" className='absolute start-3 top-1/2 -translate-y-1/2' />
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion className='before:hidden !shadow-none p-6' disableGutters defaultExpanded>
            <AccordionSummary
                sx={{
                    '& .MuiAccordionSummary-content': {
                        margin: 0
                    }
                }}
                expandIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6004 7.45801L11.1671 12.8913C10.5254 13.533 9.47539 13.533 8.83372 12.8913L3.40039 7.45801" stroke="#090129" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
                aria-controls="subject-content"
                id="subject-header"
                className='text-[#090129] font-medium !p-0 !min-h-fit'
            >
                المادة العلمية
            </AccordionSummary>
            <AccordionDetails className='!p-0 !pt-6'>
                <ul className="flex flex-col gap-4">
                    {
                        allSubjects.map(sub => <li className='flex items-center gap-3' key={sub[0]}>
                            <input type="checkbox" id={sub[0]} name="subjects" onChange={() => handleSearchSubject(sub[0])}
                                className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor={sub[0]} className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>{sub[0]}</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>({sub[1]})</span>
                        </li>)
                    }
                </ul>
            </AccordionDetails>
        </Accordion>

        <Accordion className='before:hidden !shadow-none p-6' disableGutters >
            <AccordionSummary
                sx={{
                    '& .MuiAccordionSummary-content': {
                        margin: 0
                    }
                }}
                expandIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6004 7.45801L11.1671 12.8913C10.5254 13.533 9.47539 13.533 8.83372 12.8913L3.40039 7.45801" stroke="#090129" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
                aria-controls="grade-content"
                id="grade-header"
                className='text-[#090129] font-medium !p-0 !min-h-fit'
            >
                الصفوف الدراسية
            </AccordionSummary>
            <AccordionDetails className='!p-0 !pt-6'>
                <ul className="flex flex-col gap-4">
                    {
                        allGrades.map(grade =>
                            <li className='flex items-center gap-3' key={grade[0]}>
                                <input type="checkbox" id={grade[0]} name="grade" onChange={() => handleSearchGrades(grade[0])}
                                    className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                                <label htmlFor={grade[0]} className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>{grade[0]}</label>
                                <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>({grade[1]})</span>
                            </li>
                        )
                    }
                </ul>
            </AccordionDetails>
        </Accordion>

        <Accordion className='before:hidden !shadow-none p-6' disableGutters>
            <AccordionSummary
                sx={{
                    '& .MuiAccordionSummary-content': {
                        margin: 0
                    }
                }}
                expandIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6004 7.45801L11.1671 12.8913C10.5254 13.533 9.47539 13.533 8.83372 12.8913L3.40039 7.45801" stroke="#090129" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
                aria-controls="grade-content"
                id="grade-header"
                className='text-[#090129] font-medium !p-0 !min-h-fit'
            >
                الجنس
            </AccordionSummary>
            <AccordionDetails className='!p-0 !pt-6'>
                <ul className="flex flex-col gap-4">
                    {
                        allGenders.map(gender =>
                            <li className='flex items-center gap-3' key={gender[0]}>
                                <input type="checkbox" id={gender[0]} name="gender"  onChange={() => handleSearchGenders(gender[0])}
                                    className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                                <label htmlFor={gender[0]} className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>{gender[0]}</label>
                                <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>({gender[1]})</span>
                            </li>
                        )
                    }
                </ul>
            </AccordionDetails>
        </Accordion>

    </aside>;
};

export default Filter;
