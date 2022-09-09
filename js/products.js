const products = {
    buttonSections: document.querySelectorAll(".products-btns input[type='button']"),
    sectionsItem: document.querySelectorAll('.products-group'),
    changeSection() {
        this.buttonSections.forEach(btn => {
            btn.addEventListener('click', this.changeSectionEvent)
        })
    },
    changeSectionEvent(element) {

        let buttonsClassRemove = products.buttonSections;
        let buttonElement = element.target
        let sectionElement = products.sectionsItem
        let buttonSectionValue = this.value;

        if (buttonSectionValue == "Todos") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[1].classList.remove('btn-product-active')
            buttonsClassRemove[2].classList.remove('btn-product-active')
            buttonsClassRemove[3].classList.remove('btn-product-active')
            buttonsClassRemove[4].classList.remove('btn-product-active')
            buttonsClassRemove[5].classList.remove('btn-product-active')
            buttonsClassRemove[6].classList.remove('btn-product-active')

            sectionElement[0].classList.add('products-group-active')
            sectionElement[1].classList.remove('products-group-active')
            sectionElement[2].classList.remove('products-group-active')
            sectionElement[3].classList.remove('products-group-active')
            sectionElement[4].classList.remove('products-group-active')
            sectionElement[5].classList.remove('products-group-active')
            sectionElement[6].classList.remove('products-group-active')

        }
        else if (buttonSectionValue == "Cadeiras") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[0].classList.remove('btn-product-active')
            buttonsClassRemove[2].classList.remove('btn-product-active')
            buttonsClassRemove[3].classList.remove('btn-product-active')
            buttonsClassRemove[4].classList.remove('btn-product-active')
            buttonsClassRemove[5].classList.remove('btn-product-active')
            buttonsClassRemove[6].classList.remove('btn-product-active')

            sectionElement[1].classList.add('products-group-active')
            sectionElement[0].classList.remove('products-group-active')
            sectionElement[2].classList.remove('products-group-active')
            sectionElement[3].classList.remove('products-group-active')
            sectionElement[4].classList.remove('products-group-active')
            sectionElement[5].classList.remove('products-group-active')
            sectionElement[6].classList.remove('products-group-active')
        } else if (buttonSectionValue == "Mesas") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[0].classList.remove('btn-product-active')
            buttonsClassRemove[1].classList.remove('btn-product-active')
            buttonsClassRemove[3].classList.remove('btn-product-active')
            buttonsClassRemove[4].classList.remove('btn-product-active')
            buttonsClassRemove[5].classList.remove('btn-product-active')
            buttonsClassRemove[6].classList.remove('btn-product-active')

            sectionElement[2].classList.add('products-group-active')
            sectionElement[0].classList.remove('products-group-active')
            sectionElement[1].classList.remove('products-group-active')
            sectionElement[3].classList.remove('products-group-active')
            sectionElement[4].classList.remove('products-group-active')
            sectionElement[5].classList.remove('products-group-active')
            sectionElement[6].classList.remove('products-group-active')
        } else if (buttonSectionValue == "Camas") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[0].classList.remove('btn-product-active')
            buttonsClassRemove[1].classList.remove('btn-product-active')
            buttonsClassRemove[2].classList.remove('btn-product-active')
            buttonsClassRemove[4].classList.remove('btn-product-active')
            buttonsClassRemove[5].classList.remove('btn-product-active')
            buttonsClassRemove[6].classList.remove('btn-product-active')

            sectionElement[3].classList.add('products-group-active')
            sectionElement[0].classList.remove('products-group-active')
            sectionElement[1].classList.remove('products-group-active')
            sectionElement[2].classList.remove('products-group-active')
            sectionElement[4].classList.remove('products-group-active')
            sectionElement[5].classList.remove('products-group-active')
            sectionElement[6].classList.remove('products-group-active')
        } else if (buttonSectionValue == "Racks") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[0].classList.remove('btn-product-active')
            buttonsClassRemove[1].classList.remove('btn-product-active')
            buttonsClassRemove[2].classList.remove('btn-product-active')
            buttonsClassRemove[3].classList.remove('btn-product-active')
            buttonsClassRemove[5].classList.remove('btn-product-active')
            buttonsClassRemove[6].classList.remove('btn-product-active')

            sectionElement[4].classList.add('products-group-active')
            sectionElement[0].classList.remove('products-group-active')
            sectionElement[1].classList.remove('products-group-active')
            sectionElement[2].classList.remove('products-group-active')
            sectionElement[3].classList.remove('products-group-active')
            sectionElement[5].classList.remove('products-group-active')
            sectionElement[6].classList.remove('products-group-active')
        } else if (buttonSectionValue == "Sofás") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[0].classList.remove('btn-product-active')
            buttonsClassRemove[1].classList.remove('btn-product-active')
            buttonsClassRemove[2].classList.remove('btn-product-active')
            buttonsClassRemove[3].classList.remove('btn-product-active')
            buttonsClassRemove[4].classList.remove('btn-product-active')
            buttonsClassRemove[6].classList.remove('btn-product-active')

            sectionElement[5].classList.add('products-group-active')
            sectionElement[0].classList.remove('products-group-active')
            sectionElement[1].classList.remove('products-group-active')
            sectionElement[2].classList.remove('products-group-active')
            sectionElement[3].classList.remove('products-group-active')
            sectionElement[4].classList.remove('products-group-active')
            sectionElement[6].classList.remove('products-group-active')
        } else if (buttonSectionValue == "Armários") {
            buttonElement.classList.add("btn-product-active")
            buttonsClassRemove[0].classList.remove('btn-product-active')
            buttonsClassRemove[1].classList.remove('btn-product-active')
            buttonsClassRemove[2].classList.remove('btn-product-active')
            buttonsClassRemove[3].classList.remove('btn-product-active')
            buttonsClassRemove[4].classList.remove('btn-product-active')
            buttonsClassRemove[5].classList.remove('btn-product-active')

            sectionElement[6].classList.add('products-group-active')
            sectionElement[0].classList.remove('products-group-active')
            sectionElement[1].classList.remove('products-group-active')
            sectionElement[2].classList.remove('products-group-active')
            sectionElement[3].classList.remove('products-group-active')
            sectionElement[4].classList.remove('products-group-active')
            sectionElement[5].classList.remove('products-group-active')
        }
    },
    init() {
        this.changeSection()
    }
}

export { products }