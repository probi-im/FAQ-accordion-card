const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    const titlePan = e.target.parentNode;
    document.querySelectorAll(".pan").forEach((pan) => {
      if (pan !== titlePan) pan.classList.remove("toggled");
    });
    titlePan.classList.toggle("toggled");
  });
});
