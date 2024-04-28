<script>
  import { saannot } from "../Säännöt";
  import { effectiveRangaistus } from "../RangaistusStore";
  import { fade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  export let isOpen = false;

  let korttiSaannot;
  $: korttiSaannot = saannot($effectiveRangaistus.toString());
  
</script>

{#if isOpen}
<div class="backdrop"transition:fade={{ duration: 300, easing: cubicOut }}>
  <div class="modal">
    <h1>Säännöt</h1>
    <div class="content">
    
    <p>Anna Rangaistus: {korttiSaannot["ACE"].rule}</p>
    <hr>
    <p>Juo Rangaistus: {korttiSaannot["2"].rule}</p>
    <hr>
    <p>Yksi, Kaksi, Kolme: {korttiSaannot["3"].rule}</p>
    <hr>
    <p>Hitler: {korttiSaannot["4"].rule}</p>
    <hr>
    <p>Kategoria: {korttiSaannot["6"].rule}</p>
    <hr>
    <p>Vesiputous: {korttiSaannot["7"].rule}</p>
    <hr>
    <p>Riimi: {korttiSaannot["8"].rule}</p>
    <hr>
    <p>Sääntö: {korttiSaannot["9"].rule}</p>
    <hr>
    <p>Kysymysmestari: {korttiSaannot["10"].rule}</p>
    <hr>
    <p>Tauko: {korttiSaannot["JACK"].rule}</p>
    <hr>
    <p>Huora: {korttiSaannot["QUEEN"].rule}</p>
    <hr>
    <p>Tarina: {korttiSaannot["KING"].rule}</p>
    <hr>
    <button on:click={() => isOpen = false}>sulje</button>
    
  </div>
</div>
</div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000; 
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-height: 80vh;
    overflow-y: auto;
  }
  .backdrop {
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 999; 
  }
  p {
    color: black
  }
  h1 {color:black}
  .modal .content {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
}
.modal .content p {
    margin: 5px 0;
    text-align: left;
}
.modal button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    
}

</style>