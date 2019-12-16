<script>
    export let colId;
    export let id;
    export let documentTitle;
    export let pageUrl;
    export let count = {
        error: 0,
        warning: 0,
        notice: 0
    };
</script>

<style>
    .document-card {
        border: 1px solid #e0e0e0;
        padding: 0.5em;
        display: block;
    }
    .document-card,
    .document-card:visited {
        text-decoration: none;
        color: black;
    }
    .document-card:hover {
        text-decoration: none;
        background-color: #f0f0f0;
    }
    .document-card h3 {
        font-size: 1em;
        margin: 0;
    }
    .document-card .page-url {
        color: gray;
    }
    .stats {
        list-style: none;
        padding: 0;
        display: flex;
        margin: 0.25em 0;
    }
    .stats li {
        color: white;
        font-size: 0.75em;
        text-align: center;
        padding: 0.25em 0.5em;
        margin: 0.25em;
    }
    .stats .error {
        background-color: #D83D2D;
    }
    .stats .warning {
        background-color: #A86700;
    }
    .stats .notice {
        background-color: #177BBE;
    }
</style>

<a class="document-card" title="Details for URL {pageUrl}" href="/collection/{colId}/{id}">
    <h3>{documentTitle}</h3>
    <div class="page-url"><em>{pageUrl}</em></div>
    <ul class="stats">
        <li class="error" title="Number of errors ({count.error})">{count.error} <span class="stat-type">Errors</span></li>
        <li class="warning" title="Number of warnings ({count.warning})">{count.warning} <span class="stat-type">Warnings</span></li>
        <li class="notice last" title="Number of notices ({count.notice})">{count.notice} <span class="stat-type">Notices</span></li>
    </ul>
</a>
