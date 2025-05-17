import rectangle10_1x from '../img/webp/rectangle_10-1x.webp';
import rectangle10_2x from '../img/webp/rectangle_10-2x.webp';
import rectangle7_1x from '../img/webp/rectangle_7-1x.webp';
import rectangle7_2x from '../img/webp/rectangle_7-2x.webp';
import rectangle8_1x from '../img/webp/rectangle_8-1x.webp';
import rectangle8_2x from '../img/webp/rectangle_8-2x.webp';
import rectangle9_1x from '../img/webp/rectangle_9-1x.webp';
import rectangle9_2x from '../img/webp/rectangle_9-2x.webp';
import rectangle11_1x from '../img/webp/rectangle_11-1x.webp';
import rectangle11_2x from '../img/webp/rectangle_11-2x.webp';
import rectangle6_1x from '../img/webp/rectangle_6-1x.webp';
import rectangle6_2x from '../img/webp/rectangle_6-2x.webp';
import rectangle4_1x from '../img/webp/rectangle_4-1x.webp';
import rectangle4_2x from '../img/webp/rectangle_4-2x.webp';
import rectangle5_1x from '../img/webp/rectangle_5-1x.webp';
import rectangle5_2x from '../img/webp/rectangle_5-2x.webp';
import rectangle12_1x from '../img/webp/rectangle_12-1x.webp';
import rectangle12_2x from '../img/webp/rectangle_12-2x.webp';
import firstScreen1_1x from '../img/webp/first_screen_1-1x.webp';
import firstScreen1_2x from '../img/webp/first_screen_1-2x.webp';

import iconsSprite from '../img/icons/icons.svg';

const projects = [
  {
    image1x: rectangle10_1x,
    image2x: rectangle10_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'power pulse webservice',
  },
  {
    image1x: rectangle7_1x,
    image2x: rectangle7_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'mimino website',
  },
  {
    image1x: rectangle8_1x,
    image2x: rectangle8_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'vyshyvanka vibes Landing Page',
  },
  {
    image1x: rectangle9_1x,
    image2x: rectangle9_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'green harvest online store',
  },
  {
    image1x: rectangle11_1x,
    image2x: rectangle11_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'wallet webservice',
  },
  {
    image1x: rectangle6_1x,
    image2x: rectangle6_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'chego jewelry website',
  },
  {
    image1x: rectangle4_1x,
    image2x: rectangle4_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'energy flow webservice',
  },
  {
    image1x: rectangle5_1x,
    image2x: rectangle5_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'fruitbox online store',
  },
  {
    image1x: rectangle12_1x,
    image2x: rectangle12_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'English excellence webservice',
  },
  {
    image1x: firstScreen1_1x,
    image2x: firstScreen1_2x,
    stack: 'React, JavaScript, Node JS, Git',
    name: 'starlight studio landing page',
  },
];

const projectList = document.querySelector('.projects-list');
const loadBtn = document.getElementById('load-more');

let projectLoad = 0;
const projectPerClick = 3;

function createMarkup(arr) {
  return arr
    .map(
      item => `
      <li class="projects-item">
        <picture>
          <source srcset="${item.image1x} 1x, ${item.image2x} 2x" type="image/webp" />
          <img
            src="${item.image1x}"
            alt="${item.name}"
            class="projects-img"
            loading="lazy"
            width="320"
            height="184"
          />
        </picture>
        <div class="projects-info-container">
          <div class="projects-info">
            <p class="projects-item-stack">${item.stack}</p>
            <h3 class="projects-item-titel">${item.name}</h3>
          </div>
          <a
            href="https://github.com/VladKorniiko/portfolio"
            target="_blank"
            class="projects-btn"
          >
            VISIT
            <svg class="projects-icon" width="24" height="24">
              <use href="${iconsSprite}#icon-diagonal-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `
    )
    .join('');
}

function loadProjects() {
  const slice = projects.slice(projectLoad, projectLoad + projectPerClick);
  projectList.insertAdjacentHTML('beforeend', createMarkup(slice));
  projectLoad += projectPerClick;

  if (projectLoad >= projects.length) {
    loadBtn.style.display = 'none';
  }
}

loadProjects();
loadBtn.addEventListener('click', loadProjects);
