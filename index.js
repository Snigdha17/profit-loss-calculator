const submitButton = document.querySelector("#submit-btn");
const outputArea = document.querySelector("#output");

submitButton.addEventListener("click", calculateProfitOrLoss);

function calculateProfitOrLoss() {
  var initialPrice = document.querySelector("#initial-price");
  var quantity = document.querySelector("#quantity");
  var currentPrice = document.querySelector("#current-price");

  if (!validateInput(initialPrice.value, quantity.value, currentPrice.value)) {
    return;
  }

  initialPrice = Number(initialPrice.value).toFixed(2);
  quantity = Number(quantity.value).toFixed(2);
  currentPrice = Number(currentPrice.value).toFixed(2);

  if (currentPrice > initialPrice) {
    var profit = calculateProfit(initialPrice, currentPrice, quantity).toFixed(
      2
    );
    var profitPercentage = calculateProfitPercentage(
      currentPrice,
      initialPrice
    ).toFixed(2);
    setOutput(
      `Your profit is ${profit} and your profit percentage is ${profitPercentage}%`,
      "PROFIT"
    );
  } else if (currentPrice < initialPrice) {
    var loss = calculateLoss(initialPrice, currentPrice, quantity).toFixed(2);
    var lossPercentage = calculateLossPercentage(
      currentPrice,
      initialPrice
    ).toFixed(2);
    setOutput(
      `Your loss is ${loss} and your loss percentage is ${lossPercentage}%`,
      "LOSS"
    );
  } else {
    setOutput("No Harm, No Foul!", "EQUAL");
  }
}

function validateInput(initialPrice, quantity, currentPrice) {
  if (initialPrice && quantity && currentPrice) {
    if (initialPrice < 0) {
      setOutput("Initial Price should be positive", "MISSING");
      return false;
    }
    if (quantity < 0) {
      setOutput("Quantity should be positive", "MISSING");
      return false;
    }
    if (currentPrice < 0) {
      setOutput("Current price should be positive", "MISSING");
      return false;
    }
    return true;
  } else {
    setOutput("Please enter all the fields", "MISSING");
    return false;
  }
}

function calculateProfit(initialPrice, currentPrice, quantity) {
  return (currentPrice - initialPrice) * quantity;
}

function calculateLoss(initialPrice, currentPrice, quantity) {
  return (initialPrice - currentPrice) * quantity;
}

function calculateProfitPercentage(currentPrice, initialPrice) {
  var profitPerUnit = (currentPrice - initialPrice) / initialPrice;
  return profitPerUnit * 100;
}

function calculateLossPercentage(currentPrice, initialPrice) {
  var lossPerUnit = (initialPrice - currentPrice) / initialPrice;
  return lossPerUnit * 100;
}

function setOutput(text, STATUS) {
  outputArea.innerText = text;

  switch (STATUS) {
    case "PROFIT":
      outputArea.style.color = "#70e000";
      break;
    case "LOSS":
      outputArea.style.color = "red";
      break;
    case "MISSING":
      outputArea.style.color = "gray";
      break;
    case "EQUAL":
      outputArea.style.color = "orange";
      break;
    default:
  }
}
