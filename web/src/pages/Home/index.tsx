import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCaretRightFill} from 'react-icons/bs'
import { FaSmileBeam } from 'react-icons/fa'

// CSS
import './Home.scss'

const Home = () => {
    return (
    <section id="home">
        <div className="container_home">
            <div className="logo_home">
                <FaSmileBeam size="55px" className="icon"/>
                <span> Happy </span>
            </div>
            <h1>Leve felicidade para o mundo</h1>
            <p> Visite orfanatos e mude o dia de muitas crianças</p>
            <div className='city'>
                <strong> São Carlos </strong>
                <span> São Paulo </span>
            </div>
            <Link to="/map" className="floatIcon">
                <BsFillCaretRightFill size="30px" color="rgba(0,0,0,0.4)"/>
            </Link>
        </div>
    </section>
    )
}

export default Home