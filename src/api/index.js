import request from '../utils/request';
import axios from 'axios';

export const fetchRules = query => {
    return request({
        url: 'http://localhost/rule',
        method: 'get',
        params: query
    });
};

export const fetchMatchedPages = ruleId => {
    return axios.get('http://localhost/rule/page/' + ruleId);
};

export const fetchPageContent = page => {
    return request({
        url: 'http://localhost/page/content',
        method: 'get',
        params: {
            contentType: page.contentType,
            id: page.id
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

