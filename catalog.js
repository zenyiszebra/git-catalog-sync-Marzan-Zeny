function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) return 0;
  return Math.min(Math.round(daysLate * ratePerDay), 20);
}

module.exports = { isValidLoan, calculateLateFee };
