
import './App.css'
import BlogsContainer from './components/BlogsContainer/BlogsContainer'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='container'>
        <BlogsContainer></BlogsContainer>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
