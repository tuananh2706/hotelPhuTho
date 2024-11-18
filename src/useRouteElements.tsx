import { useRoutes } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';
import Home from '~/pages/Home';
<<<<<<< HEAD
import Jobs from './pages/Jobs';
import Documents from './pages/Documents';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetail';
import JobDetail from './pages/JobDetail';
=======
import Jobs from './pages/Jobs/Jobs';
import Documents from './pages/Documents';
import Blogs from './pages/Blogs';
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d

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
<<<<<<< HEAD
            path: '/blog-details/',
            element: (
                <MainLayout>
                    <BlogDetails />
                </MainLayout>
            )
        },
        {
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
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
<<<<<<< HEAD
        },
        {
            path: '/job-details',
            element: (
                <MainLayout>
                    <JobDetail />
                </MainLayout>
            )
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
        }
    ]);

    return routeElement;
}
