import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { studentRoutes } from './StudentRoutes';
import { facultyRoutes } from './FacultyRoutes';
import { adminRoutes } from './AdminRoutes';
import { loginRoutes } from './LoginRoutes';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<h1>Home Page</h1>} />
            {loginRoutes}
            {studentRoutes}
            {facultyRoutes}
            {adminRoutes}
        </>
    )
);

export const AppRoutes = () => <RouterProvider router={router} />;
