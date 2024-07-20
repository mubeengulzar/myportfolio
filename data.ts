import { EServices, IProject } from './type'
import {Skill} from './type'
import {RiComputerLine,RiServerLine,RiHandbagLine} from 'react-icons/ri'
import {AiOutlineApi,AiOutlineMobile,AiFillBug} from 'react-icons/ai'
import {BsCircleFill} from 'react-icons/bs'
//import image from './public/images.png'

import frontscreenImage from "./public/Images/frontscreen.jpeg";


export const services:EServices[]=[

    {
        Icon:RiComputerLine,
        title:"Front End Development",
        dec:'I can can Build a Beautifull and Responsive Design for using <b>HTML</b>,<b>CSS</b>,<b>React JS </b>,<b>Bootstrap</b>',
        
    },
    {
        Icon:RiServerLine,
        title:"Back  End Development",
        dec:'Handle Database ,Server ,Api using <b>Express</b>,<b>MongoDb</b>,<b>Sql</b> & other popular framework',
        
    },
    {
        Icon:AiOutlineApi,
        title:"API Development",
        dec:'I can Develop robust Rest API using  <b>Node JS</b>',
        
    },
    {
        Icon:AiOutlineMobile,
        title:"Mobile App Development",
        dec:'I can Develop a Mobile app for using <b>React Native</b>',
        
    },
    {
        Icon:RiHandbagLine,
        title:"Error Handle",
        dec:'I can troubleshoot of any error can handle',
        
    },
    {
        Icon:AiFillBug,
        title:"Application Testing ",
        dec:'Testing Application and finds bugs',
        
    },
];

export const languages: Skill[] = [
    {
      Icon: BsCircleFill,
      name: "HTML & CSS",
      level: "95",
    },
    {
      Icon: BsCircleFill,
      name: "Java Script",
      level: "85",
    },
    {
      Icon: BsCircleFill,
      name: "React JS & React Native",
      level: "85",
    },
    {
      Icon: BsCircleFill,
      name: "Node Js",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "Bootstrap",
      level: "96",
    },
    {
        Icon: BsCircleFill,
        name: "MongoDB & SQL",
        level: "90",
      },
      {
        Icon: BsCircleFill,
        name: "C# & .Net",
        level: "80",
      },
      {
        Icon: BsCircleFill,
        name: "Python",
        level: "70",
      },
  ];
  export const tools: Skill[] = [
    {
      Icon: BsCircleFill,
      name: "VS Code",
      level: "90",
    },
    {
        Icon: BsCircleFill,
        name: "Visual Studio",
        level: "90",
      },
    {
      Icon: BsCircleFill,
      name: "PostMAn",
      level: "80",
    },
    {
      Icon: BsCircleFill,
      name: "VPS Server",
      level: "60",
    },
    {
      Icon: BsCircleFill,
      name: "GitHub & Git",
      level: "75",
    },
  ];

  export const projects:IProject[]=[
{
id:1,
name:"Rollin's Eat",
dec:"this is admin dashboard",
image_path:"https://appsrv1-147a1.kxcdn.com/appseed-v2/media/products/star-admin/top.png",
deploy:"#",
github:"#",
category:["Express"," Mongo ","Node js"],
key_tech:["express","bootstrap","node js", "Mongodb"]
},
{
  id:2,
  name:"User Information",
  dec:"this is project is get user information",
  image_path:"https://media.licdn.com/dms/image/D4D22AQFTLjTp3khg6w/feedshare-shrink_800/0/1720969913690?e=1723680000&v=beta&t=FhI5kdpx5KNdz-bRJVQVW0qhlQNPNLpxdKboG_HNzA8",
  deploy:"#",
  github:"https://github.com/mubeengulzar/ejs",
  category:[" Mongo ","Node js"],
  key_tech:["EJS","Bootstrap","node js", "Mongodb"],
  },
  {
    id:3,
    name:"Crypto Visualization",
    dec:"this is project is get user information",
    image_path:"https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
    deploy:"https://cryptoapp-pied.vercel.app/",
    github:"https://github.com/mubeengulzar/CryptoWeb",
    category:["React Js"],
    key_tech:["Bootstrap","Hooks","Charts"],
    },
    {
      id:4,
      name:"Mobile App Rollin's Eat",
      dec:"this is Mobile app for user can order for menu's",
      image_path:"https://cdn.dribbble.com/users/10743/screenshots/1465637/shot.png?resize=400x300&vertical=center",
      deploy:"#",
      github:"#",
      category:["React Native"],
      key_tech:["React Native","Hooks"],
      },

  ];