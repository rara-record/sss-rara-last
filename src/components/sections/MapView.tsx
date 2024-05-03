import { ReactNode, useEffect, useRef } from 'react'
import Section from '@shared/Section'
import styles from './MapView.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import kakao_navigation from '/assets/images/kakao_navigation.svg'
import naver_navigation from '/assets/images/naver_navigation.webp'
import SubLayout from '@shared/SubLayout'
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack'
import { FaCar } from '@react-icons/all-files/fa/FaCar'
import { FaBus } from '@react-icons/all-files/fa/FaBus'
import { IoIosSubway } from '@react-icons/all-files/io/IoIosSubway'
import { IoIosCopy } from '@react-icons/all-files/io/IoIosCopy'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

const location = {
  lat: 37.5672668,
  lng: 126.8269593,
  name: '보타닉파크웨딩 오키드홀',
  address:
    '서울시 강서구 마곡중앙5로 6 보타닉 푸르지오시티 로비층 보타닉파크 웨딩',
  kakao_link:
    'https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C461732%2C1129923&rt1=&rt2=%EB%B3%B4%ED%83%80%EB%8B%89%ED%8C%8C%ED%81%AC%EC%9B%A8%EB%94%A9&rtIds=%2C1089036510&rtTypes=%2CPLACE',
  naver_link: 'https://map.naver.com/p/entry/place/94306527?c=15.00,0,0,0,dh',
  waytocome: {
    metro: ['9호선/공항철도 - 마곡나루역 1, 2번 출구방면 진입통로 연결'],
    bus: ['마곡나루역 정류장 하차'],
    car: ['주차장 안내: 지하 3층~지하 8층 주차 가능'],
  },
}

const MapView = () => {
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
  }, [])

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

          <div className={cx('address')}>
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
              icon={<FaBus />}
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
