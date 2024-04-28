<script>
  import { onMount } from 'svelte';
  import Kortti from './lib/Kortti.svelte'
  import { rangaistus, kerroin, effectiveRangaistus } from './RangaistusStore';
  import SaannotModal from './lib/SaannotModal.svelte';
  import { saannot } from './Säännöt.js'
  import MenneetKortit from './lib/MenneetKortit.svelte';

  
  let rangaistusValue;
  let kerroinValue;

  
  import { writable } from 'svelte/store';
  let isOpen = writable(false);
  let onkoAuki = writable(false)
  
  let pelialkaa = false;

  
  const aloitaPeli = () => {
    pelialkaa = true;
  };

  
  const avaaModal = () => {
    isOpen.update(value => !value);
  };

  const avaaModal2 = () => {
    onkoAuki.update(value => !value)
  }
  
  $: {
    rangaistus.subscribe(value => rangaistusValue = value);
    kerroin.subscribe(value => kerroinValue = value);
  }
  
</script>

<main>
  {#if !pelialkaa}
    <h1>Valitse rangaistus ja kerroin</h1>


    <button class="saantonappi" on:click={avaaModal}>Säännöt</button>
    {#if $isOpen}
      <SaannotModal isOpen={$isOpen}></SaannotModal>
    {/if}

    <label for="rangaistus">Rangaistus: <input type="number" class="rangaistus" bind:value={$rangaistus}></label>
    <label for="kerroin">Kerroin:</label> 
    <input type="number" bind:value={$kerroin} />
    <button on:click={aloitaPeli}>Aseta rangaistus</button>

  {:else}
  
  <div class="number-input-container">
    <p>Kerroin:</p>
    <input type="number" class="number-input" bind:value={$kerroin} />
  </div>
  
  <div class="flex-container">
    <button class="menneetNappi" on:click={avaaModal2}>Menneet kortit</button>
    <button class="saantonappi" on:click={avaaModal}>Säännöt</button>
  </div>

    {#if $isOpen}
      <SaannotModal isOpen={$isOpen}></SaannotModal>
    {/if}

  {#if $onkoAuki}
    <MenneetKortit onkoAuki = {$onkoAuki}></MenneetKortit>
  {/if}

    <Kortti></Kortti>
  {/if}
</main>
<style>
 h1 {
  color: black;
 }
  main{
        background-color: white;
    }
    p{
      color: black    }

      label {
        color: black
      }

      .saantonappi {
        position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
      }
      .number-input-container {
    position: fixed;
    top: 20px;
    left: 20px;
  }
  .number-input {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  .menneetNappi {
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 10px 20px;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .saantonappi, .menneetNappi {
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
