const carouselClients = {
    carouselItem: document.querySelectorAll('.customers-clients .customers-item'),
    carouselInterval: 3000,
    carouselIndex: 0,
    carouselActivated() {
        let carouselItemArr = carouselClients.carouselItem;
        let carouselLength = carouselItemArr.length - 1
        carouselItemArr[carouselClients.carouselIndex].classList.remove('customers-item-active');
        carouselClients.carouselIndex += 1
        if (carouselClients.carouselIndex > carouselLength) {
            carouselClients.carouselIndex = 0
        }
        carouselItemArr[carouselClients.carouselIndex].classList.add('customers-item-active');
    },
    carouselInit() {
        setInterval(this.carouselActivated, this.carouselInterval)
    }
};

const carouselClientContent = {
    carouselContentRender() {
        const url = "https://randomuser.me/api/?results=7&nat=br"
        fetch(url).then(resp => resp.json())
            .then(data => {
                const results = data.results;

                console.log(results)

                let carouselNameElement = document.querySelectorAll('.customers-clients .customers-item .customers-item-content h4');
                let carouselCountryElement = document.querySelectorAll('.customers-clients .customers-item .customers-item-content h5');


                let nameClients = results.map(client => {
                    let diceClient = client.name.first + " " + client.name.last
                    return diceClient
                });

                let countryClients = results.map(country => {
                    let countryInfor = country.location.state;
                    return countryInfor
                });

                let nameAndLastName = [];
                let countryInfor = []

                for (let i = 0; i < nameClients.length; i++) {
                    nameAndLastName.push(nameClients[i])
                    countryInfor.push(countryClients[i])
                };

                for (let i = 0; i < carouselNameElement.length; i++) {
                    carouselNameElement[i].textContent = nameAndLastName[i];
                    carouselCountryElement[i].textContent = countryInfor[i];
                }

            }).catch(err => {
                console.log(err)
            })
    }
}

export { carouselClients, carouselClientContent }