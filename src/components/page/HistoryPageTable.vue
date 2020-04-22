<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 历史快照
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="el-icon-refresh-right" class="handle-del mr10"
                           @click="getData">刷新
                </el-button>
                <el-button type="primary" icon="fa fa-columns" class="handle-del mr10"
                           @click="contrast"> 对比
                </el-button>
                <el-button type="primary" icon="el-icon-lx-forward"
                           @click="visit">访问页面
                </el-button>
            </div>
            <el-table :data="tableData"
                      border
                      class="table"
                      ref="multipleTable"
                      header-cell-class-name="table-header"
                      @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="version" label="版本编号" align='center' min-width="10%"></el-table-column>
                <el-table-column prop="title" label="页面标题" align='center' min-width="70%"></el-table-column>
                <el-table-column label="更新时间" align='center' min-width="20%">
                    <template slot-scope="scope">
                        <span>{{updateTimeString(scope.row['updateTime'])}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align='center' min-width="10%">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                icon="el-icon-view"
                                @click="viewSnapshot(scope.$index)"
                        >查看
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <el-dialog title="快照" ref="snapshotDiv" :visible.sync="snapshotVisible" width="60%">
            <div class="snapshot" v-html="snapshotBody"></div>
        </el-dialog>

        <el-dialog title="对比" :visible.sync="compareVisible" width="90%">
            <el-row>
                <el-col :span="12">
                    <el-container>
                        <el-header>
                            <span style="padding-right: 20px">版本编号：{{pageLeft.version}}</span>
                            <span>更新时间：{{updateTimeString(pageLeft.updateTime)}}</span>
                        </el-header>
                        <el-main>
                            <el-card shadow="hover" v-html="pageLeft.body">
                            </el-card>
                        </el-main>
                    </el-container>
                </el-col>
                <el-col :span="12">
                    <el-container>
                        <el-header>
                            <span style="padding-right: 20px">版本编号：{{pageRight.version}}</span>
                            <span>更新时间：{{updateTimeString(pageRight.updateTime)}}</span>
                        </el-header>
                        <el-main>
                            <el-card shadow="hover" v-html="pageRight.body">
                            </el-card>
                        </el-main>
                    </el-container>
                </el-col>
            </el-row>
        </el-dialog>
    </div>
</template>

<script>
    import { fetchDifference, fetchHistoryPages } from '../../api';

    export default {
        name: 'HistoryPageTable',
        data() {
            return {
                title: '',
                url: '',
                snapshotVisible: false,
                compareVisible: false,
                snapshotBody: '',
                tableData: [],
                selectedData: [],
                pageLeft: {},
                pageRight: {}
            };
        },
        created() {
            this.title = this.$route.params.title;
            this.url = this.$route.params.url;
            this.getCount();
            this.getData();
        },
        methods: {
            getCount: function() {

            },
            getData: function() {
                fetchHistoryPages(this.url)
                    .then(pages => {
                        this.tableData = pages;
                    });
            },
            contrast: function() {
                if (this.selectedData.length !== 2) {
                    this.$message.warning('请选择两个版本');
                    return;
                }
                this.compareVisible = true;
                this.pageLeft = JSON.parse(JSON.stringify(this.selectedData[0]));
                this.pageRight = JSON.parse(JSON.stringify(this.selectedData[1]));
                fetchDifference(this.url, this.pageLeft.version, this.pageRight.version)
                    .then(differences => {
                        this.patchDifference(differences);
                    });
            },
            viewSnapshot(index) {
                let page = this.tableData[index];
                this.snapshotBody = page.body;
                this.snapshotVisible = true;
            },
            handleSelectionChange: function(selection) {
                this.selectedData = selection;
            },
            visit() {
                window.open(this.url);
            },
            updateTimeString: function(time) {
                if (!time) {
                    return '';
                }
                return time[0] + '.'
                    + (time[1] >= 10 ? time[1] : '0' + time[1]) + '.'
                    + (time[2] >= 10 ? time[2] : '0' + time[2]) + ' '
                    + (time[3] >= 10 ? time[3] : '0' + time[3]) + ':'
                    + (time[4] >= 10 ? time[4] : '0' + time[4]) + ':'
                    + (time[5] >= 10 ? time[5] : '0' + time[5]);
            },
            patchDifference: function(differences) {
                let left = this.pageLeft.body.split('\n');
                let right = this.pageRight.body.split('\n');
                for (let i in differences) {
                    let difference = differences[i];
                    if (difference.infoType === 'body') {
                        switch (difference.changeType) {
                            case 'DELETE':
                                if (difference.sourceLineNum <= 2) {
                                    right[difference.sourcePosition] = '<div style="background-color:rgb(255,220,224)">' + right[difference.sourcePosition] + '</div>';
                                } else {
                                    for (let j = 0; j < difference.sourceLineNum - 2; j++) {
                                        right[difference.sourcePosition + j] = right[difference.sourcePosition + j].replace(new RegExp('<div', 'g'), '<div style="background-color:rgb(255,220,224)"');
                                    }
                                }
                                break;
                            case 'INSERT':
                                if (difference.targetLineNum <= 2) {
                                    left[difference.targetPosition] = '<div style="background-color:rgb(219,237,255)">' + left[difference.targetPosition] + '</div>';
                                } else {
                                    for (let j = 0; j < difference.targetLineNum - 2; j++) {
                                        left[difference.targetPosition + j] = left[difference.targetPosition + j].replace(new RegExp('<div', 'g'), '<div style="background-color:rgb(219,237,255)"');
                                    }
                                }
                                break;
                            case 'CHANGE':
                                if (difference.sourceLineNum <= 2) {
                                    right[difference.sourcePosition] = '<div style="background-color:rgb(230,255,237)">' + right[difference.sourcePosition] + '</div>';
                                } else {
                                    for (let j = 0; j < difference.sourceLineNum - 2; j++) {
                                        right[difference.sourcePosition + j] = right[difference.sourcePosition + j].replace(new RegExp('<div', 'g'), '<div style="background-color:rgb(230,255,237)"');
                                    }
                                }
                                if (difference.targetLineNum <= 2) {
                                    left[difference.targetPosition] = '<div style="background-color:rgb(230,255,237)">' + left[difference.targetPosition] + '</div>';
                                } else {
                                    for (let j = 0; j < difference.targetLineNum - 2; j++) {
                                        left[difference.targetPosition + j] = left[difference.targetPosition + j].replace(new RegExp('<div', 'g'), '<div style="background-color:rgb(230,255,237)"');
                                    }
                                }
                                break;
                        }
                    }
                }
                this.$set(this.pageLeft, 'body', left.join('\n'));
                this.$set(this.pageRight, 'body', right.join('\n'));
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

    .snapshot >>> img {
        max-width: 750px;
    }
</style>
