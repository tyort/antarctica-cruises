import OurOfferComponent from "./components/our-offer.js";
import CalculationComponent from "./components/calculation.js";
import PageCalculationComponent from "./components/page-calculation.js";

import {
  renderComponent,
  // START_COST_OF_PROPERTY,
  // MIN_FIRST_PAYMENT_PERCENTAGE,
  // MIN_COST_MORTGAGE,
  // ENTER_KEY_CODE,
  // MAX_COST_OF_PROPERTY,
  // MIN_COST_OF_PROPERTY,
  // MAX_CREDIT_PERIOD,
  // MIN_CREDIT_PERIOD,
  // OPERATORS_STEP_COST,
  // CAPITAL_OF_MOTHER
} from './formulas.js';

const pageCalculationComponent = new PageCalculationComponent();
const calculationComponent = new CalculationComponent();
const ourOfferComponent = new OurOfferComponent();

const pageOffersMenu = document.querySelector(`.page-offers-menu`);
renderComponent(pageOffersMenu, pageCalculationComponent, `afterEnd`);

const pageCalculation = document.querySelector(`.page-calculation`);
renderComponent(pageCalculation, calculationComponent);
const titleName = pageCalculation.querySelector(`h2`);
renderComponent(titleName, ourOfferComponent, `afterEnd`);

calculationComponent.setCalculateResultHandler(() => {
  console.log(`Привет`);
  ourOfferComponent.reRender();
  // const formData = calculationComponent.getChangedDataByView();
  // let pointModel = parseFormData(formData);
});

