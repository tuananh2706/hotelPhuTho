import { useRoutes } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';
import Home from '~/pages/Home';
import Jobs from './pages/Jobs';
import Documents from './pages/Documents';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetail';
import JobDetail from './pages/JobDetail';

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
            path: '/blog-details/',
            element: (
                <MainLayout>
                    <BlogDetails />
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
        },
        {
            path: '/job-details',
            element: (
                <MainLayout>
                    <JobDetail />
                </MainLayout>
            )
        }
    ]);

    return routeElement;
}
