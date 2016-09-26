'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//variable declaration

for (var i = 0; i < 10; i++) {}
var name = 'Magesh';
//name = 'Suresh';


//arrow functions
/*let fn = () => {
	console.log("fn is invoked");
};
fn();*/

var add = function add(x, y) {
	return x + y;
};
console.log(add(100, 200));

var numbers = [10, 4, 9, 2, 8, 7];

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

var evenNumbers = numbers.filter(function (n) {
	return n % 2 === 0;
});
console.log('evenNumbers = ', evenNumbers);

var halfNumbers = numbers.map(function (n) {
	return n / 2;
});
console.log('halfNumbers = ', halfNumbers);

var sumOfNumbers = numbers.reduce(function (n1, n2) {
	return n1 + n2;
});
console.log("sumOfNumbers = ", sumOfNumbers);

var largestNumber = numbers.reduce(function (n1, n2) {
	return n1 > n2 ? n1 : n2;
});
console.log('largestNumber = ', largestNumber);

//function enhancements
function addFn() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

	return x + y;
}
console.log(addFn());

var fn = function fn(x, y) {
	for (var _len = arguments.length, numbers = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		numbers[_key - 2] = arguments[_key];
	}

	console.dir(numbers);
};

var x = 10;
var y = 20;


var emp = {
	id: 100,
	ename: 'Magesh',
	salary: 10000
};

var eid = emp.id;
var empname = emp.ename;


console.log(eid, empname);

var Product = function () {
	function Product(id, name, cost) {
		_classCallCheck(this, Product);

		this.id = id;
		this.name = name;
		this.cost = cost;
	}

	_createClass(Product, [{
		key: 'display',
		value: function display() {
			console.log(this.id, this.name, this.cost);
		}
	}]);

	return Product;
}();

var pen = new Product(100, "Pen", 20);
pen.display();

var PerishableProduct = function (_Product) {
	_inherits(PerishableProduct, _Product);

	function PerishableProduct(id, name, cost, expDate) {
		_classCallCheck(this, PerishableProduct);

		var _this = _possibleConstructorReturn(this, (PerishableProduct.__proto__ || Object.getPrototypeOf(PerishableProduct)).call(this, id, name, cost));

		_this.expDate = expDate;
		return _this;
	}
	/*display(){
 	console.log(this.id, this.name, this.cost, this.expDate);
 }*/

	_createClass(PerishableProduct, null, [{
		key: 'isPerishable',
		value: function isPerishable(obj) {
			return obj instanceof PerishableProduct;
		}
	}]);

	return PerishableProduct;
}(Product);

var bread = new PerishableProduct(200, 'Bread', 50, new Date("15-Oct-2016"));
bread.display();
console.dir(bread);