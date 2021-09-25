var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputArea = document.querySelector("#output");

submitButton.addEventListener("click", calculateProfitOrLoss);

function calculateProfitOrLoss() {
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
      profit,
      initialPrice
    ).toFixed(2);
    setOutput(
      `Your profit is ${profit} and your profit percentage is ${profitPercentage}%`
    );
  } else if (currentPrice < initialPrice) {
    var loss = calculateLoss(initialPrice, currentPrice, quantity).toFixed(2);
    var lossPercentage = calculateLossPercentage(loss, initialPrice).toFixed(2);
    setOutput(
      `Your loss is ${loss} and your loss percentage is ${lossPercentage}%`
    );
  } else {
    setOutput("No Harm, No Foul!");
  }
}

function validateInput(initialPrice, quantity, currentPrice) {
  if (initialPrice && quantity && currentPrice) {
    return true;
  }
  setOutput("Please enter all the fields");
  return false;
}

function calculateProfit(initialPrice, currentPrice, quantity) {
  return (currentPrice - initialPrice) * quantity;
}

function calculateLoss(initialPrice, currentPrice, quantity) {
  return (initialPrice - currentPrice) * quantity;
}

function calculateProfitPercentage(profit, initialPrice) {
  return (profit / initialPrice) * 100;
}

function calculateLossPercentage(loss, initialPrice) {
  return (loss / initialPrice) * 100;
}

function setOutput(text) {
  outputArea.innerText = text;
}
