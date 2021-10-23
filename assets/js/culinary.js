var culinary = [{
    'name': 'The Pier By Kalaha',
    'time': '10.00 - 22.00 ',
    'price': 'Rp.40.000 - Rp.240.000',
    'description': 'Resto dengan konsep Wharf dengan makanan yang unik dan menarik dengan harga yang bersahabat untuk pengunjung.',
    'image': '/assets/img/background/pierbykalaha.jpg'
}, {
    'name': 'Colombus Cafe Dermaga',
    'time': '07.00 - 23.00',
    'price': 'Rp.20.000 - Rp.230.000',
    'description': 'Resto dengan konsep outdoor, sangat tepat untuk pergi hangout bareng teman atau kerabat.',
    'image': '/assets/img/background/colombus.jpg'
}, {
    'name': 'Taman Santap Rumah Kayu',
    'time': '10.00 - 22.00',
    'price': 'Rp.10.000 - Rp.250.000',
    'description': 'Restoran unik yang memberikan sensasi menyantap makanan & minuman di dalam sebuah pesawat Boeing 737.',
    'image': '/assets/img/background/tamansantap.png'
}, {
    'name': 'Le Bridge',
    'time': '07.00 - 23.00',
    'price': 'Rp.20.000 - Rp.230.000',
    'description': 'Restoran yang berlokasi di tengah laut Ancol. terkenal dengan jembatan panjangnya yang akan memberikn nuansa romantis.',
    'image': '/assets/img/background/lebridge.jpg'
}, {
    'name': 'Seaside Suki Ancol',
    'time': '12.00 - 22.00',
    'price': 'Rp.40.000 - Rp.150.000',
    'description': 'Restoran thailand dengan buffet service. Menu yang diisajikan yaitu hot pot khas thailand dengan pilihan kuah yang beragam.',
    'image': '/assets/img/background/seaside.jpg'
}, {
    'name': 'Nyiur Cafe Putri duyung ',
    'time': '10.00  - 23.00',
    'price': 'Rp.35.000 - Rp.200.000',
    'description': 'Retoran dengan menu masakan Indonesia, Asia hingga Western. Selain itu restoran ini memilki view pantai yang sangat indah.',
    'image': '/assets/img/background/nyiur.jpg'
}, {
    'name': 'Talaga Sampireun Ancol',
    'time': '10.00  - 22.00',
    'price': 'Rp.39.000 - Rp.109.000',
    'description': 'Restoran khas Sunda yang berkonsep telaga yang dikelilingi oleh Saung. Yang memiliki kesan tradisional pada restoran ini.',
    'image': '/assets/img/background/talaga.jpg'
}, {
    'name': 'Segarra Ancol',
    'time': '12.00  - 24.00',
    'price': 'Rp.30.000 - Rp.630.000',
    'description': 'Restaurant dengan konsep western yang akan memberikan kesan khas asli western pada restoran ini.',
    'image': '/assets/img/background/segarra.jpg'
}]
async function ready(fn) {
    if (document.readyState != 'loading') {
        await fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading') fn();
        });
    }
}
window.ready(async function() {
    const culinaryContainer = document.getElementById('culinary-container')
    culinary.forEach(async (element) => {
        var food = document.createElement('div')
        food.classList.add('col-lg-4')
        food.classList.add('col-md-6')
        food.classList.add('col-12')
        food.classList.add('destination-item')
        food.classList.add('p-.5')
        food.innerHTML = `<div class="text-center destination-image" style="background-image: url('${element.image}'); background-size: cover; background-position: center;">
        <div style="position: absolute; padding: 1em; right: 0">
            <p style="background-color: #f3c414 ;padding: .3em .8em; border-radius: .5em; color: #ffffff; font-size: .8em; font-weight: 700">${element.time}</p>
            <p style="background-color: #ff6795;padding: .3em .8em; border-radius: .5em; color: #ffffff;  font-size: .8em; font-weight: 700">${element.price}</p>
        </div>
        <div class="destination-detail" style="position: absolute">
            <h3 class="fw-bold my-3">${element.name}</h3>
            <p class="my-3">${element.description}</p>
        </div>
    </div>`
        culinaryContainer.appendChild(food)
    });
});