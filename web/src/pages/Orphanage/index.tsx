import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import api from "../../services/api";
import { useParams } from 'react-router-dom'
// CSS
import './Orphanage.scss';
// Components
import Sidebar from '../components/Sidebar'
import MapIcon from '../components/mapIcon'

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  about: string;
  images: string[];
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {

  const params = useParams<OrphanageParams>()
  const [data, setData] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

    useEffect( () => {
      api.get(`orphanages/${params.id}`).then((result) => setData(result.data.data))
      .catch((err) => console.log(err.error))
    }, [params.id])

    if(!data) {
      return <p> carregando </p>
    }

    const renderImages = () => {
		return (
		data.images.map((image, index) => {
			return (
			<button className={activeImageIndex === index ? 'active' : ''} 
			type="button" 
			key={index}
			onClick={() => {
				setActiveImageIndex(index)
			}}>
				<img src={image} alt="Lar das meninas" />
			</button>
			)
		})
		)
	}

  return (
    <section id="orphanage">
      <Sidebar />
      <main>
        <div className="orphanage-details">
          <img src={data.images[activeImageIndex]} alt={data.name} />

          <div className="images">
            {renderImages()}
          </div>
          
          <div className="orphanage-details-content">
            <h1>{data.name}</h1>
            <p>{data.about}</p>

            <div className="map-container">
              <Map 
                center={[data.latitude,data.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={MapIcon} position={[-27.2092052,-49.6401092]} />
              </Map>

              <footer>
				<a target="_blank" 
					href={`https://www.google.com/maps/dir/?api=1&destination=${data.latitude},${data.longitude}`}
					rel="noopener noreferrer">
					Ver rotas no Google Maps
				</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{data.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {data.opening_hours}
              </div>
              { (data.open_on_weekends) ? 
              <div className="open-on-weekends">
                <FiInfo size={32} color="#39CC83" />
                Atendemos <br />
                fim de semana
              </div> :
              <div className="open-on-weekends dont-open">
                <FiInfo size={32} color="#FF669D" />
                Não Atendemos <br />
                fim de semana
              </div> }
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}