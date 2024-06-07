import React , {useState} from "react"
import logoaya from '../../Assest/Logo/AYA-LOGO.png'
import './NavBar.css'
import worldlang from '../../Assest/world.png'


const NavBar =()=>{

        const [imageVisible, setImageVisible] = useState(true);
      
        const handleLanguageChange = () => {
          setImageVisible(false);
        };

        const handleImageClick = () => {
            setImageVisible(false);
          };
        
    

return(
    <div className="Main-NavBar">

        <div className="NavBar-Content">

           <div className="Logo-Aya">
            <img src={logoaya} alt="ayalogo" className="logo"></img>
            <p className="StartFromA">Start From A</p>
           </div>

           <ul className="Category-Aya">
            <li>Home</li>
            <li>Teacher</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>About us </li>
            <li>Contact Us</li>

           </ul>

           <div className="Procces-Aya">

            <div className="Enrty">
                <div className="Teach-at-alef-aya">
                    <span>Teach at alef aya</span>
                </div>
                <button className="Login">
                    Login
               </button>
            </div>

            <div className="MainLanguage">
            {imageVisible ? (
        <img
          id="language-img"
          src={worldlang}
          alt="aya-lng"
          style={{ width: '36px', height: '36px', cursor: 'pointer' }}
          onClick={handleImageClick}
        />
      ) : (
        <select name="" id="languages" onChange={handleLanguageChange}>
          <option value="عربي">عربي</option>
          <option value="English">English</option>
        </select>
      )}            
            </div>
           </div>


        </div>
        
    </div>
)
}
export default NavBar