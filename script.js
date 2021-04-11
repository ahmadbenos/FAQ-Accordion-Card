const row = document.querySelectorAll(".row");

row.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked!");
  });
});
