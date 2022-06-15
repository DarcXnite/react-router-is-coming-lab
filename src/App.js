import gameOfThrones from './gameOfThrones'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'

export default function App() {
  console.log(gameOfThrones)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/houses'
            element={<Houses gameOfThrones={gameOfThrones} />}
          />
          <Route
            path='/houses/:id'
            element={<House gameOfThrones={gameOfThrones} />}
          />
          <Route
            path='/houses/:houseId/members/:memberId'
            element={<Member gameOfThrones={gameOfThrones} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
