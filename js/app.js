let car_gallery = [
    {
        name: "VMD-Convertible",
        price: "$175,000",
        image: "./img/exotic-1.jpg"
        },
    {
        name: "Terrestrial-V3",
        price: "$79,500",
        image: "./img/exotic-2.jpg"
        },
    {
        name: "Vhoek-Utility",
        price: "$80,000",
        image: "./img/exotic-3.jpg"
        },
    {
        name: "Tour-GX",
        price: "$92,000",
        image: "./img/mp-1.jpg"
        },
    {
        name: "Xtra-TXT",
        price: "$65,000",
        image: "./img/mp-2.jpg"
        },
    {
        name: "Paragon-G4",
        price: "$47,000",
        image: "./img/mp-3.jpg"
        },
    {
        name: "Ranger-7X",
        price: "$50,800",
        image: "./img/rugged-1.jpg"
        },
    {
        name: "Cruiz-11",
        price: "$39,000",
        image: "./img/rugged-2.jpg"
        },
    {
        name: "Royx-SUV",
        price: "$77,500",
        image: "./img/rugged-3.jpg"
        },
    {
        name: "BMX-Nano",
        price: "$43,000",
        image: "./img/sports-1.jpg"
        },
    {
        name: "Racer-4V",
        price: "$29,000",
        image: "./img/sports-2.jpg"
        },
    {
        name: "M2-Excel",
        price: "$25,500",
        image: "./img/sports-3.jpg"
        },
];
let carGallery = document.getElementById('cars');
let html = '';
car_gallery.forEach(e => {
    html += `
        <div class="bg-light my-3 py-3 col-12 col-lg-4 col-md-6 h-100">
            <div class="bg-primary rounded p-3 h-75">
                <img src="${e.image}" alt="" class="h-100 w-100 rounded">
            </div>
            <div class="text-center">
                <h4 class="py-3">${e.name}</h4>
                <h4>${e.price}</h4>
            </div>
        </div>
    `
    carGallery.innerHTML = html;
});