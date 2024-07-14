import { createMatch } from "./match.js";

const getWinner = (player1, player2) => {
  let winner = "";
  const game = createMatch(player1, player2);
  while (!winner) {
    const randomPoint = Math.floor(Math.random() * 2) + 1;
    game.pointWonBy(randomPoint);
    console.log(`Partido ${player1} vs ${player2} Juegos ganados 
      (Se necesitas 2 para ganar el partido): ${game.getMatchScore()}
      Juego actual (Se necesitas 4 y diferencia de 2 para ganar un juego)
      ${game.getGameScore()}
      round en curso: ${game.getCurrentRoundScore()}`);
    winner = game.getWinner();
  }
  return winner;
};

const tournament = (players) => {
  if (players.length !== 4) {
    console.log("El número de players debe ser 8.");
    return;
  }

  let round = 1;
  let winners = players;

  while (winners.length > 1) {
    console.log(`round ${round}:`);
    const matches = [];

    for (let i = 0; i < winners.length; i += 2) {
      const player1 = winners[i];
      const player2 = winners[i + 1];
      const ganador = getWinner(player1, player2);

      matches.push(ganador);
      console.log(`${player1} vs ${player2} => Ganador: ${ganador}`);
    }

    winners = matches;
    round++;
  }

  console.log(`Ganador final: ${winners[0]}`);
};
