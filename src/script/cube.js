var verticesCube = [
    // Back
    -0.2, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, -0.18, -0.2, -0.2, -0.18, -0.2,
    -0.2, 0.18, -0.2, 0.2, 0.18, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.2,
    -0.2, -0.2, -0.2, -0.18, -0.2, -0.2, -0.18, 0.2, -0.2, -0.2, 0.2, -0.2,
    0.18, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, 0.2, -0.2, 0.18, 0.2, -0.2,

    // Front
    -0.2, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.18, 0.2, -0.2, -0.18, 0.2,
    -0.2, 0.18, 0.2, 0.2, 0.18, 0.2, 0.2, 0.2, 0.2, -0.2, 0.2, 0.2,
    -0.2, -0.2, 0.2, -0.18, -0.2, 0.2, -0.18, 0.2, 0.2, -0.2, 0.2, 0.2,
    0.18, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, 0.2, 0.2, 0.18, 0.2, 0.2,

    // Bottom
    -0.2, -0.2, 0.2, -0.18, -0.2, 0.2, -0.18, -0.2, -0.2, -0.2, -0.2, -0.2,
    0.18, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.18, -0.2, -0.2,
    -0.2, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.2, 0.18, -0.2, -0.2, 0.18,
    -0.2, -0.2, -0.2, 0.2, -0.2, -0.2, 0.2, -0.2, -0.18, -0.2, -0.2, -0.18,

    // Top
    -0.2, 0.2, 0.2, -0.18, 0.2, 0.2, -0.18, 0.2, -0.2, -0.2, 0.2, -0.2,
    0.18, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, -0.2, 0.18, 0.2, -0.2,
    -0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.18, -0.2, 0.2, 0.18,
    -0.2, 0.2, -0.2, 0.2, 0.2, -0.2, 0.2, 0.2, -0.18, -0.2, 0.2, -0.18,

    // Left
    -0.2, -0.2, 0.2, -0.2, -0.2, 0.18, -0.2, 0.2, 0.18, -0.2, 0.2, 0.2,
    -0.2, -0.2, -0.2, -0.2, -0.2, -0.18, -0.2, 0.2, -0.18, -0.2, 0.2, -0.2,
    -0.2, -0.2, 0.2, -0.2, -0.2, -0.2, -0.2, -0.18, -0.2, -0.2, -0.18, 0.2,
    -0.2, 0.2, 0.2, -0.2, 0.18, 0.2, -0.2, 0.18, -0.2, -0.2, 0.2, -0.2,

    // Right
    0.2, -0.2, 0.2, 0.2, -0.2, 0.18, 0.2, 0.2, 0.18, 0.2, 0.2, 0.2,
    0.2, -0.2, -0.2, 0.2, -0.2, -0.18, 0.2, 0.2, -0.18, 0.2, 0.2, -0.2,
    0.2, -0.2, 0.2, 0.2, -0.2, -0.2, 0.2, -0.18, -0.2, 0.2, -0.18, 0.2,
    0.2, 0.2, 0.2, 0.2, 0.18, 0.2, 0.2, 0.18, -0.2, 0.2, 0.2, -0.2,

    // Inner Back
    -0.2, -0.2, -0.18, 0.2, -0.2, -0.18, 0.2, -0.18, -0.18, -0.2, -0.18, -0.18,
    -0.2, 0.18, -0.18, 0.2, 0.18, -0.18, 0.2, 0.2, -0.18, -0.2, 0.2, -0.18,
    -0.2, -0.2, -0.18, -0.18, -0.2, -0.18, -0.18, 0.2, -0.18, -0.2, 0.2, -0.18,
    0.18, -0.2, -0.18, 0.2, -0.2, -0.18, 0.2, 0.2, -0.18, 0.18, 0.2, -0.18,

    // Inner Front
    -0.2, -0.2, 0.18, 0.2, -0.2, 0.18, 0.2, -0.18, 0.18, -0.2, -0.18, 0.18,
    -0.2, 0.18, 0.18, 0.2, 0.18, 0.18, 0.2, 0.2, 0.18, -0.2, 0.2, 0.18,
    -0.2, -0.2, 0.18, -0.18, -0.2, 0.18, -0.18, 0.2, 0.18, -0.2, 0.2, 0.18,
    0.18, -0.2, 0.18, 0.2, -0.2, 0.18, 0.2, 0.2, 0.18, 0.18, 0.2, 0.18,

    // Inner Bottom
    -0.2, -0.18, 0.2, -0.18, -0.18, 0.2, -0.18, -0.18, -0.2, -0.2, -0.18, -0.2,
    0.18, -0.18, 0.2, 0.2, -0.18, 0.2, 0.2, -0.18, -0.2, 0.18, -0.18, -0.2,
    -0.2, -0.18, 0.2, 0.2, -0.18, 0.2, 0.2, -0.18, 0.18, -0.2, -0.18, 0.18,
    -0.2, -0.18, -0.2, 0.2, -0.18, -0.2, 0.2, -0.18, -0.18, -0.2, -0.18, -0.18,

    // Inner Top
    -0.2, 0.18, 0.2, -0.18, 0.18, 0.2, -0.18, 0.18, -0.2, -0.2, 0.18, -0.2,
    0.18, 0.18, 0.2, 0.2, 0.18, 0.2, 0.2, 0.18, -0.2, 0.18, 0.18, -0.2,
    -0.2, 0.18, 0.2, 0.2, 0.18, 0.2, 0.2, 0.18, 0.18, -0.2, 0.18, 0.18,
    -0.2, 0.18, -0.2, 0.2, 0.18, -0.2, 0.2, 0.18, -0.18, -0.2, 0.18, -0.18,

    // Inner Left
    -0.18, -0.2, 0.2, -0.18, -0.2, 0.18, -0.18, 0.2, 0.18, -0.18, 0.2, 0.2,
    -0.18, -0.2, -0.2, -0.18, -0.2, -0.18, -0.18, 0.2, -0.18, -0.18, 0.2, -0.2,
    -0.18, -0.2, 0.2, -0.18, -0.2, -0.2, -0.18, -0.18, -0.2, -0.18, -0.18, 0.2,
    -0.18, 0.2, 0.2, -0.18, 0.18, 0.2, -0.18, 0.18, -0.2, -0.18, 0.2, -0.2,

    // Inner Right
    0.18, -0.2, 0.2, 0.18, -0.2, 0.18, 0.18, 0.2, 0.18, 0.18, 0.2, 0.2,
    0.18, -0.2, -0.2, 0.18, -0.2, -0.18, 0.18, 0.2, -0.18, 0.18, 0.2, -0.2,
    0.18, -0.2, 0.2, 0.18, -0.2, -0.2, 0.18, -0.18, -0.2, 0.18, -0.18, 0.2,
    0.18, 0.2, 0.2, 0.18, 0.18, 0.2, 0.18, 0.18, -0.2, 0.18, 0.2, -0.2,
];

var colorsCube = [
    //Red 
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    //Green Inner
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

    //Blue Inner
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,

    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,

    // Magenta Inner
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,

    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1,
];

var countCube = 48;