<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i>
                    <span>规则【{{ruleName}}】匹配的页面</span>
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
                <el-table-column label="操作" align='center' min-width="25%">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-view"
                                @click="viewSnapshot(scope.$index)"
                        >查看最新快照
                        </el-button>
                        <el-button
                                type="text"
                                icon="el-icon-notebook-1"
                                @click="routeToHistory(scope.row)"
                        >历史快照
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
                        layout="total, prev, pager, next, sizes, jumper"
                        :pager-count="7"
                        :current-page="query.pageIndex + 1"
                        :page-sizes="[5, 10, 20, 50, 80, 100]"
                        :page-size="query.pageSize"
                        :total="dataTotal"
                        @current-change="handlePageChange"
                        @size-change="handleSizeChange"
                ></el-pagination>
            </div>

            <el-dialog title="快照" ref="snapshotDiv" :visible.sync="snapshotVisible" width="60%">
                <div class="snapshot" v-html="snapshotBody"></div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import { fetchMatchedPageCount, fetchMatchedPages } from '../../api';

    export default {
        name: 'documentTable',
        data() {
            return {
                ruleId: '',
                ruleName: '',
                snapshotVisible: false,
                snapshotBody: '',
                query: {
                    pageIndex: 0,
                    pageSize: 5
                },
                tableData: [],
                dataTotal: 0
            };
        },
        created() {
            this.ruleId = this.$route.params.ruleId;
            this.ruleName = this.$route.params.ruleName;
            this.getCount();
            this.getData();
        },
        methods: {
            getCount() {
                fetchMatchedPageCount(this.ruleId)
                    .then(count => {
                        this.dataTotal = count;
                    });
            },
            getData() {
                fetchMatchedPages(this.ruleId, this.query)
                    .then(res => {
                        this.tableData = res;
                    });
            },
            handlePageChange(index) {
                this.$set(this.query, 'pageIndex', index - 1);
                this.getData();
            },
            handleSizeChange(size) {
                this.$set(this.query, 'pageSize', size);
                this.getData();
            },
            visit(url) {
                window.open(url);
            },
            viewSnapshot(index) {
                let page = this.tableData[index];
                this.snapshotBody = page.body;
                this.snapshotVisible = true;
            },
            routeToHistory(page) {
                this.$router.push({
                    name: 'history-page',
                    params: {
                        url: page.url,
                        title: page.title
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
