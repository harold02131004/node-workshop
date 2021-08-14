let brand = "audi";
let color ="red";
let owner ="";

function showOwner(name){
    owner = name;
    return owner;
}

function showBrand(){
    return brand;
}

function showColor(){
    return color;
}

//這邊會另外創建一個新的記憶體位置  並且記錄

module.exports = {
    showOwner,
    showBrand,
    showColor
}


