const buttonElement = document.querySelector('.btn1');
 const q1 = document.querySelector('.q-1');

buttonElement.addEventListener("click" , () => {

  const isActive = q1.classList.toggle('q-1-style');

  q1.textContent = isActive
    ? "It's a community-driven platform of roadmaps, study plans, and learning resources for developers"
    : "";
});

const buttonElement2 = document.querySelector('.btn2');
const q2 = document.querySelector('.q-2');

buttonElement2.addEventListener("click" , () => {

  const isActive = q2.classList.toggle('q-1-style');

  q2.textContent = isActive
    ? "The plans for roadmap.sh include expanding roadmaps to cover more technologies (frontend, backend, DevOps, AI/ML, etc.), improving interactivity with customizable study plans, enabling more community contributions and voting, adding features for teams and organizations to use roadmaps for structured training, and enhancing the overall learning experience with curated resources and progress tracking."
    : "";
});

const buttonElement3 = document.querySelector('.btn3');
const q3 = document.querySelector('.q-3');

buttonElement3.addEventListener("click" , () => {

  const isActive = q3.classList.toggle('q-1-style');

  q3.textContent = isActive
    ? "Roadmap.sh is built as an open-source project, hosted on GitHub, and maintained by the community using modern web technologies."
    : "";
});

const buttonElement4 = document.querySelector('.btn4');
const q4 = document.querySelector('.q-4');

buttonElement4.addEventListener("click" , () => {

  const isActive = q4.classList.toggle('q-1-style');

  q4.textContent = isActive
    ? "Yes, you can use roadmap.sh in your team to guide structured learning, training, and onboarding — it’s free, open-source, and designed to be shared."
    : "";
});

const buttonElement5 = document.querySelector('.btn5');
const q5 = document.querySelector('.q-5');

buttonElement5.addEventListener("click" , () => {

  const isActive = q5.classList.toggle('q-1-style');

  q5.textContent = isActive
    ? "You can create custom roadmaps by forking the roadmap.sh GitHub repository, adding your own steps and resources, and sharing it with your team or the community."
    : "";
});

const buttonElement6 = document.querySelector('.btn6');
const q6 = document.querySelector('.q-6');

buttonElement6.addEventListener("click" , () => {

  const isActive = q6.classList.toggle('q-1-style');

  q6.textContent = isActive
    ? "Yes, roadmap.sh is among the most starred projects on GitHub, with hundreds of thousands of stars from developers worldwide."
    : "";
});