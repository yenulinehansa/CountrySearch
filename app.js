


function SearchName() {
    let countryName = document.getElementById("name").value;
    fetch("https://restcountries.com/v3.1/name/" + countryName)
        .then(res => res.json())
        .then(data => {
            let root = document.getElementById("root");
            data.forEach(element => {
                root.innerHTML = `<section>
                                    <img src="${element.flags.png}" alt="">
                                    <h3>${element.name.official}</h3>
                                    <p>${element.capital[0]}</p>
                                    <p>${element.region}</p>

                            </section>

            `
            });


        })

}
/*
localStorage.setItem("name", "saman");

let customerName = localStorage.getItem("name");

console.log(customerName);
*/