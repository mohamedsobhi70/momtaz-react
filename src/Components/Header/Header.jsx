import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
const Header = () => {
    return <header className='py-3 z-50 bg-white'>
        <div className="container flex items-center gap-12">
            <Link to="/" className="shrink-0">
                <img src={logo} width="97" height="42" alt="Momtaz Logo" />
            </Link>

            <div className="flex items-center justify-between gap-4 grow">
                <nav className='flex items-center gap-6'>
                    <NavLink to="/" className="nav-link">
                        الرئيسية
                    </NavLink>
                    <NavLink to="/support" className="nav-link">
                        الدعم الفني
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        من نحن
                    </NavLink>
                    <NavLink to="/subjects" className="nav-link">
                        المواد العلمية
                    </NavLink>
                    <NavLink to="/search-teacher" className="nav-link">
                        أستكشف المعلمين
                    </NavLink>
                </nav>

                <ul className='flex items-center gap-3'>
                    <li>
                        <Link to='/login' className='btn-secondary btn-md'>
                            تسجيل دخول
                        </Link>
                    </li>
                    <li>
                        <Link to='/register' className='btn-gray-secondary btn-md'>
                            حساب جديد ؟
                        </Link>
                    </li>
                    <li>
                        <Link to='/for-teachers'>
                            للمعلمين
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>;
};

export default Header;
