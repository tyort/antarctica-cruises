export const START_COST_OF_PROPERTY = 2000000;
export const MIN_FIRST_PAYMENT_PERCENTAGE = 10;
export const MIN_COST_MORTGAGE = 500000;
export const ENTER_KEY_CODE = 13;
export const MAX_COST_OF_PROPERTY = 25000000;
export const MIN_COST_OF_PROPERTY = 1200000;
export const MAX_CREDIT_PERIOD = 30;
export const MIN_CREDIT_PERIOD = 5;
export const OPERATORS_STEP_COST = 100000;
export const CAPITAL_OF_MOTHER = 470000;

export const renderComponent = (container, element, place) => {
  switch (place) {
    case `afterBegin`:
      container.prepend(element.getElement());
      break;
    case `afterEnd`:
      container.after(element.getElement());
      break;
    default:
      container.append(element.getElement());
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
