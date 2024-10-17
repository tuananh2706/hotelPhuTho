import { useRoutes } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';
import Home from '~/pages/Home';
import Jobs from './pages/Jobs/Jobs';
import Documents from './pages/Documents';
import Blogs from './pages/Blogs';

export default function useRouteElements() {
    const routeElement = useRoutes([
        {
            path: '/',
            element: (
                <MainLayout>
                    <Home />
                </MainLayout>
            )
        },
        {
            path: '/blogs',
            element: (
                <MainLayout>
                    <Blogs />
                </MainLayout>
            )
        },
        {
            path: '/documents',
            element: (
                <MainLayout>
                    <Documents />
                </MainLayout>
            )
        },
        {
            path: '/jobs',
            element: (
                <MainLayout>
                    <Jobs />
                </MainLayout>
            )
        }
    ]);

    return routeElement;
}
