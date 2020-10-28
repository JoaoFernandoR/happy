import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet'
// CSS
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import { FaSmileBeam } from 'react-icons/fa'
import { FiPlus, FiArrowRight} from 'react-icons/fi'
import IconMap from '../../assets/heart.png'

const mapIcon = Leaflet.icon({
    iconUrl: IconMap,
    iconAnchor: [29, 68],
    iconSize: [45, 45],
    popupAnchor: [135, 1]
})

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
        <Map center={[-25.0929328, -50.1351359]} zoom={17} className="mapa" attributionControl={false}>
            <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            <Marker position={[-25.0929036, -50.1352693]} icon={mapIcon}>
                <Popup closeButton={false} minWidth={180} maxWidth={180} className="map-popup">
                    Aonde mora meu mozão
                    {/* <Link to="/">
                        <FiArrowRight size={20} color="#FFF"/>
                    </Link> */}
                </Popup>
            </Marker>
        </Map>  
        <Link to='/' className="floatIcon">
            <FiPlus size="30px" color="rgba(0,0,0,0.4)" />
        </Link>
    </section>
    )
}

export default OrphanMap