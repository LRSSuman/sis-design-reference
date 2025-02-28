import { loginPageConfig } from '@constants';
import { ChangeEvent, FormEvent, useState } from 'react';

export const LoginPage = () => {
    const {
        title,
        subTitle,
        image,
        toggleText: { student, faculty },
    } = loginPageConfig;
    const [isFaculty, setIsFaculty] = useState(false);

    const initialLoginState = {
        email: '',
        password: '',
        regNo: '',
    };
    const [loginData, setLoginData] = useState(initialLoginState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(loginData);
    };

    const renderLoginForm = () => (
        <form onSubmit={handleSubmit} className='flex flex-col gap-6 '>
            {isFaculty ? (
                <input
                    name='email'
                    type='email'
                    placeholder='Enter Your Email'
                    autoComplete='off'
                    className='px-4 py-4  border-2 border-primary rounded-2xl outline-none'
                    value={loginData.email}
                    onChange={handleChange}
                />
            ) : (
                <input
                    name='regNo'
                    type='number'
                    placeholder='Enter Your Reg No'
                    autoComplete='off'
                    className='px-4 py-4  border-2 border-primary rounded-2xl outline-none'
                    value={loginData.regNo}
                    onChange={handleChange}
                />
            )}
            <input
                name='password'
                type='password'
                placeholder='Enter Your Password'
                className='px-4 py-4  border-2 border-primary rounded-2xl outline-none'
                value={loginData.password}
                onChange={handleChange}
            />
            <button type='submit' className='bg-sky-500 text-font-primary py-4 rounded-2xl cursor-pointer'>
                Login
            </button>
        </form>
    );

    return (
        <div className='relative w-full min-h-screen bg-background overflow-hidden flex items-center justify-center font-primary'>
            <div className='absolute top-0 left-0 bg-primary h-full w-full md:w-[80%] [clip-path:polygon(0%_0%,30%_0%,70%_100%,0%_100%)]'></div>
            <div className='relative py-10 lg:px-10 z-10 bg-background w-[90%] h-[80vh] flex flex-col items-center justify-center lg:flex-row rounded-2xl gap-10'>
                <div className='lg:w-1/2 text-font-primary flex flex-col lg:flex-row items-center justify-center gap-6 '>
                    <div className='w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0'>
                        <img src={image} alt='logo' />
                    </div>
                    <div className='font-medium text-xl sm:text-3xl flex-shrink-0'>
                        <h1 className='text-center lg:text-left'>{title}</h1>
                        <h2>{subTitle}</h2>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col items-center justify-center font-medium'>
                    <div className='pl-2 xxs:pl-0 min-w-[280px]  sm:min-w-96'>
                        {renderLoginForm()}
                        <div
                            onClick={() => {
                                setLoginData(initialLoginState);
                                setIsFaculty(!isFaculty);
                            }}
                            className='text-primary-dark mt-2 ml-1 cursor-pointer'
                        >
                            {isFaculty ? faculty : student}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
