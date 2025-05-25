const projects = [
  {
    title: "Pancake Page",
    description: "Order management with editable statuses and localStorage.",
    image: "/HTML-kurssi/Portfolio/WebPage/Images/pancake.png",
    link: "/HTML-kurssi/05_Week/Pancake_task/index.html",
  },
  {
    title: "Another Project",
    description:
      "Section styled with shimmering text and fixed navigation links.",
    image: "/WebPage/Images/about.png",
    link: "/HTML-kurssi/05_Week/Pancake_task",
  },
  {
    title: "Another Project",
    description:
      "Displays all saved pancake orders with status control and deletion.",
    image: "/WebPage/Images/allorders.png",
    link: "/WebPage/Projects/allorders.html",
  },
];

const projectGrid = document.querySelector(".projectGrid");

projects.forEach((project) => {
  const card = document.createElement("a");
  card.className = "projectCard";
  card.href = project.link;
  card.target = "_blank";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" />
    <div class="projectContent">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>
  `;
  projectGrid.appendChild(card);
});
