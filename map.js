window.mapboxgl.accessToken = 'pk.eyJ1Ijoidml2ZWsxNzk5IiwiYSI6ImNsa25nYnhuYjFwYzgza3A0Z3V5eGJxZzcifQ.WnGURd6SXkFv0sBM0uzQ1Q';

window.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vivek1799/cll5h0lnr00f101mfe7f2baj4',
    center: [-41.6032207, 60.47202399999999], // Greenland approximate center
    zoom: 2,
    antialias: true, // This makes the map look smoother and cleaner
    bearing: -17.6, 
    pitch: 45,
    interactive: false,
});

window.mines = [
    { 
        // name: "Mine1", 
        coordinates: [-45.023, 72.343], 
        description: "A self-governing territory of the Kingdom of Denmark, Greenland got its self rule in 2009, which gave Greenlanders complete control over their mines and natural resources. However, its foreign and defense policy is still under Copenhegen’s control. The country was caught in the spotlight in 2019, when former president Donald Trump discussed the idea that his administration considered buying the entire island of Greenland, saying, “Essentially it’s a large real estate deal. A lot of things can be done",
        zoom: 2, 
        bearing: 5,
        pitch: 2
    },
    { 
        // name: "Mine2", 
        coordinates: [-45.957, 60.974], 
        description: "In 2015, GME submitted an open pit mining license application to the Greenland government to advance the Kvanefjeld project. However, the project soon started facing backlash from local communities when high uranium content was found in the exploration. Environmental groups argued that the radioactive waste can contaminate its surrounding ecosystem, as the company had plans to dispose of the waste in an artificial lake constructed near the proposed mine.",
        zoom: 10, 
        bearing: 0,
        pitch: 0,
        subMarkers: [
            {
                name: "Zone 3",


                coordinates: [-45.870820, 60.970970],
                description: "This is a description for SubMarker1",
            },
            {
                name: "Zone 2",
                coordinates: [-45.918200, 60.940600],
                description: "This is a description for SubMarker2",
            },
            {
                name: "Kvanefjeld Mine",
                coordinates: [-45.998900, 60.972670],
                description: "This is a description for SubMarker3",
            },
            {   
                // name: "Narsaq Town",
                coordinates: [-46.049550, 60.913660],
                description: "This is a description for SubMarker4",
            },
        ]
    },
    { 
        // name: "Mine2b", 
        coordinates: [-46.049550, 60.913660], 
        description: "According to Adrian Finch, a geologist and a researcher on rare earth mining in Greenland, “I think part of the problem was a perception, which may or may not have been true, that the rare earth was a cover for the selling of uranium.” He believes the ambiguity around uranium and the mining company’s intentions fueled opposition. “The Greenlandic government and many Greenlandic people are strongly opposed to the use of Greenland becoming involved in the nuclear industry, either as a power source or potentially as a source of weapons.",
        zoom: 10.5, 
        bearing: 45,
        pitch: 17
    },
    { 
        // name: "Mine3", 
        coordinates: [-45.841850, 60.866580], 
        description: "Just close to Kvanefjeld, Kringlerne rare earth project, owned by Australian mining company Tanbreez Mining, announced that it will begin its rare earth mining operations in Greenland by 2024 and aims to supply Europe’s needs to reduce the continent’s dependence on Asian suppliers. The company claims the project to be more sustainable than Kvanefjeld, as the mine's rare earths are tied to a mineral called steenstrupine that has never been successfully extracted anywhere. However, Tanbreez's Kringlerne mine takes a different approach, extracting from Eudialyte which contains no uranium and is more economically sustainable because of its high rare earth value. As Adrian F explains, “the beauty of Eudialyte is its significant proportion of heavy rare earths and lesser light rare earths.",
        zoom: 10.5, 
        bearing: 9,
        pitch: 10 
    },
    { 
        // name: "Mine3b", 
        coordinates: [-45.841850, 60.866580], 
        description: "Kringlerne mine on the Nuussuaq Peninsula also has a key advantage in its proximity to deep water shipping channels. Unlike many mining projects that require long overland transport, Kringlerne sits only a few kilometers from deep fjords and bays opening directly into the Labrador Sea. Operators plan to transport the rare earth ores directly from the mine site to ocean-going vessels. This will allow cost-effective shipping to refineries and processors abroad.",
        zoom: 7.5, 
        bearing: 50,
        pitch: 10 
    },

    { 
        // name: "Mine4", 
        coordinates: [-51.271000, 66.533000], 
        description: "On Greenland's southwest coast, the Sarfartoq carbonatite complex contains a diversity of rare earth mineral deposits that have drawn mining interest. Canadian firm Neo Performance Materials is developing a neodymium mine at the site, aimed at extracting rare earths useful for powerful magnets in renewable energy technologies. Located 60 kms from the Kangerlussuaq international airport, Sarfartoq will require strict controls to prevent runoff from mining waste during operations. As one of the ongoing rare earth mining projects in Greenland, its success or failure in balancing economic gains and environmental protection will shape the sector's future in the region.",
        zoom: 9, 
        bearing: 9,
        pitch: 10 
    },

    { 
        // name: "Mine5", 
        coordinates: [-54.501068, 70.091404], 
        description: "The remote Disko Nuussuaq island has attracted interest from Kobold Metals, backed by billionaires. Big names like Bill Gates, Jeff Bezos, and Michael Bloomberg have made headlines by heavily investing in this region, which is believed to hold heavy concentrations of critical minerals like nickel, cobalt and precious metals needed for electric vehicle batteries and clean energy technologies.",
        zoom: 7, 
        bearing: 9,
        pitch: 10 
    },

    { 
        // name: "Mine6", 
        coordinates: [-24.270750, 71.954230], 
        description: "Finally, north of the Arctic Circle, the Malmbjerg molybdenum deposit has been studied as a large potential new source for Molybdenum, used to make strong alloys. Though not a rare earth, the project has a potential to supply 30% of Europe’s molybdenum use with clean molybdenum. Owned by Greenland Resources, the company says the operation would have ‘environmentally friendly mine design focused on reduced water usage and low aquatic disturbance.’",
        zoom: 9, 
        bearing: 9,
        pitch: 10 
    },

    { 
        // name: "Mine7", 
        coordinates: [-42.039, 69.911], 
        description: "As nations race to secure rare earths and critical minerals, Greenland finds itself in a privileged position with its vast untapped resources. However, its young government faces complex challenges with its mining policy and foreign investments. A concept known as the ecologically unequal exchange theory cautions that the environmental costs of extraction often fall disproportionately on less powerful nations. Professors Irene Henriques of York University and Steffen Bohm of the University of Exeter in their paper argue that the rare earth mining in Greenland would bear the burden of carrying the ecological costs of extracting heavy metals, while much of the value is generated in Western countries. According to the authors, wealthy countries often compel developing and underdeveloped states to open mines so they can secure strategic mineral resources.",
        zoom: 5, 
        bearing: 9,
        pitch: 10 
    }, 

    { 
        // name: "Mine8", 
        coordinates: [-42.039, 69.911], 
        description: "\"European supplies should come from European sources at European standards,\" says Finch. We shouldn't go into a third country, do things on the cheap, take the resources we want, and use them in Europe. There are plenty of historical nightmare examples of resource exploitation that way.",
        zoom: 1, 
        bearing: 9,
        pitch: 10 
    }, 

];

// // Add controls to the map
// map.addControl(new mapboxgl.NavigationControl()); 

// Add scale to the map
var scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
});
map.addControl(scale);

// Add geolocation control to the map
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));


window.mines.forEach(function(mine) {
    if(mine.subMarkers) {
        mine.subMarkers.forEach(function(subMarker) {
            new mapboxgl.Marker({ color: 'orange' }) // Changed color here
            .setLngLat(subMarker.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<h3 style="color: white;">' + subMarker.name + '</h3><p>' + subMarker.description + '</p>'))
            .addTo(window.map);
        });
    } else {
        new mapboxgl.Marker({ color: 'white' }) // And here
        .setLngLat(mine.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('<h3 style="color: white;"> Description</h3><p>' + mine.description + '</p>'))
        .addTo(window.map);
    }
});



window.map.on('load', function () {
    window.mines.forEach(function(mine) {
        if(mine.subMarkers) {
            mine.subMarkers.forEach(function(subMarker, index) {
                // Add a data source for every marker
                window.map.addSource(`source-${mine.name}-${index}`, {
                    'type': 'geojson',
                    'data': {
                        'type': 'Feature',
                        'properties': {
                            'description': subMarker.description,
                            'icon': 'monument',
                            'title': subMarker.name
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': subMarker.coordinates
                        }
                    }
                });
                
                // Add layer for marker
                window.map.addLayer({
                    'id': `marker-${mine.name}-${index}`,
                    'type': 'symbol',
                    'source': `source-${mine.name}-${index}`,
                    'layout': {
                        'icon-image': '{icon}-15',
                        'text-field': ['get', 'title'],
                        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                        'text-offset': [0, 0.6],
                        'text-anchor': 'top'
                    }
                });
            });
        }
    });
});






window.clusters = [
    { // Cluster 1
        coordinates: [
            [-45.764, 72.855], // Top left corner
            [-44.764, 72.855], // Top right corner
            [-44.764, 71.855], // Bottom right corner
            [-45.764, 71.855]  // Bottom left corner
        ]
    },
    { // Cluster 2
        coordinates: [
            [-46.764, 73.855], // Top left corner
            [-45.764, 73.855], // Top right corner
            [-45.764, 72.855], // Bottom right corner
            [-46.764, 72.855]  // Bottom left corner
        ]
    }
]

//first line 
window.map.on('load', function () {
    window.clusters.forEach(function(cluster, index) {
        window.map.addSource(`cluster-${index}`, {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [cluster.coordinates]
                }
            }
        });

        window.map.addLayer({
            'id': `cluster-${index}`,
            'type': 'fill',
            'source': `cluster-${index}`,
            'layout': {},
            'paint': {
                'fill-color': 'white', // Change the color of the squares here
                'fill-opacity': 1
            }
        });
    });
});




console.log('map.js loaded');
console.log('map:', window.map);
console.log('mines:', window.mines);

window.map.on('load', function () {
    window.map.addSource('line', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [-45.841850, 60.866580], // coordinates of kringlne mine
                    [-46.049550, 60.913660]  // coordinates of Narsaq town
                ]
            }
        }
    });

    window.map.addLayer({
        'id': 'line-layer',
        'type': 'line',
        'source': 'line',
        'layout': {},
        'paint': {
            'line-color': 'white',
            'line-width': 5,
            'line-dasharray': [1, 1] ,// Change the dash pattern here
            'line-opacity': 0.7,
        }
    });

    // Add a GeoJSON source containing the start and end coordinates of the line.
window.map.addSource('route', {
    'type': 'geojson',
    'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
            'type': 'LineString',
            'coordinates': [
                [-45.998900, 60.972670], // Coordinates for Kringlerne mine
                [-46.049550, 60.913660]  // Coordinates for Narsaq town
            ]
        }
    }
});

// Add a new layer to render the line from the source.
window.map.addLayer({
    'id': 'route',
    'type': 'line',
    'source': 'route',
    'layout': {},
    'paint': {
        'line-color': 'white',
        'line-width': 5,
        'line-dasharray': [1, 1] ,// Change the dash pattern here
        'line-opacity': 0.7,
    }
});

});



