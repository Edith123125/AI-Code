console.log("The script is running...");

function calculateRectangleArea(length, width) {
    return length * width;
}
const length = 5;
const width = 10;
const area = calculateRectangleArea(length, width);
console.log(`The area of a rectangle with length ${length} and width ${width} is ${area} square units.`);


function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}
const base = 8;
const height = 6;
const triangleArea = calculateTriangleArea(base, height);
console.log(`The area of a triangle with base ${base} and height ${height} is ${triangleArea} square units.`);


    
  function bookStructure(title, author, genre) {
    return { title, author, genre };
  }
  const book1 = bookStructure("To Kill a Mockingbird", "Harper Lee", "Fiction");
  console.log(`Book 1: ${book1.title} by ${book1.author} (${book1.genre})`);
  const book2 = bookStructure("1984", "George Orwell", "Dystopian Fiction");
  console.log(`Book 2: ${book2.title} by ${book2.author} (${book2.genre})`);







