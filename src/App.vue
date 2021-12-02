<template>
	<div id="app">
		<header class="header">
			<router-link to="/" class="headerLink">video games</router-link>
			<router-link to="/contact" class="headerLink">contact</router-link>
		</header>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<style>
	/*!!!!!!!!!! GLOBAL STYLES !!!!!!!!!!!!*/
	:root {
		--heading: poppins;
		--body: poppins;
		--bodyColor: linear-gradient(#081221, #03080f);
		--panelColor: #0e1a2b;
		--text: #c1d1e8;
	}
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	html {
		font-size: 62.5%;
	}
	@media screen and (max-width: 1200px) {
		html {
			font-size: 60.5%;
		}
	}
	@media screen and (max-width: 600px) {
		html {
			font-size: 58.5%;
		}
	}
	#app {
		width: 100%;
		min-height: 100vh;
	}
	body {
		font-size: 1.5rem;
		font-family: 'mulish', sans serif;
		color: var(--text);
		background-image: linear-gradient(#081221, #03080f);
		background-repeat: no-repeat;
		min-height: 100vh;
		max-width: 100%;
		letter-spacing: 1px;
	}
	label {
		font-size: 1.3rem;
		color: #ffffff;
		font-family: 'montserrat', sans-serif;
		margin-bottom: 1rem;
	}
	input {
		background-color: #182c47;
		border: none;
		outline: none;
		padding: 1.2rem 1rem;
		border-radius: 5px;
		font-family: 'montserrat', sans-serif;
		letter-spacing: 1px;
		font-size: 1rem;
		font-weight: 600;
		color: #ffffff;
		margin-bottom: 3rem;
	}
	button {
		background-color: #5692e8;
		border: none;
		outline: none;
		padding: 1.2rem 3rem;
		color: #ffffff;
		font-family: 'montserrat', sans-serif;
		margin-top: 3rem;
		align-self: flex-end;
	}

	/*!!!!!!!!!!!!!!!! HEADER STYLES !!!!!!!!!!!!*/
	.header {
		background-color: var(--bodyColor);
		padding-left: 15rem;
		height: 20rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
	}

	.headerLink {
		color: #ffffff;
		font-weight: 600;
		font-size: 3rem;
		text-transform: uppercase;
		margin-right: 3rem;
		text-decoration: none;
	}
	@media screen and (max-width: 1200px) {
		.header {
			height: 18rem;
			padding-left: 4rem;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		.headerLink {
			margin-right: 0;
		}

		.headerLink:nth-of-type(1) {
			margin-bottom: 3rem;
		}
	}
</style>
