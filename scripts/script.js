// click to change theme color
const colors = ["aqua", "cornflowerblue", "green"];
let index = 0;
document.getElementById("color-theme").addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});

// discover

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "../discover.html";
});

// Click button to alert

const clickAlerts = document.getElementsByClassName("click-alerts");

for (let click of clickAlerts) {
  click.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");
  });
}

// click to decrease assignment count and increase points

const clickToCount = document.getElementsByClassName("click-btn");
for (let click of clickToCount) {
  click.addEventListener("click", function (event) {
    event.preventDefault();
    const countAssignmentIncomplete = getElementByIDtoInnerText(
      "count-assignment-incomplete"
    );
    const decreaseCountAssignment = countAssignmentIncomplete - 1;
    document.getElementById("count-assignment-incomplete").innerText =
      decreaseCountAssignment;

    const assignmentPoints = getElementByIDtoInnerText("assignment-points");
    const increasePoints = parseInt(assignmentPoints) + 1;
    document.getElementById("assignment-points").innerText = increasePoints;
    this.disabled = true;
  });
}

// comment box

document
  .getElementById("assignment-one")
  .addEventListener("click", function () {
    getComment("assignment-one");
  });
document
  .getElementById("assignment-two")
  .addEventListener("click", function () {
    getComment("assignment-two");
  });
document
  .getElementById("assignment-three")
  .addEventListener("click", function () {
    getComment("assignment-three");
  });
document
  .getElementById("assignment-four")
  .addEventListener("click", function () {
    getComment("assignment-four");
  });
document
  .getElementById("assignment-five")
  .addEventListener("click", function () {
    getComment("assignment-five");
  });
document
  .getElementById("assignment-six")
  .addEventListener("click", function () {
    getComment("assignment-six");
  });

// clear history

document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerText = "";
  });
