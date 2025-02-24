import { Main } from '@layouts';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <div>
            <Main>
                <Outlet />
            </Main>
        </div>
    );
};
