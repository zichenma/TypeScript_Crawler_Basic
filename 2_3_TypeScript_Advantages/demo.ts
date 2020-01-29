interface Point {x: number, y: number}
// or type Point = {x: number, y: number}

function tsDemo (data: Point) {
//or function tsDemo (data: {x: number, y: number}) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}
// TS 的静态类型可以在开发过程中，发现潜在的问题 
// got error message: 
tsDemo()