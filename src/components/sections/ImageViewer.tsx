import classNames from 'classnames/bind'
import styles from './ImageViewer.module.scss'
import { motion } from 'framer-motion'
import CircleButton from '@shared/CircleButton'
import SubLayout from '@shared/SubLayout'
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'

const cx = classNames.bind(styles)

const galleryImages = [
  '/assets/images/gallery_01.jpg',
  '/assets/images/gallery_02.jpg',
  '/assets/images/gallery_03.jpg',
  '/assets/images/gallery_04.jpg',
  '/assets/images/gallery_05.jpg',
  '/assets/images/gallery_06.jpg',
]

function ImageViewer() {
  return (
    <SubLayout>
      <article className={cx('content')}>
        <div className={cx('content_inner')}>
          {galleryImages.map((_, index) => (
            <motion.section
              className={cx('hero')}
              key={index}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.5 }}
            >
              <div className={cx('hero-inner')} id={`section-${index}`}>
                <figure />
              </div>
            </motion.section>
          ))}
        </div>
        <div className={cx('back_button')}>
          <CircleButton link="/gallery">
            <IoIosArrowBack />
          </CircleButton>
        </div>
      </article>
    </SubLayout>
  )
}

export default ImageViewer
