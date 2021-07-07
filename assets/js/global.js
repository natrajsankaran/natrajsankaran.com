function navBarStyling() {
  const brandNavbar = document.getElementById("brandNavbar");
  const menuNavbar = document.getElementById("menuNavbar");
  const top = 2;
  if (window.pageYOffset >= top) {
    brandNavbar.classList.add('navbar-natraj-collapsed');
    menuNavbar.classList.add('navbar-natraj-collapsed');
  } else {
    brandNavbar.classList.remove('navbar-natraj-collapsed');
    menuNavbar.classList.remove('navbar-natraj-collapsed');
  }
}

window.addEventListener("scroll", navBarStyling, true);
navBarStyling();


const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

function optionValue() {
  const label1 = document.getElementById("label1");
  const label2 = document.getElementById("label2");
  const pricing1 = document.getElementById("pricing1");
  const pricing2 = document.getElementById("pricing2");
  const rbs = document.querySelectorAll('input[name="options"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  }
  if (selectedValue == "yes") {
    label1.classList.remove('btn-secondary');
    label1.classList.add('btn-primary');
    label2.classList.remove('btn-primary');
    label2.classList.add('btn-secondary');
    pricing1.classList.remove('hidden');
    pricing2.classList.add('hidden');
  } else {
    label1.classList.remove('btn-primary');
    label1.classList.add('btn-secondary');
    label2.classList.remove('btn-secondary');
    label2.classList.add('btn-primary');
    pricing2.classList.remove('hidden');
    pricing1.classList.add('hidden');
  }
}

option1.addEventListener("click", optionValue, true);
option2.addEventListener("click", optionValue, true);
optionValue();

const homepageBW = document.getElementById("homepageBW");
const additionalBW = document.getElementById("additionalBW");
const formsBW = document.getElementById("formsBW");
const dashBoardBW = document.getElementById("dashBoardBW");
const totalBW = document.getElementById("totalBW");
const homepageBWTotalPriceValue = document.getElementById("homepageBWTotalPriceValue");
const additionalBWTotalPriceValue = document.getElementById("additionalBWTotalPriceValue");
const formsBWTotalPriceValue = document.getElementById("formsBWTotalPriceValue");
const dashBoardBWTotalPriceValue = document.getElementById("dashBoardBWTotalPriceValue");
const homepageBWPerPrice = 2000;
const additionalBWPerPrice = 750;
const formsBWPerPrice = 500;
const dashBoardBWPerPrice = 2000;


function calcBusinessWebsite(event) {
  const homepageBWTotalPrice = (homepageBW.value * homepageBWPerPrice);
  const additionalBWTotalPrice = (additionalBW.value * additionalBWPerPrice);
  const formsBWTotalPrice = (formsBW.value * formsBWPerPrice);
  const dashBoardBWTotalPrice = (dashBoardBW.value * dashBoardBWPerPrice);

  const totalAmount = (
    homepageBWTotalPrice +
    additionalBWTotalPrice +
    formsBWTotalPrice +
    dashBoardBWTotalPrice
  )

  if (Number.isNaN(homepageBWTotalPrice) && Number.isNaN(additionalBWTotalPrice) && Number.isNaN(formsBWTotalPrice) && Number.isNaN(dashBoardBWTotalPrice) && Number.isNaN(totalAmount)) {
    event.preventDefault();
    event.target.value = 0;
  } else {
    totalBW.value = totalAmount;
    homepageBWTotalPriceValue.innerHTML = homepageBWTotalPrice;
    additionalBWTotalPriceValue.innerHTML = additionalBWTotalPrice;
    formsBWTotalPriceValue.innerHTML = formsBWTotalPrice;
    dashBoardBWTotalPriceValue.innerHTML = dashBoardBWTotalPrice;
  }
}

[homepageBW, additionalBW, formsBW, dashBoardBW].forEach(item => {
  item.addEventListener('input', event => {
    calcBusinessWebsite(event);
  })
});

calcBusinessWebsite();



const homepageEW = document.getElementById("homepageEW");
const additionalEW = document.getElementById("additionalEW");
const totalProductsEW = document.getElementById("totalProductsEW");
const formsEW = document.getElementById("formsEW");
const dashBoardEW = document.getElementById("dashBoardEW");
const totalEW = document.getElementById("totalEW");
const homepageEWTotalPriceValue = document.getElementById("homepageEWTotalPriceValue");
const additionalEWTotalPriceValue = document.getElementById("additionalEWTotalPriceValue");
const totalProductsEWTotalPriceValue = document.getElementById("totalProductsEWTotalPriceValue");
const formsEWTotalPriceValue = document.getElementById("formsEWTotalPriceValue");
const dashBoardEWTotalPriceValue = document.getElementById("dashBoardEWTotalPriceValue");
const homepageEWPerPrice = 2000;
const additionalEWPerPrice = 750;
const totalProductsEWPerPrice = 250;
const formsEWPerPrice = 500;
const dashBoardEWPerPrice = 5000;


function calcEcommerceWebsite(event) {
  const homepageEWTotalPrice = (homepageEW.value * homepageEWPerPrice);
  const additionalEWTotalPrice = (additionalEW.value * additionalEWPerPrice);
  const totalProductsEWTotalPrice = (totalProductsEW.value * totalProductsEWPerPrice);
  const formsEWTotalPrice = (formsEW.value * formsEWPerPrice);
  const dashBoardEWTotalPrice = (dashBoardEW.value * dashBoardEWPerPrice);

  const totalAmount = (
    homepageEWTotalPrice +
    additionalEWTotalPrice +
    totalProductsEWTotalPrice +
    formsEWTotalPrice +
    dashBoardEWTotalPrice
  )

  if (Number.isNaN(homepageEWTotalPrice) && Number.isNaN(additionalEWTotalPrice) && Number.isNaN(totalProductsEWTotalPrice) && Number.isNaN(formsEWTotalPrice) && Number.isNaN(dashBoardEWTotalPrice) && Number.isNaN(totalAmount)) {
    event.preventDefault();
    event.target.value = 0;
  } else {
    totalEW.value = totalAmount;
    homepageEWTotalPriceValue.innerHTML = homepageEWTotalPrice;
    additionalEWTotalPriceValue.innerHTML = additionalEWTotalPrice;
    totalProductsEWTotalPriceValue.innerHTML = totalProductsEWTotalPrice;
    formsEWTotalPriceValue.innerHTML = formsEWTotalPrice;
    dashBoardEWTotalPriceValue.innerHTML = dashBoardEWTotalPrice;
  }
}

[homepageEW, additionalEW, totalProductsEW, formsEW, dashBoardEW].forEach(item => {
  item.addEventListener('input', event => {
    calcEcommerceWebsite(event);
  })
});

calcEcommerceWebsite();
