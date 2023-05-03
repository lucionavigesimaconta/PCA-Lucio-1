let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "LUGARES",
  }),
  (palavra002 = {
    nome: "GOIAS",
    categoria: "LUGARES",
  }),
  (palavra003 = {
    nome: "PANTANAL",
    categoria: "LUGARES",
  }),
  (palavra004 = {
    nome: "MATO GROSSO DO SUL",
    categoria: "LUGARES",
  }),
  (palavra005 = {
    nome: "BAHIA",
    categoria: "LUGARES",
  }),
  (palavra006 = {
    nome: "PERNAMBUCO",
    categoria: "LUGARES",
  }),
  (palavra007 = {
    nome: "PARAIBA",
    categoria: "LUGARES",
  }),
  (palavra008 = {
    nome: "RIO GRANDE DO NORTE",
    categoria: "LUGARES",
  }),
  (palavra009 = {
    nome: "BOIPEBA",
    categoria: "LUGARES",
  }),
  (palavra010 = {
    nome: "ALAGOAS",
    categoria: "LUGARES",
  }),
  (palavra011 = {
    nome: "CEARA",
    categoria: "LUGARES",
  }),
  (palavra012 = {
    nome: "RIO DE JANEIRO",
    categoria: "LUGARES",
  }),
  (palavra013 = {
    nome: "MARANHAO",
    categoria: "LUGARES",
  }),
  (palavra014 = {
    nome: "SERGIPE",
    categoria: "LUGARES",
  }),
  (palavra015 = {
    nome: "TOCANTINS",
    categoria: "LUGARES",
  }),
  (palavra016 = {
    nome: "PARÁ",
    categoria: "LUGARES",
  }),
  (palavra017 = {
    nome: "AMAZONAS",
    categoria: "LUGARES",
  }),
  (palavra018 = {
    nome: "MINAS GERAIS",
    categoria: "LUGARES",
  }),
  (palavra019 = {
    nome: "SAO PAULO",
    categoria: "LUGARES",
  }),
  (palavra020 = {
    nome: "HOLAMBRA",
    categoria: "LUGARES",
  }),
  (palavra021 = {
    nome: "APICULTOR",
    categoria: "PROFISSÕES",
  }),
  (palavra022 = {
    nome: "AGRONOMO",
    categoria: "PROFISSÕES",
  }),
  (palavra023 = {
    nome: "AUDITOR",
    categoria: "PROFISSÕES",
  }),
  (palavra024 = {
    nome: "BARTENDER",
    categoria: "PROFISSÕES",
  }),
  (palavra025 = {
    nome: "CERIMONIALISTA",
    categoria: "PROFISSÕES",
  }),
  (palavra026 = {
    nome: "CHEF",
    categoria: "PROFISSÕES",
  }),
  (palavra027 = {
    nome: "COACH",
    categoria: "PROFISSÕES",
  }),
  (palavra028 = {
    nome: "DESEMBARGADOR",
    categoria: "PROFISSÕES",
  }),
  (palavra029 = {
    nome: "DESPACHANTE",
    categoria: "PROFISSÕES",
  }),
  (palavra030 = {
    nome: "ENDOCRINOLOGISTA",
    categoria: "PROFISSÕES",
  }),
  (palavra031 = {
    nome: "EMBAIXADOR",
    categoria: "PROFISSÕES",
  }),
  (palavra032 = {
    nome: "GERENTOLOGO",
    categoria: "PROFISSÕES",
  }),
  (palavra033 = {
    nome: "INTERPRETE",
    categoria: "PROFISSÕES",
  }),
  (palavra034 = {
    nome: "JUIZ",
    categoria: "PROFISSÕES",
  }),
  (palavra035 = {
    nome: "PIZZAIOLO",
    categoria: "PROFISSÕES",
  }),
  (palavra036 = {
    nome: "NUTROLOGO",
    categoria: "PROFISSÕES",
  }),
  (palavra037 = {
    nome: "QUIROPRATA",
    categoria: "PROFISSÕES",
  }),
  (palavra038 = {
    nome: "ROTEIRIZADOR",
    categoria: "PROFISSÕES",
  }),
  (palavra039 = {
    nome: "TURISMOLOGO",
    categoria: "PROFISSÕES",
  }),
  (palavra040 = {
    nome: "PERITO",
    categoria: "PROFISSÕES",
  }),
  (palavra041 = {
    nome: "ALBATROZ",
    categoria: "ANIMAIS",
  }),
  (palavra042 = {
    nome: "ALPACA",
    categoria: "ANIMAIS",
  }),
  (palavra043 = {
    nome: "ANCHOVA",
    categoria: "ANIMAIS",
  }),
  (palavra044 = {
    nome: "BACALHAU",
    categoria: "ANIMAIS",
  }),
  (palavra045 = {
    nome: "BADEJO",
    categoria: "ANIMAIS",
  }),
  (palavra046 = {
    nome: "BARRACUDA",
    categoria: "ANIMAIS",
  }),
  (palavra047 = {
    nome: "BELUGA",
    categoria: "ANIMAIS",
  }),
  (palavra048 = {
    nome: "CAGADO",
    categoria: "ANIMAIS",
  }),
  (palavra049 = {
    nome: "CHINCHILA",
    categoria: "ANIMAIS",
  }),
  (palavra050 = {
    nome: "CRACA",
    categoria: "ANIMAIS",
  }),
  (palavra051 = {
    nome: "DROMEDARIO",
    categoria: "ANIMAIS",
  }),
  (palavra052 = {
    nome: "ESCARAVELHO",
    categoria: "ANIMAIS",
  }),
  (palavra053 = {
    nome: "GERBO",
    categoria: "ANIMAIS",
  }),
  (palavra054 = {
    nome: "GNU",
    categoria: "ANIMAIS",
  }),
  (palavra055 = {
    nome: "GRALHA",
    categoria: "ANIMAIS",
  }),
  (palavra056 = {
    nome: "MELRO",
    categoria: "ANIMAIS",
  }),
  (palavra057 = {
    nome: "PELICANO",
    categoria: "ANIMAIS",
  }),
  (palavra058 = {
    nome: "QUATI",
    categoria: "ANIMAIS",
  }),
  (palavra059 = {
    nome: "OCAPI",
    categoria: "ANIMAIS",
  }),
  (palavra060 = {
    nome: "SANGUESSUGA",
    categoria: "ANIMAIS",
  }),
  (palavra071 = {
    nome: "AMPULHETA",
    categoria: "OBJETO",
  }),
  (palavra072 = {
    nome: "ANZOL",
    categoria: "OBJETO",
  }),
  (palavra073 = {
    nome: "DESFIBRILADOR",
    categoria: "OBJETO",
  }),
  (palavra074 = {
    nome: "CANDELABRO",
    categoria: "OBJETO",
  }),
  (palavra075 = {
    nome: "ESTRIBO",
    categoria: "OBJETO",
  }),
  (palavra076 = {
    nome: "FAGOTE",
    categoria: "OBJETO",
  }),
  (palavra077 = {
    nome: "DIAPASAO",
    categoria: "OBJETO",
  }),
  (palavra078 = {
    nome: "MODEM",
    categoria: "OBJETO",
  }),
  (palavra079 = {
    nome: "NAVALHA",
    categoria: "OBJETO",
  }),
  (palavra080 = {
    nome: "JALECO",
    categoria: "OBJETO",
  }),
  (palavra081 = {
    nome: "FREEZER",
    categoria: "OBJETO",
  }),
  (palavra082 = {
    nome: "FANTOCHE",
    categoria: "OBJETO",
  }),
  (palavra083 = {
    nome: "NEBULIZADOR",
    categoria: "OBJETO",
  }),
  (palavra084 = {
    nome: "NARGUILE",
    categoria: "OBJETO",
  }),
  (palavra085 = {
    nome: "PENDULO",
    categoria: "OBJETO",
  }),
  (palavra086 = {
    nome: "SPRAY",
    categoria: "OBJETO",
  }),
  (palavra087 = {
    nome: "URINOL",
    categoria: "OBJETO",
  }),
  (palavra088 = {
    nome: "VUVUZELA",
    categoria: "OBJETO",
  }),
  (palavra089 = {
    nome: "XADREZ",
    categoria: "OBJETO",
  }),
  (palavra090 = {
    nome: "WEBCAM",
    categoria: "OBJETO",
  }),
  (palavra091 = {
    nome: "FREEZER",
    categoria: "FRUTA",
  }),
  (palavra092 = {
    nome: "ALFARROBA",
    categoria: "FRUTA",
  }),
  (palavra093 = {
    nome: "BERGAMOTA",
    categoria: "FRUTA",
  }),
  (palavra094 = {
    nome: "CRANBERRY",
    categoria: "FRUTA",
  }),
  (palavra095 = {
    nome: "CIRIGUELA",
    categoria: "FRUTA",
  }),
  (palavra096 = {
    nome: "IMBU",
    categoria: "FRUTA",
  }),
  (palavra097 = {
    nome: "GROSELIA",
    categoria: "FRUTA",
  }),
  (palavra098 = {
    nome: "MEXERICA",
    categoria: "FRUTA",
  }),
  (palavra099 = {
    nome: "NECTARINA",
    categoria: "FRUTA",
  }),
  (palavra100 = {
    nome: "SAGUARAJI",
    categoria: "FRUTA",
  }),
];

criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
  console.log(palavraSecretaSorteada);
  console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();
function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparaListas(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#c106c1";
  document.getElementById(tecla).style.color = "#daa520";
}

function comparaListas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    carregaImagemForca();
    //verificar tentativas // mensagem
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }
  if (vitoria == true) {
    //mensagem na tela
    tentativas = 0;
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url(/img/forca01.png)";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url(../img/forca02.png)";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url(../img/forca03.png)";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url(../img/forca04.png)";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url(../img/forca05.png)";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url(../img/forca06.png)";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url(../img/forca.png)";
      break;
  }
}
