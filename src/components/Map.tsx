'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Country } from '@/types/types';
const position = [51.505, -0.09]
export default function Map({ country }: { country: Country }) {
    return (
        <MapContainer style={{ height: '300px' }} center={[country.latitude, country.longitude]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>)
}