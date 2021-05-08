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

// debug
console.log(mainEl);
console.log(topMenuEl);
