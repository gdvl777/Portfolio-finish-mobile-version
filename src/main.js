function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('.toggle').addEventListener('click', openNav);
document.querySelector('.closebtn').addEventListener('click', closeNav);
document.querySelectorAll('.pop-nav').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});

/* const projectname = document.querySelector('.projectname'); */
const workSections = document.querySelector('.project-section');
const modal = document.querySelector('.modal-example');
/* const modalImg = document.querySelector('.modal-img');
const company = document.querySelector('.company');
const role = document.querySelector('.role');
const year = document.querySelector('.year'); */

const projectsList = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: '../assets/project1.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end dev',
    company: 'canopy',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Multi-post stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: '../assets/project2.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Full Stack Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. ',
    imageLink: '../assets/project3.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Back end Dev',
    company: 'Facebook',
    year: '2015',
    sourceLink: '#',
    demoLink: '#',
  },
  {
    name: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    imageLink: '../assets/project4.png',
    technologies: ['html', 'css', 'javascript'],
    role: 'Lead developer',
    company: 'Uber',
    year: '2018',
    sourceLink: '#',
    demoLink: '#',
  },
];

workSections.innerHTML = '';

for (let i = 0; i < projectsList.length; i += 1) {
  if (i % 2 !== 0) {
    let languages = '';
    projectsList[i].technologies.forEach((language) => {
      languages += `
        <li><a href='' class='skill' title='${language}' >${language}</a></li>
      `;
    });
    workSections.innerHTML += `
      <div class='projects'>
          <div class='project-description'>
            <h2 class='title'>${projectsList[i].name}</h2>
            <div class='role row'>
              <div class="role-name">${projectsList[i].company}</div>
                <div class="role-dot"></div>
                <div class="role-job">${projectsList[i].role}</div>
                <div class="role-dot"></div>
                <div class="role-year">${projectsList[i].year}</div>
            </div>
            <div class='project-details'>
              <p>
                ${projectsList[i].description}
              </p>

              <ul class='skills'>
                ${languages}
              </ul>
              <div classs="button-click">
                <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
              </div>
            </div>
          </div>
          <div class='img-web'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='' />
          </div>
    </div>
  `;
  } else {
    let languages = '';
    projectsList[i].technologies.forEach((language) => {
      languages += `
      <li><a href='' class='skill' title='${language}' >${language}</a></li>
    `;
    });
    workSections.innerHTML += `
      <div class='projects'>
          <div class='img-web'>
            <img src='${projectsList[i].imageLink}' alt='work 1' class='' />
          </div>
          <div class='project-description'>
            <h2 class='title'>${projectsList[i].name}</h2>
            <div class='role row'>
              <div class="role-name">${projectsList[i].company}</div>
                <div class="role-dot"></div>
                <div class="role-job">${projectsList[i].role}</div>
                <div class="role-dot"></div>
                <div class="role-year">${projectsList[i].year}</div>
            </div>
            <div class='project-details'>
              <p>
                ${projectsList[i].description}
              </p>

              <ul class='skills'>
                ${languages}
              </ul>
              <div classs="button-click">
                <button type='button' class='btn btn-enabled project-modal-${i}'>See project</button>
              </div>
            </div>
          </div>
    </div>
  `;
  }
}

for (let i = 0; i < projectsList.length; i += 1) {
  const projectModal = document.querySelector(`.project-modal-${i}`);
  projectModal.addEventListener('click', () => {
    const {
      name, company, role, year, imageLink,
    } = projectsList[i];

    modal.innerHTML = `
      <div class="modal-head">
        <h2 class="projectname">${name}</h2>
        <button type="button" class="closeModal">&times;</button>
      </div>
      <div class="modal__body">
        <div class="short_desc">
          <h4 class="company">${company}</h4>
          <span></span>
          <h4 class="role">${role}</h4>
          <span></span>
          <h6 class="year">${year}</h6>
        </div>
        <img src="${imageLink}" alt="img" class="modal-img">
        <div class="project-desc">
          <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatem pariatur modi rerum error
            ea consequatur, excepturi eum maiores! Quo quibusdam culpa ratione.?Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <div class="desc_btn">
            <ul class="project__lang">
              <li><a href="" class="lang1" title="html">html</a></li>
              <li><a href="" class="lang1" title="css">css</a></li>
              <li>
                <a href="#" class="lang1" title="javascript">javascript</a>
              </li>
            </ul>
            <div class="final">
              <button type="button" class="modal-btn">See live <i class="fa fa-external-link" aria-hidden="true"></i></button>
              <button type="button" class="modal-btn">See source <i class="fa fa-github"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;

    const projectSection = document.querySelector('.project-section');
    const header = document.querySelector('.header');
    const content = document.querySelector('.content');
    const about = document.querySelector('.about');
    const contactMe = document.querySelector('.contact-me');

    projectSection.classList.add('blur');
    header.classList.add('blur');
    content.classList.add('blur');
    about.classList.add('blur');
    contactMe.classList.add('blur');
    modal.classList.add('show');

    document.querySelector('.closeModal').addEventListener('click', () => {
      modal.style.display = 'none';
      window.location.reload();
      header.classList.remove('blur');
      content.classList.remove('blur');
    });
  });
}

const email = document.querySelector('#useremail');
const validationAlert = document.querySelector('.alert');
const contactForm = document.querySelector('.contact-me');
contactForm.addEventListener('submit', (event) => {
  const regex = /[A-Z]/;
  const emailContent = email.value;
  if (regex.test(emailContent)) {
    validationAlert.innerHTML = 'Your email address should not contain uppercase letters';
    event.preventDefault();
  }
});

const nameField = document.querySelector('#username');
const emailAddressField = document.querySelector('#useremail');
const messageField = document.querySelector('#usermessage');

contactForm.addEventListener('input', () => {
  const userData = {
    name: nameField.value,
    email: emailAddressField.value,
    message: messageField.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
});
const userDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
nameField.value = userDataFromLocalStorage.name;
emailAddressField.value = userDataFromLocalStorage.email;
messageField.value = userDataFromLocalStorage.message;