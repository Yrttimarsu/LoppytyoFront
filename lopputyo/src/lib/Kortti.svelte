<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { deckIdStore, vedetytKortitStore } from '../Pakka';
  import { rangaistus, kerroin, effectiveRangaistus } from '../RangaistusStore';
    import { saannot } from '../Säännöt.js'
  $deckIdStore;
  $vedetytKortitStore; 

  let korttiSaannot;
  $: korttiSaannot = saannot($effectiveRangaistus.toString());

  onMount(async () => {
      try {
          const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
          const data = await response.json();
          deckIdStore.set(data.deck_id);
      } catch (error) {
          console.error('Pakka ei saatavilla', error);
      }
  });

 async function NostaKortti() {
     const deckId = $deckIdStore;
     try {
         const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
         const data = await response.json();
         if (data.cards && data.cards.length > 0) {
             vedetytKortitStore.update(cards => [...cards, data.cards[0]]); 
         }
     } catch (error) {
         console.error('Kortti Kusi :(((', error);
     }
 }

 function resetoi() {
     deckIdStore.set('');
     vedetytKortitStore.set([]);  
     
 }
</script>



{#if $vedetytKortitStore.length > 0}
        <div on:click={NostaKortti} on:keydown={(e) => {if (e.key === 'Enter' || e.key === 'Space') {NostaKortti()}}}>
            <img src={$vedetytKortitStore[$vedetytKortitStore.length - 1].image} alt={`Card image of ${$vedetytKortitStore[$vedetytKortitStore.length - 1].value}`}>
            <p>{korttiSaannot[$vedetytKortitStore[$vedetytKortitStore.length - 1].value].name}</p>
        
        </div>
    {:else}
        <div class="card" on:click={NostaKortti}>
            <p>No card drawn yet. Click to draw a card.</p>
        </div>
    {/if}


<style>
  p {
    color:black
  }
 .card {
     border-radius: 15px;
     border-style: double;
     border-color: black;
     color: black;
     padding: 20px;
     text-align: center;
 }

 .card-container {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100vh;  
 }
</style>
