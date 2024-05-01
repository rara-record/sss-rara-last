import { lazy, Suspense, useEffect, useState } from 'react'
import { Wedding } from '@models/wedding'
import FullScreenMessage from '@components/shared/FullScrrenMessage'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@components/sections/Home'
import MapView from '@components/sections/MapView'
import Account from '@components/sections/Account'

const ImageGallery = lazy(() => import('@components/sections/ImageGallery'))
const LocationInfo = lazy(() => import('@components/sections/LocationInfo'))
const Contact = lazy(() => import('@components/sections/Contact'))
const ImageViewer = lazy(() => import('@components/sections/ImageViewer'))

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [longLoading, setLongLoading] = useState(false)
  const [error, setError] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    setLongLoading(false) // 초기화

    const timer = setTimeout(() => {
      setLongLoading(true) //
    }, 2000)

    fetch(import.meta.env.VITE_APP_SERVER_URL_KEY)
      .then((response) => {
        if (!response.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.error('에러발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
        clearTimeout(timer) // 로딩이 끝나면 타이머 취소
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" longLoading={longLoading} />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding == null) {
    return null
  }

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<FullScreenMessage type="loading" />}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<ImageGallery />} />
          <Route
            path="location"
            element={<LocationInfo hallImages={wedding.hallImages} />}
          />
          <Route
            path="contact"
            element={<Contact groom={wedding.groom} bride={wedding.bride} />}
          />
          <Route
            path="/gallery/image-viewer"
            element={<ImageViewer images={wedding.galleryImages} />}
          />
          <Route
            path="/location/map-viewer"
            element={<MapView location={wedding.location} />}
          />
          <Route
            path="/contact/account-viewer"
            element={
              <Account
                groom={wedding.groom}
                bride={wedding.bride}
                date={wedding.date}
              />
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default App
