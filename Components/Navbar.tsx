import { FunctionComponent, useEffect, useState } from "react"
import Link from "next/link";

import { useRouter } from "next/router";

// const NavItem:FunctionComponent<
// {
//     activeItem:string,
//     setActiveItem:Function,
//     name:String,
//     route:String
// }> = ({activeItem,name,route,setActiveItem})=>{
//     return(
        
//         activeItem !== name ? (
//          <Link href={route} passHref>
        
//             <span className="hover:text-green" onClick={()=>setActiveItem(name)}>{name}</span>
           
//             </Link>
//             ):null
        
//     )
// }

const NavItem: FunctionComponent<{
    activeItem: string
    setActiveItem: Function
    name: string
    route: string
 }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
       <Link href={route}>
          
             <span
                className='mx-2 cursor-pointer hover:border-b-4 hover:text-green'
                onClick={() => setActiveItem(name)}>
                {name}
             </span>
          
       </Link>
    ) : null
 }


const Navbar = () => {
    const [activeItem, setActiveItem]=useState<string>('');
    const {pathname}=useRouter();

    useEffect(()=>{
    if(pathname==="/") setActiveItem('About')
    if(pathname==="/project") setActiveItem('Projects')
    if(pathname==="/resume") setActiveItem('Resume')
    },[])
    return (
    
    <div className="flex justify-between px-5 py-3 my-3">
        <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">{activeItem}</span>
        <div className="flex space-x-5 text-lg ">
<NavItem activeItem={activeItem} setActiveItem={setActiveItem } name="About" route="/"/>
<NavItem activeItem={activeItem} setActiveItem={setActiveItem } name="Projects" route="/project"/>
<NavItem activeItem={activeItem} setActiveItem={setActiveItem } name="Resume" route="/resume"/>





        </div>
    </div>
  )
}

export default Navbar