
var boxes = document.querySelectorAll(".hide");

function checkAll(myCheckbox){
    if (myCheckbox.checked == true) {
        boxes.forEach(function (box){
            box.checked == true;
        });
    }
    else{
        boxes.forEach(function (box){
            box.checked == false;
        });
    }
}


