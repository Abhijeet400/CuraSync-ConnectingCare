// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
// import L from 'leaflet';

// const hospitals = [
//     { lat: 28.567431787649532, lng: 77.21036695944271, name: 'AIIMS, Delhi' },
//     { lat: 28.56126783997887, lng: 77.28203735944999, name: 'Fortis Escorts Heart Institute, Delhi' },
//     { lat: 28.527737500003138, lng: 77.21240229012805, name: 'Max Super Speciality Hospital, Delhi' },
//     { lat: 28.54157317514584, lng: 77.28358297478506, name: 'Indraprastha Apollo Hospital, Delhi' },
//     { lat: 28.64353877167897, lng: 77.18014497664132, name: 'BLK-Max Super Speciality, Delhi' },
//     { lat: 28.63871681853576, lng: 77.18956313272815, name: 'Sir Ganga Ram Hospital, Delhi' },
//     { lat: 28.716598626069878, lng: 77.11159075205362, name: 'Rajiv Gandhi Cancer Institute & Research Centre, Delhi' },
//     { lat: 28.5660124736573, lng: 77.2038099848323, name: 'Safdarjung Hospital, Delhi' },
//     { lat: 28.593180284621738, lng: 77.18175233616199, name: 'Primus Super Speciality Hospital, Delhi' },
//     { lat: 28.5662902209946, lng: 77.23539788986326, name: 'Moolchand Medcity, Delhi' },
//     { lat: 28.61793027063482, lng: 77.23714688266424, name: 'Ganga Ram Hospital, Delhi' },
//     { lat: 28.606726508930104, lng: 77.20380408458621, name: 'RML Hospital, Delhi' },
//     { lat: 28.52793712010468, lng: 77.20823212987866, name: 'Delhi Heart & Lung Institute, Delhi' },
//     { lat: 28.60989277169214, lng: 77.20427892274332, name: 'Max Super Specialty Hospital, Delhi' },
//     { lat: 28.61379907834383, lng: 77.19309753520857, name: 'Venkateshwar Hospital, Delhi' },
//     { lat: 28.61635104745372, lng: 77.18587040479935, name: 'Kailash Hospital, Delhi' },
//     { lat: 28.56822964473448, lng: 77.21338311428853, name: 'Patanjali Ayurveda Hospital, Delhi' },
//     { lat: 28.597855329355515, lng: 77.20654985524855, name: 'Gurunanak Hospital, Delhi' },
//     { lat: 28.620612581497556, lng: 77.21064669315302, name: 'Batra Hospital, Delhi' },
//     { lat: 28.55920974112069, lng: 77.18626252739127, name: 'Bhagwan Mahavir Hospital, Delhi' },
//     { lat: 28.62207891293942, lng: 77.20877935247766, name: 'Apollo Cradle, Delhi' },
//     { lat: 28.622379556093893, lng: 77.21583662694952, name: 'Sanjeevani Hospital, Delhi' },
//     { lat: 28.56011895854714, lng: 77.18069148192484, name: 'HealthCare Hospital, Delhi' },
//     { lat: 28.613731779179637, lng: 77.2323278595281, name: 'Fortis La Femme, Delhi' },
//     { lat: 28.570108048341196, lng: 77.23262347784245, name: 'Metro Hospital & Heart Institute, Delhi' },
//     { lat: 28.621278313121072, lng: 77.2064059491389, name: 'Aakash Healthcare, Delhi' },
//     { lat: 28.60074012561307, lng: 77.22113683854609, name: 'Anand Hospital, Delhi' },
//     { lat: 28.611727256859178, lng: 77.22902871186088, name: 'Sahara Hospital, Delhi' },
//     { lat: 28.567679050178035, lng: 77.21134121732959, name: 'Narayana Super Speciality Hospital, Delhi' },
//     { lat: 28.601830077374838, lng: 77.21782758421132, name: 'Delhi Medical Centre, Delhi' },
//     { lat: 28.612571214143056, lng: 77.2072735187061, name: 'Max Hospital, Delhi' },
//     { lat: 28.57588185324657, lng: 77.22790403253553, name: 'HCL Healthcare, Delhi' },
//     { lat: 28.615187919345236, lng: 77.19209543416853, name: 'Buddha Hospital, Delhi' },
//     { lat: 28.615607207591045, lng: 77.22366706003404, name: 'Shanti Mukand Hospital, Delhi' },
//     { lat: 28.58802386037604, lng: 77.20807791823352, name: 'Tata Memorial Hospital, Delhi' },
// ];


// const Map = () => {
//     return (
//         <div style={{ height: '400px', width: 'auto' }} className='mx-4 my-5'>
//             <MapContainer center={[28.6139, 77.2090]} zoom={10} style={{ height: '100%', width: '100%' }}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {hospitals.map((hospital, index) => (
//                     <Marker 
//                         key={index}
//                         position={[hospital.lat, hospital.lng]}
//                         icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png' })}
//                     >
//                         <Popup>{hospital.name}</Popup>
//                     </Marker>
//                 ))}
//             </MapContainer>
//         </div>
//     );
// };

// export default Map;

import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { debounce } from 'lodash';

const hospitals = [
    { lat: 28.567431787649532, lng: 77.21036695944271, name: 'AIIMS, Delhi' },
    { lat: 28.56126783997887, lng: 77.28203735944999, name: 'Fortis Escorts Heart Institute, Delhi' },
    { lat: 28.527737500003138, lng: 77.21240229012805, name: 'Max Super Speciality Hospital, Delhi' },
    { lat: 28.54157317514584, lng: 77.28358297478506, name: 'Indraprastha Apollo Hospital, Delhi' },
    { lat: 28.64353877167897, lng: 77.18014497664132, name: 'BLK-Max Super Speciality, Delhi' },
    { lat: 28.63871681853576, lng: 77.18956313272815, name: 'Sir Ganga Ram Hospital, Delhi' },
    { lat: 28.716598626069878, lng: 77.11159075205362, name: 'Rajiv Gandhi Cancer Institute & Research Centre, Delhi' },
    { lat: 28.5660124736573, lng: 77.2038099848323, name: 'Safdarjung Hospital, Delhi' },
    { lat: 28.593180284621738, lng: 77.18175233616199, name: 'Primus Super Speciality Hospital, Delhi' },
    { lat: 28.5662902209946, lng: 77.23539788986326, name: 'Moolchand Medcity, Delhi' },
    { lat: 28.61793027063482, lng: 77.23714688266424, name: 'Ganga Ram Hospital, Delhi' },
    { lat: 28.606726508930104, lng: 77.20380408458621, name: 'RML Hospital, Delhi' },
    { lat: 28.52793712010468, lng: 77.20823212987866, name: 'Delhi Heart & Lung Institute, Delhi' },
    { lat: 28.60989277169214, lng: 77.20427892274332, name: 'Max Super Specialty Hospital, Delhi' },
    { lat: 28.61379907834383, lng: 77.19309753520857, name: 'Venkateshwar Hospital, Delhi' },
    { lat: 28.61635104745372, lng: 77.18587040479935, name: 'Kailash Hospital, Delhi' },
    { lat: 28.56822964473448, lng: 77.21338311428853, name: 'Patanjali Ayurveda Hospital, Delhi' },
    { lat: 28.597855329355515, lng: 77.20654985524855, name: 'Gurunanak Hospital, Delhi' },
    { lat: 28.620612581497556, lng: 77.21064669315302, name: 'Batra Hospital, Delhi' },
    { lat: 28.55920974112069, lng: 77.18626252739127, name: 'Bhagwan Mahavir Hospital, Delhi' },
    { lat: 28.62207891293942, lng: 77.20877935247766, name: 'Apollo Cradle, Delhi' },
    { lat: 28.622379556093893, lng: 77.21583662694952, name: 'Sanjeevani Hospital, Delhi' },
    { lat: 28.56011895854714, lng: 77.18069148192484, name: 'HealthCare Hospital, Delhi' },
    { lat: 28.613731779179637, lng: 77.2323278595281, name: 'Fortis La Femme, Delhi' },
    { lat: 28.570108048341196, lng: 77.23262347784245, name: 'Metro Hospital & Heart Institute, Delhi' },
    { lat: 28.621278313121072, lng: 77.2064059491389, name: 'Aakash Healthcare, Delhi' },
    { lat: 28.60074012561307, lng: 77.22113683854609, name: 'Anand Hospital, Delhi' },
    { lat: 28.611727256859178, lng: 77.22902871186088, name: 'Sahara Hospital, Delhi' },
    { lat: 28.567679050178035, lng: 77.21134121732959, name: 'Narayana Super Speciality Hospital, Delhi' },
    { lat: 28.601830077374838, lng: 77.21782758421132, name: 'Delhi Medical Centre, Delhi' },
    { lat: 28.612571214143056, lng: 77.2072735187061, name: 'Max Hospital, Delhi' },
    { lat: 28.57588185324657, lng: 77.22790403253553, name: 'HCL Healthcare, Delhi' },
    { lat: 28.615187919345236, lng: 77.19209543416853, name: 'Buddha Hospital, Delhi' },
    { lat: 28.615607207591045, lng: 77.22366706003404, name: 'Shanti Mukand Hospital, Delhi' },
    { lat: 28.58802386037604, lng: 77.20807791823352, name: 'Tata Memorial Hospital, Delhi' },
];

const Map = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredHospitals, setFilteredHospitals] = useState(hospitals);
    const [center, setCenter] = useState([28.6139, 77.2090]);

    const handleSearch = debounce((query) => {
        if (query) {
            const results = hospitals.filter(hospital =>
                hospital.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredHospitals(results);

            if (results.length > 0) {
                setCenter([results[0].lat, results[0].lng]); // Center map on the first result
            }
        } else {
            setFilteredHospitals(hospitals);
            setCenter([28.6139, 77.2090]); // Default center
        }
    }, 300); // Debounce search input

    return (
        <div className='mx-4 mb-5'>
            <h1 className='text-center text-5xl font-bold text-blue-600 pb-8 pt-4'>Search for hospitals</h1>
            <div className="input flex justify-center">
                <input type="text" placeholder="Search for hospitals..." value={searchQuery} onChange={(e) => {
                        setSearchQuery(e.target.value);
                        handleSearch(e.target.value);
                    }}
                    className="mb-4 py-3 px-2 border border-gray-300 rounded-lg w-1/2 flex justify-center"
                />
            </div>
            <MapContainer center={center} zoom={10} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {filteredHospitals.map((hospital, index) => (
                    <Marker
                        key={index}
                        position={[hospital.lat, hospital.lng]}
                        icon={L.icon({ iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png' })}
                    >
                        <Popup>{hospital.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
