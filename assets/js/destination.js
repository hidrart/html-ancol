var destinations = [{
    'name': 'Dufan',
    'time': '10.00 - 17.00',
    'price': 'Rp 225.000',
    'description': 'Dufan adalah theme park yang terletak di Taman Impian Jaya Ancol, yang diresmikan dan dibuka untuk umum pada tahun 1985.',
    'image': '/assets/img/background/hero.jpg'
}, {
    'name': 'Sea World',
    'time': '10.00 - 16.00',
    'price': 'Rp 110.000',
    'description': 'Seaworld Indonesia adalah sebuah miniatur pesona laut yang terdapat dalam kompleks wisata pertama di Taman Impian Jaya Ancol.',
    'image': '/assets/img/background/seaworld.jpg'
}, {
    'name': 'Ocean Dream Samudra',
    'time': '09.30 - 16.30',
    'price': 'Rp 100.000',
    'description': 'Taman hiburan bertema air yang menampilkan pertunjukan bawah laut, akuarium, & pentas hewan laut.',
    'image': '/assets/img/background/ocean.jpeg'
}, {
    'name': 'Atlantis Water Adventure',
    'time': '10.00 - 17.00',
    'price': 'Rp 125.000',
    'description': 'Taman hiburan bertema air yang menampilkan pertunjukan bawah laut, akuarium, & pentas hewan laut.',
    'image': '/assets/img/background/atlantis.jpg'
}, {
    'name': 'Augustine Phinisi',
    'time': '06.00 - 21.00',
    'price': 'Rp 674.000',
    'description': 'Augustine Phinisi bersandar di Taman Impian Jaya Ancol dan menawarkan paket pariwisata Brunch trip dan Sunset trip.',
    'image': '/assets/img/background/augustine.jpeg'
}, {
    'name': 'Faunaland',
    'time': '08.00  - 17.00',
    'price': 'Rp 100.000',
    'description': 'Kebun binatang kecil dengan singa, keledai & kura-kura raksasa, dan pertunjukan burung & zona interaksi satwa.',
    'image': '/assets/img/background/faunaland.jpg'
}, {
    'name': 'Gondola Ancol',
    'time': '09.00  - 18.00',
    'price': 'Rp 60.000',
    'description': 'Gondola Ancol adalah sistem kereta gantung pertama di Indonesia yang menggunakan sistem teknologi yang terkomputerisasi.',
    'image': '/assets/img/background/gondola.jpg'
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
    const destionationContainer = document.getElementById('destination-container')
    destinations.forEach(async (element) => {
        var destination = document.createElement('div')
        destination.classList.add('col-lg-4')
        destination.classList.add('col-md-6')
        destination.classList.add('col-12')
        destination.classList.add('destination-item')
        destination.classList.add('p-.5')
        destination.innerHTML = `<div class="text-center destination-image" style="background-image: url('${element.image}'); background-size: cover; background-position: center;">
        <div style="position: absolute; padding: 1em; right: 0">
            <p style="background-color: #f3c414 ;padding: .3em .8em; border-radius: .5em; color: #ffffff; font-size: .8em; font-weight: 700">${element.time}</p>
            <p style="background-color: #ff6795;padding: .3em .8em; border-radius: .5em; color: #ffffff;  font-size: .8em; font-weight: 700">${element.price}</p>
        </div>
        <div class="destination-detail" style="position: absolute">
            <h3 class="fw-bold my-3">${element.name}</h3>
            <p class="my-3">${element.description}</p>
        </div>
    </div>`
        destionationContainer.appendChild(destination)
    });
});