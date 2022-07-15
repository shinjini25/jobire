import React, { useEffect, useContext } from "react";

import Link from "next/link";
import DataTable from "react-data-table-component";

import JobContext from "../../context/JobContext";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

const MyJobs = ({ jobs, access_token }) => {
    const { clearErrors, error, loading, deleted, deleteJob, setDeleted } =
        useContext(JobContext);

    const router = useRouter();

    useEffect(() => {
        if (error) {
            toast.error(error);
            clearErrors();
        }

        if (deleted) {
            setDeleted(false);
            router.push(router.asPath);
        }
    }, [error, deleted]);

    const deleteJobHandler = (id) => {
        deleteJob(id, access_token);
    };

    const confirmAction = (id) => {
        let confirmAction = confirm("Are you sure you want to delete the job?");
        if (confirmAction) {
            deleteJobHandler(id);
        } else {
            alert("Action canceled");
        }
    }

    const columns = [
        {
            name: "Job ID",
            sortable: true,
            selector: (row) => row.id,
        },
        {
            name: "Job name",
            sortable: true,
            selector: (row) => row.title,
        },
        {
            name: "Salary",
            sortable: true,
            selector: (row) => row.salary,
        },
        {
            name: "Action",
            sortable: true,
            selector: (row) => row.action,
        },
    ];

    const data = [];

    jobs &&
        jobs.forEach((job) => {
            data.push({
                id: job.id,
                title: job.title,
                salary: job.salary,
                action: (
                    <>

                        <a className="btn btn-primary" href={`/jobs/${job.id} `}>
                            <i aria-hidden className="fa fa-eye"></i>
                        </a>

                        <a className="btn btn-success my-2 mx-1" href={`/employer/jobs/candidates/${job.id}`}>
                            <i aria-hidden className="fa fa-users"></i>
                        </a>


                        <a className="btn btn-warning my-2 mx-1" href={`/employer/jobs/${job.id}`}>
                            <i aria-hidden className="fa fa-pencil"></i>
                        </a>

                        <button
                            className="btn btn-danger mx-1"
                            onClick={() => confirmAction(job.id)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </>
                ),
            });
        });

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 mt-5">
                <h4 className="my-5">My Jobs</h4>
                <DataTable columns={columns} data={data} responsive />
            </div>
            <div className="col-2"></div>
        </div>
    );
};

export default MyJobs;