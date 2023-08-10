
var scroller = scrollama();

scroller.setup({
    step: ".step",
    offset: 0.5,
    debug: false
})

.onStepEnter(response => {
    let index = response.index;
    let mine = window.mines[index];
    let stepElement = response.element;
    
    if (mine) {
        // Fly to the mine location on the map
        window.map.flyTo({ 
            center: mine.coordinates, 
            zoom: mine.zoom, 
            bearing: mine.bearing, 
            pitch: mine.pitch 
        });

        // Define the font style you want
        let fontStyle = "font-family: 'Arial, sans-serif';"; 

        // Construct the content for this step using the fontStyle
        let nameContent = mine.name ? `<h2>${mine.name}</h2>` : '';
        let descriptionContent = mine.description ? `<p style="${fontStyle}">${mine.description}</p>` : '';
        let articleContent = mine.article ? `<article>${mine.article}</article>` : '';

        stepElement.innerHTML = nameContent + descriptionContent + articleContent;
    } else {
        stepElement.innerHTML = `<p>Scroll down to see the next mine...</p>`;
    }
})


.onStepExit(response => {
    let index = response.index;
    document.getElementById(`step-${index}`).innerHTML = "";
});

window.addEventListener("resize", scroller.resize);

console.log('scroll.js loaded');

