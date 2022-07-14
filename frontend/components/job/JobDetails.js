import React, { useEffect, useContext } from 'react'
import Link from 'next/link';
import moment from 'moment'

import JobContext from "../../context/JobContext";
import { toast } from "react-toastify";

const JobDetails = ({ job, candidatesCount, access_token }) => {

    const { applyToJob, checkJobApplied, applied, clearErrors, error, loading } =
        useContext(JobContext);

    useEffect(() => {

        if (error) {
            toast.error(error);
            clearErrors();
        }

        checkJobApplied(job.id, access_token);
    }, [error]);

    const applyToJobHandler = () => {
        applyToJob(job.id, access_token);
    };


    function choices(id) {
        var skills = [(1, 'Web Development'), (2, 'PHP'), (3, 'SQL'), (4, 'JavaScript'), (5, 'Android Development'),
        (6, "IOS Development"), (7, "Java"), (8, "C/C++"), (9, "Python"), (10, "Cloud"), (11, "Swift"),
        (12, "Database Management"), (13, "Network Security/Management"), (14, "Dart"), (15, "Image Processing"),
        (16, "Deep Learning"), (17, "Artificial Intelligence"), (18, "Business Analytics"), (19, "Blockchain"),
        (20, "Cyber Security"), (21, "Project Management"), (22, "UI/UX"),];
        return skills[id];
    }

    const d1 = moment(job.lastDate);
    const d2 = moment(Date.now());
    const isLastDatePassed = d1.diff(d2, "days") < 0 ? true : false

    return (
        <div className="job-details-wrapper">
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <div className="job-details p-3">
                            <div className="job-header p-4">
                                <h2>{job.title}</h2>
                                <span>
                                    <i aria-hidden className="fas fa-building"></i>
                                    <span> {job.company}</span>
                                </span>
                                <span className="ml-4">
                                    <i aria-hidden className="fas fa-map-marker-alt"></i>
                                    <span> {job.address}</span>
                                </span>

                                <div className="mt-3">
                                    <span>
                                        {loading ? (
                                            "Loading..."
                                        ) : applied ? (
                                            <button
                                                disabled
                                                className="btn btn-success px-4 py-2 apply-btn"
                                            >
                                                <i aria-hidden className="fas fa-check"></i>{" "}
                                                {loading ? "Loading" : "Applied"}
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-primary px-4 py-2 apply-btn"
                                                onClick={applyToJobHandler}
                                                disabled={isLastDatePassed}
                                            >
                                                {loading ? "Loading..." : "Apply Now"}
                                            </button>
                                        )}
                                        <span className="ml-4 text-success">
                                            <b>{candidatesCount}</b> candidate(s) have applied to this job.
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div className="job-description mt-4">
                                <h4 className="mt-2">Description</h4>
                                <p>
                                    {job.description}
                                </p>
                            </div>
                            <div className="job-description mt-4">
                                <h4 className="mt-2">Mode of Work</h4>
                                <p>
                                    <button className="job-mode"> {job.mode}</button>
                                </p>
                            </div>

                            <div className="job-description mt-3">
                                <h4 className=" mb-3">Skills Required</h4>

                                <p>
                                    {job.skills.map((skill) => <button key={skill} className="pill-tag">{choices(skill)}</button>)}
                                </p>

                            </div>

                            <div className="job-description mt-3">
                                <h4 className="mt-2">Availability</h4>
                                <p>
                                    {job.availablity}
                                </p>
                            </div>

                            <div className="job-summary">
                                <h4 className="mt-5 mb-4">Job Summary</h4>
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Job Type</td>
                                            <td>:</td>
                                            <td>{job.jobType}</td>
                                        </tr>

                                        <tr>
                                            <td>Job Industry</td>
                                            <td>:</td>
                                            <td>{job.industry}</td>
                                        </tr>

                                        <tr>
                                            <td>Expected Salary</td>
                                            <td>:</td>
                                            <td>${job.salary}</td>
                                        </tr>

                                        <tr>
                                            <td>Education</td>
                                            <td>:</td>
                                            <td>{job.education}</td>
                                        </tr>

                                        <tr>
                                            <td>Experience</td>
                                            <td>:</td>
                                            <td>{job.experience}</td>
                                        </tr>

                                        <tr>
                                            <td>Duration</td>
                                            <td>:</td>
                                            <td>{job.duration}</td>
                                        </tr>
                                        <tr>
                                            <td>Starts</td>
                                            <td>:</td>
                                            <td>{job.availablity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="job-location">
                                <h4 className="mt-5 mb-4">Job Location</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4">
                        <div className="job-contact-details p-3">
                            <h4 className="my-4">Recruiter Details</h4>
                            <hr />
                            <a href={`${job.website}`}><p className="company-web">Website</p></a>

                            <h5>Email Address</h5>
                            <p>{job.email}</p>

                            <h5>Job Posted</h5>
                            <p>{moment.utc(job.createdAt).local().startOf('minutes').fromNow()}</p>

                            <h5>Last Date to Apply</h5>
                            <p>{job.lastDate.substring(0, 10)}</p>
                        </div>


                        {isLastDatePassed && (
                            <div className="mt-5 p-0">
                                <div className="alert alert-danger">
                                    <h5>Note:</h5>
                                    You can no longer apply to this job. This job is expired. Last
                                    date to apply for this job was:{" "}
                                    <b>{job.lastDate.substring(0, 10)}</b>
                                    <br /> Checkout others job on Jobbee.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
