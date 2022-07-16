import Layout from "../../../components/layouts/Layout";
import NewJob from "../../../components/job/NewJob";

import { isAuthenticatedUser } from "../../../utils/isAuthenticated";
import axios from "axios";

export default function NewJobPage({ access_token, }) {
    return (
        <Layout title="Post a new Job">
            <NewJob access_token={access_token} />
        </Layout>
    );
}

export async function getServerSideProps({ req }) {
    const access_token = req.cookies.access;

    const user = await isAuthenticatedUser(access_token);

    if (!user) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    // const skillForm = form.data.skillsForm;

    return {
        props: {
            access_token,
            // skillForm
        },
    };
}