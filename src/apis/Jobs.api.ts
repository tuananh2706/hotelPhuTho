import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { collection, getDocs, query, doc, getDoc } from 'firebase/firestore';
import { db } from '~/firebaseConfig';
import { Job, JobResponse } from '~/utils/types';

const JobsApi = createApi({
    reducerPath: 'JobsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        fetchJobsPaginated: builder.query<
            JobResponse,
            {
                page: number;
                limit: number;
                name?: string;
                position?: string;
                address?: string;
            }
        >({
            async queryFn({ page, limit, name, position, address }) {
                try {
                    const JobsCollection = collection(db, 'Job');
                    let JobsQuery = query(JobsCollection);

                    const JobsSnapshot = await getDocs(JobsQuery);

                    const allJobs: Job[] = JobsSnapshot.docs.map((doc) => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            ...data
                        } as Job;
                    });

                    let filteredJobs = allJobs;

                    if (name) {
                        filteredJobs = filteredJobs.filter((Job) =>
                            Job.name.toLowerCase().includes(name.toLowerCase())
                        );
                    }

                    if (position) {
                        filteredJobs = filteredJobs.filter((Job) =>
                            Job.position
                                .toLowerCase()
                                .includes(position.toLowerCase())
                        );
                    }

                    if (address) {
                        filteredJobs = filteredJobs.filter((Job) =>
                            Job.address
                                .toLowerCase()
                                .includes(address.toLowerCase())
                        );
                    }

                    const start = (page - 1) * limit;
                    const end = start + limit;
                    const paginatedJobs = filteredJobs.slice(start, end);

                    console.log(paginatedJobs);
                    return {
                        data: {
                            jobs: paginatedJobs,
                            total: filteredJobs.length
                        } as JobResponse
                    };
                } catch (error) {
                    console.log(error);
                    return { error: { message: (error as Error).message } };
                }
            }
        }),
        fetchJobById: builder.query<Job, string>({
            queryFn: async (id) => {
                try {
                    const JobDoc = doc(db, 'Job', id);
                    const JobSnapshot = await getDoc(JobDoc);

                    if (JobSnapshot.exists()) {
                        const JobData = {
                            id: JobSnapshot.id,
                            ...JobSnapshot.data()
                        } as Job;

                        return { data: JobData };
                    } else {
                        return { error: { message: 'Job not found' } };
                    }
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        })
    })
});

export const { useFetchJobsPaginatedQuery, useFetchJobByIdQuery } = JobsApi;

export default JobsApi;
