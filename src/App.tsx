import { lazy, Suspense, useEffect, useState } from 'react'
import FullScreenMessage from '@components/shared/FullScrrenMessage'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@components/sections/Home'
import ImageGallery from '@components/sections/ImageGallery'
import LocationInfo from '@components/sections/LocationInfo'
import Contact from '@components/sections/Contact'

const ImageViewer = lazy(() => import('@components/sections/ImageViewer'))
const MapView = lazy(() => import('@components/sections/MapView'))
const Account = lazy(() => import('@components/sections/Account'))
function App() {
  const [loading, setLoading] = useState(true)

  const location = useLocation()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<FullScreenMessage type="loading" />}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<ImageGallery />} />
          <Route path="location" element={<LocationInfo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/gallery/image-viewer" element={<ImageViewer />} />
          <Route path="/location/map-viewer" element={<MapView />} />
          <Route path="/contact/account-viewer" element={<Account />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default App
