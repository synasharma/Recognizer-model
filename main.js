Webcam.set
({
width:400,
height:350,
image_format:'png',
dest_width:380,
dest_height:285,
png_qality:100
});

cam=document.getElementById("camera");
Webcam.attach(cam);

function take_pic()
{
    Webcam.snap(function(imgurl)
    {
        document.getElementById("result").innerHTML='<img id="new_img" src="'+imgurl+'">';
    });
}

console.log("ml5.version has loaded",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6lqMc32EY/model.json",modelLoaded);

function modelLoaded()
{
    console.log("model_has_Loaded!")
}

function chck_stats()
{
    captured_img=document.getElementById("new_img");
    classifier.classify(captured_img,getresult);
}

function getresult(error,result)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("accuracy_no").innerHTML=(result[0].confidence.toFixed(3))*100+"%"
    }
}