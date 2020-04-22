<template :value="value" v-on:input="$emit('input', $event.target.value)">
    <div>
        <template v-for="(item,index) in value">
            <el-select v-model="item.type" placeholder="推送方式" style="width: 120px">
                <el-option key="EMAIL" label="邮件" value="EMAIL"></el-option>
                <el-option key="DING_TALK" label="钉钉机器人" value="DING_TALK"></el-option>
                <!--                <el-option key="SMS" label="短信" value="SMS"></el-option>-->
            </el-select>
            <template v-if="item.type==='DING_TALK'">
                <el-input v-model="item.value" style="width: 390px">
                    <template slot="prepend">AccessToken</template>
                </el-input>
                <br>
                <el-input v-model="item.params.secret" style="width: 390px;padding-left: 120px">
                    <template slot="prepend">Secret</template>
                </el-input>
            </template>
            <el-input v-else v-model="item.value" style="width: 390px"></el-input>
            <el-button-group>
                <el-button circle type="primary" icon="el-icon-plus" @click="addContact(index)"/>
                <el-button circle type="primary" icon="el-icon-minus" @click="removeContact(index)"/>
            </el-button-group>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'PushContactInput',
        props: ['value'],
        methods: {
            addContact(index) {
                this.value.splice(index + 1, 0, {
                    type: '',
                    value: '',
                    params: {}
                });
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
