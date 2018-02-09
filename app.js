'use strict';

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

const originalStores = [pdxAirportStore, pioneerSquareStore, powellsStore, stJohnsStore, waterfrontStore];

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const hourlyTotal = [];
for (let i = 0; i < hours.length; i++) {
    hourlyTotal.push(0);
}

CookieStore.prototype.predictCookies = function() {
    const hourlyPredictedCookies = [];
    let totalPredictedCookies = 0;
    for (let i = 0; i < hours.length; i++) {
        const custPerHourPrediction = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
        const cookiesPerHourPrediction = Math.round(custPerHourPrediction * this.avgCookiesPerSale);
        hourlyPredictedCookies.push(cookiesPerHourPrediction);
        totalPredictedCookies += cookiesPerHourPrediction;
        hourlyTotal[i] += cookiesPerHourPrediction;
    }
    this.hourlyPredictedCookies = hourlyPredictedCookies;
    this.totalPredictedCookies = totalPredictedCookies;
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

let grandTotal = 0;

function addStoreRow(storeObject) {
    const tr = document.createElement('tr');
    const rowHeading = document.createElement('th');
    rowHeading.textContent = storeObject.locationName;
    rowHeading.setAttribute('scope', 'row');
    tr.appendChild(rowHeading);
    storeObject.predictCookies();
    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement('td');
        td.textContent = storeObject.hourlyPredictedCookies[i];
        tr.appendChild(td);
    }
    const storeTotal = document.createElement('td');
    storeTotal.textContent = storeObject.totalPredictedCookies;
    tr.appendChild(storeTotal);
    grandTotal += storeObject.totalPredictedCookies;
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
    sumCorner.setAttribute('id', 'grand-total');
    tr.appendChild(sumCorner);
    table.appendChild(footer);
}

function buildTable() {
    createHeader();
    const body = document.createElement('tbody');
    table.appendChild(body);
    for (let i = 0; i < originalStores.length; i++) {
        addStoreRow(originalStores[i]);
    }
    createFooter();
}

buildTable();

const form = document.querySelector('form');

form.addEventListener('submit', function() {
    event.preventDefault();
    const locationName = this.location.value;
    const minCustPerHour = parseInt(this.min.value);
    const maxCustPerHour = parseInt(this.max.value);
    const avgCookiesPerSale = parseFloat(this.avg.value);
    const newStore = new CookieStore(locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale);
    addStoreRow(newStore);
    const footer = document.querySelector('tfoot');
    footer.remove();
    createFooter();
    this.reset();
});