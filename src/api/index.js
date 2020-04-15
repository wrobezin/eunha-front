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
        url: 'http://localhost/page/rule',
        method: 'get',
        params: {
            ruleId: ruleId,
            pageIndex: query.pageIndex,
            pageSize: query.pageSize
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

