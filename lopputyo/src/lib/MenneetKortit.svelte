
<script>
 import { vedetytKortitStore } from '../Pakka.js';
  import { readable } from 'svelte/store';
  import { effectiveRangaistus } from "../RangaistusStore";
  import { saannot } from "../Säännöt";
export let onkoAuki = false
  const vedetytKortit = readable([], function start(set) {
    const unsubscribe = vedetytKortitStore.subscribe(set);
    return unsubscribe;
  });
 let korttiSaannot = saannot($effectiveRangaistus.toString());
</script>

{#if onkoAuki}
<div class="backdrop">
  <div class="modal-container">
    <div class="modal">
      <h1>Vedetyt Kortit</h1>
      <div class="content">
        {#each $vedetytKortit as kortti, index}
          <p>{index + 1}.  {korttiSaannot[kortti.value].name}</p>
        {/each}
        <button on:click={() => onkoAuki = false}>Close</button>
      </div>
    </div>
  </div>
</div>
{/if}


<style>
    p {
        color: black
    }
</style>