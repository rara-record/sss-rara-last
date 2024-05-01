import classNames from 'classnames/bind'
import Section from '@shared/Section'
import styles from './LocationInfo.module.scss'
import ImageFrame from '@shared/ImageFrame'
import Video from '@shared/Video'
import LocationImageSlide from '@components/sections/LocationImageSlide'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import DefaultLayout from '@shared/DefaultLayout'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown'
import { IoIosCopy } from '@react-icons/all-files/io/IoIosCopy'

const cx = classNames.bind(styles)

function LocationInfo({ hallImages }: { hallImages: string[] }) {
  return (
    <DefaultLayout>
      <Section className={cx('location')}>
        <ImageFrame />
        <Video assets={'location_video'} />

        <div className={cx('address_container')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.3 }} // 1초 딜레이 추가
            className={cx('header')}
          >
            <h1>LOCATION</h1>
            <p>보타닉파크웨딩 오시는길</p>
          </motion.div>
          <LocationImageSlide hallImages={hallImages} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.6 }}
            className={cx('address')}
          >
            서울시 강서구 마곡중앙5로 6 (서울시 강서구 마곡동 760)
            <CopyToClipboard
              text={`서울시 강서구 마곡중앙5로 6 (서울시 강서구 마곡동760 )`}
              onCopy={() => {
                alert('복사가 완료되었습니다.')
              }}
            >
              <button type="button">
                <IoIosCopy />
              </button>
            </CopyToClipboard>
          </motion.div>

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
