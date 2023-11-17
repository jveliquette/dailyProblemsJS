// Create a JavaScript object called rectangle that represents a rectangle. The object should have the following properties:

// Properties:

// width (number): The width of the rectangle. Set this equal to 6.
// height (number): The height of the rectangle. Set this equal to 8.
// Functions : Create the following functions that return the specified values:

// Make sure you name them exactly like these names.

// getArea: takes in a rectangle and returns the area of the rectangle (width * height).
// getPerimeter: takes in a rectangle and returns the perimeter of the rectangle (2 * (width + height)).


const rectangle = {
    width: 6,
    height: 8
    };

function getArea(rectangle) {
    let area = (rectangle.width * rectangle.height)
    return area
}
// console.log(getArea(rectangle))

function getPerimeter(rectangle) {
    let perimeter = (2*(rectangle.width + rectangle.height))
    return perimeter
}
// console.log(getPerimeter(rectangle))
