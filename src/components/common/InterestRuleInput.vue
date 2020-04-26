<template :value="value" v-on:input="$emit('input', $event.target.value)">
    <div>
        <template v-for="(item,index) in value">
            <el-select disabled v-if="index === 0" v-model="item.logic" style="display: none">
                <el-option key="FIRST" label=" " value="FIRST"></el-option>
            </el-select>
            <el-select v-else v-model="item.logic" placeholder="逻辑" style="width: 80px">
                <el-option key="AND" label="并且" value="AND"></el-option>
                <el-option key="OR" label="或者" value="OR"></el-option>
            </el-select>
            <template v-if="item.sub && item.sub.length > 0">
                <span>(</span>
                <br>
                <interest-rule-input v-model="item.sub"></interest-rule-input>
                <span>)</span>
            </template>
            <template v-else>
                <el-select v-model="item.type" placeholder="判断类型" style="width: 120px">
                    <el-option key="TITLE_CONTAIN" label="标题包含" value="TITLE_CONTAIN"/>
                    <el-option key="TITLE_NOT_CONTAIN" label="标题不含" value="TITLE_NOT_CONTAIN"/>
                    <el-option key="CONTENT_CONTAIN" label="内容包含" value="CONTENT_CONTAIN"/>
                    <el-option key="CONTENT_NOT_CONTAIN" label="内容不含"
                               value="CONTENT_NOT_CONTAIN"/>
                </el-select>
                <el-input v-if="index === 0" v-model="item.value" style="width: 390px"></el-input>
                <el-input v-else v-model="item.value" style="width: 310px"></el-input>
            </template>
            <el-button-group>
                <el-button circle type="primary" icon="el-icon-plus" @click="addInterestItem(index)"/>
                <el-button round type="primary" icon="el-icon-lx-sort" @click="swapGroup(index)"/>
                <el-button circle type="primary" icon="el-icon-minus" @click="removeInterestItem(index)"/>
            </el-button-group>
            <br>
        </template>
    </div>
</template>

<script>

    export default {
        name: 'InterestRuleInput',
        props: ['value'],
        methods: {
            INTEREST_BLANK_ITEMES() {
                return [{
                    type: '',
                    logic: 'FIRST',
                    value: ''
                }];
            },
            addInterestItem(i) {
                this.value.splice(i + 1, 0, {
                    type: '',
                    logic: '',
                    value: ''
                });
            },
            swapGroup(i) {
                if (!this.value[i].sub || this.value[i].sub.length === 0) {
                    this.value[i].value = '';
                    this.value[i].type = '';
                    this.$set(this.value[i], 'sub', this.INTEREST_BLANK_ITEMES());
                } else {
                    this.$set(this.value[i], 'sub', undefined);
                }
            },
            removeInterestItem(i) {
                this.value.splice(i, 1);
                if (i === 0) {
                    this.addInterestItem(0);
                    this.value[0].logic = 'FIRST';
                    console.log(this.value);
                }
            }
        }
    };
</script>

<style scoped>
    .el-button {
        padding: 4px;
    }
</style>
