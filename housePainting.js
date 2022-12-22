function housePainting (input) {

    let x = Number(input[0]); 
    let y = Number(input[1]); 
    let h = Number(input[2]); 

    let sideWall = x * y; 
    let window = 1.5 * 1.5; 
    let twoWalls = 2 * sideWall - 2 * window;

    let backWall = x * x; 
    let enterance = 1.2 * 2;
    let backWallAndFrontWall = backWall * 2 - enterance; 

    let totalArea = twoWalls + backWallAndFrontWall; 
    let greenPaint = totalArea / 3.4; 


    let ceilRectangle = 2 * (x * y); 
    let ceilTriangle = 2 * (x * h / 2); 
    let totalCeilArea = ceilRectangle + ceilTriangle; 
    let redPaint = totalCeilArea / 4.3; 
    
    console.log (greenPaint.toFixed(2)); 
    console.log (redPaint.toFixed(2));
    

}

housePainting ([6, 10, 5.2])