'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function add(a,b) {
    return a + b;
}

function listCookieSales(storeObject) {
    const listSection = document.getElementById('store-lists');
    const headingEl = document.createElement('h2');
    listSection.appendChild(headingEl);
    headingEl.textContent = storeObject.locationName;
    const ulEl = document.createElement('ul');
    listSection.appendChild(ulEl);
    // added ID based on info from object, just to see how that might work:
    // const storeID = storeObject.locationName.replace(/[^A-Za-z]/g, '').toLowerCase();
    // ulEl.setAttribute('id', storeID);
    for (let i = 0; i < storeObject.dailyCookiesPrediction()[0].length; i++) {
        const liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = hours[i] + ': ' + storeObject.dailyCookiesPrediction()[0][i] + ' cookies';
    }
    const liElTotal = document.createElement('li');
    ulEl.appendChild(liElTotal);
    liElTotal.textContent = 'Total: ' + storeObject.dailyCookiesPrediction()[1] + ' cookies';
}

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

const pioneerSquareStore = {
    locationName: 'Pioneer Square',
    minCustPerHour: 3,
    maxCustPerHour: 24,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 1.2,
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

const powellsStore = {
    locationName: "Powell's",
    minCustPerHour: 11,
    maxCustPerHour: 38,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 3.7,
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

const stJohnsStore = {
    locationName: "St. John's",
    minCustPerHour: 20,
    maxCustPerHour: 38,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 2.3,
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

const waterfrontStore = {
    locationName: 'Waterfront',
    minCustPerHour: 2,
    maxCustPerHour: 16,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 4.6,
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

listCookieSales(pdxAirportStore);
listCookieSales(pioneerSquareStore);
listCookieSales(powellsStore);
listCookieSales(stJohnsStore);
listCookieSales(waterfrontStore);