<template>
	<div class="container">
		<div class="wrapper">
			<aside class="sidebar">
				<div class="sidebar-box">
					<div class="sidebaTitle">Filter Results</div>
					<form class="sidebar-form">
						<label class="" for="Name">Name [contains]</label>
						<input
							type="text"
							v-model="search"
							placeholder="Text String"
							@keyup="filteredListItems"
						/>
						<label for="Maximum Score">Maximum Score</label>
						<input type="text" placeholder="1 - 10" />
						<label for="Order By">Order By</label>
						<div class="sidebar-form-select">
							<select>
								<option value="0">Release Date</option>
								<option value="1">Name</option>
								<option value="2">Score</option>
							</select>
						</div>
					</form>
				</div>
			</aside>
			<main class="content-container">
				<div class="content" v-for="i in filteredListItems" v-bind:key="i.id">
					<div class="contentSpace">
						<div class="notificaion">
							{{ i.rating }}
						</div>
					</div>
					<div class="contentBox">
						<div class="contentBoxInfo">
							<h2 class="contentBoxTitle">{{ i.name }}</h2>
							<div class="contentBoxDate">
								Release Date: {{ i.first_release_date }}
							</div>
							<p class="contentBoxText">[Summary]: {{ i.summary }}</p>
						</div>
						<div class="contentBoxNotification">
							<div class="notification">
								{{ i.rating }}
							</div>
						</div>
					</div>
				</div>
			</main>
			<aside class="rightSpace"></aside>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'VideoPage',
		data() {
			return { listItem: null, search: '' };
		},
		mounted() {
			axios
				.get('https://public.connectnow.org.uk/applicant-test/')
				.then((response) => {
					this.listItem = response.data;
				})
		},
		computed: {
			filteredListItems: function () {
				var items = this.listItem;
				var search = this.search;
				if (!search) {
					return items;
				}
				search = search.trim().toLowerCase();
				items = items.filter(function (item) {
					if (item.name.toLowerCase().indexOf(search) !== -1) {
						return item;
					}
				});
				return items;
			},
		},
	};
</script>

<style scoped src="../assets/styles.css"></style>
