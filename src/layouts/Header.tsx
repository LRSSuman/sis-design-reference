import { Menu } from 'lucide-react';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { headerConfig } from '@constants';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
    isMenuBtnVisible: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ isMenuBtnVisible, setIsSidebarOpen }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const profileRef = useRef<HTMLDivElement>(null);

    const { pathname } = useLocation();
    const { headerTitles, dropDownItems, profileImage, name } = headerConfig;

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setTitle(headerTitles[pathname as keyof typeof headerTitles]);
    }, [pathname]);

    return (
        <div className='bg-background shadow-lg'>
            <div className='relative flex items-center justify-between max-w-7xl mx-auto px-4 py-3 xs:py-2 sm:px-6 lg:px-8'>
                <div className='flex items-center gap-2'>
                    {isMenuBtnVisible && (
                        <Menu
                            size={34}
                            className='bg-primary text-white rounded-sm'
                            onClick={() => setIsSidebarOpen((prev) => !prev)}
                        />
                    )}
                    <h1 className='text-lg xs:text-2xl font-semibold text-font-primary'>{title}</h1>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <div
                            className='w-10 h-10 xs:w-12 xs:h-12 rounded-full overflow-hidden'
                            onClick={() => setIsOpen((prev) => !prev)}
                            ref={profileRef}
                        >
                            <img src={profileImage} alt='profile' />
                        </div>
                        <h2 className='font-medium'>{name}</h2>
                    </div>
                    {isOpen && (
                        <div className='absolute right-0 top-16 w-48 origin-top-right rounded-b-md bg-background shadow-lg z-20'>
                            {dropDownItems.map((item, i) => (
                                <button
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left'
                                    key={i}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
