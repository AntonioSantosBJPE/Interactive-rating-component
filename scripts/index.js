function createCardMain (){
let  btnValue=0
    let main = document.querySelector(".main")

        let img = document.createElement("img")
        main.appendChild(img)
        img.classList = "img-star"
        img.src = "assets/img/icon-star.svg"
        

        let h2 = document.createElement("h2")
        main.appendChild(h2)
        h2.classList = "title text-color-grey-6"
        h2.innerText = "How did we do?"

        let p = document.createElement("p")
        main.appendChild(p)
        p.classList = "text text-color-grey-5"
        p.innerText = "Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!"

        let containerBtns = document.createElement("div")
        main.appendChild(containerBtns)
        containerBtns.classList = "box-btns flex"

           for (let i=1; i<=5; i++){
            let button = document.createElement("button")
            containerBtns.appendChild(button)
            button.classList = "btn-number"
            button.innerText = i
            button.value = i

            button.addEventListener("click",function(e){
                btnValue = button.value
                
            })
           }

        let btnSubmit = document.createElement("button")
        main.appendChild(btnSubmit)
        btnSubmit.classList = "btnSubmit"
        btnSubmit.innerText = "SUBMIT"

           btnSubmit.addEventListener("click", function(){
            
            if (btnValue===00){
                alert("No value selected, please select some button!")
            } else{
                main.innerHTML=""
                createCartSubmit (btnValue)
            }   
            
           })

}

function createCartSubmit (value){
    let main = document.querySelector(".main")
    main.classList = "main flex flex-col items-center"

    let img = document.createElement("img")
    main.appendChild(img)
    img.classList = "imgTy"
    img.src = "assets/img/illustration-thank-you.svg"

    let msgSelect = document.createElement("p")
    main.appendChild(msgSelect)
    msgSelect.classList = "msg-select"
    msgSelect.innerText = `You selected ${value} out of 5`


    let h2 = document.createElement("h2")
    main.appendChild(h2)
    h2.classList = "title-ty text-color-grey-6"
    h2.innerText = "Thank you!"

    let p = document.createElement("p")
    main.appendChild(p)
    p.classList = "text-ty text-color-grey-5"
    p.innerText = "We appreciate you talking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"



}


window.addEventListener("DOMContentLoaded", function(){
    createCardMain ()
})

