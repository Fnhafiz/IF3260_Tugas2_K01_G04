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
