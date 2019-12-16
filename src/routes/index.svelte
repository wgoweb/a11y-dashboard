<script context="module">
	import {collections} from './data/_results';
	export async function preload(page, session) {
		return { collections };
	}
</script>

<style>
	.collection-list {
		list-style: none;
		padding: 0;
		display: flex;
	}
	.collection-list li {
		flex: 0 0 50%;
	}
</style>

<script>
	import CollectionCard from '../components/CollectionCard';
	export let collections;
</script>

<svelte:head>
	<title>A11y Dashboard</title>
</svelte:head>

<div class="container">
	<ul class="collection-list">
    {#each $collections as col}
      <li>
        <CollectionCard {...col} />
      </li>
    {/each}
	</ul>
</div>

