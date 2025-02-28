import { Header, Main, Sidebar } from '@layouts';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMenuBtnVisible, setIsMenuBtnVisible] = useState(false);

    const showMenuBtn = useMediaQuery({ minWidth: 1280 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        setIsSidebarOpen(!isMobile);
        setIsMenuBtnVisible(!showMenuBtn);
    }, [isMobile, showMenuBtn]);

    return (
        <div className='relative flex h-screen bg-background font-primary text-font-primary overflow-hidden'>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} isMobile={isMobile} />
            <div className='flex-1 relative overflow-auto scroll-smooth'>
                <Header isMenuBtnVisible={isMenuBtnVisible} setIsSidebarOpen={setIsSidebarOpen} />
                <Main>
                    <Outlet />
                </Main>
            </div>
        </div>
    );
};
