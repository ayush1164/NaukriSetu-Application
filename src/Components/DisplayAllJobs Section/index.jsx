import { FaLocationDot,FaBriefcase } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import './index.css'


const DisplayAllJobs = (prop) => {

    const {jobs} = prop;



    return (

        <>

                <Link to={`/jobs/${jobs.id}`} className="link-route"> 

                        <li className='display-jobs-cont'>

                                <div className='logo-title-rating-cont'>

                                        <img src={jobs.company_logo_url}  width='80px'/>

                                        <div>

                                        <h3>{jobs.title}</h3>

                                                <FaStar style={{color:"orange", marginRight : "3px"}} />
                                        <span>{jobs.rating}</span>

                                        </div>

                                </div>

                                <br />

                                <div className='location-emptype-salary-cont'>

                                <div>

                                                <FaLocationDot style={{marginRight : "3px",}}/>
                                        <span style={{marginRight : "5px"}}>{jobs.location}</span>

                                                <FaBriefcase style={{marginRight : "3px", marginLeft : "10px"}}/>
                                        <span>{jobs.employment_type}</span>

                                </div>

                                <span>{jobs.package_per_annum}</span>

                                </div>

                                <hr style={{backgroundColor : "gray", marginTop : "5px", marginBottom : "5px"}} />


                                        <div>
                                                <h4>Description</h4>

                                                <p>{jobs.job_description}</p>
                                        </div>

                        </li>

                </Link>        

        </>

    )

}

export default DisplayAllJobs;