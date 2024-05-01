import classNames from 'classnames/bind'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)

function Video({ assets }: { assets: string }) {
  return (
    <video autoPlay muted playsInline className={cx('video_container')}>
      <source src={`/assets/video/${assets}.webm`} type="video/webm" />
      <source src={`/assets/video/${assets}.mp4`} type="video/mp4" />
    </video>
  )
}

export default Video
