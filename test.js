function calculateDaysForContractIncrements(
  initialContractSize,
  profitRatioPerDay,
  maxContracts
) {
  let initialMargin = 728;
  let currentContracts = initialContractSize;
  let days = 0;
  const results = [];

  while (currentContracts < maxContracts) {
    let accountSize = currentContracts * initialMargin; // Initial margin per contract
    let targetSize = (currentContracts + 1) * initialMargin;

    while (accountSize < targetSize) {
      accountSize += accountSize * profitRatioPerDay;
      days++;
    }

    currentContracts = Math.floor(accountSize / initialMargin); // Increase contracts based on account size
    results.push({ accountSize, contracts: currentContracts, days: days });
  }

  return results;
}

// Example usage
const profitRatioPerDay = 0.025; // Profit ratio per day
const initialContractSize = 5; // Starting with contract size N
const maxContracts = 2000; // Calculate until reaching M contracts

const increments = calculateDaysForContractIncrements(
  initialContractSize,
  profitRatioPerDay,
  maxContracts
);

const totalDays = increments[increments.length - 1].days;
const exponentialDays = (1 + profitRatioPerDay) ** increments.length;
console.log(increments, totalDays, exponentialDays);
