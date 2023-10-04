function handleCommentFormSubmission(e) {
  e.preventDefault();
  const listOfComments = document.querySelector("#list");
  const commentInputValue = document.querySelector("#comment-input").value;

  const liComment = document.createElement("li");
  liComment.innerHTML = commentInputValue;
  listOfComments.appendChild(liComment);

  //   reset form
  e.target.reset();
}

function handlePause(e, counter, intervalId) {
  if (e.target.innerText === "pause") {
    e.target.innerText = "resume";
    clearInterval(intervalId);
    minus.disabled = true;
    plus.disabled = true;
    submit.disabled = true;
  } else {
    e.target.innerText = "pause";
    minus.disabled = false;
    plus.disabled = false;
    submit.disabled = false;

    // run setInterval again
    intervalId = setInterval(incrementTimer, 1000, counter);
  }
}

function handleLike(e, counter, likeCount) {
  likeCount++;

  let counterValue = parseInt(counter.innerText);
  const ulLikes = document.querySelector(".likes");

  const liLike = document.createElement("li");
  liLike.innerText = `${counterValue} has been liked ${likeCount} times`;
  ulLikes.appendChild(liLike);
}

function handlePlus(e, counter) {
  let counterValue = parseInt(counter.innerText);
  counterValue++;
  counter.textContent = counterValue;
}

function handleMinus(e, counter) {
  let counterValue = parseInt(counter.innerText);
  counterValue--;
  counter.textContent = counterValue;
}

function incrementTimer(counter) {
  let counterValue = parseInt(counter.innerText);
  counterValue++;
  counter.textContent = counterValue;
}

function handleDOMContentLoaded(e) {
  let counter = document.querySelector("#counter");
  const minus = document.querySelector("#minus");
  const plus = document.querySelector("#plus");
  const pause = document.querySelector("#pause");
  const submit = document.querySelector("#submit");
  const commentForm = document.querySelector("#comment-form");

  let likeCount = 0;

  // increment timer every sec/pass arg counter
  const intervalId = setInterval(incrementTimer, 1000, counter);

  minus.addEventListener("click", (e) => {
    handleMinus(e, counter);
  });

  plus.addEventListener("click", (e) => {
    handlePlus(e, counter);
  });

  heart.addEventListener("click", (e) => {
    handleLike(e, counter, likeCount);
  });

  pause.addEventListener("click", (e) => {
    handlePause(e, counter, intervalId, minus, plus, submit);
  });

  commentForm.addEventListener("submit", (e) => {
    handleCommentFormSubmission(e);
  });
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
