function makeTable (data) {
  let $tableBody = document.getElementById('table-body')
  $tableBody.innerHTML = '';

  const $rows = data.map(el => {
    const keys = ['year', 'yearInterest', 'year2', 'balance']
    let $row = document.createElement('tr')

    keys.forEach(key => {
      let $el = document.createElement('td')
      $el.innerHTML = el[key].toLocaleString()
      $row.appendChild($el)
    })

    return $row
  })

  $rows.forEach($row => $tableBody.appendChild($row))
}


//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>
//<script type="text/javascript" src="compound-interest.js"></script>
//<script type="text/javascript" src="chart.js"></script>
//<script type="text/javascript" src="table.js"></script>
//<script type="text/javascript" src="app.js"></script> 
