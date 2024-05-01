import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const SubLayout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

export default SubLayout
