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
                        <el-select v-model="rule.crawlRule.expandType" placeholder="请选择">
                            <el-option key="expandNonePage" label="不扩展" value="expandNonePage"></el-option>
                            <el-option key="expandSameSite" label="同站扩展" value="expandSameSite"></el-option>
                            <el-option key="expandAllSite" label="全网扩展" value="expandAllSite"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="rule.crawlRule.expandable" label="最大扩展深度">
                        <el-input-number controls-position="right"
                                         :step-strictly="true"
                                         :min="0"
                                         v-model="rule.crawlRule.maxExpandDepth"/>
                    </el-form-item>
                    <el-form-item>
                        <template slot="label">
                            <el-switch v-model="rule.setInterest"></el-switch>
                            <span>兴趣规则</span>
                        </template>
                        <interest-rule-input v-if="rule.setInterest" v-model="rule.interestRule"></interest-rule-input>
                        <span v-else style="user-select:none;">未设置，默认对所有页面感兴趣</span>
                    </el-form-item>
                    <el-form-item>
                        <template slot="label">
                            <el-switch v-model="rule.setPush"></el-switch>
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
        components: { PushContactInput, InterestRuleInput },
        comments: {
            InterestRuleInput
        },
        props: {
            rule: {
                default: {
                    name: '',
                    setInterest: false,
                    setPush: false,
                    crawlRule: {
                        seedUrl: '',
                        expandType: 'expandNonePage',
                        expandable: false,
                        expandToOtherSite: false,
                        maxExpandDepth: 0
                    },
                    interestRule: INTEREST_ALWAYS_TRUE(),
                    pushContacts: CONTACT_BLANK_ITEMES()
                }
            }
        },
        watch: {
            'rule.crawlRule.expandType': function(type) {
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
            'rule.setInterest': function(setInterest) {
                this.rule.interestRule = setInterest ? INTEREST_BLANK_ITEMES() : INTEREST_ALWAYS_TRUE();
            },
            'rule.interestRule': function(interestRule) {
                if (interestRule === undefined || interestRule.length === 0) {
                    this.rule.interestRule = INTEREST_BLANK_ITEMES();
                }
            },
            'rule.setPush': function(setPush) {
                this.rule.pushContacts = setPush ? CONTACT_BLANK_ITEMES() : [];
            },
            'rule.crawlRule.maxExpandDepth': function(depth) {
                if (+depth === 0) {
                    this.$set(this.rule.crawlRule, 'expandType', 'expandNonePage');
                }
            }
        },
        methods: {
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
                this.rule.setInterest = false;
            }
        }
    };
</script>
