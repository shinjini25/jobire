import Layout from '../../components/layouts/Layout';
import Home from '../../components/Home';
import JobDetails from '../../components/job/JobDetails';
import axios from 'axios';
import NotFound from '../../components/layouts/NotFound';

export default function jobDetailsPage({ job, candidatesCount, access_token, error }) {
    if (error?.includes("Not found")) return <NotFound />;
    return (
        <Layout title={job.title}>
            <JobDetails job={job} candidatesCount={candidatesCount} access_token={access_token} />

        </Layout>
    );
}

export async function getServerSideProps({ req, params }) {
    try {
        const res = await axios.get(`${process.env.API_URL}/api/jobs/${params.id}/`);
        const job = res.data.job;
        const candidatesCount = res.data.candidatesCount

        const access_token = req.cookies.access || '';

        return { props: { job, candidatesCount, access_token, } }
    }
    catch (e) {
        return { props: { error: e.response.data.detail } }

    }
}