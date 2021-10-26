import  { openOverlay, saveOverlayData }  from './modules/overlay.js'


document.getElementById("add-icon").addEventListener("click", function () {
    openOverlay()
});


document.getElementById("close-overlay").addEventListener("click", function () {
 saveOverlayData()
    
});



