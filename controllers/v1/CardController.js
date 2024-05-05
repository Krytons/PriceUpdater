const debug = require('debug')('app:controllers:v1:card');


const CardController = {

    /**
     * Hanldes csv file checks
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     * @returns 
     */
    upload: (req, res, next) => {
        debug('Executing upload controller');

        if(!req.file)
            return res.status(400).json({ 
                error: true,
                message: "No file uploaded" 
            });
            
        return res.status(200).json({ 
            error: true,
            message: "Given file has been uploaded" 
        });
    },

    test: async (req, res, next) => {
        debug('Executing upload controller');

        const cardHelper = require('../../helpers/cards');
        let result = await cardHelper.getCurrentListing();
            
        return res.status(200).json({ 
            error: true,
            data : result,
        });
    },

    process: async (req, res, next) => {
        debug('Executing process controller');

        const Card = require('../../models/Card');
        const storageHelper = require('../../helpers/storage');
        const cardHelper = require('../../helpers/cards');

        return storageHelper.readCsv().then(async (csvData, err) => {
            if(!csvData || err)
            return res.status(404).json({ 
                error: true,
                message: "No file found for processing" 
            });
            else if (csvData.length < 1){
                return res.status(200).json({ 
                    error: false,
                    message: "CSV file to process was empty and has been removed" 
                });
            }


            return res.status(200).json({ 
                error: false,
                rows: csvData.length,
                message: "Processed " + csvData.length + " file rows. The file has been deleted" 
            });
        });
    }
};

module.exports = CardController;