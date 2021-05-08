// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
let color = 'var(--main-bg)';
mainEl.style.background = color;

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Task 1.3
mainEl.classList.add('flex-ctr');

// Task 2.0
const topMenuEl = document.getElementById('top-menu');

// Task 2.1
topMenuEl.style.height = '100%';

// Task 2.2
topMenuEl.style.background = 'var(--top-menu-bg)';

// Task 2.3
topMenuEl.classList.add('flex-around');

//Task 3.1
menuLinks.forEach(function(link) {
  const a = document.createElement('a');
  a.href = link.href;
  a.innerHTML = link.text;
  topMenuEl.appendChild(a);

});

// Task 4.0
const subMenuEl = document.getElementById('sub-menu');

// Task 4.1
subMenuEl.style.height = '100%';

// Task 4.2
subMenuEl.style.background = 'var(--sub-menu-bg)';

// Task 4.3
subMenuEl.classList.add('flex-around');

// Task 4.4
subMenuEl.style.position = 'absolute';

// Task 4.5
subMenuEl.style.top = 0;
