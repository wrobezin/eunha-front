<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 规则管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-refresh-right" class="handle-del mr10"
                           @click="getData">刷新
                </el-button>
                <el-button type="primary" icon="el-icon-plus" class="handle-del mr10"
                           @click="handleAdd">新增
                </el-button>
                <!--                <el-button type="danger" icon="el-icon-delete" class="handle-del mr10"-->
                <!--                           @click="delAllSelection">批量删除-->
                <!--                </el-button>-->
                <!--                <el-input v-model="query.name" placeholder="规则名" class="handle-input mr10"></el-input>-->
                <!--                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>-->
            </div>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header"
                    @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="规则名" align='center' min-width="40%"></el-table-column>
                <el-table-column prop="crawlRule.seedUrl" label="种子URL" align='center'></el-table-column>
                <el-table-column prop="crawlRule.expandType" label="扩展方式" align='center' min-width="20%">
                    <template slot-scope="scope">
                        <span>{{ getExpandTypeShowString(scope.row.crawlRule.expandType) }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="crawlRule.maxExpandDepth" label="最大扩展深度" align='center'
                                 min-width="25%"></el-table-column>
                <el-table-column label="操作" width="200" align="center">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-document"
                                @click="routeToDocument(scope.row.name,scope.row.id)"
                        >查看已抓
                        </el-button>
                        <el-button
                                type="text"
                                icon="el-icon-edit"
                                @click="handleEdit(scope.$index, scope.row)"
                        >编辑
                        </el-button>
                        <el-button
                                type="text"
                                icon="el-icon-delete"
                                class="red"
                                @click="handleDelete(scope.$index, scope.row)"
                        >删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        background
                        layout="total, prev, pager, next"
                        :current-page="query.pageIndex"
                        :page-size="query.pageSize"
                        :total="tableData.length"
                        @current-change="handlePageChange"
                ></el-pagination>
            </div>
        </div>

        <el-dialog title="新增" :visible.sync="addVisible" width="60%">
            <rule-form></rule-form>
        </el-dialog>

        <el-dialog title="编辑" :visible.sync="editVisible" width="60%">
            <span>提交后才会编辑成功</span>
            <rule-form :rule="form"></rule-form>
        </el-dialog>
    </div>
</template>

<script>
    // TODO 已抓数量、上次抓取时间

    import { deleteRule, fetchRules } from '../../api/index';
    import RuleForm from '../common/RuleForm';

    export default {
        name: 'basetable',
        components: { RuleForm },
        data() {
            return {
                query: {
                    name: '',
                    pageIndex: 1,
                    pageSize: 10
                },
                tableData: [],
                multipleSelection: [],
                delList: [],
                editVisible: false,
                addVisible: false,
                form: {},
                idx: -1,
                id: -1
            };
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                let getExpandType = this.getExpandType;
                let isAlwaysTrue = this.isAlwaysTrue;
                fetchRules(this.query).then(res => {
                    for (let i in res) {
                        if (!res.hasOwnProperty(i)) {
                            continue;
                        }
                        let rule = res[i];
                        rule['crawlRule']['expandType'] = getExpandType(rule.crawlRule.expandable, rule.crawlRule.expandToOtherSite);
                        rule['setInterest'] = isAlwaysTrue(rule['interestRule']);
                        rule['setPush'] = rule['pushContacts'].length > 0;
                        if (!rule['setPush']) {
                            rule['pushContacts'] = [{
                                type: '',
                                value: ''
                            }];
                        }
                    }
                    this.tableData = res;
                }).catch(error => {
                    this.$message.error('网络异常！');
                    console.error(error);
                });
            },
            handleSearch() {
                this.$set(this.query, 'pageIndex', 1);
                this.getData();
            },
            // 删除操作
            handleDelete(index) {
                let message = this.$message;
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    deleteRule(this.tableData[index])
                        .then(res => {
                            if (res) {
                                this.$message.success('删除成功！');
                                this.tableData.splice(index, 1);
                                this.getData();
                            } else {
                                this.$message.warning('删除失败！');
                            }
                        }).catch(function(error) {
                        message.error('网络异常！');
                        console.error(error);
                    });
                });
            },
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            delAllSelection() {
                const length = this.multipleSelection.length;
                let str = '';
                this.delList = this.delList.concat(this.multipleSelection);
                for (let i = 0; i < length; i++) {
                    str += this.multipleSelection[i].name + ' ';
                }
                this.$message.error(`删除了${str}`);
                this.multipleSelection = [];
            },
            handleEdit(index) {
                this.form = this.tableData[index];
                this.editVisible = true;
            },
            handleAdd() {
                this.addVisible = true;
            },
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
            }, getExpandType(expandable, expandToOtherSite) {
                if (!expandable) {
                    return 'expandNonePage';
                } else if (expandToOtherSite) {
                    return 'expandAllSite';
                } else {
                    return 'expandSameSite';
                }
            },
            getExpandTypeShowString(expandType) {
                switch (expandType) {
                    case 'expandNonePage':
                        return '不扩展';
                    case 'expandSameSite':
                        return '同站扩展';
                    case 'expandAllSite':
                        return '全网扩展';
                }
            },
            isAlwaysTrue(interestRule) {
                return interestRule !== [{
                    type: 'ALWAYS_TRUE',
                    logic: 'FIRST',
                    value: ''
                }];
            },
            routeToDocument(ruleName, ruleId) {
                this.$router.push({
                    name: 'document-table',
                    params: {
                        tagTitle: '已抓页面',
                        ruleName: ruleName,
                        ruleId: ruleId
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }

    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }
</style>
