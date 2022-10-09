function mostrar(attr){
    var obj= document.getElementById(attr)
    if (obj.classList.contains('hide')){
        obj.removeAttribute("class","hide")
        obj.setAttribute("class","show")
    }else{
        obj.removeAttribute("class","show")
        obj.setAttribute("class","hide")
    }
    
}
