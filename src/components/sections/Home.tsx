import Section from '@shared/Section'
import styles from './Home.module.scss'
import Video from '@shared/Video'
import classNames from 'classnames/bind'
import ImageFrame from '@shared/ImageFrame'
import DefaultLayout from '@shared/DefaultLayout'

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <DefaultLayout>
      <Section className={cx('home')}>
        <ImageFrame />
        <Video assets={'main_video'} />
      </Section>
    </DefaultLayout>
  )
}

export default Home
