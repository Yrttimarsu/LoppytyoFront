import { rangaistus, effectiveRangaistus } from "./RangaistusStore"
import { get } from 'svelte/store'
//let value = get(effectiveRangaistus)
export const saannot  = (value) =>  {
      return {
      'ACE': {name: `Anna ${value}`, rule: `Anna ${value}`},
      '2': {  name: `Juo ${value}`, rule: `Nostaja juo ${value}` },
      '3': { name: 'Yksi, Kaksi, Kolme', rule: `Ensimmäinen juo ${value}, toinen ${(2 * value)} ja kolmas ${3 * value}`},
      '4': { name: 'Hitler!', rule: `Viimeinen joka huutaa juo ${value}` },
    '5': { name: 'Hitler!', rule: `Viimeinen joka huutaa juo ${value}` },
      '6': {name: 'Kategoria', rule: `Nostaja keksii kategorian. Henkilö joka ei enää keksi kategoriaan sanoja, juo kieroksen pituuden.`},
      '7': {name: 'Vesiputous', rule: `Nostaja alkaa juomaan ja seuraava saa lopettaa vasta edellisen jäkeen.`},
      '8': {name:'Riimi', rule:'Sanokaa rimmaavia sanoja kunnes joku ei onnistu.'},
      '9': {name:'Sääntö', rule:'Keksi mikä tahansa sääntö, ei rajoja, paitsi että sen pitää vaikuttaa peliin. Sääntöjä on noudatettava aina ilman poikkeuksia.'},
      '10': {name:'kysymysmestari', rule:`Jos kysyt kysymyksen ja kohde vastaa, hän juo ${value}`},
      'JACK': {name: 'Tauko', rule: 'Pidä 5 min tauko, jos myöhästyt niin juot yhden kokonaisen valinnaisen drinkin'},
      'QUEEN': {name: 'Huora', rule:'Valitse huorasi, hän joutuu juomaan kaiken minkä sinäkin.'},
      'KING': {name:'tarina', rule: 'Aloita sanalla, toinen joutuu toistamaan sen ja keksimään uuden, tämä jatkuu kunnes joku ei enää muista sanoja ja hän juo sanojen määrän.'}
    };
}
//export const saannot = ($rangaistus) => ({
//    'ACE': { name: `Anna ${$rangaistus}`, rule:  `Anna ${$rangaistus}`},
//    '2': { name: `Juo ${$rangaistus}`, rule:`Nostaja juo ${$rangaistus}` },
//    '3': { name: 'Yksi, Kaksi, Kolme', rule:`Ensimmäinen juo${$rangaistus}, toinen ${(2 * $rangaistus)} ja kolmas ${3 * $rangaistus}`},
//    '4': { name: 'Hitler!', rule: `Viimeinen joka huutaa juo ${$rangaistus}` },
//    '5': { name: 'Hitler!', rule: `Viimeinen joka huutaa juo ${$rangaistus}` },
//    '6': { name: 'Juo 1', penalty: 1 },
//    '7': { name: 'Juo 1', penalty: 1 },
//    '8': { name: 'Juo 1', penalty: 1 },
//    '9': { name: 'Juo 1', penalty: 1 },
//    '10': { name: 'Juo 2', penalty: 2 },
//    'JACK': { name: 'Ohita vuoro', penalty: 0 },
//    'QUEEN': { name: 'Vaihda suuntaa', penalty: 0 },
//    'KING': { name: 'Kuninkaan sääntö', penalty: 0 }
//})