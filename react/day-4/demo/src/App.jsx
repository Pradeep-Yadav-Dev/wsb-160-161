
import './App.css'
import Footer from './commanComponents/Footer'
import Header from './commanComponents/Header'
import { IoLocationSharp } from "react-icons/io5";
import  firstImg from "../public/images/office-shifting.jpg"


function App() {


  return (
    <>
      <Header />

      <section>
        <h1> <IoLocationSharp /> OUR CORE SERVICES </h1>

        <div className='main'>

          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
       



        </div>
      </section>

      <Footer />
    </>
  )
}

export default App



const Cards = () => {
  return (
    <>
      <div className='box'>
        <img src={firstImg} />

        <h3>house shifting</h3>

        <p>
          We are one of the most trusted packers and movers Across Gujarat. We are happy to answer all of your questions with no obligations. Packshifts Packers & Movers offers highly reliable and swift goods packing services which are carried out by trained professionals. Packshifts offers custom designed packaging material for packing and the safe transportation of goods.
        </p>

        <button> Get Quote </button>
      </div>
    </>
  )
}


