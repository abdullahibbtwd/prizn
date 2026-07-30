import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Concept1Page from '@/routes/concept-1'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/concept-1" replace />} />
        <Route path="/concept-1" element={<Concept1Page />} />
      </Routes>
    </BrowserRouter>
  )
}
