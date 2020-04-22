<template>
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
                <el-button type="primary" style="height: 50px;width: 70px" @click="routeToSearchResult">搜索</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                keywords: ''
            };
        },
        methods: {
            routeToSearchResult() {
                this.$router.push({
                    name: 'search-result',
                    params: {
                        keywords: this.keywords
                    }
                });
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
