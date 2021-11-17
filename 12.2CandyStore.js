const candyStore = {
	candies: [
		{
			name: "mint gum",
			id: "as12f",
			price: 2,
			amount: 2,
		},
		{
			name: "twix",
			id: "5hd7y",
			price: 5,
			amount: 4,
		},
	],
	cashRegister: 200,
};
function getCandy(candyStore, id) {
	let requestedCandy;
	availableCandy = candyStore.candies;
	availableCandy.forEach(function (candy) {
		if (candy.id === id) {
			requestedCandy = candy;
		}
	});
	if (typeof requestedCandy === "undefined") return "Candy not found";
	return requestedCandy;
}
console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
	let requestedCandy;
	availableCandy = candyStore.candies;
	availableCandy.forEach(function (candy) {
		if (candy.id === id) {
			requestedCandy = candy;
		}
	});
	if (typeof requestedCandy === "undefined") return "Candy not found";
	return `${requestedCandy.name} costs ${requestedCandy.price}$`;
}
console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price) {
	candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}
addCandy(candyStore, "1d10t", "Kwatkit", 7);

function buyCandy(candyStore, id) {
	let requestedCandy;
	availableCandy = candyStore.candies;
	availableCandy.forEach(function (candy) {
		if (candy.id === id) {
			requestedCandy = candy;
			candy.amount -= 1;
		}
	});
	candyStore.cashRegister += requestedCandy.price;
}
buyCandy(candyStore, "1d10t");
console.log(candyStore);