import { cartesListe } from "./cartes.js"
//importe les cartes prédéfinies 

const cardContainer = document.querySelector('#paquet')
let btnCarte = document.querySelector('#Carte')
const body = document.querySelector('body')


const getOracle =(()=> {
    const numCartes = randomCartes()
    const cartes = cartesListe[numCartes]
    console.log('Oracle:', cartes.nom)
    flipCartes(cartes)
    //choisi une carte aléatoire dans cartesListe puis nous l'affiche avec l'oracle
})

btnCarte.addEventListener('click', ()=> {
    getOracle()
    //active getOracle quand on clique la cartes
})

function randomCartes() {
   const numCartes= Math.floor(Math.random() * 22);
   return numCartes
   //choisi un nombre entre 0 et 21 pour choisir la carte 
}

function flipCartes(cartes){
    //affiche la carte
    cardContainer.innerHTML=`
      <div class="flex flex-col items-center justify-center h-full">
        <h2 class="text-white text-2xl font-bold mb-5">${cartes.nom}</h2>
        <div class="relative Carte h-96 w-52 bg-[url('${cartes.Backdrop}')] bg-center bg-cover hover:scale-105 transition border-2 rounded-xl py-25 flex justify-center place-items-center">
</div>
        <p class="text-white text-xl mt-5">${cartes.Oracle}</p>
      </div>
    `
  }

  //tentative d'ajouter une animation js de flip de la carte
// function flipCartes(cartes){
  //  const cardElement = document.querySelector('.Carte');
  //  cardElement.classList.add('flipped');
  //  cardElement.addEventListener('animationend', () => {
 //       cardContainer.innerHTML=`
 //           <div class="flex flex-col items-center justify-center h-full">
  //              <h2 class="text-white text-2xl font-bold mb-5">${cartes.nom}</h2>
//                <div class="relative Carte h-96 w-52 bg-[url('${cartes.Backdrop}')] bg-center bg-cover transition border-2 rounded-xl py-25 flex justify-center place-items-center">
 //                   <img src="${cartes.Front}" alt="${cartes.nom}" class="absolute top-0 left-0 w-full h-full object-contain">
 //</img>               </div>
  //              <p class="text-white text-xl mt-5">${cartes.Oracle}</p>
 //           </div>
 //       `;
//        cardElement.classList.remove('flipped');
//    }, {once: true});
//}