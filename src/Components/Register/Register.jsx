import { Link } from "react-router-dom";
import user from '../../assets/images/user-icon.svg';
import phoneIcn from '../../assets/images/phone-icon.svg';
import showPass from '../../assets/images/showpass-icon.svg';
import lock from '../../assets/images/lock-icon.svg';
import twitter from '../../assets/images/twitter.png';
import facebock from '../../assets/images/faceboock.png';
import google from '../../assets/images/google.png';
import { useState } from "react";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
    }
    return <>
        <div className="flex flex-col gap-2 lg:gap-3 py-6 lg:py-0">
            <h2 className="text-[#111322] text-2xl lg:text-[32px] leading-normal lg:leading-normal font-semibold">
                تسجيل حساب جديد
            </h2>
            <p className="text-[#667085] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                سجل حسابك وأنضم الي ألالاف المعلمين علي منصتنا.
            </p>
        </div>
        <form onSubmit={handleLogin}>
            <div className="flex flex-col lg:gap-6">
                <div className="flex flex-col gap-4 lg:gap-8 py-4 lg:py-0">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="text-[#4A5578] text-xs leading-normal font-medium">
                            الأسم كامل
                        </label>
                        <div className="relative">
                            <img src={user} width="20" height="20" alt="username"
                                className="absolute right-3 top-1/2 -translate-y-1/2" />
                            <input type="text" name="fullname" id="fullname" placeholder="أضف أسمك" required className="input-sm inpt-primary w-full" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email-account" className="text-[#4A5578] text-xs leading-normal font-medium">
                            البريد الإلكترونى
                        </label>
                        <div className="relative">
                            <img src={phoneIcn} width="20" height="20" alt="username"
                                className="absolute right-3 top-1/2 -translate-y-1/2" />
                            <input type="email" name="email-account" id="email-account" placeholder="example.gmail.com" required className="input-sm inpt-primary w-full" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-[#4A5578] text-xs leading-normal font-medium">
                            كلمة المرور
                        </label>
                        <div className="flex flex-col gap-1">
                            <div className="relative">
                                <img src={lock} width="20" height="20" alt="username"
                                    className="absolute right-3 top-1/2 -translate-y-1/2" />
                                <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="كلمة المرور"
                                    required className="px-10 input-sm inpt-primary w-full" />
                                <img src={showPass} width="20" height="20" alt="username" onClick={() => setShowPassword(!showPassword)}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer show-password" />
                            </div>
                            <p className="text-[#7D89B0] text-xs leading-normal">
                                علي الأقل يجب أن يكون 8 أحرف أو أرقام
                            </p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col gap-[22px] py-4 lg:py-0">
                    <input type="submit" value="سجل حسابك"
                        className="btn-secondary btn-md" />

                    <span className="border-t border-[#EDF0F2] relative">
                        <span
                            className="bg-white px-[22px] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[#475467] text-xs leading-normal font-semibold">
                            أو
                        </span>
                    </span>

                    <div className="grid grid-cols-3 gap-4">
                        <Link to='/'
                            className="p-3 rounded-xl border border-[#DCDFEA] flex justify-center items-center">
                            <img src={twitter} width="20" height="20" alt="twitter" />
                            <span className="sr-only">telegram Icon</span>
                        </Link>
                        <Link to='/'
                            className="p-3 rounded-xl border border-[#DCDFEA] flex justify-center items-center">
                            <img src={facebock} width="20" height="20" alt="faceboock" />
                            <span className="sr-only">telegram Icon</span>
                        </Link>
                        <Link to='/'
                            className="p-3 rounded-xl border border-[#DCDFEA] flex justify-center items-center">
                            <img src={google} width="20" height="20" alt="google.png" />
                            <span className="sr-only">telegram Icon</span>
                        </Link>
                    </div>
                </div>


                <div className="flex justify-center items-center gap-1 py-4 lg:py-0">
                    <span className="text-[#5D6B98] text-sm leading-normal font-medium">
                        هل لديك حساب بالفعل ؟
                    </span>
                    <Link to="/login" className="btn-link btn-sm p-0">
                        تسجيل دخول
                    </Link>
                </div>

            </div>
        </form>
    </>;
};

export default Register;
