import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import JobContext from "../../context/JobContext";

import {
    jobTypeOptions,
    educationOptions,
    industriesOptions,
    experienceOptions,
    availablityOptions,
    modeOptions,
} from "./data";

const UpdateJob = ({ job, access_token }) => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [jobType, setJobType] = useState("Permanent");
    const [education, setEducation] = useState("Bachelors");
    const [industry, setIndustry] = useState("IT");
    const [experience, setExperience] = useState("");
    const [availablity, setAvailablity] = useState("");
    const [mode, setMode] = useState("");
    const [salary, setSalary] = useState("");
    const [positions, setPositions] = useState("");
    const [duration, setDuration] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");

    const { clearErrors, error, loading, updated, updateJob, setUpdated } =
        useContext(JobContext);

    useEffect(() => {

        if (job) {
            setTitle(job.title);
            setDescription(job.description);
            setEmail(job.email);
            setAddress(job.address);
            setJobType(job.jobType);
            setEducation(job.education);
            setIndustry(job.industry);
            setExperience(job.experience);

            setAvailablity(job.availablity);
            setMode(job.mode);

            setSalary(job.salary);
            setPositions(job.positions);
            setDuration(job.duration);
            setCompany(job.company);
            setWebsite(job.website);
        }

        if (error) {
            toast.error(error);
            clearErrors();
        }

        if (updated) {
            setUpdated(false);
            router.push('/employer/jobs');
            toast.success("Job Updated successfully.");

        }
    }, [error, updated]);

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            title,
            description,
            email,
            address,
            jobType,
            education,
            industry,
            experience,
            salary,
            positions,
            company,
            availablity,
            mode,
            duration,
            website

        };

        console.log(data);

        updateJob(job.id, data, access_token);
    };


    return (
        <div className="newJobcontainer">
            <div className="formWrapper">
                <div className="headerWrapper">
                    <div className="headerLogoWrapper"></div>
                    <h1>
                        <i aria-hidden className="fas fa-copy mr-2"></i> UPDATE JOB
                    </h1>
                </div>
                <form className="form" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="inputWrapper">
                                <div className="inputBox">
                                    <i aria-hidden className="fab fa-tumblr"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter Job Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-file-medical-alt"></i>
                                    <textarea
                                        className="description"
                                        type="text"
                                        placeholder="Enter Job Description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-envelope"></i>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        pattern="\S+@\S+\.\S+"
                                        title="Your email is invalid"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-map-marker-alt"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-dollar-sign"></i>
                                    <input
                                        type="number"
                                        placeholder="Enter salary/stipend"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-users"></i>
                                    <input
                                        type="number"
                                        placeholder="Enter No. of Positions"
                                        value={positions}
                                        onChange={(e) => setPositions(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-building"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter company name"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}

                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-building"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter duration of the job (eg): 6 Months or put NA if not applicable"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}

                                    />
                                </div>
                                <div className="inputBox">
                                    <i aria-hidden className="fas fa-building"></i>
                                    <input
                                        type="text"
                                        placeholder="Enter company website (eg): https://google.com/careers"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                        required
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 ml-4 mt-4 mt-md-0 ml-md-0">
                            <div className="boxWrapper">
                                <h4>Type of Job</h4>
                                <div className="selectWrapper">
                                    <select
                                        className="classic"
                                        value={jobType}
                                        onChange={(e) => setJobType(e.target.value)}
                                    >
                                        {jobTypeOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="boxWrapper">
                                <h4>Education Requirement:</h4>
                                <div className="selectWrapper">
                                    <select
                                        className="classic"
                                        value={education}
                                        onChange={(e) => setEducation(e.target.value)}
                                    >
                                        {educationOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="boxWrapper">
                                <h4>Industry:</h4>
                                <div className="selectWrapper">
                                    <select
                                        className="classic"
                                        value={industry}
                                        onChange={(e) => setIndustry(e.target.value)}
                                    >
                                        {industriesOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="boxWrapper">
                                <h4>Experience:</h4>
                                <div className="selectWrapper">
                                    <select
                                        className="classic"
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                    >
                                        {experienceOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="boxWrapper">
                                <h4>Availibity of Candidate:</h4>
                                <div className="selectWrapper">
                                    <select
                                        className="classic"
                                        value={availablity}
                                        onChange={(e) => setAvailablity(e.target.value)}
                                    >
                                        {availablityOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="boxWrapper">
                                <h4>Mode:</h4>
                                <div className="selectWrapper">
                                    <select
                                        className="classic"
                                        value={mode}
                                        onChange={(e) => setMode(e.target.value)}
                                    >
                                        {modeOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="col text-center mt-3">
                            <button className="createButton">
                                {loading ? "Updating..." : "Update Job"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJob;
