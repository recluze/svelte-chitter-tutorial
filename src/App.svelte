<script>
</script>

<div id="app-container" class="app-container">
	<!-- top waves -->
	<div style="overflow: hidden; margin-bottom: 20px;">
		<svg
			preserveAspectRatio="none"
			viewBox="0 0 1200 120"
			xmlns="http://www.w3.org/2000/svg"
			style="fill: #80b3c2; width: 100%; height: 15px;"
		>
			<path
				d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
				opacity=".25"
			/>
			<path
				d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
				opacity=".5"
			/>
			<path
				d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
			/>
		</svg>
	</div>

	<!-- Header with information -->
	<nav>
		<div class="container">
			<span class="logo"
				><i class="fa-solid fa-location-arrow" />Chitter</span
			>
		</div>
	</nav>

	<section>
		<div class="container">
			<main>
				<div class="chit-entry">
					<textarea placeholder="Say something..." />
					<button class="btn-send fa-solid fa-location-arrow" />
				</div>

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

			<aside>
				Chitter is a tweet client built on Svelte. Nothing much going on
				over here. See more on:

				<p>recluze.net/course-svelte</p>
			</aside>
		</div>
	</section>
</div>

<style>
	section.container {
		display: flex;
		flex-direction: column;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.logo {
		margin-left: 30px;
		font-family: "Source Sans Pro";
		font-weight: 900;
		opacity: 0.7;
	}

	.logo i {
		margin-right: 10px;
	}

	nav .container {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav .container ul {
		display: flex;
		height: 100%;
	}

	nav .container ul li {
		margin: 10px;
		list-style: none;
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

	section .container aside {
		flex-grow: 1;
		flex-basis: 100px;
		padding: 20px;
		font-size: smaller;
		margin-top: 20px;
		font-weight: 100;
		opacity: 0.5;
	}

	.chit {
		border: 1px solid #62676d22;
		/* border-top: none;  */
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

	.chit-entry {
		border: 1px solid #62676d22;
		display: flex;
		flex-direction: row;
		padding: 10px 20px;
		font-weight: lighter;
		background-color: #282c34;
		box-shadow: 0px 0px 20px #1d2025;
		margin-top: 30px;
		justify-content: space-between;
		align-items: center;
	}

	.chit-entry textarea {
		display: block;
		flex-basis: 95%;
		background-color: #282c34;
		color: #dce4ec;
		font-size: smaller;
		padding: 10px;
		border: 1px solid #dce4ec22;
	}

	.chit-entry .btn-send {
		flex-basis: 20px;
		text-align: right;
		background-color: inherit;
		border: none;
		color: #dce4ec;
		cursor: pointer;
	}
</style>
