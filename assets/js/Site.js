// const API_URL =
//   "https://xy01re3rx2.execute-api.ap-south-1.amazonaws.com/Stage/search-data";
// $(document).ready(() => {
//   console.log("Erunning");
//   var xhttp = new XMLHttpRequest();
//   xhttp.open("GET", `${API_URL}`, true);
//   xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
//   xhttp.send();
//   xhttp.onreadystatechange = function () {
//     if (xhttp.status === 200) {
//       console.log("data");
//       console.log(xhttp.responseText);
//     } else {
//       console.log("error");
//       console.log(`error ${xhttp.status}`);
//     }
//   };
// });

//banner

let banner = $(".banner-area");
let bannerHeading = $(".banner-content-heading");
let tabOption = $(".tab-option");
let purposeDropdown = $(".purpose-optionList");

let propfilterOpt = [
  "Apartment-Floor",
  "House",
  "Home",
  "Classic Luxury",
  "Advanced Luxury",
  "Plot",
  "Island",
  "Shared",
  "Builder floor",
  "Convertible apartment",
  "Garden apartment",
  "High rise apartment",
  "Loft apartment",
  "Low rise apartment",
  "Residential apartment",
  "Serviced apartment",
  "Studio apartment",
  "Carriage/coach house",
  "Contemporary residential house",
  "Cottage",
  "Dome/round house",
  "Duplex",
  "Floating home/houseboat",
  "In-law/basement suite",
  "Single-family house",
  "Tree house",
  "Triplex",
  "Underground house/bunker",
  "Villa",
  "Yurt",
  "Cabin",
  "Colonial home",
  "Container home",
  "Craftsman home",
  "French country home",
  "Greek revival home",
  "Mediterranean home",
  "Mid-century modern home",
  "Mobile home",
  "Ranch home",
  "Split-level home",
  "Town home",
  "Tudor home",
  "Victorian home",
  "Castle",
  "Cave",
  "Chateau",
  "Fort",
  "Manor",
  "Mansion",
  "Palace",
  "Barndominium",
  "Bungalow",
  "Cape cod",
  "Chalet",
  "Penthouse",
  "Government sector plot",
  "Plot in colony",
  "Private sector plot",
  "Artificial island",
  "Barrier island",
  "Continental island",
  "Coral island",
  "Oceanic island",
  "Tidal island",
  "Condominium",
  "Co-op house",
  "Office",
  "Retail",
  "Hospiyality",
  "Other",
  "Bare shell office space",
  "Co-working office space",
  "Serviced office space",
  "Anchor store",
  "Cafeteria",
  "Commercial shop",
  "Community retail center",
  "Dispensary",
  "Food court",
  "Gymnasium",
  "High street",
  "Multiplex",
  "Nursing home",
  "Out parcel",
  "Petrol pump",
  "Regional mall",
  "Restaurant",
  "Retail power center",
  "Retail store",
  "Showroom",
  "Sports facility",
  "Strip/shopping center",
  "Banquet hall",
  "Boutique",
  "Boys PG",
  "Casino",
  "Co-ed PG",
  "Extended stay hotel",
  "Full service hotel",
  "Girls PG",
  "Limited service hotel",
  "Public house",
  "Resort",
  "Mixed-use",
  "Special-purpose",
  "New Booking(New Launch)",
  "Pre-Booking(Under construction)",
  "Ready to Move",
  "Rent",
  "Leave",
  "Invesment",
  "Consultancy",
  "Bulk warehouse",
  "Cold storage",
  "Flex warehouse",
  "Heavy manufacturing",
  "Industrial Plot",
  "Industrial land",
  "Light assembly",
  "Mining",
  "Coaching-center",
  "College",
  "Hospital",
  "School",
  "Brownfield land",
  "Farmhouse",
  "Greenfield /agricultural land",
  "Infill land",
];

//Industrial
let Industrial = [
  "Bulk warehouse",
  "Cold storage",
  "Flex warehouse",
  "Heavy manufacturing",
  "Industrial Plot",
  "Industrial land",
  "Light assembly",
  "Mining",
];

//Institutional
let Institutional = ["Coaching-center", "College", "Hospital", "School"];

//Agricultural
let Agricultural = [
  "Brownfield land",
  "Farmhouse",
  "Greenfield /agricultural land",
  "Infill land",
];
const purposeOptionList = [
  "New Booking(New Launch)",
  "Pre-Booking(Under construction)",
  "Ready to Move",
  "Rent",
  "Leave",
  "Invesment",
  "Consultancy",
];
const amenitiesProps = [
  "24/7 power backup",
  "24/7 water supply",
  "24x7 security",
  "Aerobics centre",
  "Amphitheatre",
  "Atm",
  "Badminton court",
  "Banquet hall",
  "Bar/chill-out lounge",
  "Barbecue",
  "Basketball court",
  "Billiards",
  "Bowling alley",
  "Bus stand",
  "Business lounge",
  "Cafeteria",
  "Car parking",
  "Card room",
  "Carrom",
  "Cctv camera security",
  "Changing area",
  "Children's play area",
  "Cigar lounge",
  "Clinic",
  "Club house",
  "Concierge service",
  "Conference room",
  "Creche/day care",
  "Cricket pitch",
  "Dispensary",
  "Distributed generation availability",
  "Dock",
  "Earthquake resistant",
  "Entrance lobby",
  "Escalators",
  "Fire fighting systems",
  "Flower garden",
  "Food court",
  "Foosball",
  "Football",
  "Fountain",
  "Gated community",
  "Gazebo",
  "Golf course",
  "Grade a building",
  "Grocery shop",
  "Gymnasium",
  "Helipad",
  "Hospital",
  "Indoor games",
  "Infinity pool",
  "Intercom",
  "Internal street lights",
  "Jacuzzi",
  "Jogging track",
  "Landscape garden",
  "Laundry",
  "Lawn tennis court",
  "Library",
  "Lift(s)",
  "Lounge",
  "Maintenance staff",
  "Medical centre",
  "Metro",
  "Mini theatre",
  "Multipurpose court",
  "Multipurpose hall",
  "Open space",
  "Paved compound",
  "Pool table",
  "Power back up lift",
  "Private airport",
  "Property staff",
  "Railway Station",
  "Rain water harvesting",
  "Reading lounge",
  "Reflexology park",
  "Restaurant",
  "Salon",
  "Sauna",
  "School",
  "Security cabin",
  "Senior citizen sitout",
  "Sewage treatment plant",
  "Shopping centre",
  "Solar water heating",
  "Spa",
  "Squash court",
  "Steam room",
  "Sun deck",
  "Swimming pool",
  "Table tennis",
  "Terrace garden",
  "Theatre",
  "Toddler pool",
  "Valet parking",
  "Vastu compliant",
  "Video door security",
  "Waiting lounge",
  "Water softener plant",
  "Wi-fi connectivity",
  "Yoga/meditation area",
];

$("#Residential-dropdown").hide();
$("#Commercial-dropdown").hide();

$("#Residential").click(function () {
  if ($(this).is(":checked")) {
    $("#Residential-dropdown").toggle();
  }
});

$("#Commercial").click(function () {
  if ($(this).is(":checked")) {
    $("#Commercial-dropdown").toggle();
  }
});

// // Industrial
$(function () {
  $("#Industrial").click(function () {
    if ($(this).is(":checked")) {
      Industrial.map((item) =>
        $(".industrial-dropdown").append(
          `
            <li class="item">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${item}-opt">
                <label class="form-check-label" for="flexCheckIndeterminate">
                  <span>
                    ${item}
                  </span>
                </label>
              </div>
            </li>
      `
        )
      );
    }
  });
});

// // Institutional
$(function () {
  $("#Institutional").click(function () {
    if ($(this).is(":checked")) {
      Institutional.map((item) =>
        $(".institutional-dropdown").append(
          `
            <li class="item">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${item}-opt">
                <label class="form-check-label" for="flexCheckIndeterminate">
                 <span>
                    ${item}
                  </span>
                </label>
              </div>
            </li>
      `
        )
      );
    }
  });
});

// //Agricultural
$(function () {
  $("#Agricultural").click(function () {
    if ($(this).is(":checked")) {
      Agricultural.map((item) =>
        $(".agricultural-dropdown").append(
          `
            <li class="item">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${item}-opt">
                <label class="form-check-label" for="flexCheckIndeterminate">
                  <span>
                    ${item}
                  </span>
                </label>
              </div>
            </li>
      `
        )
      );
    }
  });
});

// property filter
function filterProperty() {
  var input = document.getElementById(`property-type-optionList-input`);
  var filter = input.value.toUpperCase();
  var li = document.querySelectorAll(`.item`);

  for (i = 0; i < li.length; i++) {
    let span = li[i].getElementsByTagName("span");
    if (span.length > 0) {
      let txtValue = span.item(0).textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}

//serch filter
function filterList(forList) {
  var input, filter, ul, li, span, i, txtValue;
  input = document.getElementById(`${forList}-optionList-input`);
  filter = input.value.toUpperCase();
  ul = document.getElementById(`${forList}-optionList`);
  // console.log(ul);
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span");
    if (span.length > 0) {
      txtValue = span.item(0).textContent;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
}

$(".advanced-option-list").hide();

//advanced-option-list
$(".advanced-option-btn").click(() => {
  if (!$(".advanced-option-list").is(":visible")) {
    $(".advanced-option-list").toggle();
    $(".advanced-option").toggle();
  } else {
    $(".advanced-option-list").toggle();
  }
});

// $(".hide-btn").click(() => {
//   if ($(".advanced-option-list").is(":visible")) {
//     $(".advanced-option-list").toggle();
//     $(".slider").hide();
//     $(".advanced-option").toggle();
//   }
// });

$(document).ready(() => {
  amenitiesProps
    .map((prop) =>
      $(".amenities-opt-conatiner").append(`
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            <span>  
            ${prop}
            </span>
          </label>
        </div>
      </li>
    `)
    )
    .join("");
});
$(".property-banner").click(function () {
  $(".banner-area").addClass("banner-one");
  $(".banner-area").removeClass("banner-two banner-three");
  bannerHeading.text("Find Your Dream Property");

  purposeOptionList
    .map((item) =>
      purposeDropdown.html(
        `
       <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
              New Booking
              <br>
              <span>(New Launch)</span>
            </label>
          </div>
      </li>
      <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
              Pre-Booking
              <br>
              <span>(Under Construction)</span> 
            </label>
          </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Ready To move
          </label>
        </div>
      </li>
      `
      )
    )
    .join("");

  $(".project-banner").removeClass("active-pill");
  $(".dealers-banner").removeClass("active-pill");
  $(".property-banner").addClass("active-pill");
});

$(".project-banner").click(function () {
  $(".banner-area").addClass("banner-two");
  $(".banner-area").removeClass("banner-one banner-three");

  bannerHeading.text("Wild Your Aspiration With Buildano");

  purposeOptionList
    .map((item) =>
      purposeDropdown.html(
        `
       <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
              New Booking
              <br>
              <span>(New Launch)</span>
            </label>
          </div>
      </li>
      <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
              Pre-Booking
              <br>
              <span>(Under Construction)</span> 
            </label>
          </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Ready To move
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Rent
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Leave
          </label>
        </div>
      </li>
      `
      )
    )
    .join("");

  $(".property-banner").removeClass("active-pill");
  $(".dealers-banner").removeClass("active-pill");
  $(".project-banner").addClass("active-pill");
});

$(".dealers-banner").click(function () {
  $(".banner-area").addClass("banner-three");
  $(".banner-area").removeClass("banner-two banner-one");

  bannerHeading.text("Trust Your Trustee");
  purposeDropdown.html(
    `
       <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
              New Booking
              <br>
              <span>(New Launch)</span>
            </label>
          </div>
      </li>
      <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
            <label class="form-check-label" for="flexCheckIndeterminate">
              Pre-Booking
              <br>
              <span>(Under Construction)</span> 
            </label>
          </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Ready To move
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Rent
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Leave
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Invesment
          </label>
        </div>
      </li>
      <li>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
          <label class="form-check-label" for="flexCheckIndeterminate">
            Consultancy
          </label>
        </div>
      </li>
      `
  );

  $(".property-banner").removeClass("active-pill");
  $(".project-banner").removeClass("active-pill");
  $(".dealers-banner").addClass("active-pill");
});

//price-slider
(function () {
  var parent = document.querySelector(".price-slider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("#price-ranger");
  var numberS = parent.querySelectorAll("#price-value");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
      $(".min-span-price").text(
        slide1.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })
      );
      $(".max-span-price").text(
        slide2.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })
      );
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();

//area slider
(function () {
  var parent = document.querySelector(".area-slider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("#area-ranger"),
    numberS = parent.querySelectorAll("#area-value");
  var slide1, slide2;

  rangeS.forEach(function (el) {
    el.oninput = function () {
      slide1 = parseFloat(rangeS[0].value);
      slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
      $(".min-span-area").text(slide1);
      $(".max-span-area").text(slide2);
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    };
  });
})();

// $(".price-slider").hide();
// // $(".area-slider").hide();
// $("#area-btn").click(function () {
//   $(".area-slider").toggle();
// });
// $("#price-btn").click(function () {
//   $(".price-slider").toggle();
// });
