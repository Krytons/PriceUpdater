'use strict'

const ebayApis = require('ebay-api');
const debug = require('debug')('app:helpers:ebay');
const ENV = require('../config/env.js');

const eBay = new ebayApis({
    appId: ENV.EBAY_ID,
    certId: ENV.EBAY_SECRET,
    sandbox: ENV.EBAY_IS_SANDBOX,

    siteId: ebayApis.SiteId.EBAY_US, // required for traditional APIs

    marketplaceId: ebayApis.MarketplaceId.EBAY_US, // default. required for RESTful APIs
    acceptLanguage: ebayApis.Locale.it_IT, // default
    contentLanguage: ebayApis.Locale.it_IT, // default

    devId: ENV.EBAY_DEV_ID,
    ruName:  ENV.EBAY_RUNAME,

    authToken: ENV.EBAY_AUTH_TOKEN
});

eBay.OAuth2.setScope([ 
    'https://api.ebay.com/oauth/api_scope',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment',
    'https://api.ebay.com/oauth/api_scope/sell.inventory.readonly',
    'https://api.ebay.com/oauth/api_scope/sell.inventory'
]);

// eBay.trading.AddItem({
//   "Item": {
//     "Title": "Test Product",
//     "Description": "This is the fourth book in the Harry Potter series. In excellent condition!",
//     "PrimaryCategory": {
//       "CategoryID": 29223
//     },
//     "StartPrice": 0.99,
//     "BuyItNowPrice": 18,
//     "CategoryMappingAllowed": true,
//     "Country": "US",
//     "Currency": "USD",
//     "DispatchTimeMax": 3,
//     "ListingDuration": "Days_7",
//     "ListingType": "Chinese",
//     "PictureDetails": {
//       "PictureURL": "https://mysamplepicture.com/15.jpg"
//     },
//     "PostalCode": 95125,
//     "Quantity": 1,
//     "ItemSpecifics": {
//       "NameValueList": [
//         {
//           "Name": "Topic",
//           "Value": "Fantasy"
//         },
//         {
//           "Name": "Author",
//           "Value": "JK Rowling"
//         },
//         {
//           "Name": "Publisher",
//           "Value": "Arthur A. Levine Books"
//         },
//         {
//           "Name": "Binding",
//           "Value": "Hardcover"
//         },
//         {
//           "Name": "Subject",
//           "Value": "Literature & Fiction"
//         },
//         {
//           "Name": "Language",
//           "Value": "English"
//         }
//       ]
//     },
//     "ReturnPolicy": {
//       "ReturnsAcceptedOption": "ReturnsAccepted",
//       "RefundOption": "MoneyBack",
//       "ReturnsWithinOption": "Days_30",
//       "ShippingCostPaidByOption": "Buyer"
//     },
//     "ShippingDetails": {
//       "ShippingType": "Flat",
//       "ShippingServiceOptions": {
//         "ShippingServicePriority": 1,
//         "ShippingService": "USPSMedia",
//         "ShippingServiceCost": 2.5
//       }
//     }
//   }
// }).then(a => {
//     debug(a);
//   });
 

module.exports = {
    ebayInstance : eBay
};