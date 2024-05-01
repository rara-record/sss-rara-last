import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { Link, useLocation } from 'react-router-dom'

const cx = classNames.bind(styles)

const navItems = [
  { path: '/', label: '초대장' },
  { path: '/gallery', label: '사진첩' },
  { path: '/location', label: '오시는길' },
  { path: '/contact', label: '연락처' },
]

function NavBar() {
  const { pathname } = useLocation()

  return (
    <ul className={cx('nav_list')}>
      {navItems.map(({ path, label }) => (
        <li
          key={path}
          className={cx(['nav-item', pathname === path ? 'active' : ''])}
        >
          <Link to={path}>
            <span className={cx('label')}>{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavBar
