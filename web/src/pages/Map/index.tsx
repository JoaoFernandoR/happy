import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaSmileBeam } from 'react-icons/fa'
import { FiPlus, FiArrowRight} from 'react-icons/fi'
// CSS
import './Map.scss'
// Components
import MapIcon from '../components/mapIcon'
import api from '../../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}


const OrphanMap = () => {

    const [data, setData] = useState<Orphanage[]>([])

    useEffect( () => {
            api.get('orphanages').then((result) => setData(result.data.data))
            .catch((err) => console.log(err.error))
    }, [])

    const renderMarkers = () => {
        return (
            data.map((item, index) => {
            return (
            <Marker position={[item.latitude, item.longitude]} icon={MapIcon} key={index}>
                <Popup closeButton={false} minWidth={180} maxWidth={180} className="map-popup">
                    {item.name}
                    <Link to={`/orphanages/${item.id}`}>
                        <FiArrowRight size={20} color="#FFF"/>
                    </Link>
                </Popup>
            </Marker>
            )
            })
        )
    }

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
        <Map center={[-22.0246281, -47.8939987]} zoom={17} className="mapa" attributionControl={false}>
            <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            {renderMarkers()}
        </Map>  
        <Link to='/orphanages/create' className="floatIcon">
            <FiPlus size="30px" color="rgba(0,0,0,0.4)" />
        </Link>
    </section>
    )
}

export default OrphanMap