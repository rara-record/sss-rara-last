import NavBar from '@components/sections/Navbar'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import { ReactNode } from 'react'
import { IoMdHeart } from '@react-icons/all-files/io/IoMdHeart'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={cx('main_container')}>
        <div className={cx('inner')}>
          <NavBar />
          <div className={cx('contents')}>{children}</div>
        </div>
      </div>
      <footer className={cx('footer')}>
        © Copyright. 송승수 부인 <IoMdHeart />
      </footer>
    </>
  )
}

export default DefaultLayout
