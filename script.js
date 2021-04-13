const row = document.querySelectorAll(".row");
const textbox = document.querySelectorAll(".text-box");

row.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked!");
  });
});

textbox.forEach((item, index, nodes) => {
  item.addEventListener("click", () => {
    nodes.forEach((node) =>
      node != nodes[index]
        ? node.classList.remove("active")
        : item.classList.toggle("active")
    );
  });
});
