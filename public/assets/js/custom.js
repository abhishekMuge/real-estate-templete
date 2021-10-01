jQuery(
  (function ($) {
    "use strict";
    // Loader
    jQuery(window).on("load", function () {
      jQuery(".loader").fadeOut(500);
    });
  })(jQuery)
);

// $("div#range-slider").rangeslider();

// //place api integration
// let autoComplete;
// function initMap() {
//   autoComplete = new google.maps.places.Autocomplete(
//     document.getElementById("google_location_autocomplete"),
//     {
//       types: ["establishment"],
//       componentRestrictions: { country: ["IN"] },
//       fields: ["place_id", "geometry", "name"],
//     }
//   );
// }
