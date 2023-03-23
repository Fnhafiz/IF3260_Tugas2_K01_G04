0.1, 0.3, 0.5, 0.7


var vertices = [
    // Back

    // Front
    -0.3, -0.7, -0.7,
    0.3, -0.7, -0.7, 
    0.3, -0.7, -0.5, 
    -0.3, -0.7, -0.5, 
    
    0.1, -0.7, -0.7,
    0.3, -0.7, -0.7, 
    0.3, -0.7, 0.3, 
    0.1, -0.7, 0.3, 

    -0.7, -0.3, -0.1,
    -0.7, -0.3, -0.3,
    0.5, -0.3, -0.3,
    0.5, -0.3, -0.1,

    0.5, -0.3, 0.7,
    0.5, -0.3, -0.3,
    0.7, -0.3, -0.3,
    0.7, -0.3, 0.7,

    -0.3, 0.1, 0.7,
    -0.3, 0.1, 0.5,
    0.5, 0.1, 0.5,
    0.5, 0.1, 0.7,
    
    -0.3, 0.1, 0.7,
    -0.3, 0.1, -0.5,
    -0.1, 0.1, -0.5,
    -0.1, 0.1, 0.7,

    -0.7, 0.5, 0.3,
    -0.7, 0.5, 0.1,
    0.1, 0.5, 0.1,
    0.1, 0.5, 0.3,

    -0.7, 0.5, 0.3,
    -0.7, 0.5, -0.1,
    -0.5, 0.5, -0.1,
    -0.5, 0.5, 0.3,

    // Bottom

    // Top
    -0.3, 0.3, 0.7,
    -0.3, 0.1, 0.7,
    0.7, 0.1, 0.7,
    0.7, 0.3, 0.7,

    0.5, 0.3, 0.7,
    0.5, -0.3, 0.7,
    0.7, -0.3, 0.7,
    0.7, 0.3, 0.7,

    -0.7, 0.7, 0.3,
    -0.7, 0.5, 0.3,
    0.3, 0.5, 0.3,
    0.3, 0.7, 0.3,
    
    0.1, 0.7, 0.3,
    0.1, -0.7, 0.3,
    0.3, -0.7, 0.3,
    0.3, 0.7, 0.3,

    -0.7, -0.1, -0.1,
    -0.7, -0.3, -0.1,
    0.5, -0.3, -0.1,
    0.5, -0.1, -0.1,

    -0.7, 0.5, -0.1,
    -0.7, -0.3, -0.1,
    -0.5, -0.3, -0.1,
    -0.5, 0.5, -0.1,

    -0.3, -0.5, -0.5,
    -0.3, -0.7, -0.5,
    0.1, -0.7, -0.5,
    0.1, -0.5, -0.5,

    -0.3, 0.1, -0.5,
    -0.3, -0.7, -0.5,
    -0.1, -0.7, -0.5,
    -0.1, 0.1, -0.5,

    // Left
    -0.7, 0.7, -0.1,
    -0.7, 0.7, -0.3,
    -0.7, -0.3, -0.3,
    -0.7, -0.3, -0.1,

    -0.7, 0.7, 0.3,
    -0.7, 0.7, -0.3,
    -0.7, 0.5, -0.3,
    -0.7, 0.5, 0.3,

    -0.3, 0.3, -0.5,
    -0.3, 0.3, -0.7,
    -0.3, -0.7, -0.7,
    -0.3, -0.7, -0.5,

    -0.3, 0.3, 0.7,
    -0.3, 0.3, -0.7,
    -0.3, 0.1, -0.7,
    -0.3, 0.1, 0.7,

    0.1, 0.5, 0.3,
    0.1, 0.5, 0.1,
    0.1, -0.7, 0.1,
    0.1, -0.7, 0.3,

    0.1, -0.5, 0.3,
    0.1, -0.5, -0.5,
    0.1, -0.7, -0.5,
    0.1, -0.7, 0.3,

    0.5, 0.1, 0.7,
    0.5, 0.1, 0.5,
    0.5, -0.1, 0.5,
    0.5, -0.1, 0.7,

    0.5, -0.1, 0.7,
    0.5, -0.1, -0.1,
    0.5, -0.3, -0.1,
    0.5, -0.3, 0.7,

    // Right

];

var colors = [
    //Red Back-Front
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,

    0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0,
    0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0,

    0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0,
    0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0,
    
    0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0,
    0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0,

    //Green Bottom-Top
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,

    0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0,
    0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0,
    
    0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0,
    0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0,

    0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0,
    0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0,

    //Blue Left-Right
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,

    0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75,
    0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75, 0, 0, 0.75,

    0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5,
    0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5, 0, 0, 0.5,

    0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25,
    0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25, 0, 0, 0.25,
];

// Create and store data into vertex buffer
var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// Create and store data into color buffer
var color_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

var _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
var _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
var _position = gl.getAttribLocation(shaderProgram, "position");
gl.vertexAttribPointer(_position, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(_position);

gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
var _color = gl.getAttribLocation(shaderProgram, "color");
gl.vertexAttribPointer(_color, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(_color);
gl.useProgram(shaderProgram);

var proj_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
var mo_matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

var rotate_matrix = multiply(xRotation(-1),zRotation(1));
var translate_matrix = translation(0, 0, 0)
var model_matrix = multiply(rotate_matrix, translate_matrix)

gl.depthFunc(gl.LEQUAL);

gl.clearColor(0, 0, 0, 0);
gl.clearDepth(1.0);
gl.viewport(0.0, 0.0, canvas.width, canvas.height);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

gl.enable(gl.CULL_FACE);
gl.enable(gl.DEPTH_TEST);

gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
gl.uniformMatrix4fv(_Mmatrix, false, rotate_matrix);


// draw hollow object
function drawCube() {
    for (var i = 0; i < 24; i++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i * 4, 4);
    }
}

drawCube();