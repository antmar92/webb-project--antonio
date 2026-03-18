document.addEventListener("DOMContentLoaded", function(){


    /* ------------------------------------------------------------
   Splide-bildspel
   - Startar när DOM är laddad
   - Fade-effekt, autoplay och 6000 ms intervall
   - Rewind aktiverat (börjar om från första bilden)
   - Pilar avstängda, pagination på
   ------------------------------------------------------------ */

new Splide("#bildspel", {      
type: "fade",                 
autoplay: true,               
interval: 6000,              
rewind: true,              
arrows: false,              
pagination: true             
}).mount();

});