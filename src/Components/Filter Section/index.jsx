import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './index.css'


let employmentType = [

    {
        title : "Full Time",
        employmentId : "FULLTIME"
    },

        {
        title : "Part Time",
        employmentId : "PARTTIME"
    },

        {
        title : "Internship",
        employmentId : "INTERNSHIP"
    },

        {
        title : "Freelance",
        employmentId : "FREELANCE"
    },

]


let packageperAnnum = [

    {
        title : "10 lpa and above",
        packagePerAnnumId : "1000000"
    },

    {
        title : "20 lpa and above",
        packagePerAnnumId : "2000000"
    },

    {
        title : "30 lpa and above",
        packagePerAnnumId : "3000000"
    },

    {
        title : "40 lpa and above",
        packagePerAnnumId : "4000000"
    },

]



const FilterSection = (prop) => {

    const [allvalues, setvalues] = useState({
        profileDetails : {}
    });

    const {onSubmitEmpType, onSubmitSalary} = prop;

    let token = Cookies.get("my-Token");

    // console.log(allvalues.profileDetails)


    useEffect(()=>{

        const onFecthProfileDetails = async() => {

            let api = "https://apis.ccbp.in/profile";

            let options = {
                method : "GET",
                headers : {
                    // "Content-Type" : "application/json",
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                let response = await fetch(api, options);

                let data = await response.json();
                

                if(response.ok === true){
                    
                    setvalues({...allvalues, profileDetails : data.profile_details});
                    
                }
                
            } catch (error) {

                console.log(error);
                
            }


        }

        onFecthProfileDetails();

    },[])


    const onSetEmpType = (e) => {

        onSubmitEmpType(e.target.checked, e.target.value);

    }

    const onSetSalary = (e) => {

        onSubmitSalary(e.target.value)

    }
    


    const displayEmploymentType = (each) => {

        return (

            <li key={each.employmentId}>

                <input id={each.employmentId} type="checkbox" value={each.employmentId}
                        onChange={onSetEmpType}
                />
                <label htmlFor={each.employmentId}>{each.title}</label>

            </li>

        )

    }


    



    const displayPackagePerAnnum = (each) => {

        return (

            <li key={each.packagePerAnnumId}>

                <input id={each.packagePerAnnumId} type="radio" value={each.packagePerAnnumId} name='Salary'
                        onChange={onSetSalary}
                />
                <label htmlFor={each.packagePerAnnumId}>{each.title}</label>

            </li>

        )

    }



    return (

        <div className='filter-sec'>

            <div className="for_medium_device">

                <div className='profile-sec'>

                        <img src={allvalues.profileDetails.profile_image_url}  width='100px'/>

                        <h2 style={{marginTop : "7px"}}>{allvalues.profileDetails.name}</h2>

                        <p>{allvalues.profileDetails.short_bio}</p>

                </div>

                <div className='jobtype-sec'>

                    <h2>Type of Employment</h2>

                    <ul>

                            {
                                employmentType.map( each => displayEmploymentType(each) )
                            }

                    </ul>

                </div>
            

                <div className='salary-sec'>

                    <h2>Salary Range</h2>

                    <ul>
                        {
                            packageperAnnum.map(each => displayPackagePerAnnum(each))
                        }
                    </ul>

                </div>

            </div>


        </div>








    )

}


export default FilterSection;