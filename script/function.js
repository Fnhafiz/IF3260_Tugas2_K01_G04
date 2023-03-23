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
    scalingVar[index] = (obj.value);
    obj.nextElementSibling.value = obj.value;
    drawScene();
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