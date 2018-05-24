var words = ['body', 'spray', 'limit', 'elite'];
const result = words.filter(word => 'spray' !== word);

// console.log(result);

var foodItems = [
	{
		id: 123,
		food: 'rice',
		calories: 21
	},
	{
		food: 'beans',
		calories: 212
	},
	{
		food: 'juice',
		calories: 1234
	}
];

var found = foodItems.map(item => {
	if (item.id == 123) {
		item.food = 'abc';
	}
	return item;
});
console.log(found);
// var foodRes = foodItems.filter(foodI => foodI.food !== 'rice');
// console.log(foodRes);
