function getElementByIDtoInnerText(id) {
  const valueCount = document.getElementById(id).innerText;
  return valueCount;
}

function getComment(){
    const commentText = 'You have Complete The Task Add Dark Mode at 12:48:15 PM'
    const commentContainer = document.getElementById('comment-container')
    const commentElement = document.createElement('p')
    commentElement.innerText = commentText;
    commentContainer.appendChild(commentElement)
}

