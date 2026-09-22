import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Categories from '../components/Categories'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='bg-indigo-50/50 pb-2'>
      <Hero/>
      <Stats/>
      <Categories/>
      </div>
     
    </div>
  )
}

export default Home