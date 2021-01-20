'use strict'

// var Seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   cookieSale: 6.3,
//   cookieCount: 0,
//   numOfCustomers: function (){
//     var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return randomCustomers

    
//   },
//   cookiesPerHour: [],
var hoursOfOperation = ['6:am', '7:am', '8:am', '9:am', '10:am', '11:am', '12:pm', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm']

var storeArray = []
//}
function Store(name, minCust, maxCust, cookieSale){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookieSale = cookieSale;
  this.cookieCount = 0;
  this.cookiesPerHour = [];
  storeArray.push(this)
}

Store.prototype.numOfCustomers = function(){
  var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  return randomCustomers
}
var seattle = new Store('Seattle', 23, 65, 6.3,);
  // storeArray.push(seattle);
  // seattle.cookiesThisHour()
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 5.6);


for(var j = 0; j < storeArray.length; j++){
  
  for(var i = 0; i < hoursOfOperation.length; i++){
    var customers = storeArray[j].numOfCustomers();
    var cookiesThisHour = Math.floor(customers * storeArray[j].cookieSale)
    storeArray[j].cookieCount += cookiesThisHour
    var cookieString = cookiesThisHour
    storeArray[j].cookiesPerHour.push(cookieString)
  }
  //console.log(totalSales)
}
// console.log(Seattle.cookiesPerHour)
// console.log(Lima.cookiesPerHour)



// document.getTableById for when you are working on your table
var mySection = document.getElementById('listsection')

// for( var j = 0; j < storeArray.length; j++){
//   var ulEl = document.createElement('ul');
//   var liEl = document.createElement('p');
//   liEl.innerText = storeArray[j].name 
//   ulEl.appendChild(liEl)
//   for( var i = 0; i < hoursOfOperation.length; i++ ){
//     liEl = document.createElement('li')
//     liEl.innerText = storeArray[j].cookiesPerHour[i]
//       ulEl.appendChild(liEl)
//   }
//   liEl = document.createElement('li')
//   liEl.innerText = `Total: ${storeArray[j].cookieCount} cookies`
//   ulEl.appendChild(liEl)
//   mySection.appendChild(ulEl)
// }

var table = document.createElement('table')
var tableBody = document.createElement('tbody')
var hoursRow = document.createElement('tr')
tableBody.appendChild(hoursRow)
table.appendChild(tableBody)
var blankCell = document.createElement('td')
hoursRow.appendChild(blankCell)

for( var i =0; i < hoursOfOperation.length; i++){
  var hoursColumn = document.createElement('td')
  hoursColumn.innerText = hoursOfOperation[i]
  hoursRow.appendChild(hoursColumn)
}
var cellTwo = document.createElement('td')
  cellTwo.innerText = 'Daily location total'
  hoursRow.appendChild(cellTwo)
for( var j = 0; j < storeArray.length; j++){
  var row = document.createElement('tr')
  tableBody.appendChild(row)
  var cityColumn = document.createElement('td')
  cityColumn.innerText = storeArray[j].name
  row.appendChild(cityColumn)
  for( var i =0; i < hoursOfOperation.length; i++){
    var column = document.createElement('td')
    column.innerText = storeArray[j].cookiesPerHour[i]
    row.appendChild(column)
  } 
  var totalsCell = document.createElement('td')
  totalsCell.innerText = storeArray[j].cookieCount
  row.appendChild(totalsCell)
}
mySection.appendChild(table)