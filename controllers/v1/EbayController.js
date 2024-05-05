const debug = require('debug')('app:controllers:v1:ebay');
const EbayHelper = require('../../helpers/ebay');


const EbayController = {

    authorizeStart: (req, res, next) => {
        debug('Executing authorize controller');

        try{         
            let authUrl = EbayHelper.ebayInstance.OAuth2.generateAuthUrl();   
            debug('Auth url: ' +  authUrl);
            return res.status(200).json({ 
                error: false,
                auth: authUrl
            });
        }
        catch(error){
            debug(error);
            return res.status(500).json({ 
                error: true,
                message: 'An internal error has occurred'
            });
        }

    },

    authorizeFail: (req, res, next) => {
        return res.status(401).json({ 
            error: true,
            message: 'Authorization failed: Ebay returned an error'
        });
    },

    authorizeSuccess: async (req, res, next) => {
        debug('Executing success controller');

        //STEP 1 -- Get code from ebay
        const code = req.query.code;
        if(!code)
            return res.status(401).json({ 
                error: true,
                message: 'Authorization failed: Ebay returned an empty code'
            });

        try {
            const token = await EbayHelper.ebayInstance.OAuth2.getToken(code);
            eBay.OAuth2.setCredentials(token);
            req.session.token = token;

            return res.status(200).json({ 
                error: false,
                message: 'Successfully authorized'
            });
        } catch (error) {
            debug(error);
            return res.status(500).json({ 
                error: true,
                message: 'Authorize was not successful. Please try again'
            });
        }
    },
};

module.exports = EbayController;