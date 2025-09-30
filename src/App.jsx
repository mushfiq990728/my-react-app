import Country from './components/Countries/Countries'
import './App.css'
import { Suspense } from 'react'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all').then(res=>res.json())


function App() {
  return (
    <>
      <Suspense fallback={<p>nadir vai is loading...</p>}>
        <Country countriesPromise={countriesPromise}></Country>
      </Suspense>
    </>
  )
}

export default App