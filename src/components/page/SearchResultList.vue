<template>
    <div>
        <search-result-container v-for="item in searchResult" :page="item"/>
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
            }
        }
    };
</script>

<style scoped>

</style>