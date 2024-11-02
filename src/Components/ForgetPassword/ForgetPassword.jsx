
import { Link } from 'react-router-dom';
import phoneIcn from '../../assets/images/phone-icon.svg';

const ForgetPassword = () => {
    return <>
        <div className="flex flex-col gap-2 lg:gap-3 py-6 lg:py-0">
            <h2 className="text-[#111322] text-2xl lg:text-[32px] leading-normal lg:leading-normal font-semibold">
                اعادة تعيين كلمة المرور
            </h2>
            <p className="text-[#667085] text-sm lg:text-base leading-normal lg:leading-normal font-medium">
                من فضلك أضف بريدك الإلكترونى حتي يمكننا الأستمرار.
            </p>
        </div>
        <form >
            <div className="flex flex-col lg:gap-6">
                <div className="flex flex-col gap-4 lg:gap-8 py-4 lg:py-0">
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
                    <input type="submit" className="btn-secondary btn-md" value="متابعة" />
                    <div className="flex justify-center items-center gap-1 py-4 lg:py-0">
                        <span className="text-[#5D6B98] text-sm leading-normal font-medium">هل لديك حساب بالفعل ؟</span>
                        <Link className="btn-link btn-sm p-0" to="/login">تسجيل دخول</Link></div>
                </div>
            </div>
        </form>
    </>
};

export default ForgetPassword;
