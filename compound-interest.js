const calculateYears = (function () {
  // principle - initial investment
  // interest - % interest
  // compoundFreq - 1 for yearly, 12 for monthly, 52 for weekly... etc

  function calculate (principle, compoundFreq, numberOfYears) {
    const decimalInterest = 2 / 100
    const rn = 1 + (decimalInterest)
    const cf = numberOfYears
    const compoundedInterest = principle * rn
    const roundedCompoundedInterest = Math.round(compoundedInterest * 100) / 100
    return roundedCompoundedInterest
  }
  
  function calculateYearWithAdditions (principle, compoundFreq, monthlyDeposit) {
    return Array.from(new Array(1).keys()).reduce(acc => {
      return calculate(acc, compoundFreq, 1/12)
    }, principle)
  }
  
  function calculateYears (principle, compoundFreq, numberOfYears, monthlyDeposit = 0) {
    const yearsArray = Array.from(new Array(numberOfYears).keys(), x => x + 1)

    const compoundedInterest = yearsArray.reduce((yearsData, _, index) => {    
      const newPrinciple = yearsData.length ? yearsData[index - 1].balance : principle      
      const compoundValue = calculateYearWithAdditions(newPrinciple, compoundFreq, monthlyDeposit)
      
      return yearsData.concat({
        yearInterest: compoundValue - newPrinciple,
        yearDeposits: monthlyDeposit,
        totalDeposits: "2%",
        totalInterest: Math.round(compoundValue - principle),
        year: index + 1,
        year2: (compoundValue*0.3 - newPrinciple*0.3).toFixed(2),
        balance: (compoundValue - compoundValue*0.3 + newPrinciple*0.3).toFixed(2),
      })
    }, [])

    return compoundedInterest
  }

  return calculateYears
})()