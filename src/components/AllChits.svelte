<script>
    import { ChitStore } from '../stores/ChitStore';
    import Chit from "./Chit.svelte";

    let allChits = []

    ChitStore.subscribe((data) => allChits = data); 
</script>


<div class="all-chits">

    {#each allChits as chit (chit.id)}
        <Chit {...chit} />
    {/each}

</div>
