import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Accordion } from '@mui/material';
import search from '../../assets/images/search-lg.svg'

const Filter = () => {

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
                        className='w-full input-sm inpt-primary' />
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
                <div className="flex flex-col gap-6">

                    <div className="relative">
                        <input type="search" name="search-sub" id="search-sub" placeholder='بحث'
                            className='w-full input-sm inpt-primary' />
                        <img src={search} alt="search" className='absolute start-3 top-1/2 -translate-y-1/2' />
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="arabic" name="arabic" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="arabic" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>اللغة العربية</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="math" name="math" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="math" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>الرياضيات</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="history" name="history" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="history" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>التاريخ</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="science" name="science" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="science" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>العلوم</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                    </ul>
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
                aria-controls="grade-content"
                id="grade-header"
                className='text-[#090129] font-medium !p-0 !min-h-fit'
            >
                الصفوف الدراسية
            </AccordionSummary>
            <AccordionDetails className='!p-0 !pt-6'>
                <div className="flex flex-col gap-6">

                    <div className="relative">
                        <input type="search" name="search-grade" id="search-grade" placeholder='بحث'
                            className='w-full input-sm inpt-primary' />
                        <img src={search} alt="search" className='absolute start-3 top-1/2 -translate-y-1/2' />
                    </div>
                    <ul className="flex flex-col gap-4">
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="grade-1" name="grade-1" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="grade-1" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>الصف الأول</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="grade-2" name="grade-2" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="grade-2" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>الصف الثاني</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="grade-3" name="grade-3" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="grade-3" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>الصف الثالث</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="grade-4" name="grade-4" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="grade-4" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>الصف الرابع</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <input type="checkbox" id="grade-5" name="grade-5" className='!text-[#875BF7] focus:ring-transparent focus:!shadow-none rounded-md size-5 peer cursor-pointer' />
                            <label htmlFor="grade-5" className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out font-medium grow line-clamp-1 cursor-pointer'>الصف الخامس</label>
                            <span className='text-[#8E8A9D] peer-checked:text-[#090129] transition-colors duration-300 ease-in-out'>(15)</span>
                        </li>
                    </ul>
                </div>
            </AccordionDetails>
        </Accordion>

    </aside>;
};

export default Filter;
