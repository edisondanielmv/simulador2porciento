(function () {
  const $calculate = document.getElementById('calculate')
  const $chart = document.getElementById('chart').getContext('2d')

  const chart = makeChart($chart)

  $calculate.addEventListener('click', _ => {
    const principle = Number(document.getElementById('principle').value)
    const interestRate = 0.2
    const compoundFreq = Number(document.getElementById('compound-freq').value)
    //const years = Number(document.getElementById('years').value)
    const monthlyDeposit = 0
    const compoundedInterest = calculateYears(principle, interestRate, compoundFreq, monthlyDeposit)
    const ultimovalor = Math.pow(1.014,compoundFreq)*principle
    const ganancia = Math.pow(1.014,compoundFreq)*principle-principle
    const rendimiento = (ganancia/principle)*100
    document.getElementById("output1").innerHTML="Balance final (USD): "+ ultimovalor.toFixed(2) + " $"
    document.getElementById("output2").innerHTML="Ganancia total (USD): "+ ganancia.toFixed(2) + " $"
    document.getElementById("output3").innerHTML="Rendimiento total (%): "+ rendimiento.toFixed(2) + " %"
    makeTable(compoundedInterest)
    updateChart(chart, compoundedInterest)    
  })
})()