var culinary = [{
    'name': 'Rendang',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/rendang.jpg'
}, {
    'name': 'Bakso',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/bakso.jpg'
}, {
    'name': 'Betutu',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/betutu.jpg'
}, {
    'name': 'Bebek Goreng',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/bebek-goreng.jpg'
}, {
    'name': 'Sate Padang',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/sate-padang.jpg'
}, {
    'name': 'Babi panggang',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/babi-panggang.jpg'
}, {
    'name': 'Nasi Goreng',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/nasi-goreng.jpg'
}, {
    'name': 'Sate',
    'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
    'image': '/assets/img/background/sate.jpg'
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
        food.innerHTML = `<div class=" text-center destination-image" style="background-image: url('${element.image}'); background-size: cover; background-position: center;">
            <div class="destination-detail">
                <h3 class="fw-bold my-3">${element.name}</h3>
                <p>${element.description}</p>
            </div>
        </div>`
        culinaryContainer.appendChild(food)
    });
});