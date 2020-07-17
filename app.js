const rect = {
	perimeter: (x, y) => (2*(x+y)),
	area: (x, y) => (x*y)
};

function solveRect(l,b) {
    console.log("rectangle with the value l = " + l + " and b = " + b);
    if (l === 0 || b === 0) {
    	console.log('Remember put correct value for l and b, dimensions should be greater then zero. ');
    }

   
    else {
	    console.log("The area of the rectangle is " + rect.area(l,b));
	    console.log("The perimeter of the rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,0);







