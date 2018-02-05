'use strict';

const pdxAirportStore = {
    minCustPerHour: 23,
    maxCustPerHour: 65,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 6.3,
};

const pioneerSquareStore = {
    minCustPerHour: 3,
    maxCustPerHour: 24,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 1.2,
};

const powellsStore = {
    minCustPerHour: 11,
    maxCustPerHour: 38,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 3.7,
};

const stJohnsStore = {
    minCustPerHour: 20,
    maxCustPerHour: 38,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 2.3,
};

const waterfrontStore = {
    minCustPerHour: 2,
    maxCustPerHour: 16,
    predictCustPerHour: function() {
        return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    },
    avgCookiesPerSale: 4.6,
};

