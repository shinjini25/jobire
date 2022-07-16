import Layout from '../components/layouts/Layout';
import Search from '../components/layouts/Search';

import axios from 'axios';


export default function Index({ data }) {
    return (
        <Layout title='Search jobs'>
            <Search />
        </Layout>
    )
}
