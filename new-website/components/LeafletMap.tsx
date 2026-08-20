'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Leaflet default icon paths break under Next.js bundling — replace with CDN copies
const fixLeafletIcons = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

const OFFICE = { lat: 39.0106, lng: -77.4002 }
const ADDRESS = '43813 Beaver Meadow Rd #100, Sterling, VA 20166'

export default function LeafletMap() {
  useEffect(() => {
    fixLeafletIcons()
  }, [])

  return (
    <div
      className="overflow-hidden border border-green/10"
      style={{ borderRadius: '16px', height: '400px', width: '100%', isolation: 'isolate' }}
    >
      <MapContainer
        center={[OFFICE.lat, OFFICE.lng]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[OFFICE.lat, OFFICE.lng]}>
          <Popup>
            <strong>Sunrise Landscape</strong>
            <br />
            {ADDRESS}
            <br />
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ff6400', fontSize: '0.8rem' }}
            >
              Get directions
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
