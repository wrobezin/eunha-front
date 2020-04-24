<template :value="value" v-on:input="$emit('input', $event.target.value)">
    <div>
        <template v-for="(str,index) in value">
            <el-input v-model="value[index]" style="width: 390px"></el-input>
            <el-button-group>
                <el-button circle type="primary" icon="el-icon-plus" @click="addContact(index)"/>
                <el-button circle type="primary" icon="el-icon-minus" @click="removeContact(index)"/>
            </el-button-group>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'StringInputGroup',
        props: ['value'],
        methods: {
            addContact(index) {
                this.value.splice(index + 1, 0, '');
            },
            removeContact(index) {
                this.value.splice(index, 1);
                if (this.value.length === 0) {
                    this.addContact(-1);
                }
            }
        }
    };
</script>

<style scoped>

</style>
