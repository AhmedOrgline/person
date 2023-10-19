let mySpan = document.querySelectorAll(".controle li")

mySpan.forEach(function(ele){
    ele.addEventListener('click',function(ele){
        window.localStorage.setItem("color",ele.currentTarget.dataset.color)
        document.styleSheets[0].rules[1].style[0] = window.localStorage.getItem("color")
        document.styleSheets[0].rules[1].style[1] = window.localStorage.getItem("color")
        document.styleSheets[0].rules[1].style[2] = window.localStorage.getItem("color")
        document.styleSheets[0].rules[1].style[2];
    })
})
