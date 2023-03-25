var checked = document.querySelector('input[name="object"]:checked').value;
var current = checked;

var vertices = [];
var colors = [];
var normals = [];
var verticesLoad = [];
var colorsLoad = [];
var verticesMulti = [];
var colorsMulti = [];
var count = 0;
var countLoad = [];
var countMulti = 0;

vertices = verticesCube.slice();
colors = colorsCube.slice();
count = countCube;

// create vertex and color buffer
var vertex_buffer = gl.createBuffer();
var color_buffer = gl.createBuffer();
var normal_buffer = gl.createBuffer();

// lookup uniforms
var _Pmatrix = gl.getUniformLocation(shaderProgram, "Pmatrix");
var _Vmatrix = gl.getUniformLocation(shaderProgram, "Vmatrix");
var _Mmatrix = gl.getUniformLocation(shaderProgram, "Mmatrix");
var _Nmatrix = gl.getUniformLocation(shaderProgram, "Nmatrix");

// lookup attributes
var _position = gl.getAttribLocation(shaderProgram, "position");
var _color = gl.getAttribLocation(shaderProgram, "color");
var _normal = gl.getAttribLocation(shaderProgram, "normal");

// inisialisasi matriks transformasi geometri
var proj_matrix = [1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1];
var mo_matrix = [1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1];
var view_matrix = [1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, -2, 1
];
var translationVar = [0, 0, 0];
var rotationVar = [0, 0, 0];
var scalingVar = [1, 1, 1];
var currentScaleAll = 1;
var scalingZoom = 1;
var cameraAngle = 0;

// orthographic
var left = -1;
var right = 1;
var bottom = -1;
var topo = 1;
var near = -400;
var far = 400;

// perspective
var fieldOfView = convDegToRad(60);
var aspect = canvas.width / canvas.height;
var zNear = 1;
var zFar = 400;

// oblique
var theta = convDegToRad(60);
var phi = convDegToRad(89);

// initialize sliders
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
document.getElementById("scalingX").value = scalingVar[0];
document.getElementById("scalingX").nextElementSibling.value = scalingVar[0];
document.getElementById("scalingY").value = scalingVar[1];
document.getElementById("scalingY").nextElementSibling.value = scalingVar[1];
document.getElementById("scalingZ").value = scalingVar[2];
document.getElementById("scalingZ").nextElementSibling.value = scalingVar[2];
document.getElementById("cam-zoom").value = scalingZoom;
document.getElementById("cam-zoom").nextElementSibling.value = scalingZoom;
document.getElementById("cam-angle").value = cameraAngle;
document.getElementById("cam-angle").nextElementSibling.value = cameraAngle;
document.getElementById("fieldOfView").value = convRadToDeg(fieldOfView);
document.getElementById("fieldOfView").nextElementSibling.value = convRadToDeg(fieldOfView);
drawScene();

function drawScene() {
    // object
    checked = document.querySelector('input[name="object"]:checked').value;
    if (checked != current) {
        current = checked;
        vertices.length = 0
        colors.length = 0;
        if (checked == "cube") {
            vertices = verticesCube.slice();
            colors = colorsCube.slice();
            count = countCube;
        }
        else if (checked == "confusing") {
            vertices = verticesConfusing.slice();
            colors = colorsConfusing.slice();
            count = countConfusing;
        }
        else if (checked == "multiple") {
            vertices = verticesMulti.slice();
            colors = colorsMulti.slice();
            count = countMulti;
        }
        else {
            id = checked.slice(-1);
            vertices = verticesLoad[id].slice();
            colors = colorsLoad[id].slice();
            count = countLoad[id];
        }
    }

    if ((checked == current) && (checked == "multiple")) {
        vertices = verticesMulti.slice();
        colors = colorsMulti.slice();
        count = countMulti;
    }

    // projection
    projChecked = document.querySelector('input[name="projection"]:checked').value;
    if (projChecked == "orthographic") {
        proj_matrix = orthographic(left, right, bottom, topo, near, far);
    }
    else if (projChecked == "perspective") {
        proj_matrix = perspective(fieldOfView, aspect, zNear, zFar);
    }
    else {
        proj_matrix = oblique(left, right, bottom, topo, near, far, theta, phi);
    }
    console.log(proj_matrix);

    let check_shading = document.getElementById('shading');
    isShading = check_shading.checked;

    // store data into vertex and color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // create and store data into color buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // normal = getNormalVector(vertices);
    normal = normalShade;
    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normal), gl.STATIC_DRAW);


    gl.viewport(0.0, 0.0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    // gl.depthFunc(gl.LEQUAL);

    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.vertexAttribPointer(_position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_position);

    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.vertexAttribPointer(_color, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_color);

    gl.bindBuffer(gl.ARRAY_BUFFER, normal_buffer);
    gl.vertexAttribPointer(_normal, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(_normal);

    // perbarui sesuai slider
    var mo_matrix = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1];
    var view_matrix = [1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];
    mo_matrix = translate(mo_matrix, translationVar[0], translationVar[1], translationVar[2]);
    mo_matrix = xRotate(mo_matrix, rotationVar[0]);
    mo_matrix = yRotate(mo_matrix, rotationVar[1]);
    mo_matrix = zRotate(mo_matrix, rotationVar[2]);
    mo_matrix = scale(mo_matrix, scalingVar[0], scalingVar[1], scalingVar[2]);
    view_matrix = scale(view_matrix, scalingZoom, scalingZoom, scalingZoom);
    view_matrix = yRotate(view_matrix, convDegToRad(cameraAngle));

    gl.uniformMatrix4fv(_Pmatrix, false, proj_matrix);
    gl.uniformMatrix4fv(_Vmatrix, false, view_matrix);
    gl.uniformMatrix4fv(_Mmatrix, false, mo_matrix);

    if (isShading) {
        shading(mo_matrix, view_matrix);
    } else {
        var norm_matrix = [0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            1, 0, 0, 0];
        gl.uniformMatrix4fv(_Nmatrix, false, norm_matrix);
    }

    // gambar hollow object
    for (var i = 0; i < count; i++) {
        gl.drawArrays(gl.TRIANGLE_FAN, i * 4, 4);
    }
}

