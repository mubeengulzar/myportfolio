import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import {motion} from "framer-motion"
import { FadeUp,stagger } from "../animation";

//import Image from "next/image";

const ProjectCard: FunctionComponent<{

  project: IProject;
  showDetail:null|number;
  setShowDetail:(id:null | number)=>void;
}> = ({
  project: {
    name,
    image_path,
    category,
    deploy,
    dec,
    github,
    key_tech,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  
 

  return (
    <div>
      {/* <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      /> */}
        <img
        src={image_path}
        //alt="image"
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        style={{
          width: "300px",
          height: "150px",
          objectFit: "cover",
        }}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail===id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            {/* <img src={image_path} alt={name} /> */}

            {/* <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            /> */}
             <img
              src={image_path}
             // alt="image"
              style={{
                width: "300px",
                height: "150px",
                objectFit: "cover",
              }}
            />
            <motion.div variants={FadeUp} className="flex justify-center my-4 space-x-3 border-4 border-gray-100">
              <a
                href={github}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deploy}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2 variants={FadeUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={FadeUp} className="mb-3 font-medium">{dec}</motion.h3>

            <motion.div variants={FadeUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
