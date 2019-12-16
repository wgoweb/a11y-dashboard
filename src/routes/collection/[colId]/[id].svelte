<script context="module">
	import {collections} from '../../data/_results';
	export async function preload({params, query}, session) {
        let colId = params.colId;
        let documentId = params.id;
        return {colId, documentId, collections};
	}
</script>

<script>
    import IssuesList from '../../../components/IssuesList';
    export let colId;
    export let documentId;
    export let collections;

    let curCollection = {};
    let documentResult = {};
    const unsubscribe = collections.subscribe(cols => {
        curCollection = cols.find(col => col.id == colId);
        documentResult = curCollection ? curCollection.pages.find(doc => doc.id == documentId) : {};
    });

    $: documentTitle = documentResult.documentTitle;
    $: pageUrl = documentResult.pageUrl;
    $: count = documentResult.count;
    $: errors = documentResult.errors;
    $: warnings = documentResult.warnings;
    $: notices = documentResult.notices;

    unsubscribe();

    let currentTab = 'errors';
</script>

<style>
    .tabs-container {
        margin: 1em auto;
    }
    .tabs-container .tab-content.hidden {
        display: none;
    }
    .tabs-list {
        list-style: none;
        padding: 0;
        display: flex;
        margin: 0 auto;
    }
    .tabs-list li a {
        display: block;
        padding: 0.5em 1em;
        background-color: #f0f0f0;
        border: 1px solid #e0e0e0;
        text-decoration: none;
    }
    .tabs-list li a:hover,
    .tabs-list li a:focus {
        background-color: #e8e8e8;
    }
    .tabs-list li.error a,
    .tabs-list li.error a:visited {
        color: #D83D2D;
    }
    .tabs-list li.warning a,
    .tabs-list li.warning a:visited {
        color: #A86700;
    }
    .tabs-list li.notice a,
    .tabs-list li.notice a:visited {
        color: #177BBE;
    }
    .tabs-list li.selected a {
        background-color: white;
        border-bottom: none;
    }
    .tabs-list::after {
        content: "";
        display: block;
        flex: 1 1 0;
        border-bottom: 1px solid #e0e0e0;
    }

    .tab-content {
        padding: 0.5em;
        border: 1px solid #e0e0e0;
        border-top: none;
    }
    
    .blue-link {
        color: #177BBE;
        text-decoration: none;
    }
    .blue-link:visited {
        color: #177BBE;
    }
    .blue-link:hover,
    .blue-link:focus {
        text-decoration: underline;
    }
</style>

<svelte:head>
	<title>{documentTitle} Result | {curCollection.name} | A11y Dashboard</title>
</svelte:head>

{#if pageUrl != null}
<h1>{documentTitle}</h1>
<div>
    <a class="blue-link" href={pageUrl} target="_blank">Go to page: <em>{pageUrl}</em></a>
    <br />
    <a class="blue-link" href="/collection/{curCollection.id}">Back to {curCollection.name} collection</a>
</div>
<div class="tabs-container" role="tab">
    <ul class="tabs-list" role="tablist">
        <li class:selected={currentTab == "errors"} class="error">
            <a href on:click|preventDefault="{() => currentTab = 'errors'}">Errors <em>({count.error})</em></a>
        </li>
        <li class:selected={currentTab == "warnings"} class="warning">
            <a href on:click|preventDefault="{() => currentTab = 'warnings'}">Warnings <em>({count.warning})</em></a>
        </li>
        <li class:selected={currentTab == "notices"} class="notice">
            <a href on:click|preventDefault="{() => currentTab = 'notices'}">Notices <em>({count.notice})</em></a>
        </li>
    </ul>
    <div class="tab-content" class:hidden={currentTab != 'errors'} role="tabpanel">
        <IssuesList issues={errors} type="error" />
    </div>
    <div class="tab-content" class:hidden={currentTab != 'warnings'} role="tabpanel">
        <IssuesList issues={warnings} type="warning" />
    </div>
    <div class="tab-content" class:hidden={currentTab != 'notices'} role="tabpanel">
        <IssuesList issues={notices} type="notice" />
    </div>
</div>
{/if}
