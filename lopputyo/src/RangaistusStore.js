import { writable, derived } from "svelte/store"

export let rangaistus = writable(3)
export let kerroin = writable(1)
export const effectiveRangaistus = derived(
    [rangaistus, kerroin],
    ([$rangaistus, $kerroin]) => $rangaistus * $kerroin
);