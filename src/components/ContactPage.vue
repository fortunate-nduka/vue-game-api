<template>
	<div class="contact">
		<div class="contact-wrapper">
			<div class="contact-text">
				<div class="contact-heading">get in touch</div>
				<div class="contact-para">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
					voluptates nam incidunt perferendis ipsa, odio sed vel aspernatur
					quidem ullam! Voluptatibus quo nam at odio libero labore laboriosam,
					facere adipisci.
				</div>
			</div>
			<form class="contact-form">
				<div class="contact-form-title">Contact Form</div>
				<div class="contact-form-col">
					<div class="contact-input">
						<label for="Maximum Score">Name <span>*</span></label>
						<input type="text" />
					</div>
					<div class="contact-input">
						<label for="Maximum Score">Email Address <span>*</span></label>
						<input type="text" />
					</div>
				</div>
				<div class="contact-input">
					<label for="Message">Message <span>*</span></label>
					<textarea cols="30" rows="10"></textarea>
				</div>
				<button class="form-button">Send</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ContactPage',
	};
</script>

<style>
	.contact {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.contact-wrapper {
		width: 50%;
		text-align: left;
		margin-top: 5rem;
		margin-bottom: 10rem;
	}
	.contact-text {
		margin-bottom: 5rem;
	}
	.contact-heading {
		font-size: 3rem;
		text-transform: uppercase;
		font-family: 'montserrat', sans serif;
		font-weight: 600;
		margin-bottom: 2rem;
		align-items: flex-start;
	}
	.contact-para {
		line-height: 1.5;
	}
	.contact-form {
		background-color: var(--panelColor);
		padding: 3rem;
		display: flex;
		flex-direction: column;
	}
	.contact-form-col {
		width: 100%;
		display: flex;
		align-content: center;
		justify-content: space-between;
	}
	.contact-form-title {
		font-family: 'montserrat', sans-serif;
		font-size: 1.8rem;
		margin-bottom: 3rem;
		align-items: flex-end;
	}
	.contact-input,
	.contact-input textarea {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.contact-input:nth-of-type(1) {
		margin-right: 5rem;
	}
	.contact-input label {
		font-size: 1.4rem;
		color: #ffffff;
		font-family: 'montserrat', sans-serif;
		margin-bottom: 1rem;
	}
	.contact-input input {
		background-color: #182c47;
		border: none;
		outline: none;
		padding: 1.5rem 1rem;
		border-radius: 5px;
		font-family: 'montserrat', sans-serif;
		letter-spacing: 1px;
		font-size: 1rem;
		font-weight: 600;
		color: #ffffff;
		margin-bottom: 3rem;
	}
	.contact-input textarea {
		background-color: #182c47;
		border: none;
		outline: none;
	}
	.contact-input > label > span {
		color: #5692e8;
    font-size: 1.8rem;
	}
	@media screen and (max-width: 1200px) {
		.contact-wrapper {
			width: 70%;
		}
	}
	@media screen and (max-width: 600px) {
		.contact-wrapper {
			width: 90%;
		}
		.contact-form-col {
			flex-direction: column;
		}
	}
</style>
