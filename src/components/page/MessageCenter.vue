<template>
    <div class="">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-copy"></i> 消息中心</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="messageTab">
                <el-tab-pane :label="`未读消息(${unread.length})`" name="unread">
                    <el-collapse v-if="unread.length" accordion>
                        <el-collapse-item v-for="(msg,index) in unread" :name="msg.id">
                            <template slot="title">
                                <el-button size="mini" @click="handleRead(index)">标为已读</el-button>
                                <span style="padding-left: 20px;font-weight: bolder">{{msg.title}}</span>
                            </template>
                            <span style="padding-left: 100px">{{msg.content}}</span>
                        </el-collapse-item>
                    </el-collapse>
                    <el-table v-else/>
                    <div class="handle-row">
                        <el-button icon="el-icon-check" @click="handleReadAll">
                            全部标为已读
                        </el-button>
                        <el-button type="primary" icon="el-icon-refresh-right" @click="getUnread">
                            刷新
                        </el-button>
                    </div>
                </el-tab-pane>
                <el-tab-pane :label="`已读消息(${read.length})`" name="read">
                    <el-collapse v-if="read.length" accordion>
                        <el-collapse-item v-for="(msg,index) in read" :name="msg.id">
                            <template slot="title">
                                <el-button type="danger" size="mini" @click="handleDelete(index)">删除</el-button>
                                <el-button size="mini" @click="handleUnread(index)">标为未读</el-button>
                                <span style="padding-left: 20px;font-weight: bolder">{{msg.title}}</span>
                            </template>
                            <span style="padding-left: 165px">{{msg.content}}</span>
                        </el-collapse-item>
                    </el-collapse>
                    <el-table v-else/>
                    <div class="handle-row">
                        <el-button type="danger" icon="el-icon-delete" @click="handleDeleteAll">
                            删除全部
                        </el-button>
                        <el-button icon="el-icon-check" @click="handleUnreadAll">
                            全部标为未读
                        </el-button>
                        <el-button type="primary" icon="el-icon-refresh-right" @click="getRead">
                            刷新
                        </el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {
        deleteMessage,
        fetchReadMessage,
        fetchUnreadMessage,
        setMessageRead,
        setMessageUnread
    } from '../../api/index';

    export default {
        name: 'tabs',
        data() {
            return {
                messageTab: 'unread',
                showHeader: false,
                unread: [],
                read: []
            };
        },
        created() {
            this.getUnread();
            this.getRead();
        },
        methods: {
            getRead() {
                fetchReadMessage().then(messages => {
                    this.read = messages;
                });
            },
            getUnread() {
                fetchUnreadMessage().then(messages => {
                    this.unread = messages;
                });
            },
            handleRead(index) {
                setMessageRead(this.unread[index].id);
                this.read = this.unread.splice(index, 1).concat(this.read);
            },
            handleReadAll() {
                let count = this.unread.length;
                for (let i = 0; i < count; i++) {
                    this.handleRead(0);
                }
            },
            handleDelete(index) {
                deleteMessage(this.read[index].id);
                this.read.splice(index, 1);
            },
            handleUnread(index) {
                setMessageUnread(this.read[index].id);
                this.unread = this.read.splice(index, 1).concat(this.unread);
            },
            handleUnreadAll() {
                let count = this.read.length;
                for (let i = 0; i < count; i++) {
                    this.handleUnread(0);
                }
            },
            handleDeleteAll() {
                let count = this.read.length;
                for (let i = 0; i < count; i++) {
                    this.handleDelete(0);
                }
            }
        }
    };

</script>

<style>
    .message-title {
        cursor: pointer;
    }

    .handle-row {
        margin-top: 30px;
    }
</style>

