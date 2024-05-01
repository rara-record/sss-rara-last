import { Link } from 'react-router-dom'
import styles from './CircleButton.module.scss'
import classNames from 'classnames/bind'
import { ReactNode } from 'react'

const cx = classNames.bind(styles)

type CircleButtonProps = {
  children: ReactNode
  link: string
}

const CircleButton = ({ children, link }: CircleButtonProps) => {
  return (
    <button type="button" className={cx('trigger')}>
      <Link to={`${link}`}>
        <svg
          viewBox="0 0 100 100"
          width="100"
          height="100"
          className={cx('circle')}
        >
          <defs>
            <path
              id="circle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="17">
            <textPath xlinkHref="#circle">
              Will you marry me, Baby...Yes I do...
            </textPath>
          </text>
        </svg>
        <span className={cx('move')}>{children}</span>
      </Link>
    </button>
  )
}

export default CircleButton
