import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import BookList from './pages/BookList'
import BookDetails from './pages/BookDetails'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/booklist' element={<BookList/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/bookdetails/:bookId' element={<BookDetails/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
