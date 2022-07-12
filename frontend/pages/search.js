import Layout from '../components/layout/Layout';
import Search from '../components/layout/Search';

import axios from 'axios';


export default function Index({ data }) {
    console.log("jobs", data);
    return (
        <Layout title='Search jobs'>
            <Search />
        </Layout>
    )
}
