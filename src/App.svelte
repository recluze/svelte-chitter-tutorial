<script>
	import { UserSessionStore } from "./stores/UserSession";
	import { onDestroy } from "svelte";

	import TopWaves from "./components/TopWaves.svelte";
	import Aside from "./components/Aside.svelte";
	import Header from "./components/Header.svelte";
	import NewChit from "./components/NewChit.svelte";
	import AllChits from "./components/AllChits.svelte";
	import LoginForm from "./components/LoginForm.svelte";


	let sessionData = false;
	let userSessionStoreUnsub = UserSessionStore.subscribe((data) => (sessionData = data));

    onDestroy(() => {
        userSessionStoreUnsub();
    });
</script>

<div id="app-container" class="app-container">
	<TopWaves />
	<Header />

	<section>
		<div class="container">
			<main>
				{#if !sessionData }
					<LoginForm />
				{:else}
					<NewChit />
					<AllChits />
				{/if}
			</main>

			<Aside />
		</div>
	</section>
</div>

<style>
	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	section .container {
		display: flex;
		flex-direction: row;
	}

	section .container main {
		flex-grow: 3;
		flex-basis: 600px;
		margin-left: 20px;
	}
</style>
