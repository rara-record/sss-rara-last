import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './LocationInfo.module.scss'
import ImageFrame from '@shared/ImageFrame'
import Video from '@shared/Video'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DefaultLayout from '@shared/DefaultLayout'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown'

const cx = classNames.bind(styles)

function LocationInfo() {
  return (
    <DefaultLayout>
      <Section className={cx('location')}>
        <ImageFrame />
        <Video assets={'location_video'} />

        <div className={cx('address_container')}>
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.9 }}
            className={cx('map_trigger_button')}
          >
            <Link to="/location/map-viewer">
              빠른길찾기
              <IoIosArrowDown className={cx('animate_icon')} />
            </Link>
          </motion.button>
        </div>
      </Section>
    </DefaultLayout>
  )
}

export default LocationInfo
