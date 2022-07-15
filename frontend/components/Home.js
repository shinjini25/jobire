import React from "react";
// import Filters from "./layout/Filters";
import Link from 'next/link'
import JobItem from "./job/JobItem";
import Pagination from 'react-js-pagination';
import { useRouter } from 'next/router';
import Filters from './layouts/Filters';
const Home = ({ data }) => {
    const { jobs, resPerPage, count } = data;

    const router = useRouter();
    let { page = 1, keyword } = router.query;
    page = Number(page);

    let queryParams;
    if (typeof window !== 'undefined') {
        queryParams = new URLSearchParams(window.location.search);

    }
    const handlePageClick = (currentPage) => {
        if (queryParams.has('page')) {
            queryParams.set('page', currentPage);
        } else {
            queryParams.append('page', currentPage);
        }

        router.push({
            search: queryParams.toString()
        });

    }
    return (
        <div className="container container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-4">
                    <Filters />
                </div>

                <div className="col-xl-9 col-lg-8 content-left-offset">
                    <div className="my-5">
                        <h4 className="page-title">
                            {keyword
                                ? jobs.length > 1 ? `${jobs.length} Results for '${keyword}'` : `${jobs.length} Result for '${keyword}'`
                                : "Latest Jobs"}
                        </h4>
                        <Link href="/search">
                            <button className="float-right stats_btn">
                                Search Jobs
                            </button>
                        </Link>

                        <div className="d-block">
                            <Link href="/stats"><u className="text-success">Get topic specific statistics</u></Link>
                        </div>
                    </div>
                    {jobs && jobs.map((job) => <JobItem key={job.id} job={job} />)}

                    {resPerPage << count && (
                        <div className="d-flex mt-5 justify-content-center">
                            <Pagination
                                activePage={page}
                                itemsCountPerPage={resPerPage}
                                totalItemsCount={count}
                                onChange={handlePageClick}
                                nextPageText={"Next"}
                                prevPageText={"Prev"}
                                firstPageText={"First"}
                                lastPageText={"Last"}
                                itemClass="page-item"
                                linkClass="page-link"


                            />
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Home;
