// click to change theme color
const colors = ["aqua", "cornflowerblue", "green"];
let index = 0;
document.getElementById("color-theme").addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
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

document
  .getElementById("click-btn")
  .addEventListener("click", function (event) {
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
    document.getElementById("click-btn").disabled = true;
  });
