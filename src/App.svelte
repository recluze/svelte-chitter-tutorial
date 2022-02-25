<script>
	import TopWaves from "./components/TopWaves.svelte";
	import Aside from "./components/Aside.svelte";
	import Header from "./components/Header.svelte";
	import NewChit from "./components/NewChit.svelte";
</script>

<div id="app-container" class="app-container">
	<TopWaves />
	<Header />

	<section>
		<div class="container">
			<main>
				<NewChit />

				<div class="chit">
					<div class="author">Nauman</div>
					<div class="handle">@recluze</div>
					<div class="chit-content">
						Does anyone here use an e-ink reader? Is it closer in
						feel (for the eyes, not fingers) to an iPad or to an
						actual paper book? And this can go on and on ...
					</div>
					<div class="chit-meta">
						<div class="rechit">
							<i class="fa-solid fa-retweet" /> 2
						</div>
						<div class="like">
							<i class="fa-solid fa-thumbs-up" /> 10
						</div>
						<div class="save">
							<i class="fa-solid fa-share-alt" />
						</div>
						<div class="save">
							<i class="fa-solid fa-trash" />
						</div>
					</div>
				</div>

				<div class="chit">
					<div class="author">Albert Einstein</div>
					<div class="handle">@alby</div>
					<div class="chit-content">
						My second awesome chit content goes here ... Looks
						horrible though!
					</div>
					<div class="chit-meta">
						<div class="rechit">
							<i class="fa-solid fa-retweet" /> 2
						</div>
						<div class="like">
							<i class="fa-solid fa-thumbs-up" /> 10
						</div>
						<div class="save">
							<i class="fa-solid fa-share-alt" />
						</div>
						<div class="save">
							<i class="fa-solid fa-trash" />
						</div>
					</div>
				</div>

				<div class="chit">
					<div class="author">Not Rich Harris</div>
					<div class="handle">@notharris</div>
					<div class="chit-content">
						Create DApps (smart contracts using Ethereum blockchain)
						... Best seller course on sale right now for only $9.99
						... Don't miss out on this great opportunity!
					</div>
					<div class="chit-meta">
						<div class="rechit">
							<i class="fa-solid fa-retweet" /> 2
						</div>
						<div class="like">
							<i class="fa-solid fa-thumbs-up" /> 10
						</div>
						<div class="save">
							<i class="fa-solid fa-share-alt" />
						</div>
						<div class="save">
							<i class="fa-solid fa-trash" />
						</div>
					</div>
				</div>
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

	.chit {
		border: 1px solid #62676d22;
		display: flex;
		flex-direction: column;
		padding: 10px 20px;
		font-weight: lighter;
		background-color: #282c34;
		box-shadow: 0px 0px 20px #1d2025;
		margin-top: 30px;
	}

	.chit:hover {
		border: 1px solid #62676d99;
	}

	.chit-meta {
		display: flex;
		justify-content: space-between;
		padding: 10px 0px;
		margin: 0px;
		opacity: 0.5;
		font-size: x-small;
		border-top: 1px solid #dce4ec22;
		padding-bottom: 0px;
	}

	.chit-meta i {
		cursor: pointer;
	}

	.author {
		font-weight: bold;
		margin: 10px 0px;
		margin-bottom: 0px;
	}

	.handle {
		font-weight: 100;
		opacity: 0.6;
		font-size: 0.76em;
	}

	.chit-content {
		margin: 20px 0px;
		opacity: 0.8;
		padding-right: 15px;
		font-size: small;
	}
</style>
