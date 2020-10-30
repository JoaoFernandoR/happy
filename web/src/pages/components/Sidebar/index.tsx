import React from 'react'
import mapMarkerImg from '../../../assets/happy.svg';
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from 'react-router-dom';

// CSS
import './Sidebar.scss'

const Sidebar = () => {

  const { goBack } = useHistory();

  return (
  <section id="sidebar">
      <img src={mapMarkerImg} alt="Happy" />
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
  </section>
  )
  
}

export default Sidebar