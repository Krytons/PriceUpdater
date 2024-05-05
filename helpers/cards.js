'use strict'

const debug = require('debug')('app:helpers:cards');
const MAX_BULK_ELEMENTS = 25;
const EbayHelper = require('./ebay');

function processBulk(bulkData){
    const Card = require('../models/Card');

    //STEP 1 -- Build item data
    let apiData = [];
    bulkData.forEach(element => {
        let currentCard = new Card(element);
        apiData.push(currentCard.getInventoryItem());
    });
    ebayApis.sell.inventory.bulkCreateOrReplaceInventoryItem({

    })

}

function updateOrCreateListings(data){
    //STEP 1 -- Split data in array of 25 each
    let dataBulks = [];
    for (let i = 0; i < data.length; i += MAX_BULK_ELEMENTS) {
        dataBulks.push(data.slice(i, i + MAX_BULK_ELEMENTS));
    }
}


async function getCurrentListing(){
    try{
        return await EbayHelper.ebayInstance.trading.GetSellerList({
            Pagination: {
                EntriesPerPage: 200
            },
            StartTimeFrom: "2019-10-12T21:59:59.005Z",
            StartTimeTo: "2024-05-04T09:59:59.005Z",
        });
    }
    catch(error){
        debug(error); 
    }
}


module.exports = {
    getCurrentListing : getCurrentListing
}