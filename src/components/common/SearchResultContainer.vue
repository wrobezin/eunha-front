<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-link :href="page.url"
                         type="primary"
                         :underline="false"
                         target="_blank"
                         style="font-size: 18px"
                         v-html="page.title">
                </el-link>
                <el-link icon="el-icon-view" :underline="false" style="padding-left: 25px" @click="viewSnapshot">查看快照
                </el-link>
            </div>
            <div class="text item">
                <span style="padding-right: 15px;color:darkred">{{page.host}}</span>
                <span v-html="page.summary"/>
            </div>
        </el-card>
        <br>

        <el-dialog title="快照" ref="snapshotDiv" :visible.sync="snapshotVisible" width="60%">
            <div class="snapshot" v-html="snapshotBody"></div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'SearchResultContainer',
        props: {
            page: {
                default: {
                    id: '',
                    host: '',
                    url: '',
                    title: '',
                    body: '',
                    summary: ''
                }
            }
        },
        data() {
            return {
                snapshotVisible: false,
                snapshotBody: ''
            };
        },
        methods: {
            viewSnapshot(index) {
                this.snapshotBody = this.page.body;
                this.snapshotVisible = true;
            }
        }
    };
</script>

<style scoped>
    .el-card >>> em {
        color: red;
        font-style: normal;
    }

    .el-link >>> em {
        color: red;
    }

    .snapshot >>> img {
        max-width: 750px;
    }
</style>