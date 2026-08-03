import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '@/routes/home'
import Concept1Page from '@/routes/concept-1'
import Concept2Page from '@/routes/concept-2'
import Concept3Page from '@/routes/concept-3'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/concept-3" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/concept-1" element={<Concept1Page />} />
        <Route path="/concept-2" element={<Concept2Page />} />
        <Route path="/concept-3" element={<Concept3Page />} />
      </Routes>
    </BrowserRouter>
  )
}
