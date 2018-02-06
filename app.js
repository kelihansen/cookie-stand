'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
    this.locationName = locationName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
}

const pdxAirportStore = new CookieStore('PDX Airport', 23, 65, 6.3);
const pioneerSquareStore = new CookieStore('Pioneer Square', 3, 24, 1.2);
const powellsStore = new CookieStore('Powell\'s', 11, 38, 3.7);
const stJohnsStore = new CookieStore('St. John\'s', 20, 38, 2.3);
const waterfrontStore = new CookieStore('Waterfront', 2, 16, 4.6);


CookieStore.prototype.predictDailyCookies = function() {
    const dailyCookiesArray = [];
    let totalCookies = 0;
    for (let i = 0; i < hours.length; i++) {
        const custPerHourPrediction = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
        const cookiesPerHourPrediction = Math.round(custPerHourPrediction * this.avgCookiesPerSale);
        dailyCookiesArray.push(cookiesPerHourPrediction);
        totalCookies += dailyCookiesArray[i];
    }
    return [dailyCookiesArray, totalCookies];
};

// The header row and footer row are each created in their own stand-alone function
// Create a buildTable function to add header, each cookie stand's row, and footer row to the table

function createHeader() {
    const header = document.createElement('thead');
    for (let i = 0; i < hours.length; i++) {
        const th = document.createElement('th');
        th.textContent = hours[i];
        header.appendChild(th);
    }
    const table = document.querySelector('#cookie-predictions table');
    table.appendChild(header);
}

createHeader();

// function buildTable() {
//     const table = document.querySelector('#cookie-predictions table');
// }

// function listSales(storeObject) {
//     const listSection = document.querySelector('#cookie-predictions table');
//     const newHeading = document.createElement('h2');
//     listSection.appendChild(newHeading);
//     newHeading.textContent = storeObject.locationName;
//     const newUL = document.createElement('ul');
//     listSection.appendChild(newUL);
//     // added ID based on info from object, just to see how that might work:
//     // const storeID = storeObject.locationName.replace(/[^A-Za-z]/g, '').toLowerCase();
//     // newUL.setAttribute('id', storeID);
//     const dailyCookiesArray = storeObject.predictDailyCookies()[0];
//     for (let i = 0; i < dailyCookiesArray.length; i++) {
//         const newLI = document.createElement('li');
//         newUL.appendChild(newLI);
//         newLI.textContent = hours[i] + ': ' + dailyCookiesArray[i] + ' cookies';
//     }
//     const newLastLI = document.createElement('li');
//     newUL.appendChild(newLastLI);
//     newLastLI.textContent = 'Total: ' + storeObject.predictDailyCookies()[1] + ' cookies';
// }

// pdxAirportStore.predictDailyCookies();
// listSales(pdxAirportStore);

// pioneerSquareStore.predictDailyCookies();
// listSales(pioneerSquareStore);

// powellsStore.predictDailyCookies();
// listSales(powellsStore);

// stJohnsStore.predictDailyCookies();
// listSales(stJohnsStore);

// waterfrontStore.predictDailyCookies();
// listSales(waterfrontStore);