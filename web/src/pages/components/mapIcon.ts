import Leaflet from 'leaflet'
import IconMap from '../../assets/happy.svg'

const MapIcon = Leaflet.icon({
    iconUrl: IconMap,
    iconAnchor: [25, 58],
    iconSize: [48, 58],
    popupAnchor: [135, 1]
})

export default MapIcon