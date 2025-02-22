import './app.css'
import Brief from './components/Brief'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

export function App() {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <Navbar />
      <Landing />
      <Brief />
    </div>
  )
}
