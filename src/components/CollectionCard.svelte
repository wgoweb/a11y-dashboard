<script>
    export let id;
    export let name;
    export let standard = 'WCAG2.0 AA';
    export let rootUrl;
    export let numOfPages;
    export let count = {
        error: 0,
        warning: 0,
        notice: 0
    };
</script>

<style>
    .collection-card {
        border: 1px solid #e0e0e0;
    }
    a.collection-card-link {
        padding: 1em;
        display: block;
    }
    a.collection-card-link,
    a.collection-card-link:visited {
        text-decoration: none;
        color: black;
    }
    a.collection-card-link:hover {
        text-decoration: none;
        background-color: #f0f0f0;
    }
    .collection-card h3 {
        margin-top: 0;
    }
    .stats {
        list-style: none;
        padding: 0;
        display: flex;
        margin: 1em 0;
        justify-content: space-around;
    }
    .stats li {

        color: white;
        font-size: 1em;
        text-align: center;
        font-weight: bold;
        flex-basis: 30%;
        padding: 0.5em 0;
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

<div class="collection-card">
    <a class="collection-card-link" title="Details for URL {rootUrl}" href="/collection/{id}">
        <h3>{name}</h3>
        <div>({standard})</div>
        <div><em>{rootUrl}</em></div>
        <div>{numOfPages} Pages Found</div>
        <ul class="stats">
            <li class="error" title="Number of errors ({count.error})">{count.error} <div class="stat-type">Errors</div></li>
            <li class="warning" title="Number of warnings ({count.warning})">{count.warning} <div class="stat-type">Warnings</div></li>
            <li class="notice" title="Number of notices ({count.notice})">{count.notice} <div class="stat-type">Notices</div></li>
        </ul>
    </a>
    <!-- <div class="btn-group options-button text-right">
        <button type="button" class="btn btn-info btn-xs dropdown-toggle" data-toggle="dropdown"><span class="sr-only">Options</span><span class="glyphicon glyphicon-cog"></span></button>
        <ul class="dropdown-menu pull-right" role="menu">
            <li><a href="{href}/edit">Edit this task</a></li>
            <li><a href="{href}/delete">Delete this task</a></li>
            <li class="divider"></li>
            <li><a href="{href}/run" data-test="run-task">Run Pa11y</a></li>
        </ul>
    </div> -->
</div>
