function getElementByIDtoInnerText(id) {
  const valueCount = document.getElementById(id).innerText;
  return valueCount;
}

function getClickResult(id) {
  document.getElementById(id).addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board updated successfully");

    const countAssignmentIncomplete = getElementByIDtoInnerText(
      "count-assignment-incomplete"
    );
    const decreaseCountAssignment = countAssignmentIncomplete - 1;
    document.getElementById("count-assignment-incomplete").innerText =
      decreaseCountAssignment;

    const assignmentPoints = getElementByIDtoInnerText("assignment-points");
    const increasePoints = parseInt(assignmentPoints) + 1;
    document.getElementById("assignment-points").innerText = increasePoints;
  });

  document.getElementById(id).addEventListener("click", function () {
    this.disabled = true;
  });
}

function getComment(id) {
  document.getElementById(id).addEventListener("click", function (event) {
    const commentText = getTime();
    const commentContainer = document.getElementById("comment-container");
    const commentElement = document.createElement("p");
    commentElement.innerText = commentText;
    commentContainer.appendChild(commentElement);
  });
}
