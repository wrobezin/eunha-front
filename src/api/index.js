import request from '../utils/request';
import axios from 'axios';

export const fetchRulesCount = name => {
    return request({
        url: 'http://localhost/rule/count',
        method: 'get',
        params: {
            name: name
        }
    });
};

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

export const deleteAllRule = ruleIdList => {
    return axios({
        url: 'http://localhost/rule/',
        method: 'delete',
        data: ruleIdList
    });
};

export const countMessageUnRead = () => {
    return request({
        url: 'http://localhost/message/unread-count',
        method: 'get'
    });
};

export const fetchUnreadMessage = () => {
    return request({
        url: 'http://localhost/message/unread',
        method: 'get'
    });
};

export const fetchReadMessage = () => {
    return request({
        url: 'http://localhost/message/read',
        method: 'get'
    });
};

export const setMessageRead = id => {
    return request({
        url: 'http://localhost/message/read/' + id,
        method: 'post'
    });
};

export const setMessageUnread = id => {
    return request({
        url: 'http://localhost/message/unread/' + id,
        method: 'post'
    });
};

export const deleteMessage = id => {
    return request({
        url: 'http://localhost/message/read/' + id,
        method: 'delete'
    });
};
