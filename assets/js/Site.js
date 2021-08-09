//banner

let banner = $(".banner-area");
let bannerHeading = $(".banner-content-heading");
let tabOption = $(".tab-option");

$(".property-banner").click(function () {
  $(".banner-area").addClass("banner-one");
  $(".banner-area").removeClass("banner-two banner-three");
  bannerHeading.text("Home Is The Starting Place Of Love, Hope And Dreams");

  tabOption.html(`
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label white" for="inlineCheckbox1">
          New Booking
            <span class="sub-text">
              (New Launch)
            </span>
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label white" for="inlineCheckbox1">
            Pre-Booking
            <span class="sub-text">
              (Under Construction)
            </span>
          </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label white" for="inlineCheckbox1">
            Ready To Move
          </label>
      </div>
  `);

  $(".project-banner").removeClass("active-pill");
  $(".dealers-banner").removeClass("active-pill");
  $(".property-banner").addClass("active-pill");
});

$(".project-banner").click(function () {
  $(".banner-area").addClass("banner-two");
  $(".banner-area").removeClass("banner-one banner-three");

  bannerHeading.text("Select Your Comfort Home From Our New Collection");

  tabOption.html(`
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label white" for="inlineCheckbox1">
          Rent
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label white" for="inlineCheckbox1">
            Leave
          </label>
      </div>
  `);

  $(".property-banner").removeClass("active-pill");
  $(".dealers-banner").removeClass("active-pill");
  $(".project-banner").addClass("active-pill");
});

$(".dealers-banner").click(function () {
  $(".banner-area").addClass("banner-three");
  $(".banner-area").removeClass("banner-two banner-one");

  bannerHeading.text("We Built Your Home To Keep Safe And Secure");

  tabOption.html(`
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label white" for="inlineCheckbox1">
          Invesment
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
          <label class="form-check-label white" for="inlineCheckbox1">
            Consultancy
          </label>
      </div>
  `);

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
