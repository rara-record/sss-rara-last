import { ReactNode, useEffect, useRef } from 'react'
import Section from '@shared/Section'
import styles from './MapView.module.scss'
import classNames from 'classnames/bind'
import { Location } from '@models/wedding'
import { Link } from 'react-router-dom'
import kakao_navigation from '/assets/images/kakao_navigation.svg'
import naver_navigation from '/assets/images/naver_navigation.webp'
import SubLayout from '@shared/SubLayout'
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack'
import { FaCar } from '@react-icons/all-files/fa/FaCar'
import { IoIosSubway } from '@react-icons/all-files/io/IoIosSubway'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

function FaBusSimple() {
  return null
}

const MapView = ({ location }: { location: Location }) => {
  const mapContainer = useRef(null)
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const market: any = new window.kakao.maps.Marker({
          position,
        })
        const map: any = new window.kakao.maps.Map(
          mapContainer.current,
          options,
        )

        market.setMap(map)
      })
    }
  }, [location])

  return (
    <SubLayout>
      <Section className={cx('map_container')}>
        <div className={cx('inner')}>
          <div className={cx('wrap-header')}>
            <Link to="/location" className={cx('location_back_button')}>
              <IoMdArrowRoundBack className={cx('animate_icon')} />
            </Link>
            <span className={cx('txt-subtitle')}>찾아오시는길을</span>
            <span className={cx('txt-subtitle')}>알려드려요</span>
          </div>
          <div className={cx('wrap-map')}>
            <div className={cx('map')} ref={mapContainer}></div>
          </div>

          <div className={cx('come-wrapper')}>
            <WayToCome
              label="지하철 이용시"
              list={location.waytocome.metro}
              icon={<IoIosSubway />}
            />
            <WayToCome
              label="버스 이용시"
              list={location.waytocome.bus}
              icon={<FaBusSimple />}
            />
            <WayToCome
              label="자가용 이용시"
              list={location.waytocome.car}
              icon={<FaCar />}
            />
          </div>

          <div className={cx('navigation')}>
            NAVIGATION_
            <a
              className={cx('btn-find-way')}
              href={location.kakao_link}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src={kakao_navigation} alt="kakao_navigation" />
                카카오내비
              </span>
            </a>
            <a
              className={cx('btn-find-way')}
              href={location.naver_link}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <img src={naver_navigation} alt="naver_navigation" />
                네이버 내비
              </span>
            </a>
          </div>
        </div>
      </Section>
    </SubLayout>
  )
}

function WayToCome({
  label,
  list,
  icon,
}: {
  label: ReactNode
  list: string[]
  icon: ReactNode
}) {
  return (
    <div className={cx('way-to-come')}>
      <div className={cx('txt-label')}>
        <div>{icon}</div>
        <span>{label}</span>
      </div>
      <ul>
        {list.map((waytocome, index) => (
          <li key={index}>{waytocome}</li>
        ))}
      </ul>
    </div>
  )
}

export default MapView
