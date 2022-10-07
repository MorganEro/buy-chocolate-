const candy = () => {
    const buyChocolate = { 
        type: "Milk Chocolate"
    }
    return buyChocolate
}
let buyChocolate = candy()

const addFlavoring = (flavor) => {   
    buyChocolate.flavor = flavor
    return buyChocolate
}

const makeBarkMixture = () => {
    if (buyChocolate.flavor === "Mint") {
        buyChocolate.mixed = true
    } else {
        buyChocolate.mixed = false
    }
    return buyChocolate
}
const bakeCandy = () => {
    if (buyChocolate.mixed === true) {
        buyChocolate.baked = true
    } else {
        buyChocolate.baked = false
    }
    return buyChocolate
}
const breakBark = () => {
    if (buyChocolate.baked === true) {
        return buyChocolate.break = ['Mint Chocolate Bark Piece', 'Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece',  'Mint Chocolate Bark Piece']
    }

}

addFlavoring("Mint")
makeBarkMixture(buyChocolate)
bakeCandy(buyChocolate)
breakBark(buyChocolate)
console.log (buyChocolate)