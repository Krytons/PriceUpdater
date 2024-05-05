'use strict'

class Card {

    constructor (data) {
        this.cardmarketId = data.cardmarketId;
        this.quantity = data.quantity;
        this.name = data.name;
        this.set = data.set;
        this.setCode = data.setCode;
        this.cn = data.cn;
        this.condition = data.condition;
        this.language = data.language;
        this.isPlayset = data.isPlayset;
        this.isFirstEd = data.isFirstEd;
        this.isReverseHolo = data.isReverseHolo;
        this.isSigned = data.isSigned;
        this.price = data.price;
        this.comment = data.comment;
        this.nameDE = data.nameDE;
        this.nameES = data.nameES;
        this.nameFR = data.nameFR;
        this.nameIT = data.nameIT;
        this.rarity = data.rarity;
        this.listedAt = data.listedAt;
    }

    getInventoryItem(){
        return {
            sku: `B${this.cardmarketId}s`, 
            locale: 'en_US',
            product: {
                title: this.name,
                description: this.toString(),
                imageUrls: [/* Inserire l'URL dell'immagine dell'oggetto qui */],
            },
            condition: this.condition,
            conditionDescription: this.condition, 
            availability: {
                shipToLocationAvailability: {
                    quantity: this.quantity, 
                },
            },
        };
    }

    toString() {
        return `Card [${this.name}] - Quantity: ${this.quantity}, Price: ${this.price}, Condition: ${this.condition}`;
    }
}


module.exports = Card;