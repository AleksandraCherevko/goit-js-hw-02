function getShippingCost(country) {
  let message;

  switch (country) {
    case "China":
      return "Shipping to China will cost 100 credits";
      break;

    case "Chile":
      return "Shipping to Chile will cost 250 credits";
      break;

    case "Australia":
      return "Shipping to Australia will cost 170 credits";
      break;

    case "Jamaica":
      return "Shipping to Jamaica will cost 120 credits";
      break;

    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
