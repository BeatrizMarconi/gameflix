function cards(descrição) {
  alert(`${descrição}`);
}

let games = [
  {
    id:1,
    image:"http://2.bp.blogspot.com/_kJ953F63k5A/TTECLh0WchI/AAAAAAAAAG8/JesXFlavxB8/s1600/donkey-kong-country-virtual-console-20070220054821279_640w1.jpg",
    nome:"Donkey Kong Country",
    descrição:"jogo se passa em Donkey Kong Island onde é explorado seis regiões com ambientes diferentes,Donkey Kong e seu sobrinho Diddy Kong, que devem recuperar seu tesouro de bananas roubado por King K. Rool e os Kremlings.",
    genero:"Plataforma",
    tipo: "retrô"

  },
  {
    id:2,
    image:"https://static.wikia.nocookie.net/crashbandicoot/images/0/0d/Box.jpg/revision/latest?cb=20181221163322&path-prefix=pt-br",
    nome:"Crash Bandicoot",
    descrição:"bandicoot geneticamente alterado Crash, luta para impedir o planos do cientista do mal Neo Córtex e seus lacaios",
    genero:"Aventura,Plataforma",
    tipo:"retrô"

  },
  {
    id:3,
    image:"https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    nome:"Apex Legends",
    descrição:"os jogadores formam esquadrões de dois ou três jogadores e selecionam personagens predefinidos com habilidades distintas. O jogo possui dois modos. Em Battle Royale, até vinte esquadrões de três pessoas ou trinta duplas de duas pessoas pousam em uma ilha e procuram por armas e suprimentos para derrotar outros jogadores em combate. ",
    genero:"Battle royale,Tiro em primeira pessoa",
    tipo:"Battle royale"

  },
  {
    id:4,
    image:"https://galaxianerd.com/wp-content/uploads/2018/03/Fortnite-Battle-Royale-696x344.jpg",
    nome:"Fortnite",
    descrição:"jogo free-to-play, onde até 100 jogadores lutam em espaços cada vez menores para serem a última pessoa ou time vencedor",
    genero:"battle royale",
    tipo:"Battle royale"

  },
  {
    id:5,
    image:"https://sm.ign.com/ign_br/review/g/gta-5-playstation-4-and-xbox-one-review-in-progres/gta-5-playstation-4-and-xbox-one-review-in-progres_uugc.jpg",
    nome:"Grand Theft Auto V",
    descrição:"O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental.",
    genero:"Ação-aventura",

  },
  {
    id:6,
    image:"https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
    nome:"Minecraft",
    descrição:"os jogadores exploram um mundo aberto tridimensional intencionalmente em blocos, pixelizado e gerado proceduralmente, podendo descobrir e extrair matérias-primas, ferramentas artesanais, construir estruturas ou terraplenagens e, dependendo do modo de jogo, podem combater inimigos controlados por computador,",
    genero:"Sandbox, sobrevivência",

  },
  {
    id:7,
    image:"https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2020/06/the-last-of-us.jpg?fit=1300%2C731&ssl=1",
    nome:"The Last of Us",
    descrição:"os jogadores controlam Joel, um homem encarregado de escoltar uma adolescente chamada Ellie através de um Estados Unidos pós-apocalíptico.",
    genero:"Ação-aventura,Sobrevivência",

  },
  {
    id:8,
    image:"https://www2.minijuegosgratis.com/v3/games/thumbnails/2399_1.jpg",
    nome:"Pac-Man",
    descrição:"o jogador era uma cabeça redonda com uma boca que se abre e fecha, posicionado em um labirinto simples repleto de pastilhas e 4 fantasmas que o perseguiam.",
    genero:"Labirinto",
    tipo:"retrô"

  },
  {
    id:9,
    image:"https://i.ytimg.com/vi/jCKAW3vpY1M/maxresdefault.jpg",
    nome:"Boogerman",
    descrição:"um milionário excêntrico com hábitos higiênicos ruins. Suas armas como super-herói incluem flatulência, ranho e arrotos.",
    genero:"Plataforma",
    tipo:"retrô"

  },
  {
    id:10,
    image:"https://i.ytimg.com/vi/wot9XwssLtQ/maxresdefault.jpg",
    nome:"Super Bomberman",
    descrição:"O objetivo principal, é completar as fases depositando bombas em ordens e lugares estratégicos para destruir obstáculos e inimigos",
    genero:"ação,",
    tipo:"retrô"

  }
]
let retros = games.filter(retro=>{
  return retro.tipo == "retrô"
});

let userHtml= '';

let boxDeCardsretro = document.querySelector('#boxDeCardsretro');

retros.forEach(gamer =>{
  userHtml+= `
        <li class="a">
          <a onclick="cards('${gamer.descrição}')" href="#">
            <div class="card aligment-column alignment-vert alignment position color-link">
              <div class="alignment-vert grey-background alignment center position"><img src="${gamer.image}"></div>
              <div class="paragraph center">
                <P class= "teste"> ${gamer.nome} </P>
                <P class= "teste2"> ${gamer.descrição} </P>
              </div>
            </div>
          </a>
        </li>
  `;
  });
boxDeCardsretro.innerHTML = userHtml;

