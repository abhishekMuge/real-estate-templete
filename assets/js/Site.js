const API_URL =
  "https://xy01re3rx2.execute-api.ap-south-1.amazonaws.com/Stage/search-data";

//banner

let banner = $(".banner-area");
let bannerHeading = $(".banner-content-heading");
let tabOption = $(".tab-option");
let purposeDropdown = $(".purpose-optionList");
const purposeOptionList = [
  "New Booking(New Launch)",
  "Pre-Booking(Under construction)",
  "Ready to Move",
  "Rent",
  "Leave",
  "Invesment",
  "Consultancy",
];

$(document).ready(() => {
  console.log("Erunning");
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", `${API_URL}`, true);
  xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.status === 200) {
      console.log("data");
      console.log(xhttp.responseText);
    } else {
      console.log("error");
      console.log(`error ${xhttp.status}`);
    }
  };
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

(function () {
  var parent = document.querySelector(".price-slider");
  if (!parent) return;

  var rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
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
