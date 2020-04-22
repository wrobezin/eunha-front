import request from '../utils/request';
import axios from 'axios';

export const fetchRules = query => {
    return request({
        url: 'http://localhost/rule',
        method: 'get',
        params: query
    });
};

export const fetchMatchedPages = (ruleId, query) => {
    return request({
        url: 'http://localhost/page/rule-matched',
        method: 'get',
        params: {
            ruleId: ruleId,
            pageIndex: query.pageIndex,
            pageSize: query.pageSize
        }
    });
};

export const fetchMatchedPageCount = ruleId => {
    return request({
        url: 'http://localhost/page/rule-matched-count/' + ruleId,
        method: 'get'
    });
};

export const fetchDifference = (url, version1, version2) => {
    return request({
        url: 'http://localhost/diff',
        method: 'get',
        params: {
            url: url,
            version1: version1,
            version2: version2
        }
    });
};

export const fetchHistoryPages = url => {
    return request({
        url: 'http://localhost/page/history',
        method: 'get',
        params: {
            url: url
        }
    });
};

export const countByKeywords = keywords => {
    return request({
        url: 'http://localhost/page//keyowrd/count',
        method: 'get',
        params: {
            keywords: keywords
        }
    });
};

export const searchByKeywords = (keywords, pageIndex, pageSize) => {
    return request({
        url: 'http://localhost/page//keyowrd/search',
        method: 'get',
        params: {
            keywords: keywords,
            pageIndex: pageIndex,
            pageSize: pageSize
        }
    });
};

export const saveRule = rule => {
    return axios({
        method: 'post',
        url: 'http://localhost/rule',
        data: rule
    });
};

export const deleteRule = rule => {
    return axios.delete('http://localhost/rule/' + rule.id);
};
