import './App.css'
import Products from './components/Products'


function App() {
  
    return (
      <>
        <header className='bg-[#dbbf9b] p-8 font-bold text-xl mb-4' >FakeStore</header>
        <article>
          <Products />
        </article>
        <footer className='bg-[#dbbf9b] text-lg p-2 m-2 text-center rounded-xl'>
          <p>Késztette: Stolár-Németh Villő</p>
        </footer>
      </>
    )
}

export default App
