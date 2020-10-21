import React from 'react'
import { Link } from 'react-router-dom'
import { FaSmileBeam } from 'react-icons/fa'
import { FiPlus} from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';
// CSS
import './Map.scss'
import 'leaflet/dist/leaflet.css'


const OrphanMap = () => {
    return (
    <section id="map">
        <div className="information">
            <FaSmileBeam size="55px" className="icon"/>
            <h1>Escolha um orfanato no mapa</h1>
            <p>Muitas crianças estão esperando a sua visita :)</p>
            <div className='city'>
                <strong> São Carlos </strong>
                <span> São Paulo </span>
            </div>
        </div>
        <Map center={[-25.0936196, -50.135245]} zoom={15} className="mapa" attributionControl={false}>
            <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
        </Map>  
        <Link to=''>
            <FiPlus size="30px" color="rgba(0,0,0,0.4)"/>
        </Link>
    </section>
    )
}

export default OrphanMap