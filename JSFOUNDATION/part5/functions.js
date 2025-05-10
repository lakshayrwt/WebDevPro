// 1st Function

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;

}
let teaOrder = makeTea("green tea")
console.log(teaOrder);

// 2nd Function

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`
    }
    return confirmOrder()
}
let orderConfirmation = orderTea("Masala Chai")
console.log(orderConfirmation);

// 3rd Function

const calculateTotal = (price, quantity) => {
    return price * quantity
}
let totalCost = calculateTotal(499, 100)
console.log(totalCost);

// 4th Function

function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`
}

function processTeaOrder (teaFunc){
    return teaFunc(`earl grey`)
}

let order = processTeaOrder(makeTea)
console.log(order);

// 5th Function

function createTeaMaker(params) {
    return function (teaType){
        return `making ${teaType}`
    }
}
let teaMaker = createTeaMaker()
console.log(teaMaker("green tea"));
