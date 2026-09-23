function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  return Math.min(Math.floor(daysLate * ratePerDay), 20);
}

module.exports = { isValidLoan, calculateLateFee };
