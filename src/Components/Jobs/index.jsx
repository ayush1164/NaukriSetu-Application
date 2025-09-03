import FilterSection from '../Filter Section'
import DisplayAllJobs from '../DisplayAllJobs Section'
import Header from '../Header'
import Cookies from 'js-cookie'
import { useState,useEffect } from 'react'
import './index.css'


const Jobs = () => {

    const [allvalues,setvalues] = useState({
        jobsArr : [],
        empType : [],
        salary : "",
        userInput : "",
        isShowLoader : false,
        isShowJobs : false
    })

    // console.log(allvalues.userInput);

    let token = Cookies.get("my-Token");

    useEffect(()=>{

        const onFetchAllJobs = async() => {

            setvalues({...allvalues, isShowLoader : true})

            let api = `https://apis.ccbp.in/jobs?employment_type=${allvalues.empType}&minimum_package=${allvalues.salary}&search=${allvalues.userInput}`

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
                console.log(data.jobs);

                if(response.ok === true){

                    setvalues({...allvalues, jobsArr : data.jobs, isShowLoader : false, isShowJobs : true});

                }
                
                
            } catch (error) {
                console.log(error);
            }

        }

        onFetchAllJobs();



    },[allvalues.userInput, allvalues.empType, allvalues.salary])


    const onSubmitUserInput = (e) => {

        if( e.key === "Enter"){

            setvalues({...allvalues, userInput : e.target.value});


        }

    }

    const onSubmitEmpType = (isChecked, value) => {

            if( isChecked ){
                
                setvalues({...allvalues, empType : [...allvalues.empType, value]});

            }

            else {

                setvalues({...allvalues, empType : allvalues.empType.filter( e => e !== value)});

            }

    }

    const onSubmitSalary = (salaryValue) => {

            setvalues({...allvalues, salary : salaryValue});
            // console.log(salaryValue);

    }

    return (

        <>

                    <Header />

                    <div className='input-cont'>
                        <input onKeyUp={ onSubmitUserInput } type="text" placeholder='Search jobs'/>
                    </div>
        
            <div className='jobs-cont'>

                    <div className='filter-section'>
                                <FilterSection onSubmitEmpType = {onSubmitEmpType} onSubmitSalary = {onSubmitSalary}/>
                    </div>

                    
                    <div className='displayAllJobs-section'>

                                    {
                                        allvalues.jobsArr.length == 0 ?    <div className='jobs_not_found'>
                                                                                <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png" width="400px" className='jobsNotFoundImg'/>

                                                                                <h1>Jobs not Found</h1>
                                                                                <p style={{fontSize : "13px"}}>We could not find any jobs. Try other filters</p>
                                                                            </div>

                                        :  
                                                allvalues.isShowLoader ?    <div class="spinner-grow" role="status">
                                                                                <span class="sr-only">Loading...</span>
                                                                            </div>


                                                : allvalues.isShowJobs ?    <ul>
                                                                                {
                                                                                    allvalues.jobsArr.map( each => <DisplayAllJobs key={each.id} jobs = {each}/>)
                                                                                }
                                                                            </ul> 

                                                                                
                                                : null
                                    }

                    </div>

            </div>

            
        
        </>

    )
}


export default Jobs;