<script>
    import Issue from './Issue';
    export let issues;
    export let type;
</script>

<style>
    .issues-list {
        list-style: none;
        margin: 0 auto;
        padding: 0;
    }
    .issues-list li {
        margin: 0.75em auto;
    }
</style>

{#if issues.length}
<ul class="issues-list">
    {#each issues as issue, i}
    <li>
        <Issue {...issue} index={i} />
    </li>
    {/each}
</ul>
{:else}
    <div class="issues-list ">You have 0 {type}s.</div>
{/if}