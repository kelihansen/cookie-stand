'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const hourlyTotal = [];
for (let i = 0; i < hours.length; i++) {
    hourlyTotal.push(0);
}
let grandTotal = 0;

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
    let storeTotalCookies = 0;
    for (let i = 0; i < hours.length; i++) {
        const custPerHourPrediction = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
        const cookiesPerHourPrediction = Math.round(custPerHourPrediction * this.avgCookiesPerSale);
        dailyCookiesArray.push(cookiesPerHourPrediction);
        storeTotalCookies += cookiesPerHourPrediction;
        hourlyTotal[i] += cookiesPerHourPrediction;
    }
    return [dailyCookiesArray, storeTotalCookies];
};

const table = document.querySelector('#data table');

function createHeader() {
    const header = document.createElement('thead');
    const tr = document.createElement('tr');
    header.appendChild(tr);
    const emptyCorner = document.createElement('th');
    tr.appendChild(emptyCorner);
    for (let i = 0; i < hours.length; i++) {
        const th = document.createElement('th');
        th.textContent = hours[i];
        th.setAttribute('scope', 'column');
        tr.appendChild(th);
    }
    const storeTotalHeading = document.createElement('th');
    storeTotalHeading.textContent = 'Totals';
    storeTotalHeading.setAttribute('scope', 'column');
    tr.appendChild(storeTotalHeading);
    table.appendChild(header);
}

function addStoreRow(storeObject) {
    const tr = document.createElement('tr');
    const rowHeading = document.createElement('th');
    rowHeading.textContent = storeObject.locationName;
    rowHeading.setAttribute('scope', 'row');
    tr.appendChild(rowHeading);
    const dailyCookiePredictions = storeObject.predictDailyCookies();
    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement('td');
        td.textContent = dailyCookiePredictions[0][i];
        tr.appendChild(td);
    }
    const storeTotal = document.createElement('td');
    storeTotal.textContent = dailyCookiePredictions[1];
    tr.appendChild(storeTotal);
    grandTotal += dailyCookiePredictions[1];
    const body = document.querySelector('#data table tbody');
    body.appendChild(tr);
}

function createFooter() {
    const footer = document.createElement('tfoot');
    const tr = document.createElement('tr');
    footer.appendChild(tr);
    const footerHeading = document.createElement('th');
    footerHeading.setAttribute('scope', 'row');
    footerHeading.textContent = 'Totals';
    tr.appendChild(footerHeading);
    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement('td');
        td.textContent = hourlyTotal[i];
        tr.appendChild(td);
    }
    const sumCorner = document.createElement('td');
    sumCorner.textContent = grandTotal;
    sumCorner.setAttribute('id', 'grand-total')
    tr.appendChild(sumCorner);
    table.appendChild(footer);
}

function buildTable() {
    createHeader();
    const body = document.createElement('tbody');
    table.appendChild(body);
    addStoreRow(pdxAirportStore);
    addStoreRow(pioneerSquareStore);
    addStoreRow(powellsStore);
    addStoreRow(stJohnsStore);
    addStoreRow(waterfrontStore);
    createFooter();
}

buildTable();