//import image from '../public/mubeen.jpeg'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useTheme } from "next-themes";

const Sidebar = () => {
const {theme,setTheme}=useTheme();

const changeTheme =()=>{
  setTheme(theme==="light"?"dark": "light");

}

  return (
    <div>
        <img src="https://media.licdn.com/dms/image/D4D03AQHUxQ7MMNSQCA/profile-displayphoto-shrink_400_400/0/1704272358505?e=1724889600&v=beta&t=B6QpNEe1shhPB86_n3LDe-DTlXLFK16UwjN5whsl7KE" alt="image" className="w-32 h-32 mx-auto rounded-full"/>
        <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">Muhammad <span className="text-green-700">Mubeen</span>  </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">MERN Stack Developer</p>
        <a href="/Muhammad_Mubeen_CV.pdf" className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" download='Muhammad_Mubeen_CV.pdf'>Download Resume</a>
        {/* social icons */}
        <div className="flex items-center justify-center w-9/12 mx-auto my-5 text-green-700 md:w-full">
            <a href="https://github.com/mubeengulzar" ><FiGithub className='w-8 h-8 cursor-pointer'/></a>
            <a href="https://www.linkedin.com/in/muhammad-mubeen-3669041a7/" ><FaLinkedinIn className='w-8 h-8 cursor-pointer'/></a>
        </div>
        
        

        {/* address */}
        <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200"   style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
            <div className="flex items-center justify-center space-x-2 ">
                <CiLocationOn/><span>Karachi,Pakistan</span>
            </div>
            <p className="my-2">mubeengulzar756@gmail.com</p>
            <p className="my-2">+92 3272492947</p>

        </div>
        <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={()=>window.open('mailto:mubeengulzar756@gmail.com')}>Email</button>
        <button  onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Change Theme </button>


    </div>
  )
}

export default Sidebar