class Shape {
    move(x, y) {
        console.log("x::", x, "y::", y);        
    }
}

const user = new Shape();
user.move("A", "B");