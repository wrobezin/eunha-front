<template>
    <div>
        <div ref="inputDiv">
            <el-row>
                <el-col :span="22">
                    <el-input
                            placeholder="请输入搜索关键词"
                            v-model="keywords"
                            prefix-icon="el-icon-search"
                            clearable
                            class="searchInput">
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary" style="height: 50px;width: 70px" @click="search">搜索</el-button>
                </el-col>
            </el-row>
            <br>
        </div>
        <div>
            <search-result-container v-for="item in searchResult" :page="item"/>
        </div>
        <div class="pagination">
            <el-pagination
                    background
                    layout="total, prev, pager, next, sizes, jumper"
                    :pager-count="7"
                    :current-page="pageIndex + 1"
                    :page-sizes="[5, 10,15, 20]"
                    :page-size="pageSize"
                    :total="dataTotal"
                    @current-change="handlePageChange"
                    @size-change="handleSizeChange"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
    import { countByKeywords, searchByKeywords } from '../../api';
    import SearchResultContainer from '../common/SearchResultContainer';

    export default {
        name: 'SearchResultList',
        components: { SearchResultContainer },
        created() {
            this.keywords = this.$route.params.keywords;
            this.getCount();
            this.getData();
        },
        data() {
            return {
                dataTotal: 0,
                pageIndex: 0,
                pageSize: 5,
                searchResult: [],
                keywords: ''
            };
        },
        methods: {
            getCount() {
                countByKeywords(this.keywords)
                    .then(count => {
                        this.dataTotal = count;
                    });
            },
            getData() {
                searchByKeywords(this.keywords, this.pageIndex, this.pageSize)
                    .then(result => {
                        this.searchResult = result;
                    });
            },
            search() {
                this.pageIndex = 0;
                this.getCount();
                this.getData();
            },
            handlePageChange(index) {
                this.pageIndex = index - 1;
                this.$refs.inputDiv.scrollIntoView();
                this.getData();
            },
            handleSizeChange(size) {
                // TODO 相应地改变页码
                this.pageSize = size;
                this.$refs.inputDiv.scrollIntoView();
                this.getData();
            }
        }
    };
</script>

<style scoped>
    .searchInput {
        font-size: 20px;
    }

    .searchInput >>> .el-input__inner {
        height: 50px;
    }
</style>