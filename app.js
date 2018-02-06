'use strict';

function add(a,b) {
    return a + b;
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const pdxAirportStore = {
    locationName: 'PDX Airport',
    minCustPerHour: 23,
    maxCustPerHour: 65,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 6.3,
    predictCookiesPerHour: function() {
        return Math.round(this.predictCustPerHour() * this.avgCookiesPerSale);
    },
    dailyCookiesPrediction: function() {
        const dailyCookiesArray = [];
        let totalCookies = 0;
        for (let i = 0; i < 14; i++) {
            dailyCookiesArray.push(this.predictCookiesPerHour());
            totalCookies = add(totalCookies, dailyCookiesArray[i]);
        }
        return [dailyCookiesArray, totalCookies];
    }

};

function listCookieSales(storeObject) {
    const listSection = document.getElementById('store-lists');
    const newHeading = document.createElement('h2');
    listSection.appendChild(newHeading);
    newHeading.textContent = storeObject.locationName;
    const newUL = document.createElement('ul');
    listSection.appendChild(newUL);
    const storeID = storeObject.locationName.replace(' ', '-');
    newUL.setAttribute('id', storeID);
    const storeList = document.getElementById(storeID);
    for (let i = 0; i < storeObject.dailyCookiesPrediction()[0].length; i++) {
        const newLI = document.createElement('li');
        storeList.appendChild(newLI);
        newLI.textContent = hours[i] + ': ' + storeObject.dailyCookiesPrediction()[0][i] + ' cookies';
    }
    const newLI = document.createElement('li');
    storeList.appendChild(newLI);
    newLI.textContent = 'Total: ' + storeObject.dailyCookiesPrediction()[1] + ' cookies';
}

listCookieSales(pdxAirportStore);

const pioneerSquareStore = {
    minCustPerHour: 3,
    maxCustPerHour: 24,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 1.2
};

const powellsStore = {
    minCustPerHour: 11,
    maxCustPerHour: 38,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 3.7
};

const stJohnsStore = {
    minCustPerHour: 20,
    maxCustPerHour: 38,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 2.3
};

const waterfrontStore = {
    minCustPerHour: 2,
    maxCustPerHour: 16,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 4.6
};