//variable declaration

for(let i=0; i<10; i++){

}
const name = 'Magesh';
//name = 'Suresh';


//arrow functions
/*let fn = () => {
	console.log("fn is invoked");
};
fn();*/

let add = (x,y) => x + y;
console.log(add(100,200));

let numbers = [10,4,9,2,8,7];

/*let evenNumbers = [];
for(let i =0; i<numbers.length; i++)
	if (numbers[i] % 2 === 0)
		evenNumbers.push(numbers[i]);
*/

/*let evenNumbers = numbers.filter(function(n){
	return n  % 2 === 0;
});
*/

console.log('numbers = ', numbers);

let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('evenNumbers = ', evenNumbers);

let halfNumbers = numbers.map(n => n / 2);
console.log('halfNumbers = ', halfNumbers);

var sumOfNumbers = numbers.reduce((n1, n2) => n1 + n2);
console.log("sumOfNumbers = ", sumOfNumbers);

var largestNumber = numbers.reduce((n1 , n2) => n1 > n2 ? n1 : n2);
console.log('largestNumber = ', largestNumber);

//function enhancements
function addFn(x = 10,y = 10){
	return x + y;
}
console.log(addFn());

let fn = function fn(x, y, ...numbers){
	console.dir(numbers);
}


let [x,y] = [10,20];

let emp = {
	id : 100,
	ename : 'Magesh',
	salary : 10000
};

let {id : eid, ename : empname} = emp;

console.log(eid, empname);


class Product{
	constructor(id, name, cost){
		this.id = id;
		this.name = name;
		this.cost = cost;
	}
	display(){
		console.log(this.id, this.name, this.cost);
	}
}

let pen = new Product(100, "Pen", 20);
pen.display();

class PerishableProduct extends Product{
	constructor(id, name, cost, expDate){
		super(id, name, cost);
		this.expDate = expDate;
	}
	/*display(){
		console.log(this.id, this.name, this.cost, this.expDate);
	}*/

	static isPerishable(obj){
		return obj instanceof PerishableProduct;
	}
}

var bread = new PerishableProduct(200, 'Bread', 50, new Date("15-Oct-2016"));
bread.display();
console.dir(bread);



