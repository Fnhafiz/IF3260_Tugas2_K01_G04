var verticesConfusing = [
    // front, red, cc
    -0.7, 0.5, 0.3,
    -0.7, 0.5, 0.1,
    0.1, 0.5, 0.1,
    0.1, 0.5, 0.3,

    -0.7, 0.5, 0.3,
    -0.7, 0.5, -0.1,
    -0.5, 0.5, -0.1,
    -0.5, 0.5, 0.3,

    -0.3, 0.1, 0.7,
    -0.3, 0.1, 0.5,
    0.5, 0.1, 0.5,
    0.5, 0.1, 0.7,
    
    -0.3, 0.1, 0.7,
    -0.3, 0.1, -0.5,
    -0.1, 0.1, -0.5,
    -0.1, 0.1, 0.7,

    -0.7, -0.3, -0.1,
    -0.7, -0.3, -0.3,
    0.5, -0.3, -0.3,
    0.5, -0.3, -0.1,

    0.5, -0.3, 0.7,
    0.5, -0.3, -0.3,
    0.7, -0.3, -0.3,
    0.7, -0.3, 0.7,

    -0.3, -0.7, -0.7,
    0.3, -0.7, -0.7, 
    0.3, -0.7, -0.5, 
    -0.3, -0.7, -0.5, 
    
    0.1, -0.7, -0.7,
    0.3, -0.7, -0.7, 
    0.3, -0.7, 0.3, 
    0.1, -0.7, 0.3, 

    // top, green, cc
    -0.3, -0.5, -0.5,
    -0.3, -0.7, -0.5,
    0.1, -0.7, -0.5,
    0.1, -0.5, -0.5,

    -0.3, 0.1, -0.5,
    -0.3, -0.7, -0.5,
    -0.1, -0.7, -0.5,
    -0.1, 0.1, -0.5,

    -0.7, -0.1, -0.1,
    -0.7, -0.3, -0.1,
    0.5, -0.3, -0.1,
    0.5, -0.1, -0.1,

    -0.7, 0.5, -0.1,
    -0.7, -0.3, -0.1,
    -0.5, -0.3, -0.1,
    -0.5, 0.5, -0.1,

    -0.7, 0.7, 0.3,
    -0.7, 0.5, 0.3,
    0.3, 0.5, 0.3,
    0.3, 0.7, 0.3,
    
    0.1, 0.7, 0.3,
    0.1, -0.7, 0.3,
    0.3, -0.7, 0.3,
    0.3, 0.7, 0.3,

    -0.3, 0.3, 0.7,
    -0.3, 0.1, 0.7,
    0.7, 0.1, 0.7,
    0.7, 0.3, 0.7,

    0.5, 0.3, 0.7,
    0.5, -0.3, 0.7,
    0.7, -0.3, 0.7,
    0.7, 0.3, 0.7,

    // left, blue, cc
    0.5, 0.1, 0.7,
    0.5, 0.1, 0.5,
    0.5, -0.1, 0.5,
    0.5, -0.1, 0.7,

    0.5, -0.1, 0.7,
    0.5, -0.1, -0.1,
    0.5, -0.3, -0.1,
    0.5, -0.3, 0.7,

    0.1, 0.5, 0.3,
    0.1, 0.5, 0.1,
    0.1, -0.7, 0.1,
    0.1, -0.7, 0.3,

    0.1, -0.5, 0.3,
    0.1, -0.5, -0.5,
    0.1, -0.7, -0.5,
    0.1, -0.7, 0.3,

    -0.3, 0.3, -0.5,
    -0.3, 0.3, -0.7,
    -0.3, -0.7, -0.7,
    -0.3, -0.7, -0.5,

    -0.3, 0.3, 0.7,
    -0.3, 0.3, -0.7,
    -0.3, 0.1, -0.7,
    -0.3, 0.1, 0.7,

    -0.7, 0.7, -0.1,
    -0.7, 0.7, -0.3,
    -0.7, -0.3, -0.3,
    -0.7, -0.3, -0.1,

    -0.7, 0.7, 0.3,
    -0.7, 0.7, -0.3,
    -0.7, 0.5, -0.3,
    -0.7, 0.5, 0.3,

    // back, yellow, c
    0.3, 0.7, 0.3,
    0.3, 0.7, 0.1,
    -0.7, 0.7, 0.1,
    -0.7, 0.7, 0.3,
    
    -0.5, 0.7, 0.3,
    -0.5, 0.7, -0.3,
    -0.7, 0.7, -0.3,
    -0.7, 0.7, 0.3,

    0.7, 0.3, 0.7,
    0.7, 0.3, 0.5,
    -0.3, 0.3, 0.5,
    -0.3, 0.3, 0.7,

    -0.1, 0.3, 0.7,
    -0.1, 0.3, -0.7,
    -0.3, 0.3, -0.7,
    -0.3, 0.3, 0.7,

    0.7, -0.1, -0.1,
    0.7, -0.1, -0.3,
    -0.5, -0.1, -0.3,
    -0.5, -0.1, -0.1,

    0.7, -0.1, 0.5,
    0.7, -0.1, -0.3,
    0.5, -0.1, -0.3,
    0.5, -0.1, 0.5,

    0.3, -0.5, -0.5,
    0.3, -0.5, -0.7,
    -0.1, -0.5, -0.7,
    -0.1, -0.5, -0.5,

    0.3, -0.5, 0.1,
    0.3, -0.5, -0.7,
    0.1, -0.5, -0.7,
    0.1, -0.5, 0.1,

    // right, purple, cc
    0.7, -0.3, 0.7,
    0.7, -0.3, 0.5,
    0.7, 0.3, 0.5,
    0.7, 0.3, 0.7,

    0.7, -0.3, 0.7,
    0.7, -0.3, -0.3,
    0.7, -0.1, -0.3,
    0.7, -0.1, 0.7,

    0.3, -0.7, 0.3,
    0.3, -0.7, 0.1,
    0.3, 0.7, 0.1,
    0.3, 0.7, 0.3,

    0.3, -0.7, 0.3,
    0.3, -0.7, -0.7,
    0.3, -0.5, -0.7,
    0.3, -0.5, 0.3,

    -0.1, -0.5, -0.5,
    -0.1, -0.5, -0.7,
    -0.1, 0.3, -0.7,
    -0.1, 0.3, -0.5,

    -0.1, 0.1, 0.5,
    -0.1, 0.1, -0.7,
    -0.1, 0.3, -0.7,
    -0.1, 0.3, 0.5,

    -0.5, -0.1, -0.1,
    -0.5, -0.1, -0.3,
    -0.5, 0.7, -0.3,
    -0.5, 0.7, -0.1,

    -0.5, 0.5, 0.1,
    -0.5, 0.5, -0.3,
    -0.5, 0.7, -0.3,
    -0.5, 0.7, 0.1,

    // bottom, cyan
    -0.3, -0.5, -0.7,
    0.3, -0.5, -0.7,
    0.3, -0.7, -0.7,
    -0.3, -0.7, -0.7,

    -0.3, 0.3, -0.7,
    -0.1, 0.3, -0.7,
    -0.1, -0.7, -0.7,
    -0.3, -0.7, -0.7,

    -0.7, -0.1, -0.3,
    0.7, -0.1, -0.3,
    0.7, -0.3, -0.3,
    -0.7, -0.3, -0.3,

    -0.7, 0.7, -0.3,
    -0.5, 0.7, -0.3,
    -0.5, -0.3, -0.3,
    -0.7, -0.3, -0.3,

    -0.5, 0.7, 0.1,
    0.3, 0.7, 0.1,
    0.3, 0.5, 0.1,
    -0.5, 0.5, 0.1,

    0.1, 0.7, 0.1,
    0.3, 0.7, 0.1,
    0.3, -0.5, 0.1,
    0.1, -0.5, 0.1,

    -0.1, 0.3, 0.5,
    0.7, 0.3, 0.5,
    0.7, 0.1, 0.5,
    -0.1, 0.1, 0.5,

    0.5, 0.3, 0.5,
    0.7, 0.3, 0.5,
    0.7, -0.1, 0.5,
    0.5, -0.1, 0.5,
];

var colorsConfusing = [
    // red
    0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0,
    0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0,

    0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0,
    0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0,

    0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0,
    0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0,
    
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    // green
    0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0,
    0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0,

    0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0,
    0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0,

    0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0,
    0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

    // blue
    0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25,
    0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25,

    0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5,
    0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5,

    0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75,
    0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75,

    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,

    // red + green
    0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0,
    0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0,

    0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0,
    0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0,

    0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0,
    0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0,
    
    1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,
    1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0,

    // red + blue
    0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25,
    0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25,

    0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5,
    0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5,

    0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75,
    0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75,

    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

    // green + blue
    0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25,
    0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25, 0, 0.25, 0.25,

    0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5,
    0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, 0.5,

    0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75,
    0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75, 0, 0.75, 0.75,

    0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
];

var countConfusing = 48;