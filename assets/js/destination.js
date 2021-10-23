var destinations = [{
    'name': 'Dufan',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/hero.jpg'
}, {
    'name': 'Sea World',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/seaworld.jpg'
}, {
    'name': 'Ocean Dream Samudra',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/ocean.jpeg'
}, {
    'name': 'Atlantis Water Adventure',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/atlantis.jpg'
}, {
    'name': 'Augustine Phinisi',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/augustine.jpeg'
}, {
    'name': 'Faunaland',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/faunaland.jpg'
}, {
    'name': 'Gondola Ancol',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
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
        destination.innerHTML = `<div class=" text-center destination-image" style="background-image: url('${element.image}'); background-size: cover; background-position: center;">
            <div class="destination-detail">
                <h3 class="fw-bold my-3">${element.name}</h3>
                <p>${element.description}</p>
            </div>
        </div>`
        destionationContainer.appendChild(destination)
    });
});