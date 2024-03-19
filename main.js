Webcam.attch('#camera');

camera = document.getElementById("camera");

Webcam.set({
    width:350,
    heigth:300,
    image_format : 'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML - '<img id="selfie_image" src-"'+data_uri+'"/>';
    });
}
console.log('m15 version:', m15.version);
classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/8dY09REVy/Model.json',modeILoaded);

function modeILoaded()
{
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}
function check()
{
    img = document.getElementById('selfie_image');
    classifer.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").inerHTML = results[0].confidence.toFixed(3);
        
    }
}