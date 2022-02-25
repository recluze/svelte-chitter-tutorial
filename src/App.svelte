<script>
	import TopWaves from "./components/TopWaves.svelte";
	import Aside from "./components/Aside.svelte";
	import Header from "./components/Header.svelte";
	import NewChit from "./components/NewChit.svelte";
	import AllChits from "./components/AllChits.svelte";
</script>

<div id="app-container" class="app-container">
	<TopWaves />
	<Header />

	<section>
		<div class="container">
			<main>
				<NewChit />
				<AllChits />
			</main>

			<Aside />
		</div>
	</section>
</div>

<style>
	section .container {
		display: flex;
		flex-direction: column;
	}

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
