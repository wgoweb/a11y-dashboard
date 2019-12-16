<script>
    import IssuesList from './IssuesList';
    
    export let errors = [];
    export let warnings = [];
    export let notices = [];

    export let hrefCsv;
    export let hrefJson;
    export let date = new Date();
</script>

<div class="col-md-3 aside">
	<div class="row">
		<div class="action-buttons col-md-12 col-sm-6">
			<div class="row">
				<div class="col-md-12 col-sm-6 col-xs-12">
			        <a href="{hrefCsv}" class="btn-full-width btn btn-default" data-test="download-csv">
			        	Download CSV <span class="glyphicon glyphicon-download" aria-hidden="true"></span>
			        </a>
				</div>
				<div class="col-md-12 col-sm-6 col-xs-12">
			        <a href="{hrefJson}" class="btn-full-width btn btn-default" data-test="download-json">
			        	Download JSON <span class="glyphicon glyphicon-download" aria-hidden="true"></span>
			        </a>
				</div>
			</div>
		</div>
	</div>
	<div class="row date-selector-row">
		<div id="top" class="col-md-12 col-sm-12 clearfix">
			<div class="well dark-well">
				<div class="date-selector">
					<div class="btn-group block-level clearfix">
						<h2 class="h4">
							<span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>&nbsp;&nbsp;{date}
						</h2>
						<h3 class="h5 show-stats">Select a date to show stats for:</h3>
						<ul role="navigation" class="dates-list">
							<!-- {#results}
								<li><a class="" href="{href}">{date-format date format="DD MMM YYYY"}</a></li>
							{/results} -->
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 col-sm-12 clearfix">
			<div class="well">
				<h4 class="crunch-top">View results in browser</h4>
				<p class="crunch-bottom">Pa11y uses HTML_CodeSniffer to find accessibility issues. <a href="http://squizlabs.github.io/HTML_CodeSniffer/">Use their bookmarklet</a> to view results on the page you are testing.</p>
			</div>
	    </div>
	</div>
</div>
<div class="col-md-9" role="main">
	<div class="tab-content">
        <IssuesList issues={errors} type="error" />
        <IssuesList issues={warnings} type="warning" />
        <IssuesList issues={notices} type="notice" />
	</div>
</div>