const products = {
    buttonSections: document.querySelectorAll(".products-btns input[type='button']"),
    changeSection(){
        this.buttonSections.forEach(btn =>{
            btn.addEventListener('click', this.changeSectionEvent)
        })
    },
    changeSectionEvent(element){
        let buttonElement = element.target
        let buttonSectionValue = this.value;
            if(buttonSectionValue == "Todos"){
                console.log("Todos foi clicado")
                buttonElement.classList.add("btn-product-active")
            }
            else if(buttonSectionValue == "Cadeiras"){
                console.log("Cadeiras foi clicado")
                buttonElement.classList.add("btn-product-active")
            } else if(buttonSectionValue == "Mesas"){
                console.log("Mesas foi clicado")
                buttonElement.classList.add("btn-product-active")
            } else if(buttonSectionValue == "Camas"){
                console.log("Camas foi clicado")
                buttonElement.classList.add("btn-product-active")
            } else if(buttonSectionValue == "Racks"){
                console.log("Rack foi clicado")
                buttonElement.classList.add("btn-product-active")
            } else if(buttonSectionValue == "Sofás"){
                console.log("Sofás foi clicado")
                buttonElement.classList.add("btn-product-active")
            } else if(buttonSectionValue == "Armários"){
                buttonElement.classList.add("btn-product-active")
                console.log("armário foi clicado")
            }
    },
    init(){
        this.changeSection()
    }
}

export { products }