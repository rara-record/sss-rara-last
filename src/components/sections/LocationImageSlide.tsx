import { useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './LocationImageSlide.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import generateImageUrl from '@/utils/generateImageUrl'

const cx = classNames.bind(styles)

const LocationImageSlide = ({ hallImages }: { hallImages: string[] }) => {
  const swiperRef = useRef(null)

  return (
    <article className={cx('content_inner')}>
      <div>
        <Swiper
          className={cx('my-swiper')}
          ref={swiperRef}
          spaceBetween={50} // 슬라이드 사이 간격
          slidesPerView={1} // 한 번에 보여줄 슬라이드 수
          autoplay={{
            delay: 2000, // 3초마다 슬라이드 전환
            disableOnInteraction: false, // 사용자가 슬라이드를 조작하더라도 자동 재생 유지
          }}
          speed={300}
          modules={[Autoplay]}
        >
          {hallImages.map((image, index) => (
            <SwiperSlide key={index}>
              <picture>
                <source
                  srcSet={generateImageUrl({
                    filename: image,
                    format: 'webp',
                    option: 'w_390,h_150,c_fill,q_auto',
                  })}
                  type="image/webp"
                />
                <img
                  src={generateImageUrl({
                    filename: image,
                    format: 'jpg',
                    option: 'w_390,h_150,c_fill,q_auto',
                  })}
                  width={390}
                  height={150}
                  alt="이미지"
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}

export default LocationImageSlide
