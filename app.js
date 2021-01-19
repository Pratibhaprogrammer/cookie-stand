'use strict'
var hoursOfOperation = ['6:am', '7:am', '8:am', '9:am', '10:am', '11:am', '12:pm', '1:pm', '2:pm', '3:pm', '4:pm', '5:pm', '6:pm', '7:pm']
var Seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookieSale: 6.3,
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
    var cookieString = `${hoursOfOperation[i]}: ${cookiesThisHour} cookies`
    locations[j].cookiesPerHour.push(cookieString)
  }
  
}
console.log(Seattle.cookiesPerHour)
console.log(Lima.cookiesPerHour)




document.addEventListener('DOMContentLoaded', (event) => {
  var cookieList = document.getElementById('enter');
  cookieList.innerHTMNL += "<li> additional HTML code</li>"
})