/* eslint-disable no-unused-vars */
import * as categoriesAPI from "./fakeCategoryList";


const fishes = [
    {
        fishID: "5b21ca3eeb7f6fbccd471809",
        title: "Coral",
        category:  { fishID: "5b21ca3eeb7f6fbccd471820", name: "Sea" },
        quantity: 0,
        price: 500,
        netWeight: 4
    },

    {
        fishID: "5b21ca3eeb7f6fbccd471810",
        title: "Rupchada",
        category:  { fishID: "5b21ca3eeb7f6fbccd471822", name: "Deshi" },
        quantity: 0,
        price: 1000,
        netWeight: 3
    },

    {
        fishID: "5b21ca3eeb7f6fbccd471811",
        title: "Suri",
        category:  { fishID: "5b21ca3eeb7f6fbccd471823", name: "Shutki" },
        quantity: 0,
        price: 1000,
        netWeight: 3
    }
];



export function getFishes(){
    return fishes;
}


//sum of total weight
export const getWeight = Object.values(fishes).reduce((w, { netWeight }) => w + netWeight, 0);



export function getPrice(){
    let price = fishes.map(p => p.price);
    return price;
}


// //lets sum the grand total price
// export function getGrandTotal(){
//     let price = fishes.map(st => st.price);
//     const totalPrice =  price.reduce((previousValue, currentValue) => {
//         return previousValue+currentValue; 
//     }, 0);
//     return totalPrice;
// }

export function getFish(id){
    return fishes.find(f => f.fishID === id);
}

export function saveFish(fish){
    let fishInDb = fishes.find(f => f.fishID === fish.fishID) || {};
    fishInDb.name = fish.name;
    fishInDb.category = categoriesAPI.categories.find(f => f.fishID === fish.categoryId);
    fishInDb.quantity = fish.quantity;
    fishInDb.price = fish.price;

    if (!fishInDb.fishID){
        fishInDb.fishID = Date.now();
        fishes.push(fishInDb);
    }

    return fishInDb;
}

export function deleteFish(id){
    let fishInDb = fishes.find(f => f.fishID === id);
    fishes.splice(fishes.indexOf(fishInDb), 1);
    return fishInDb;
}