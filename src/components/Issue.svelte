<script>
    export let code;
    export let count;
    export let message;
    export let type;
    export let solutions = [];
    export let items = [];

    let hideDetails = true;
</script>

<style>
    .issue {
        border: 1px solid #e0e0e0;
    }
    .issue .issue-title {
        padding: 0.5em 1em;
        background-color: #f0f0f0;
        font-size: 1.125em;
    }
    .issue.error .issue-title {
        color: #D83D2D;
    }
    .issue.warning .issue-title {
        color: #A86700;
    }
    .issue.notice .issue-title {
        color: #177BBE;
    }

    .issue .issue-count {
        color: white;
        padding: 0 0.25em;
        margin-left: 0.5em;
    }
    .issue.error .issue-count {
        background-color: #D83D2D;
    }
    .issue.warning .issue-count {
        background-color: #A86700;
    }
    .issue.notice .issue-count {
        background-color: #177BBE;
    }
    .issue .issue-body {
        padding: 0.5em 1em;
    }
    .issue .blue-link {
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

    .issue-details.hidden {
        display: none;
    }
    
    .details-section {
        margin: 1em auto;
    }
    .details-section ul {
        list-style: none;
        padding: 0;
    }

    .issue .issue-item {
        margin: 0.5em 0;
    }
    .issue code {
        background-color: #f0f0f0;
    }
    .issue.error code {
        color: #D83D2D;
    }
    .issue.warning code {
        color: #A86700;
    }
    .issue.notice code {
        color: #177BBE;
    }
</style>

<div class="issue {type}">
    <div class="issue-title">
        <span>{code}</span><span class="issue-count">{count}</span>
    </div>
    <div class="issue-body">
        <p class="issue-message">{message}&ensp; <a class="blue-link" href on:click|preventDefault="{() => hideDetails = !hideDetails}">{#if hideDetails}Show{:else}Hide{/if} Details</a></p>
        <div class="issue-details" class:hidden={hideDetails}>
            {#if solutions.length}
            <div class="details-section">
                <div>Solutions</div>
                <ul>
                    {#each solutions as solution}
                    <li><a target="_blank" class="blue-link" href="{solution.url}">{solution.title}</a></li>
                    {/each}
                </ul>
            </div>
            {/if}
            {#if items.length}
            <div class="details-section">
                <div>Selectors</div>
                <ul>
                    {#each items as item}
                    <li class="issue-item">
                        <code>{item.selector}</code>
                        <div><em>{item.context}</em></div>
                    </li>
                    {/each}
                </ul>
            </div>
            {/if}
        </div>
    </div>
</div>