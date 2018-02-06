'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore (locationName, minCustPerHour, maxCustPerHour, avgCookiesPerSale) {
    this.locationName = locationName;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
}

const pdxAirportStore = new CookieStore('PDX Airport', 23, 65, 6.3);

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

const pioneerSquareStore = {
    locationName: 'Pioneer Square',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerSale: 1.2,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    predictCookiesPerHour: function() {
        return Math.round(this.predictCustPerHour() * this.avgCookiesPerSale);
    },
    predictDailyCookies: function() {
        const dailyCookiesArray = [];
        let totalCookies = 0;
        for (let i = 0; i < hours.length; i++) {
            dailyCookiesArray.push(this.predictCookiesPerHour());
            totalCookies += dailyCookiesArray[i];
        }
        return [dailyCookiesArray, totalCookies];
    }
};

const powellsStore = {
    locationName: 'Powell\'s',
    minCustPerHour: 11,
    maxCustPerHour: 38,
    avgCookiesPerSale: 3.7,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    predictCookiesPerHour: function() {
        return Math.round(this.predictCustPerHour() * this.avgCookiesPerSale);
    },
    predictDailyCookies: function() {
        const dailyCookiesArray = [];
        let totalCookies = 0;
        for (let i = 0; i < hours.length; i++) {
            dailyCookiesArray.push(this.predictCookiesPerHour());
            totalCookies += dailyCookiesArray[i];
        }
        return [dailyCookiesArray, totalCookies];
    }
};

const stJohnsStore = {
    locationName: 'St. John\'s',
    minCustPerHour: 20,
    maxCustPerHour: 38,
    avgCookiesPerSale: 2.3,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    predictCookiesPerHour: function() {
        return Math.round(this.predictCustPerHour() * this.avgCookiesPerSale);
    },
    predictDailyCookies: function() {
        const dailyCookiesArray = [];
        let totalCookies = 0;
        for (let i = 0; i < hours.length; i++) {
            dailyCookiesArray.push(this.predictCookiesPerHour());
            totalCookies += dailyCookiesArray[i];
        }
        return [dailyCookiesArray, totalCookies];
    }
};

const waterfrontStore = {
    locationName: 'Waterfront',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    avgCookiesPerSale: 4.6,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    predictCookiesPerHour: function() {
        return Math.round(this.predictCustPerHour() * this.avgCookiesPerSale);
    },
    predictDailyCookies: function() {
        const dailyCookiesArray = [];
        let totalCookies = 0;
        for (let i = 0; i < hours.length; i++) {
            dailyCookiesArray.push(this.predictCookiesPerHour());
            totalCookies += dailyCookiesArray[i];
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
    // added ID based on info from object, just to see how that might work:
    // const storeID = storeObject.locationName.replace(/[^A-Za-z]/g, '').toLowerCase();
    // newUL.setAttribute('id', storeID);
    const dailyCookiesArray = storeObject.predictDailyCookies()[0];
    for (let i = 0; i < dailyCookiesArray.length; i++) {
        const newLI = document.createElement('li');
        newUL.appendChild(newLI);
        newLI.textContent = hours[i] + ': ' + dailyCookiesArray[i] + ' cookies';
    }
    const newLastLI = document.createElement('li');
    newUL.appendChild(newLastLI);
    newLastLI.textContent = 'Total: ' + storeObject.predictDailyCookies()[1] + ' cookies';
}

pdxAirportStore.predictDailyCookies();
listCookieSales(pdxAirportStore);
listCookieSales(pioneerSquareStore);
listCookieSales(powellsStore);
listCookieSales(stJohnsStore);
listCookieSales(waterfrontStore);