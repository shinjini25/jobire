import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import JobContext from "../../context/JobContext";

import {
    jobTypeOptions,
    educationOptions,
    industriesOptions,
    experienceOptions,
    availablityOptions,
    modeOptions,
    skillOptions,
} from "./data";

const NewJob = ({ access_token }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [jobType, setJobType] = useState("Permanent");
    const [education, setEducation] = useState("Bachelors");
    const [industry, setIndustry] = useState("IT");
    const [experience, setExperience] = useState("");
    const [availablity, setAvailablity] = useState("");
    const [mode, setMode] = useState("Hybrid Mode");
    const [salary, setSalary] = useState("");
    const [positions, setPositions] = useState("");
    const [duration, setDuration] = useState("");
    const [company, setCompany] = useState("");
    const [website, setWebsite] = useState("");
    const [skills, setSkills] = useState([]);

    const { clearErrors, error, loading, created, newJob, setCreated } =
        useContext(JobContext);

    var expanded = false;

    function showCheckboxes() {
        if (typeof document !== 'undefined') {
            var checkboxes = document.getElementById("checkboxes");
            if (!expanded) {
                checkboxes.style.display = "block";
                expanded = true;
            } else {
                checkboxes.style.display = "none";
                expanded = false;
            }
        }

    }

    function addSkill(id) {
        if (typeof document !== 'undefined') {
            skills.push(id.toString());
        }

    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            clearErrors();
        }

        if (created) {
            setCreated(false);

            toast.success("Job Posted successfully.");
        }
    }, [error, created]);

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
            website,
            skills,

        };

        newJob(data, access_token);
    };


    return (
        <div className="newJobcontainer">
            <div className="formWrapper">
                <div className="headerWrapper">
                    <div className="headerLogoWrapper"></div>
                    <h1>
                        <i aria-hidden className="fas fa-copy mr-2"></i> POST A JOB
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

                            <div class="multiselect">

                                <div className="selectBox" onClick={function () { showCheckboxes() }}>
                                    <select>
                                        <option>Select the skills</option>
                                    </select>
                                    <div className="overSelect"></div>
                                </div>
                                <div id="checkboxes">
                                    {skillOptions.map((option) => (
                                        <label htmlFor={option[0]}>
                                            <input type="checkbox" id={option[0]} onClick={function () { addSkill(option[0]) }} />{option[1]}</label>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="col text-center mt-3">
                            <button className="createButton">
                                {loading ? "Posting..." : "Post Job"}
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default NewJob;
