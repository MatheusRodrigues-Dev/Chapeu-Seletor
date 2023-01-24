function novaPergunta() {
  const numberOfQuestions = [1, 2, 3, 4, 5, 6];
  const numberOfAnswer = [0, 1, 2, 3];
  let answerText = [
    "Um tipico aluno da  Corvinal. Parabens, a escola tem altas expectativas sobre voce",
    "Ora ora, parece que temos um grifinorio. Seja bem vindo, e ve se tenta respeitar ao menos algumas regras",
    "Veja so, a lufa lufa acaba de ganhar mais um aluno. A escola precisa de alunos de coração puro como voce",
    "Mais um sonserino. Vamos ver se voce vai ser bom o bastante para honrar o sangue puro que carrega",
    "Hmm estou em duvida sobre qual a casa adequada pra voce, acho que vamos ter que fazer um teste mais profundo...",
  ];
  let soma = [0, 0, 0, 0],
    ability = [
      document.getElementsByName(`question-01`),
      document.getElementsByName(`question-02`),
      document.getElementsByName(`question-03`),
      document.getElementsByName(`question-04`),
      document.getElementsByName(`question-05`),
      document.getElementsByName(`question-06`),
    ];
  let color = ["2e4d7a", "3b0308", "c1891a", "0b2824"];
  let image = [19170352579395, 19165615261383, 19170105421393, 19170509283396];
  let verificador = 0;

  for (let numberX in numberOfQuestions) {
    for (let numberY in numberOfAnswer) {
      if (ability[numberX][numberY].checked) {
        soma[numberY]++;
        // window.alert(`${numberY}`)
      }
    }
  }
  let maior = Math.max.apply(null, soma);
  console.log(soma);
  if (soma[0] === 0 && soma[1] === 0 && soma[2] === 0 && soma[3] === 0) {
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").style.fontSize = "50px";
    document.querySelector("main").innerHTML += answerText[4];
  } else {
    for (let i in numberOfAnswer) {
      if (maior === soma[i]) {
        console.log(maior);
        console.log(soma[i]);
        console.log(maior === soma[i]);
        document.querySelector("main").innerHTML = "";
        document.querySelector("main").style.fontSize = "50px";
        document.querySelector(
          "body"
        ).style.backgroundImage = `url(https://img.ibxk.com.br/2021/04/19/${image[i]}.jpg?ims=704x)`;
        document.querySelector("body").style.backgroundColor = `#${color[i]}`;
        document.querySelector("main").innerHTML += answerText[i];
        verificador = 1;
      }
    }
  }
  if (verificador === 0) {
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").style.fontSize = "50px";
    document.querySelector("main").innerHTML += answerText[4];
  }
}
