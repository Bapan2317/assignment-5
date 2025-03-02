function getElementByIDtoInnerText(id) {
  const valueCount = document.getElementById(id).innerText;
  return valueCount;
}

function getComment() {
  const commentText = "complete the task " + getTime();
  const commentContainer = document.getElementById("comment-container");
  const commentElement = document.createElement("p");
  commentElement.innerText = commentText;
  commentContainer.appendChild(commentElement);
}

//date

function date() {
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}

// get time

function getTime() {
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  return currentTime;
}
