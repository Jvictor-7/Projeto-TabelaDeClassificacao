// chave. valor.
var jogadores = [];

function adicionarJogador() {
  var objetoJogadorNovo = {
    nome: document.getElementById("nome").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(objetoJogadorNovo);
  exibeJogadoresNaTela(jogadores);
}

function removerJogador() {
  var nomeJogador = document.getElementById("nome").value;
  for (i = 0; i < jogadores.length; i++) {
    if (jogadores[i].nome === nomeJogador) {
      jogadores.splice(i, 1);
      exibeJogadoresNaTela(jogadores);
      break;
    } else {
      continue;
    }
  }
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += `<tr><td>${jogadores[i].nome}</td>`;
    elemento += `<td>${jogadores[i].vitorias}</td>`;
    elemento += `<td>${jogadores[i].empates}</td>`;
    elemento += `<td>${jogadores[i].derrotas}</td>`;
    elemento += `<td>${jogadores[i].pontos}</td>`;
    elemento += `<td><button onClick="adicionarVitoria(${i})">Vitória</button></td>`;
    elemento += `<td><button onClick="adicionarEmpate(${i})">Empate</button></td>`;
    elemento += `<td><button onClick="adicionarDerrota(${i})">Derrota</button></td>`;
    elemento += `</tr>`;
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
