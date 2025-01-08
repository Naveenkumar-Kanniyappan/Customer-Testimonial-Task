let mainContainer = document.createElement('div');
mainContainer.id = 'main-container';

let header = document.createElement('h1');
header.id = 'header';
header.innerText = 'Our Reviews';

let line = document.createElement('div');
line.className = 'header-line';
line.style.width = '12%';
line.style.height = '5px';
line.style.borderRadius = '5px';
line.style.backgroundColor = '#9dc5eb';
line.style.margin = '10px auto';

let contentDiv = document.createElement('div');
contentDiv.id = 'content';

let buttonDiv = document.createElement('div');
buttonDiv.id = 'button-container';
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'center';
buttonDiv.style.gap = '20px';
buttonDiv.style.marginTop = '20px';

let leftButton = document.createElement('button');
leftButton.id = 'left-button';
leftButton.className = 'nav-button';
leftButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
leftButton.style.border = 'none';
leftButton.style.backgroundColor = '#fff';
leftButton.style.color = '#9dc5eb';
leftButton.style.cursor = 'pointer';
leftButton.style.fontSize = '20px';
leftButton.style.padding = '10px';

let rightButton = document.createElement('button');
rightButton.id = 'right-button';
rightButton.className = 'nav-button';
rightButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
rightButton.style.border = 'none';
rightButton.style.backgroundColor = '#fff';
rightButton.style.color = '#9dc5eb';
rightButton.style.cursor = 'pointer';
rightButton.style.fontSize = '20px';
rightButton.style.padding = '10px';

buttonDiv.appendChild(leftButton);
buttonDiv.appendChild(rightButton);

header.appendChild(line);
mainContainer.appendChild(header);
mainContainer.appendChild(contentDiv);
// mainContainer.appendChild(buttonDiv);
document.body.appendChild(mainContainer);

let customer = [
    {
        Image: 'https://www.course-api.com/images/people/person-3.jpeg',
        name: 'Bill Anderson',
        designation: 'THE BOSS',
        bio: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
    {
        Image: 'https://www.course-api.com/images/people/person-2.jpeg',
        name: 'Anna Johnson',
        designation: 'WEB DESIGNER',
        bio: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        Image: 'https://www.course-api.com/images/people/person-1.jpeg',
        name: 'Peter Jones',
        designation: 'INTERN',
        bio: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8- bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        Image: 'https://www.course-api.com/images/people/person-4.jpeg',
        name: 'Susan Smith',
        designation: 'WEB DEVELOPER',
        bio: 'I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
    }
];

let currentIndex = 0;

function displayCustomer(index) {
    contentDiv.innerHTML = '';

    let cust = customer[index];

    let customerDiv = document.createElement('div');
    customerDiv.className = 'customer-card';
    customerDiv.style.padding = '20px';
    customerDiv.style.backgroundColor = '#fff';
    customerDiv.style.borderRadius = '8px';
    customerDiv.style.textAlign = 'center';
    customerDiv.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    customerDiv.style.clipPath='circle(90% at center)'
 
    let quote = document.createElement('div');
    quote.className = 'quote';
    quote.innerHTML = '<i class="fa-solid fa-quote-right style="background-color:hsla(208, 87.60%, 62.20%, 0.80);"></i>';
    quote.style.fontSize = '40px';
    quote.style.color = '#ffff';
    quote.style.backgroundColor='hsla(208, 87.60%, 62.20%, 0.80)';
    quote.style.margin = '0';
    quote.style.width='10%';
    quote.style.borderRadius='100%';
    quote.style.position= 'relative';
    quote.style.left='32%';
    quote.style.top='60px';
    quote.style.opacity='0.9';

    let img = document.createElement('img');
    img.setAttribute('src', cust.Image);
    img.setAttribute('alt', `${cust.name}'s image`);
    img.className = 'profile-img';
    img.style.borderRadius = '50%';
    img.style.height = '145px';
    img.style.width = '145px';
    img.style.boxShadow = '5px -2px 0px hsla(208, 87.60%, 62.20%, 0.80)';

    let name = document.createElement('h2');
    name.className = 'customer-name';
    name.innerText = cust.name;
    name.style.margin = '10px 0';
    name.style.fontFamily = 'Montserrat, serif';
    name.style.fontWeight = '300';

    let designation = document.createElement('h3');
    designation.className = 'customer-designation';
    designation.innerText = cust.designation;
    designation.style.color = '#a2c0cb';
    designation.style.margin = '0';

    let bio = document.createElement('p');
    bio.className = 'customer-bio';
    bio.innerText = cust.bio;
    bio.style.color = '#a4aeb7';
    bio.style.fontSize = '16px';
    bio.style.lineHeight = '1.5';

    customerDiv.appendChild(quote);
    customerDiv.appendChild(img);
    customerDiv.appendChild(name);
    customerDiv.appendChild(designation);
    customerDiv.appendChild(bio);
    customerDiv.appendChild(buttonDiv);

    contentDiv.appendChild(customerDiv);
}

displayCustomer(currentIndex);

rightButton.addEventListener('click', () => {
    if (currentIndex < customer.length - 1) {
        currentIndex++;
    }
    displayCustomer(currentIndex);
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    displayCustomer(currentIndex);
});
