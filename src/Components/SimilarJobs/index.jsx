
import { FaStar } from "react-icons/fa";
import { FaLocationDot,FaBriefcase } from "react-icons/fa6";

import './index.css'

const Similarjobs = (props) => {

    const {similarJobs} = props;
    console.log(similarJobs);

    const onDisplaySimilarJobs = (each) => {

        return (
            <li className="similar-jobs">
                    <div style={{display : "flex"}}>
                        <img src={each.company_logo_url} width='60px' />

                            <div style={{marginLeft : "15px"}}>
                                <h3>{each.title}</h3>

                                <FaStar style={{color : "yellow", marginRight : "4px"}}/>
                                <span>{each.rating}</span>
                            </div>
                    </div>

                    <br />        

                            <div>
                                <h4>Description</h4>

                                <p style={{ marginBottom : "10px",}}>{each.job_description}</p>
                            </div>

                    <hr style={{backgroundColor : "gray", marginBottom : "10px"}}/>   

                    <div style={{display : "flex", }}>
                            <FaLocationDot style={{marginRight : "5px"}}/>
                            <span style={{marginRight : "50px"}}>{each.location}</span>    

                            <FaBriefcase style={{marginRight : "6px"}}/>
                            <span>{each.employment_type}</span>    
                    </div>     

                    
            </li>
        )

    }

  return (

    <>
    
            <div>

                <h2 style={{marginTop : "20px", marginLeft : "10px"}}>Similar Jobs</h2>

                    <ul className="similr-jobs-display">
                        {
                            similarJobs.map( each => onDisplaySimilarJobs( each ) )
                        }
                    </ul>

            </div>
    
    </>

  )
}

export default Similarjobs;