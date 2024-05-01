import classNames from 'classnames/bind'
import styles from './Share.module.scss'
import { useEffect } from 'react'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import generateImageUrl from '@/utils/generateImageUrl'
import { RiKakaoTalkFill } from '@react-icons/all-files/ri/RiKakaoTalkFill'

declare global {
  interface Window {
    Kakao: any
  }
}

interface ShareProps {
  groomName: string
  brideName: string
  date: string
}

const cx = classNames.bind(styles)

function Share({ groomName, brideName, date }: ShareProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_APP_KAKAO_APP_KEY)
      }
    }
  }, [])

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `${groomName} ❤️ ${brideName} 결혼합니다.`,
        description: `${format(parseISO(date), 'M월 d일 eeee aaa h시', {
          locale: ko,
        })}`,
        imageUrl: generateImageUrl({
          filename: 'gallery_01',
          format: 'jpg',
        }),
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    })
  }

  return (
    <div className={cx('share')}>
      <button type="button" className={cx('button')} onClick={handleShareKakao} onTouchStart={handleShareKakao}>
        <RiKakaoTalkFill />
        <span>카카오톡 공유하기</span>
      </button>
    </div>
  )
}

export default Share
