const resultScore = document.querySelector(".result-score span");
const summaryScore1 = document.querySelector(".score-one");
const summaryScore2 = document.querySelector(".score-two");
const summaryScore3 = document.querySelector(".score-three");
const summaryScore4 = document.querySelector(".score-four");

summaryScore1.addEventListener("mouseover", (e) => {
  console.log(e.target);
});
let API_URL = "./data.json";

async function getFinalScore() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Score not found!");
    } else {
      const data = await res.json();
      summaryScore1.textContent = data[0].score;
      summaryScore2.textContent = data[1].score;
      summaryScore3.textContent = data[2].score;
      summaryScore4.textContent = data[3].score;

      let acc = 0;
      const totalScore = data.reduce((acc, curr) => {
        return acc + curr.score;
      }, acc);

      resultScore.innerHTML = Math.round(totalScore / 4);
    }
  } catch (error) {
    console.error(error);
  }
}

getFinalScore();
