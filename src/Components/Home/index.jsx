import Header from '../Header';
import { Link } from 'react-router-dom';
import './index.css'
import Footer from '../Footer';


const Home = () => {


    return (

        <>

            <Header />

            <div className='home-cont'>

                <div className='left-sec'>
                    <h1 style={{fontSize:"50px"}}>Find your Dream Job with NaukriSetu</h1>

                    <p style={{fontSize:"20px"}}>Connecting talent with the right opportunity - global outlook, Indian roots.</p>

                    <br /><br />

                    <div>
                        <Link to='/jobs'><button className='btn1'>Find Your Next Hire</button></Link>

                        <Link><button className='btn2'>Learn More &gt;</button></Link>
                    </div>
                    
                </div>
                <div className='right-sec'>
                        <div className='img-cont'>
                            
                        </div>
                </div>

            </div>

            <Footer/>


        
        </>

    )

}

export default Home;