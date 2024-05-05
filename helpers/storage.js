'use strict'

const multer = require('multer');

//Setup multer
const storage = multer.diskStorage({
    destination: function(req, file, next){
        next(null, 'uploads/');
    },
    filename: function(req, file, next){
        next(null, Date.now() + '-' + file.originalname); //This function keeps current filename
    }
});
const upload = multer({ storage: storage });

/**
 * Function that returns csv rows
 * @param {*} filePath 
 * @param {*} next 
 */
async function readCsv(filePath, next){
    const path = require('path');
    const csv = require('csv-parser');
    const fs = require('fs');

    return new Promise((resolve, reject) =>  {
        let basePath = path.resolve(__dirname, '../uploads');

        if(!filePath){
            let currentDirectory = fs.readdirSync(basePath);
            let currentFilePath = currentDirectory.find(file => {
                const currentFilePath = path.join(basePath, file);
                return fs.statSync(currentFilePath).isFile();
            });

            if (!currentFilePath)
                resolve(false);
            else
                filePath = path.join(basePath, currentFilePath);
        }

        let results = [];
        fs.createReadStream(filePath).pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Remove file after read
            fs.unlink(filePath, (err) => {
                if(err)
                    debug('Deleting error occurred');
            });

            resolve(results);
        })
        .on('error', reject);
    })

    
} 


module.exports = {
    upload : upload,
    readCsv : readCsv,
} 