import { readable } from 'svelte/store';
import { winnebagoIndPages } from './_winnebagoind';
import getTechniques from './_techniques';

const techniques = getTechniques();

export const collections = readable([], set => {
    let cols = [
        {
            id: 'winnebagoind',
            name: 'Winnebago Ind',
            standard: 'WCAG2.0 AA',
            rootUrl: 'https://winnebagoind.com',
            pages: winnebagoIndPages.sort((a,b) => a.pageUrl > b.pageUrl),
            numOfPages: winnebagoIndPages.length
        }
    ]
    .map((col) => {
        let pages = col.pages;
        let processedPages = pages.map(processPage);
        let count = {
            total: processedPages.reduce((sum, cur) => sum + cur.count.total, 0),
            error: processedPages.reduce((sum, cur) => sum + cur.count.error, 0),
            warning: processedPages.reduce((sum, cur) => sum + cur.count.warning, 0),
            notice: processedPages.reduce((sum, cur) => sum + cur.count.notice, 0)
        };

        col.pages = processedPages;
        col.count = count;
        return col;
    });
    set(cols);

    return;
});

const loadJson = (url) => {
    return new Promise((res, rej) => {
        let req = new XMLHttpRequest();
        req.responseType = 'json';
        req.open('GET', url, true);
        req.onload = function () {
            res(req.response);
        };
        req.send(null);
    });
};

const processPage = (page) => {
    let issues = page.issues;
    let groupedByCode = _groupByProperty(issues, 'code');
    let issuesByCode = [...Object.keys((groupedByCode))]
        .map((k) => {
            let issues = groupedByCode[k];
            let sample = issues[0];
            let code = sample.code;

            let solCodeStr = code.split('.');
            solCodeStr.splice(0,4);
            let solCodes = solCodeStr.join('.').split(',').map(sc => sc.split('.')[0]);
            let solutions = solCodes.reduce((agg, tech) => {
                if (techniques[tech] && techniques[tech].title) {
                    agg.push({
                        title: techniques[tech].title || null,
                        url: techniques[tech].url || null
                    });
                }
                return agg;
            }, []);

            return {
                code: code,
                message: sample.message,
                type: sample.type,
                count: issues.length,
                items: issues,
                solutions: solutions
            };
        });

    let groupedByType = _groupByProperty(issuesByCode, 'type');

    let errors = groupedByType['error'] || [];
    let warnings = groupedByType['warning'] || [];
    let notices = groupedByType['notice'] || [];
    page.count = {
        total: issues.length,
        error: errors.reduce((sum, cur) => sum + cur.items.length, 0),
        warning: warnings.reduce((sum, cur) => sum + cur.items.length, 0),
        notice: notices.reduce((sum, cur) => sum + cur.items.length, 0)
    };
    page.errors = errors;
    page.warnings = warnings;
    page.notices = notices;

    return page;
};

/**
 * @template T
 * @param  {T[]} arr
 * @param  {string} prop
 * @return {{}}
 */
const _groupByProperty = (arr, prop) => {
    let grouped = arr.reduce((agg, cur) => {
        let key = cur[prop];

        if (!agg[key]) agg[key] = [];
        cur._group = key;
        agg[key].push(cur);

        return agg;
    }, {});
    return grouped;
};