import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const SignUp = lazy(() => import('./pages/SignUp'))
// const SignIn = lazy(() => import('./pages/SignIn'))

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
    </div>
  )
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/login" element={<SignIn />} /> */}
      </Routes>
    </Suspense>
  )
}

export default App