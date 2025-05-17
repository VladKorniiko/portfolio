import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqList = document.querySelector('.accordion-container');
new Accordion(faqList, {
  duration: 500,
  showMultiple: false,
  openOnInit: [0],
});

const headers = document.querySelectorAll('.ac-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const trigger = header.querySelector('.ac-trigger');
    if (trigger) trigger.click(); // имитирует клик по кнопке
  });
});
