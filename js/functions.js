document.addEventListener("DOMContentLoaded",main());



function main(){
    const shoppingCart = document.querySelector(".shoppingCar");
    const misCompras = document.getElementById("misCompras");
    const shoppingCarCloseButtom = document.getElementById("closeButtom")
    const shoppingCartDeleteIcon = document.querySelectorAll('.shoppingCar__iconDelete')
    const addToCarButtom = document.querySelectorAll(".store__cartButton")
    const shoppingCounter = document.querySelector(".nav__shoppingCounter")
    console.log(shoppingCartDeleteIcon)
    misCompras.addEventListener("click",(e)=>(
        shoppingCart.classList.add("shoppingCar--show"))
    )
    
    shoppingCarCloseButtom.addEventListener("click",(e)=>(
        shoppingCart.classList.remove("shoppingCar--show"))
    )
    
    
    shoppingCartDeleteIcon.forEach(element => {
        element.addEventListener("click",(e)=>{
            const parentElemt = element.parentElement;
            console.log(parentElemt)
            parentElemt.remove();
        }
    
        )
        
    })
    
    addToCarButtom.forEach(element=>{
        element.addEventListener("click",()=>{
            generateShoppingCarProduct(element);
                
    
            
    
        })
        
    })
    function chekShoppingCar(){
        const counter = document.querySelectorAll(".shoppingCar__product")
        if(counter.length == 0){
            shoppingCounter.classList.remove("nav__shoppingCounter--show")
            
        }else{
            shoppingCounter.classList.add("nav__shoppingCounter--show")
            shoppingCounter.innerText=counter.length
        }
    }
    
    function generateShoppingCarProduct(element){
        const granpaElement = element.parentElement.parentElement;
        const titleOri = granpaElement.querySelector(".store__cartTitle");
        const priceOri = granpaElement.querySelector(".store__cartPrice");
        const imgOri = granpaElement.querySelector(".store__productImg");
        const title = document.createElement("p")
        const price = document.createElement("p")
        const img = document.createElement("img")
        const deleteIcon = document.createElement("img")
        deleteIcon.setAttribute("src","img/delete_8690802.png")
        const shoppingCartDeleteIcon =document.createElement("i")
        shoppingCartDeleteIcon.classList.add("shoppingCar__iconDelete")
        shoppingCartDeleteIcon.appendChild(deleteIcon)
        title.innerText = titleOri.innerText
        title.classList.add("shoppingCar__productTitle")
        price.innerText = priceOri.innerText
        price.classList.add("shoppingCar__productPrice")
        img.classList.add("shoppingCar__productImg")
        img.setAttribute('src',imgOri.getAttribute("src"))
        
            const shoppingCarItem = document.createElement("div");
            shoppingCarItem.classList.add("shoppingCar__product")
            shoppingCarItem.appendChild(img)
            shoppingCarItem.appendChild(title)
            shoppingCarItem.appendChild(price)
            shoppingCarItem.appendChild(shoppingCartDeleteIcon)
            shoppingCart.appendChild(shoppingCarItem)
            chekShoppingCar()
            shoppingCartDeleteIcon.addEventListener("click",()=>{
                parentElement = shoppingCartDeleteIcon.parentElement
                parentElement.remove()
                chekShoppingCar()
            })
    }
    chekShoppingCar()
}