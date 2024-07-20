import { FunctionComponent } from 'react'
import { EServices } from '../type'
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: EServices }> = ({
   service: { Icon, title, dec },
}) => {
   //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
   function createMarkup() {
      return {
         __html:dec,
      }
   }

   return (
      <div className='flex items-center p-2 space-x-4 '>
         <Icon className='w-12 h-12 text-green' />
         <div className=''>
            <h6 className='font-bold'>{title}</h6>
            <p dangerouslySetInnerHTML={createMarkup()} />
         </div>
      </div>
   )
}

export default ServiceCard
