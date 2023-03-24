function slideTranslate(index, obj) {
    translationVar[index] = (obj.value / 50);
    obj.nextElementSibling.value = obj.value;
    drawScene();
}

function slideRotate(index, obj) {
    rotationVar[index] = convDegToRad(obj.value);
    obj.nextElementSibling.value = obj.value;
    drawScene();
}

function slideScale(index, obj) {
    scalingVar[index] = obj.value;
    obj.nextElementSibling.value = obj.value;
    drawScene();
}

function slideScaleAll(obj) {
    var delta = parseFloat((obj.value - currentScaleAll).toFixed(1));
    if (parseFloat(scalingVar[0] + delta) <= 5 && parseFloat(scalingVar[1] + delta) <= 5 && parseFloat(scalingVar[2] + delta) <= 5) {
        currentScaleAll = obj.value;
        scalingVar[0] = parseFloat(scalingVar[0] + delta);
        scalingVar[1] = parseFloat(scalingVar[1] + delta);
        scalingVar[2] = parseFloat(scalingVar[2] + delta);
        document.getElementById("scalingX").value = parseFloat(scalingVar[0].toFixed(1));
        document.getElementById("scalingX").nextElementSibling.value = parseFloat(scalingVar[0].toFixed(1));
        document.getElementById("scalingY").value = parseFloat(scalingVar[1].toFixed(1));
        document.getElementById("scalingY").nextElementSibling.value = parseFloat(scalingVar[1].toFixed(1));
        document.getElementById("scalingZ").value = parseFloat(scalingVar[2].toFixed(1));
        document.getElementById("scalingZ").nextElementSibling.value = parseFloat(scalingVar[2].toFixed(1));
        obj.nextElementSibling.value = obj.value;
        drawScene();
    }
}
function camZoom(obj) {
    scalingZoom = obj.value;
    obj.nextElementSibling.value = obj.value;
    drawScene();
}

function camAngle(obj) {
    cameraAngle = obj.value;
    obj.nextElementSibling.value = obj.value;
    drawScene();
}

function changeObject() {
    drawScene();
}

function shading(mo_matrix, view_matrix) {
    var model_view_matrix = []
    model_view_matrix = multiply(mo_matrix, view_matrix);

    var norm_Matrix = [];

    norm_Matrix = invert(model_view_matrix);
    norm_Matrix = transpose(norm_Matrix);
    gl.uniformMatrix4fv(_Nmatrix, false, norm_Matrix);
}

// save all configuration in one array
document.getElementById("save").addEventListener("click", function (e) {
    let fileName = document.getElementById('filename').value;
    savedArray = [];
    savedArray.push(vertices);
    savedArray.push(colors);
    savedArray.push(count);

    if (fileName == "") {
        fileName = "Untitled";
    }
    if (fileName.slice(fileName.length - 5) != ".json") {
        fileName = fileName + ".json";
    }

    download(savedArray, fileName, "text/plain");
});

// save array to json
function download(data, filename, type) {
    var file = new Blob([JSON.stringify(data)], { type: type });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(a.href);
    }, 0);
}

// load json to array
document.getElementById("loadfile").addEventListener("change", function (e) {
    let check_multi = document.getElementById('multiple-load');
    isMultiple = check_multi.checked;
    let newReader = new FileReader();
    newReader.readAsText(e.target.files[0]);

    if (isMultiple) {
        newReader.onload = function (e) {
            let data = JSON.parse(e.target.result);
            for (var i = 0; i < data[0].length; i++) {
                verticesMulti.push(data[0][i]);
            }
            for (var i = 0; i < data[1].length; i++) {
                colorsMulti.push(data[1][i]);
            }
            countMulti += data[2];
            drawScene();
        }
    } else {
        newReader.onload = function (e) {
            let data = JSON.parse(e.target.result);
            verticesLoad.push(data[0]);
            colorsLoad.push(data[1]);
            countLoad.push(data[2]);
        }


        //add to object list
        var lastObject = document.getElementById("confusing");
        var input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("name", "object");
        input.setAttribute("value", "load" + (countLoad.length));
        input.setAttribute("id", "load" + (countLoad.length));
        lastObject.nextElementSibling.after(input);
        var label = document.createElement("label");
        label.setAttribute("for", "load" + (countLoad.length));
        label.innerHTML = e.target.files[0].name;
        input.after(label);
    }
});