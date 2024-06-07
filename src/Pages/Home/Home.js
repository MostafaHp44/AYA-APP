import React , {useState} from "react"
import './Home.css'
import b1 from '../../Assest/B1.png'
import NavBar from "../../Shared-Component/NavBar/NavBar"
import cat1 from '../../Assest/cat/cat1.png'
import cat2 from '../../Assest/cat/cat2.png'
import cat3 from '../../Assest/cat/cat3.png'

const Home =()=>{
return(
    <div className="Main-Home">

        <NavBar/>

        <div className="Home-Part">

            <div className="First-Part-Home">

                <h1>Learn Arabic Courses Online</h1>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                <button className="Tryit">Try Free Class</button>

                

            </div>

            <div className="Second-Part-Home">
            <img src={b1} alt="aya"></img>
            </div>
        </div>

        <div className="Category-Part">

            <div className="First-Part-Category">

                <h1>Categories</h1>

                <p>Learning Arabic online is easy and fun with Alif Aya.</p>
                
            </div>

            <div className="Second-Part-Category">

            <div className="Main-CategoryCard">

               <div className="CategoryName"><span>Arabic</span></div>
               <div className="CategoryPic"><img src={cat1} alt="cat1"></img></div>
               <div className="NumberCourses"><span>2 Courses</span></div>
            </div>

            <div className="Main-CategoryCard">

               <div className="CategoryName"><span>Quran</span></div>
               <div className="CategoryPic"><img src={cat2} alt="cat1"></img></div>
               <div className="NumberCourses"><span>2 Courses</span></div>
            </div>

            <div className="Main-CategoryCard">

               <div className="CategoryName"><span>Eslamic</span></div>
               <div className="CategoryPic"><img src={cat3} alt="cat1"></img></div>
               <div className="NumberCourses"><span>2 Courses</span></div>
               
            </div>


            </div>

        </div>



    </div>
)
}

export default Home