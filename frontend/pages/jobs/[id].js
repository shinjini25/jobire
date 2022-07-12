import Layout from '../../components/layout/Layout';
import Home from '../../components/Home';
import JobDetails from '../../components/job/JobDetails';
import axios from 'axios';
import NotFound from '../../components/layout/NotFound';

export default function jobDetailsPage({ job, candidatesCount, error }) {
    // console.log(job);
    if (error?.includes("Not found")) return <NotFound />;
    return (
        <Layout title={job.title}>
            <JobDetails job={job} candidatesCount={candidatesCount} />

        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    try {
        const res = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`);
        console.log(res.data);
        const job = res.data.job;
        const candidatesCount = res.data.candidatesCount

        return { props: { job, candidatesCount } }
    }
    catch (e) {
        return { props: { error: e.response.data.detail } }

    }
}