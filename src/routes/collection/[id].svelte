<script context="module">
	import {collections} from '../data/_results';
	export async function preload({params, query}, session) {
        let id = params.id;
        return {id, collections};
	}
</script>

<script>
    import DocumentCard from '../../components/DocumentCard';
    
    export let id;
    export let collections;

    let curCollection = {};
    const unsubscribe = collections.subscribe(cols => {
        curCollection = cols.find(col => col.id == id) || {};
    });

    $: pages = curCollection.pages || [];

    unsubscribe();
</script>

<style>
    .document-list {
        list-style: none;
        padding: 0;
    }
    .document-list li {
        margin: 0.5em 0;
    }
</style>

<svelte:head>
	<title>{curCollection.name} Result | A11y Dashboard</title>
</svelte:head>

<div>
  <h1>{curCollection.name}</h1>
  <p>
    {curCollection.pages.length} pages found <br />
    <em>{curCollection.rootUrl}</em>
  </p>
</div>
<ul class="document-list">
  {#each pages as page}
    <li>
      <DocumentCard {...page} colId={id} />
    </li>
  {/each}
</ul>
