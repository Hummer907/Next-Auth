'use client';

import {AnimatePresence,motion} from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children }) => {
    const pathName = usePathname();
  return (
    <AnimatePresence>

        <div key={pathName}>
            <motion.div animate={{opacity:1}}  className="h-screen w-screen fixed bg-primary top-0 pointer-events-none">
                {children}
            </motion.div>
          
        </div>
      
    </AnimatePresence>
  )
}

export default PageTransition