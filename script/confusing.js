var vertices = [
    // problem: 2-4, 6-9, 7-11

    // front, red, cc
    // f4l, 5-4
    -0.7, 0.5, 0.3,
    -0.7, 0.5, 0.1,
    0.1, 0.5, 0.1,
    0.1, 0.5, 0.3,

    // f4p, 5-8
    -0.7, 0.5, 0.3,
    -0.7, 0.5, -0.1,
    -0.5, 0.5, -0.1,
    -0.5, 0.5, 0.3,

    // f3l, 2-1
    -0.3, 0.1, 0.7,
    -0.3, 0.1, 0.5,
    0.5, 0.1, 0.5,
    0.5, 0.1, 0.7,
    
    // f3p, 2-11
    -0.3, 0.1, 0.7,
    -0.3, 0.1, -0.5,
    -0.1, 0.1, -0.5,
    -0.1, 0.1, 0.7,

    // f2l, 7-9
    -0.7, -0.3, -0.1,
    -0.7, -0.3, -0.3,
    0.5, -0.3, -0.3,
    0.5, -0.3, -0.1,

    // f2p, 3-9
    0.5, -0.3, 0.7,
    0.5, -0.3, -0.3,
    0.7, -0.3, -0.3,
    0.7, -0.3, 0.7,

    // f1l, 10-12
    -0.3, -0.7, -0.7,
    0.3, -0.7, -0.7, 
    0.3, -0.7, -0.5, 
    -0.3, -0.7, -0.5, 
    
    // f1p, 6-12
    0.1, -0.7, -0.7,
    0.3, -0.7, -0.7, 
    0.3, -0.7, 0.3, 
    0.1, -0.7, 0.3, 

    // top, green, cc
    // t4l, 10-12
    -0.3, -0.5, -0.5,
    -0.3, -0.7, -0.5,
    0.1, -0.7, -0.5,
    0.1, -0.5, -0.5,

    // t4p, 11-10
    -0.3, 0.1, -0.5,
    -0.3, -0.7, -0.5,
    -0.1, -0.7, -0.5,
    -0.1, 0.1, -0.5,

    // t3l, 7-9
    -0.7, -0.1, -0.1,
    -0.7, -0.3, -0.1,
    0.5, -0.3, -0.1,
    0.5, -0.1, -0.1,

    // t3p, 8-7
    -0.7, 0.5, -0.1,
    -0.7, -0.3, -0.1,
    -0.5, -0.3, -0.1,
    -0.5, 0.5, -0.1,

    // t2l, 6-4
    -0.7, 0.7, 0.3,
    -0.7, 0.5, 0.3,
    0.3, 0.5, 0.3,
    0.3, 0.7, 0.3,
    
    // t2p, 4-6
    0.1, 0.7, 0.3,
    0.1, -0.7, 0.3,
    0.3, -0.7, 0.3,
    0.3, 0.7, 0.3,

    // t1l, 2-1
    -0.3, 0.3, 0.7,
    -0.3, 0.1, 0.7,
    0.7, 0.1, 0.7,
    0.7, 0.3, 0.7,

    // t1p, 1-3
    0.5, 0.3, 0.7,
    0.5, -0.3, 0.7,
    0.7, -0.3, 0.7,
    0.7, 0.3, 0.7,

    // left, blue, cc
    // l4l, 1-3
    0.5, 0.1, 0.7,
    0.5, 0.1, 0.5,
    0.5, -0.1, 0.5,
    0.5, -0.1, 0.7,

    // l4p, 3-9
    0.5, -0.1, 0.7,
    0.5, -0.1, -0.1,
    0.5, -0.3, -0.1,
    0.5, -0.3, 0.7,

    // l3p, 4-6
    0.1, 0.5, 0.3,
    0.1, 0.5, 0.1,
    0.1, -0.7, 0.1,
    0.1, -0.7, 0.3,

    // l3l, 6-12
    0.1, -0.5, 0.3,
    0.1, -0.5, -0.5,
    0.1, -0.7, -0.5,
    0.1, -0.7, 0.3,

    // l2l, 11-10
    -0.3, 0.3, -0.5,
    -0.3, 0.3, -0.7,
    -0.3, -0.7, -0.7,
    -0.3, -0.7, -0.5,

    // l2p, 2-11
    -0.3, 0.3, 0.7,
    -0.3, 0.3, -0.7,
    -0.3, 0.1, -0.7,
    -0.3, 0.1, 0.7,

    // l1l, 8-7
    -0.7, 0.7, -0.1,
    -0.7, 0.7, -0.3,
    -0.7, -0.3, -0.3,
    -0.7, -0.3, -0.1,

    // l1p, 5-8
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

var colors = [
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

// create and store data into vertex buffer
var vertex_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

// create and store data into color buffer
var color_buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// lookup uniforms
var _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
var _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");

// lookup attributes
var _position = gl.getAttribLocation(shaderProgram, "position");
var _color = gl.getAttribLocation(shaderProgram, "color");

// inisialisasi matriks transformasi geometri
var proj_matrix = [ 1, 0, 0, 0, 
                    0, 1, 0, 0, 
                    0, 0, 1, 0, 
                    0, 0, 0, 1  ];
var mo_matrix = [   1, 0, 0, 0, 
                    0, 1, 0, 0, 
                    0, 0, 1, 0, 
                    0, 0, 0, 1  ];
var translationVar = [0, 0, 0];
var rotationVar = [-Math.PI/4, 0, Math.PI/4];
var scalingVar = [1, 1, 1];

// initialize
document.getElementById("rotationX").value = convRadToDeg(rotationVar[0]);
document.getElementById("rotationX").nextElementSibling.value = convRadToDeg(rotationVar[0]);
document.getElementById("rotationY").value = convRadToDeg(rotationVar[1]);
document.getElementById("rotationY").nextElementSibling.value = convRadToDeg(rotationVar[1]);
document.getElementById("rotationZ").value = convRadToDeg(rotationVar[2]);
document.getElementById("rotationZ").nextElementSibling.value = convRadToDeg(rotationVar[2]);
document.getElementById("translationX").value = translationVar[0];
document.getElementById("translationX").nextElementSibling.value = translationVar[0];
document.getElementById("translationY").value = translationVar[1];
document.getElementById("translationY").nextElementSibling.value = translationVar[1];
document.getElementById("translationZ").value = translationVar[2];
document.getElementById("translationZ").nextElementSibling.value = translationVar[2];

drawScene();

// perbarui sesuai slider

function drawScene() {
    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.vertexAttribPointer(_position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_position);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.vertexAttribPointer(_color, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_color);

    // perbarui sesuai slider
    var mo_matrix = [   1, 0, 0, 0, 
                        0, 1, 0, 0, 
                        0, 0, 1, 0, 
                        0, 0, 0, 1  ];
    mo_matrix = translate(mo_matrix, translationVar[0], translationVar[1], translationVar[2]);
    mo_matrix = xRotate(mo_matrix, rotationVar[0]);
    mo_matrix = yRotate(mo_matrix, rotationVar[1]);
    mo_matrix = zRotate(mo_matrix, rotationVar[2]);
    mo_matrix = scale(mo_matrix, scalingVar[0], scalingVar[1], scalingVar[2]);
    
    gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
    gl.uniformMatrix4fv(_Mmatrix, false, mo_matrix);
    
    // gambar hollow object
    for (var i = 0; i < 48; i++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i * 4, 4);
    }
}