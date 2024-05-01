import styles from './ImageFrame.module.scss'
import classNames from 'classnames/bind'
import generateImageUrl from '@/utils/generateImageUrl'

const cx = classNames.bind(styles)

const ImageFrame = () => {
  return (
    <picture className={cx('frame')}>
      <source
        srcSet={generateImageUrl({
          filename: 'img_bg_frame',
          format: 'webp',
          option: 'w_480,h_670,c_fill,q_auto',
        })}
        width={480}
        height={670}
        type="image/webp"
        className={cx('frame')}
      />

      <img
        src={generateImageUrl({
          filename: 'img_bg_frame',
          format: 'jpg',
          option: 'w_480,h_670,c_fill,q_auto',
        })}
        alt="frame image"
        loading="eager"
        width={480}
        height={670}
        className={cx('frame')}
      />
    </picture>
  )
}

export default ImageFrame
