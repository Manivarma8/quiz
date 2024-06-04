
const qustionDataBase = [
    {
      question: "A batsman scored 110 runs which included 3 boundaries(1 boundary = 4 runs) and 8 sixes (1six = 6 runs). What percent of his total score did he make by running between the wickets?",

      option1: "45%",
      option2: "45 5/11%",
      option3: "54 6/11",
      option4: "55%",
      ans: "answer4",
    },
    {
      question: "If A = x% of y and B = y% of x, then which of the following is true?",

      option1: "A is smaller than B",
      option2: "A is greater than B",
      option3: "A = B",
      option4: "If is smaller than y, then A is greater than B",
      ans: "answer3",
    },
    {
      question: "SCD, TEF, UGH, ?, WKL",
      option1: "CMN",
      option2: "UJI",
      option3: "VIJ",
      option4: "IJT",
      ans: "answer3",
    },
    {
      question: "Look at this series: 7,10,8,11,9,12,... what number should come next?",
      option1: "7",
      option2: "10",
      option3: "12",
      option4: "13",
      ans: "answer2",
    },
    {
      question: "A and B together have Rs.1210.if 4/15 of A's amount is equal to 2/5 of B's amount how much amount does B have?",
      option1: "Rs.460",
      option2: "Rs.484",
      option3: "Rs.550 ",
      option4: "Rs.664",
      ans: "answer1",
    },
    {
      question: "Two numbers are respectively 20% and 50% more than a third number.the ratio of the two numbers is?",
      option1: "2:5",
      option2: "3:5",
      option3: "4:5",
      option4: "6:7",
      ans: "answer1",
    },
    {
      question: "If Rs.782 be divided into three parts, proportional to 1/2:2/3:3/4, then the first part is:",
      option1: "Rs.182",
      option2: "Rs.190",
      option3: "Rs.196",
      option4: "Rs.204",
      ans: "answer3",
    },
    {
      question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother.' how is Suresh related to that boy?",
      option1: "Brother",
      option2: "Uncle",
      option3: "Cousin",
      option4: "Father",
      ans: "answer1",
    },
    {
      question: "Y is in the East of X which is in the North of Z.If P is in the South of Z, then in which direction of Y is P?",
      option1: "North",
      option2: "South",
      option3: "South-East",
      option4: "South-west",
      ans: "answer1",
    },
    {
      question: "In an election between two canditates, one got 55% of the total valid votes, 20% of the votes were invalid if the total number of votes was 7500, the number of valid votes that the other canditates got was?",
      option1: "2700",
      option2: "2900",
      option3: "3000",
      option4: "3100",
      ans: "answer3",
    },
  ];
  
  // getting referrence
  const questionContainer = document.querySelector("h2");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
  const submitButton = document.querySelector("button");
  const usersAnswer = document.querySelectorAll(".answer");
  const scoreArea = document.querySelector("#ShowScore");
  
  // This function is rendering all the texts
  
  let questionCount = 0;
  let score = 0;
  const mainFunc = () => {
    const list = qustionDataBase[questionCount];
    questionContainer.innerText = list.question;
    option1.innerText = list.option1;
    option2.innerText = list.option2;
    option3.innerText = list.option3;
    option4.innerText = list.option4;
  };
  
  mainFunc();
  
  // this function is for answer checking
  
  const goCheckAnswer = () => {
    let answers;
    usersAnswer.forEach((data) => {
      if (data.checked) {
        answers = data.id;
      }
    });
    return answers;
  };
  
  const deselectAll = () => {
    usersAnswer.forEach((data) => {
      data.checked = false;
    });
  };
  
  submitButton.addEventListener("click", () => {
    const checkAnswer = goCheckAnswer();
    console.log(checkAnswer);
  
    if (checkAnswer === qustionDataBase[questionCount].ans) {
      score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < qustionDataBase.length) {
      mainFunc();
    } else {
      scoreArea.style.display = "block";
      scoreArea.innerHTML = `
        <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
        <button class='btn' onclick='location.reload()'>Play Again</button>
        `;
    }
  });
  