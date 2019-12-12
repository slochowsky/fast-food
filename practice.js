const customerOrder = (drink, sandwhich, side, dessert) => {
let meal = `{
    "sandwhich": "${sandwhich}",
      "side": "${side}",
      "drink": "${drink}",
      "dessert": "${dessert}"
    }`
    return meal
}

const takeOutBag = customerOrder("Ultimate Slammer", "Fudge sundae",
 "Mr. Pepper", "Potato wedges")

console.log(takeOutBag)