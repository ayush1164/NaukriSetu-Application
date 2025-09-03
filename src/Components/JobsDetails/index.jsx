import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Cookies from "js-cookie";
import { FaLocationDot,FaBriefcase } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import './index.css'
import Similarjobs from "../SimilarJobs";
import Header from '../Header';

const JobDetails = () => {

  const [allvalues, setValues] = useState({
    jobsDetails : {},
    lifeAtCompany : {},
    skillsArr : [],
    similarJobs : []
  })

  console.log(allvalues.jobsDetails);
  console.log(allvalues.lifeAtCompany);
  console.log(allvalues.similarJobs);
  console.log(allvalues.skillsArr);
  

  const {id} = useParams();
  // console.log(id);
  

  let token = Cookies.get("my-Token");

  useEffect(()=>{

   const onFetchJobDetails = async() => {

      let api = `https://apis.ccbp.in/jobs/${id}`;

      console.log("console");
      

      const options = {

        method : "GET",
        headers : {
          // "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`
        }

      }

      try {

        let response = await fetch(api, options);
        // console.log(response);
        

        let data = await response.json();

        if(response.ok === true){

          setValues({...allvalues, jobsDetails : data.job_details, lifeAtCompany : data.job_details.life_at_company, 
              skillsArr : data.job_details.skills, similarJobs : data.similar_jobs });
          
        }
        
        
      } catch (error) {
        console.log(error);
      }

   }

   
      onFetchJobDetails();
 
  },[])


  const displaySkills = ( each ) => {

    return (

      <li>
                  <div style={{display:"flex", flexDirection : "column", justifyContent:"center", alignItems : "center"}}>
                    <img src={each.image_url} alt="" /><br />
                    <p>{each.name}</p>
                  </div>

      </li>

    )

  }
 
  return (

    <>

    <Header />

   <div className="main-body-cont">

           <div className="jobsDetailsCont">
      
            <div className='logo-title-rating-cont'>
      
                    <img src={allvalues.jobsDetails.company_logo_url}  width='80px'/>
      
                    <div style={{marginLeft : "10px", marginTop : "10px"}}>
      
                        <h3>{allvalues.jobsDetails.title}</h3>
          
                        <FaStar style={{color:"orange", marginRight : "3px"}} />
                        <span>{allvalues.jobsDetails.rating}</span>
      
                    </div>
      
            </div>
      
            <br />
      
             <div className='location-emptype-salary-cont'>
      
            <div>
      
                            <FaLocationDot style={{marginRight : "3px",}}/>
                    <span style={{marginRight : "5px"}}>{allvalues.jobsDetails.location}</span>
      
                            <FaBriefcase style={{marginRight : "3px", marginLeft : "10px"}}/>
                    <span>{allvalues.jobsDetails.employment_type}</span>
      
            </div>
      
            <span>{allvalues.jobsDetails.package_per_annum}</span>
      
            </div>
      
            <hr style={{backgroundColor : "gray", marginTop : "5px", marginBottom : "5px"}} />
      
            <div>
      
                     <div>

                      <div style={{display : "flex", justifyContent : "space-between"}}>
                        
                             <h4>Description</h4>  

                             <Link to={allvalues.jobsDetails.company_website_url}>visit <span style={{fontSize : "12px", marginLeft : "5px"}}> <FaExternalLinkAlt /> </span></Link>
                      </div>
      
                             <p style={{marginTop : "5px"}}>{allvalues.jobsDetails.job_description}</p>
                    </div>
      
            </div><br />
            
            <div>

                  <ul className="skills-cont">
                    {
                      allvalues.skillsArr.map( each => displaySkills( each ))
                    }
                  </ul>

            </div>

            <br />

            <div className="life-at-company-container">

              <div className="info-container">

                      <h4>Life At Company</h4>

                      <p style={{marginTop : "5px"}}>{allvalues.lifeAtCompany.description}</p>

              </div>

              <div className="info-img-container">

                  <img src={allvalues.lifeAtCompany.image_url} width='65%' className="company-img" />

              </div>
            </div>

    </div>

                      <Similarjobs   similarJobs = {allvalues.similarJobs}/>

   </div>

   </>

  )
}

export default JobDetails;