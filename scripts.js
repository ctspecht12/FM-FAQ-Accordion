const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((question) => {
  question.addEventListener("click", () => {
    const trigger = question.querySelector(".trigger");

    if (question.classList.contains("is-open")) {
      question.classList.remove("is-open");
      trigger.src = "assets/images/icon-plus.svg";
    } else {
      const questionContainersWithIsOpen =
        document.querySelectorAll(".is-open");
      questionContainersWithIsOpen.forEach((openQuestion) => {
        openQuestion.classList.remove("is-open");
        const openTrigger = openQuestion.querySelector(".trigger");
        if (openTrigger) {
          openTrigger.src = "assets/images/icon-plus.svg"; // Reset icon for other questions
        }
      });

      question.classList.add("is-open");
      trigger.src = "assets/images/icon-minus.svg";
    }
  });
});
