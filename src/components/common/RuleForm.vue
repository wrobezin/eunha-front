<template>
    <div>
        <div class="crumbs">
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="rule" label-width="120px" style="width: 700px">
                    <el-form-item label="规则名">
                        <el-input v-model="rule.name"></el-input>
                    </el-form-item>
                    <el-form-item label="种子URL">
                        <el-input v-model="rule.crawlRule.seedUrl"></el-input>
                    </el-form-item>
                    <el-form-item label="扩展方式">
                        <el-select @change="handleExpandTypeChange" v-model="rule.crawlRule.expandType"
                                   placeholder="请选择">
                            <el-option key="expandNonePage" label="不扩展" value="expandNonePage"></el-option>
                            <el-option key="expandSameSite" label="同站扩展" value="expandSameSite"></el-option>
                            <el-option key="expandAllSite" label="全网扩展" value="expandAllSite"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="rule.crawlRule.expandable" label="最大扩展深度">
                        <el-input-number controls-position="right"
                                         :step-strictly="true"
                                         :min="0"
                                         v-model="rule.crawlRule.maxExpandDepth"
                                         @change="handleMaxExpandDepthChange"/>
                    </el-form-item>
                    <el-form-item v-if="rule.crawlRule.expandType!=='expandAllSite'">
                        <template slot="label">
                            <el-switch @change="handleSetTitleXpathChange" v-model="rule.setTitleXpath"></el-switch>
                            <span>标题XPath</span>
                        </template>
                        <el-input v-if="rule.setTitleXpath" v-model="rule.crawlRule.titleXpath"></el-input>
                        <span v-else style="user-select:none;">未设置，默认获取<strong>title</strong>标签</span>
                    </el-form-item>
                    <el-form-item v-if="rule.crawlRule.expandType!=='expandAllSite'">
                        <template slot="label">
                            <el-switch @change="handleSetBodyXpathChange" v-model="rule.setBodyXpath"></el-switch>
                            <span style="font-size: 11px">内容XPath</span>
                            <el-popover
                                    placement="top-start"
                                    width="200"
                                    trigger="hover"
                                    content="抓取网页后将依次按右边列表中的XPath截取页面内容，并依序拼接起来。不可用于全网扩展。">
                                <i class="el-icon-question" slot="reference"/>
                            </el-popover>
                        </template>
                        <string-input-group v-if="rule.setBodyXpath"
                                            v-model="rule.crawlRule.bodyXpath"></string-input-group>
                        <span v-else style="user-select:none;">未设置，默认获取<strong>body</strong>标签</span>
                    </el-form-item>
                    <el-form-item>
                        <template slot="label">
                            <el-switch @change="handleSetInterestChange" v-model="rule.setInterest"></el-switch>
                            <span>兴趣规则</span>
                        </template>
                        <interest-rule-input v-if="rule.setInterest" v-model="rule.interestRule"></interest-rule-input>
                        <span v-else style="user-select:none;">未设置，默认对所有页面感兴趣</span>
                    </el-form-item>
                    <el-form-item>
                        <template slot="label">
                            <el-switch @change="handleSetPushChange" v-model="rule.setPush"></el-switch>
                            <span>更新推送</span>
                        </template>
                        <push-contact-input v-if="rule.setPush" v-model="rule.pushContacts"></push-contact-input>
                        <span v-else style="user-select:none;">未设置，默认不推送</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
                        <el-button v-if="!rule.id" @click="cleanUp">清空</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { saveRule } from '../../api';
    import InterestRuleInput from './InterestRuleInput';
    import PushContactInput from './PushContactInput';
    import StringInputGroup from './StringInputGroup';

    const INTEREST_ALWAYS_TRUE = function() {
        return [{
            type: 'ALWAYS_TRUE',
            logic: 'FIRST',
            value: ''
        }];
    };

    const INTEREST_BLANK_ITEMES = function() {
        return [{
            type: '',
            logic: 'FIRST',
            value: ''
        }];
    };

    const CONTACT_BLANK_ITEMES = function() {
        return [{
            type: '',
            value: '',
            params: {}
        }];
    };

    export default {
        name: 'ruleForm',
        components: { StringInputGroup, PushContactInput, InterestRuleInput },
        comments: {
            InterestRuleInput
        },
        props: {
            rule: {
                default: () => {
                    return {
                        name: '',
                        setInterest: false,
                        setPush: false,
                        setBodyXpath: false,
                        crawlRule: {
                            seedUrl: '',
                            expandType: 'expandNonePage',
                            expandable: false,
                            expandToOtherSite: false,
                            titleXpath: null,
                            bodyXpath: [],
                            maxExpandDepth: 0
                        },
                        interestRule: INTEREST_ALWAYS_TRUE(),
                        pushContacts: []
                    };
                }
            }
        },
        watch: {
            'rule.interestRule': function(interestRule) {
                if (interestRule === undefined || interestRule.length === 0) {
                    this.rule.interestRule = INTEREST_BLANK_ITEMES();
                }
            }
        },
        methods: {
            handleExpandTypeChange(type) {
                switch (type) {
                    case 'expandNonePage':
                        this.rule.crawlRule.expandable = false;
                        this.rule.crawlRule.expandToOtherSite = false;
                        this.rule.crawlRule.maxExpandDepth = 0;
                        break;
                    case 'expandSameSite':
                        this.rule.crawlRule.expandable = true;
                        this.rule.crawlRule.expandToOtherSite = false;
                        this.rule.crawlRule.maxExpandDepth = 1;
                        break;
                    case 'expandAllSite':
                        this.rule.crawlRule.expandable = true;
                        this.rule.crawlRule.expandToOtherSite = true;
                        this.rule.crawlRule.maxExpandDepth = 1;
                        break;
                }
            },
            handleSetPushChange(setPush) {
                this.rule.pushContacts = setPush ? CONTACT_BLANK_ITEMES() : [];
            },
            handleMaxExpandDepthChange(depth) {
                if (+depth === 0) {
                    this.$set(this.rule.crawlRule, 'expandType', 'expandNonePage');
                }
            },
            handleSetBodyXpathChange(setBodyXpath) {
                this.rule.crawlRule.bodyXpath = setBodyXpath ? [''] : [];
            },
            handleSetTitleXpathChange(setTitleXpath) {
                this.rule.crawlRule.titleXpath = setTitleXpath ? '' : null;
            },
            handleSetInterestChange(setInterest) {
                this.rule.interestRule = setInterest ? INTEREST_BLANK_ITEMES() : INTEREST_ALWAYS_TRUE();
            },
            onSubmit() {
                let message = this.$message;
                saveRule(this.rule)
                    .then(function(response) {
                        if (response.data) {
                            message.success('提交成功！');
                        } else {
                            message.warning('提交失败！');
                        }
                    })
                    .catch(function(error) {
                        message.error('网络异常！');
                        console.error(error);
                    });
            },
            cleanUp() {
                this.rule.name = '';
                this.rule.crawlRule.seedUrl = '';
                this.rule.crawlRule.expandType = 'expandNonePage';
                this.handleExpandTypeChange('expandNonePage');
                this.rule.setInterest = false;
                this.handleSetInterestChange(false);
                this.rule.setPush = false;
                this.handleSetPushChange(false);
                this.rule.setBodyXpath = false;
                this.handleSetBodyXpathChange(false);
                this.rule.setTitleXpath = false;
                this.handleSetTitleXpathChange(false);
            }
        }
    };
</script>
