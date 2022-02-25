<script>
    import { onMount, onDestroy } from "svelte";
    import { ChitStore } from "../stores/ChitStore";
    import Chit from "./Chit.svelte";

    let allChits = [];

    let chitStoreUnsub = ChitStore.subscribe((data) => (allChits = data));

    onMount(() => {
        console.log("Will read data here later... ");
    });

    onDestroy(() => {
        console.log("AllChits destroyed ...");
        chitStoreUnsub();
    });
</script>

<div class="all-chits">
    {#each allChits as chit (chit.id)}
        <Chit {...chit} />
    {/each}
</div>
