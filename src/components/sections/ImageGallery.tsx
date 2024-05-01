import classNames from 'classnames/bind'
import Section from '@shared/Section'
import ImageFrame from '@shared/ImageFrame'
import styles from './ImageGallery.module.scss'
import Video from '@shared/Video'
import CircleButton from '@shared/CircleButton'

import DefaultLayout from '@shared/DefaultLayout'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown'

const cx = classNames.bind(styles)

function ImageGallery() {
  return (
    <DefaultLayout>
      <Section className={cx('image_gallery')}>
        <ImageFrame />
        <Video assets={'invitation_video'} />
        <div className={cx('image_viewer_trigger')}>
          <CircleButton link="/gallery/image-viewer">
            <IoIosArrowDown />
          </CircleButton>
        </div>
      </Section>
    </DefaultLayout>
  )
}

export default ImageGallery
