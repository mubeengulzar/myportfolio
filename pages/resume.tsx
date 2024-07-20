import Bar from '../Components/Bar'
import {languages,tools} from '../data'
import { motion} from 'framer-motion'
import {FadeUp} from '../animation'

const resume = () => {

  const variants={
    initial:{
      opacity:0,
      y:60
    },
    animate:{
      opacity:1,
      y:0
    }
  }

  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={FadeUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Bachelor's Computer Science
            </h5>
            <p className="font-semibold">Karachi Institude Of Economics & Technology (2020-2024)</p>
            <p className="my-3">
              I Complete my study BS in Computer Science
              from Academy of Technology
            </p>
          </div>
        </motion.div>
        <motion.div variants={FadeUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front End Developer Internship.</h5>
            <p className="font-semibold">Jeeni Tech</p>
            <p className="my-3">In my previous role, I worked as a Front End Developer on a live project, where I also contributed to back-end development and error handling. This project was based on .NET technology</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default resume