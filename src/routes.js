import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { VotingPage } from './pages/VotingPage'
import { BreedsPage } from './pages/BreedsPage'
import { GalleryPage } from './pages/GalleryPage'

import { LikePage } from './pages/reaction-pages/LikePage'
import { FavouritePage } from './pages/reaction-pages/FavouritePage'
import { DislikePage } from './pages/reaction-pages/DislikePage'

export const useRoutes = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/voting" element={<VotingPage />} />
      <Route exact path="/breeds" element={<BreedsPage />} />
      <Route exact path="/gallery" element={<GalleryPage />} />

      <Route exact path="/like" element={<LikePage />} />
      <Route exact path="/favourite" element={<FavouritePage />} />
      <Route exact path="/dislike" element={<DislikePage />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  )
}
