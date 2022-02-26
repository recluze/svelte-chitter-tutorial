<script>
    import { onMount, onDestroy } from "svelte";
    import { ChitStore } from "../stores/ChitStore";
    import Chit from "./Chit.svelte";

    let allChits = [];
    let loading = true;

    let chitStoreUnsub = ChitStore.subscribe((data) => (allChits = data));

    onMount(async () => {
        console.log("Will read data here later... ");
        await ChitStore.loadChits();
        loading = false;
    });

    onDestroy(() => {
        console.log("AllChits destroyed ...");
        chitStoreUnsub();
    });
</script>

<div class="all-chits">
    {#if loading}
        <div class="loader">Loading chits ...</div>
    {:else}
        {#each allChits as chit (chit.id)}
            <Chit {...chit} />
        {/each}
    {/if}
</div>

<style>
    .loader {
        font-size: x-small;
        padding-top: 20px;
        opacity: 0.6;
    }
</style>
