<template>
    <div>
        <div>
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
                pageSize: 10,
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
                this.getCount();
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