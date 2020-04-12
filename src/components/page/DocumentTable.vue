<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i>
                    <span v-if="tagType === 'ruleMatching'">规则【{{ruleName}}】匹配的页面</span>
                    <span v-else>已抓页面</span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-refresh-right" class="handle-del mr10"
                           @click="getData">刷新
                </el-button>
            </div>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header">
                <el-table-column prop="title" label="页面标题" align='center' min-width="75%"></el-table-column>
                <el-table-column label="操作" align='center' min-width="15%">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-view"
                                @click="viewSnapshot(scope.$index)"
                        >查看快照
                        </el-button>
                        <el-button
                                type="text"
                                icon="el-icon-lx-forward"
                                @click="visit(scope.row.url)"
                        >访问页面
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
                        :total="pageTotal"
                        @current-change="handlePageChange"
                ></el-pagination>
            </div>

            <el-dialog title="快照" ref="snapshotDiv" :visible.sync="snapshotVisible" width="60%">
                <div v-html="snapshotBody"></div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import { fetchMatchedPages, fetchPageContent } from '../../api';

    export default {
        name: 'documentTable',
        data() {
            return {
                ruleId: '',
                ruleName: '',
                tagType: '',
                snapshotVisible: false,
                snapshotBody: '',
                query: {
                    pageIndex: 1,
                    pageSize: 10
                },
                tableData: [],
                pageTotal: 0
            };
        },
        created() {
            this.ruleId = this.$route.params.ruleId;
            this.ruleName = this.$route.params.ruleName;
            this.tagType = this.$route.params.tagType;
            this.getData();
        },
        methods: {
            getData() {
                fetchMatchedPages(this.ruleId)
                    .then(res => {
                        this.tableData = res.data;
                    });
            },
            // 分页导航
            handlePageChange(val) {
                this.$set(this.query, 'pageIndex', val);
                this.getData();
            },
            visit(url) {
                window.open(url);
            },
            viewSnapshot(index) {
                let page = this.tableData[index];
                this.snapshotBody = '载入中';
                this.snapshotVisible = true;
                fetchPageContent(page)
                    .then(page => {
                        this.snapshotBody = page.body;
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
