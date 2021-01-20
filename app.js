'use strict'
var hoursOfOperation = ['6:am', '7:am', '8:am', '9:am', '10:am', '11:am', '12:pm', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm']
var Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookieSale: 6.3,
  cookieCount: 0,
  numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers

    
  },
  cookiesPerHour: [],


}

var Tokyo ={
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  cookieSale: 1.2,
  cookieCount: 0,
  numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers
    
  },
  cookiesPerHour: [],
    
   
}

var Dubai = {
  name: 'Dubia',
  minCust: 11,
  maxCust: 38,
  cookieSale: 3.7,
  cookieCount: 0,
  numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers
    
  },
  cookiesPerHour: [],
}

var Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  cookieSale: 2.3,
  cookieCount: 0,
  numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers
    
  },
  cookiesPerHour: [],

}

var Lima ={
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  cookieSale: 5.6,
  cookieCount: 0,
  numOfCustomers: function (){
    var randomCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return randomCustomers
    
  },
  cookiesPerHour: [],
}

var locations = [Seattle, Tokyo, Dubai, Paris, Lima]
for(var j = 0; j < locations.length; j++){
  
  for(var i = 0; i < hoursOfOperation.length; i++){
    var customers = locations[j].numOfCustomers();
    var cookiesThisHour = Math.floor(customers * locations[j].cookieSale)
    locations[j].cookieCount += cookiesThisHour
    var cookieString = `${hoursOfOperation[i]}: ${cookiesThisHour} cookies`
    locations[j].cookiesPerHour.push(cookieString)
  }
  //console.log(totalSales)
}
// console.log(Seattle.cookiesPerHour)
// console.log(Lima.cookiesPerHour)




var mySection = document.getElementById('listsection')

for( var j = 0; j < locations.length; j++){
  var ulEl = document.createElement('ul');
  var liEl = document.createElement('p');
  liEl.innerText = locations[j].name 
  ulEl.appendChild(liEl)
  for( var i = 0; i < hoursOfOperation.length; i++ ){
    liEl = document.createElement('li')
    liEl.innerText = locations[j].cookiesPerHour[i]
      ulEl.appendChild(liEl)
  }
  liEl = document.createElement('li')
  liEl.innerText = `Total: ${locations[j].cookieCount} cookies`
  ulEl.appendChild(liEl)
  mySection.appendChild(ulEl)
}
