<template>
    <div class="wholeDoc">
        <div id='write' class='is-node'><h1><a
                class="md-header-anchor"></a><span>页面监控系统用户使用手册</span></h1>
            <h2><a class="md-header-anchor"></a><span>快速入门</span></h2>
            <p><span>本系统的运作围绕用户自定义规则来进行，您可以根据自己的使用需求来设定不同的页面抓取规则。下面将以监控凤凰网首页为例，向您展示监控单个页面的操作方法。</span></p>
            <p><span>访问系统，通过侧边栏中的</span><code>规则管理</code><span>一项进入规则管理页面。</span></p>
            <p><img src="../../assets/img/guide/fast/1.png" referrerpolicy="no-referrer" alt="通过侧边栏进入规则管理界面"></p>
            <p><span>点击</span><code>新增</code><span>按钮来增加一条抓取规则。</span></p>
            <p><img src="../../assets/img/guide/fast/2.png" referrerpolicy="no-referrer" alt="点击新增按钮"></p>
            <p>
                <span>您可以在弹出的对话框中根据需要对抓取行为进行设置。其中，</span><code>规则名</code><span>、</span><code>种子URL</code><span>、</span><code>扩展方式</code><span>三项必须进行设置。在</span><code>种子URL</code><span>一项中填入</span><a
                    href='https://www.ifeng.com/'><span>凤凰网首页</span></a><span>的地址，这将使得系统在处理这条规则时，从该指定页面开始进行抓取。由于这里展示的是单个页面的监控方式，</span><code>扩展方式</code><span>一项选择</span><strong><span>不扩展</span></strong><span>。</span>
            </p>
            <p><img src="../../assets/img/guide/fast/3.png" referrerpolicy="no-referrer" alt="新增规则表单"></p>
            <p><span>关于抓取规则的自定义选项，更多细节请参见</span><a href='#'><span>自定义规则</span></a><span>一章。</span></p>
            <p><span>系统将在完成抓取并发现有您感兴趣的更新信息时，用您指定的方式发送通知。</span></p>
            <p><img src="../../assets/img/guide/fast/4.png" referrerpolicy="no-referrer" alt="邮件推送"></p>
            <p><span>此时，您可以进入系统，点击对应规则下的</span><code>查看已抓</code><span>，以查看与您所设定兴趣规则相匹配的页面。</span></p>
            <p><img src="../../assets/img/guide/fast/5.png" referrerpolicy="no-referrer" alt="查看已抓"></p>
            <p><img src="../../assets/img/guide/fast/6.png" referrerpolicy="no-referrer" alt="已抓列表"></p>
            <p><span>您可以通过</span><code>查看最新快照</code><span>功能查看抓取到的页面信息。</span></p>
            <p><img src="../../assets/img/guide/fast/7.png" referrerpolicy="no-referrer" alt="快照"></p>
            <p><span>当系统再次抓取页面并发现有您感兴趣的更新信息时，会再次向您推送。</span></p>
            <p><img src="../../assets/img/guide/fast/8.png" referrerpolicy="no-referrer" alt="快照"></p>
            <p><span>您可以使用</span><code>历史快照</code><span>功能来查看不同版本的页面信息。</span></p>
            <p><img src="../../assets/img/guide/fast/9.png" referrerpolicy="no-referrer" alt="历史版本"></p>
            <p><span>您可以使用</span><code>对比</code><span>功能来查看两个快照之间的异同，两个快照之间的差异将被高亮。在进行快照对比时，系统会分别使用蓝色、绿色、红色来高亮显示页面上信息的增加、改变、删除。</span>
            </p>
            <p><img src="../../assets/img/guide/fast/10.png" referrerpolicy="no-referrer" alt="对比1"></p>
            <p><img src="../../assets/img/guide/fast/11.png" referrerpolicy="no-referrer" alt="对比2"></p>
            <p><span>若需要监控多个页面，您可以使用其他扩展方式，或添加更多规则。</span></p>
            <h2><a class="md-header-anchor"></a><span>自定义规则</span></h2>
            <p><span>抓取规则是本系统的核心，本章将向您介绍自定义规则的各个设置项。</span></p>
            <h3><a class="md-header-anchor"></a><span>规则名</span></h3>
            <p><span>顾名思义，规则名就是指自定义规则的名称。规则名的最大长度为 128，不同的规则允许重名。</span></p>
            <h3><a class="md-header-anchor"></a><span>种子 URL</span></h3>
            <p><span>系统会定时地根据自定义规则执行页面抓取任务。对于每一条规则，系统都会从种子 URL 开始抓取，然后向其所指向页面所包含的超链接扩展。种子 URL 的最大长度为 65535。</span></p>
            <h3><a class="md-header-anchor"></a><span>扩展方式和最大扩展深度</span></h3>
            <p><span>扩展方式将决定系统是否抓取页面所含链接所指向的页面，以及抓取哪些链接。</span></p>
            <p><span>各种扩展方式的具体作用如下：</span></p>
            <ul>
                <li><span>不扩展：只抓取种子 URL。</span></li>
                <li><span>同站扩展：抓取与种子 URL 具有相同 Host 的可达页面。</span></li>
                <li><span>全网扩展：抓取所有可达页面。</span></li>
                <li><span>正则扩展：抓取 URL 匹配指定正则表达式的可达页面。</span></li>
            </ul>
            <p><span>当选择</span><code>同站扩展</code><span>、</span><code>全网扩展</code><span>、</span><code>正则扩展</code><span>中的任意一种时，还需要设置</span><strong><span>最大扩展深度</span></strong><span>。扩展深度指的是沿着一条扩展路径的最大扩展次数，例如从页面 A 出发，扩展到页面 B，再从页面 B 扩展到页面 C，抓取路径 A-&gt;B-&gt;C 的扩展深度是 2，假如最大扩展深度被设置为 2，则系统将不会从页面 C 向其所含超链接指向的页面扩展，但仍可以从页面 B 扩展到其它页面。最大扩展深度越大，则完成抓取所需的时间越长。</span>
            </p>
            <h3><a class="md-header-anchor"></a><span>标题 XPath</span></h3>
            <p>
                <span>有时，页面 </span><code>&lt;title&gt;</code><span> 标签定义的标题可能无法反映页面的内容，您可以使用 XPath 来指定页面的标题。只有当扩展方式为</span><code>不扩展</code><span>或</span><code>同站扩展</code><span>时才允许设置标题 XPath。</span>
            </p>
            <p><span>如图所示，页面的标题不符合需求：</span></p>
            <p><img src="../../assets/img/guide/rule/1.png" referrerpolicy="no-referrer" alt="标题不佳"></p>
            <p><span>您可以使用浏览器的开发者工具（快捷键 F12）来获取页面上某个结点的 XPath：</span></p>
            <p><img src="../../assets/img/guide/rule/2.png" referrerpolicy="no-referrer" alt="获取XPath"></p>
            <p><span>将得到的 XPath 粘贴到</span><code>标题Xpath</code><span> 的输入框中：</span></p>
            <p><img src="../../assets/img/guide/rule/3.png" referrerpolicy="no-referrer" alt="设置XPath"></p>
            <p><span>抓取结果将以指定 XPath 中的文本作为标题：</span></p>
            <p><img src="../../assets/img/guide/rule/4.png" referrerpolicy="no-referrer" alt="标题结果"></p>
            <h3><a class="md-header-anchor"></a><span>内容 XPath</span></h3>
            <p>
                <span>如果您不需要整个页面的所有内容，可以通过设置内容 XPath 来获取局部页面。只有当扩展方式为</span><code>不扩展</code><span>或</span><code>同站扩展</code><span>时才允许设置内容 XPath。</span>
            </p>
            <p><span>您可以设置多个内容 XPath，系统将按 XPath 设置顺序将各部分拼接起来，形成快照。</span></p>
            <p><img src="../../assets/img/guide/rule/5.png" referrerpolicy="no-referrer" alt="内容XPath"></p>
            <p><span>需要注意的是，如果多个 XPath 所对应的页面区域具有重叠的部分，快照的内容也会出现重复。</span></p>
            <h3><a class="md-header-anchor"></a><span>兴趣规则</span></h3>
            <p><span>仅当符合兴趣规则的页面有新增和更新时，您才会收到系统的推送通知。</span></p>
            <p><span>兴趣规则是一个命题，当命题为真时系统会认为页面符合兴趣规则，反之亦然。</span></p>
            <p><span>您可以通过判断条件的嵌套以及与或逻辑的组合来设置复杂的兴趣规则，系统允许您设置无穷多层嵌套。</span></p>
            <p><img src="../../assets/img/guide/rule/6.png" referrerpolicy="no-referrer" alt="兴趣规则"></p>
            <p><span>需要注意的是，兴趣规则仅会影响页面是否被推送，而不会影响其收录。换言之，针对一条自定义规则，即使一个可达页面不符合您设定的兴趣规则，您在使用系统提供的搜索功能时也可以搜索到该页面，但不会收到相关的推送。</span>
            </p>
            <h3><a class="md-header-anchor"></a><span>更新推送</span></h3>
            <p><span>目前支持的推送方式有电子邮件、钉钉群机器人以及 WebHook。您可以设置复数的推送方式。</span></p>
            <p><img src="../../assets/img/guide/rule/7.png" referrerpolicy="no-referrer" alt="推送设置"></p>
            <p><span>若您使用钉钉群机器人，请将机器人的安全验证设置为加签。详细的设置方法请参考</span><a
                    href='https://ding-doc.dingtalk.com/doc#/serverapi2/krgddi'><span>钉钉官方文档</span></a><span>。</span>
            </p>
            <p><span>钉钉群机器人推送效果如下：</span></p>
            <p><img src="../../assets/img/guide/rule/8.png" referrerpolicy="no-referrer" alt="钉钉"></p>
            <p><span>若您使用 WebHook 推送，请确保您的系统能正确处理 JSON 形式的 POST 请求。本系统发送的数据格式如下：</span></p>
            <pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="json"
                 style="break-inside: unset;">
                <div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="json">
                    <div style="overflow: hidden; position: relative; width: 3px; height: 0; top: 0; left: 8px;"><textarea
                            autocapitalize="off" spellcheck="false" tabindex="0"
                            style="position: absolute; bottom: -1em; padding: 0; width: 1000px; height: 1em; outline: none;"></textarea></div><div
                        class="CodeMirror-scrollbar-filler"></div><div
                        class="CodeMirror-gutter-filler"></div><div class="CodeMirror-scroll"
                                                                    tabindex="-1"><div
                        class="CodeMirror-sizer"
                        style="margin-left: 0; margin-bottom: 0; border-right-width: 0; padding-right: 0; padding-bottom: 0;"><div
                        style="position: relative; top: 0;"><div class="CodeMirror-lines" role="presentation"><div
                        role="presentation" style="position: relative; outline: none;"><div
                        class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div
                        style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"
                                                                           style=""><div class="CodeMirror-activeline"
                                                                                         style="position: relative;"><div
                        class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div
                        class="CodeMirror-gutter-background CodeMirror-activeline-gutter"
                        style="left: 0; width: 0;"></div><pre class=" CodeMirror-line " role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span
                        class="cm-comment">/* 数组形式 */</span></span></pre></div><pre
                        class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                            style="padding-right: 1px;">[</span></pre><pre
                        class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                            style="padding-right: 1px;"><span
                        class="cm-tab" role="presentation">    </span>{</span></pre><pre
                        class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                            style="padding-right: 1px;"><span
                        class="cm-tab" role="presentation">    </span><span class="cm-tab"
                                                                            role="presentation"
                >    </span><span
                        class="cm-comment">/* 页面的URL */</span></span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-string cm-property">"url"</span>: <span
                        class="cm-string">"http://www.whut.edu.cn/tzgg/202002/t20200217_432615.htm"</span>,</span></pre><pre
                        class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                            style="padding-right: 1px;"><span
                        class="cm-tab" role="presentation">    </span><span class="cm-tab"
                                                                            role="presentation"
                >    </span><span
                        class="cm-comment">/* 是否为新增页面 */</span></span></pre><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-string cm-property">"newPage"</span>: <span
                        class="cm-atom">true</span>,</span></pre><pre class=" CodeMirror-line "
                                                                      role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-comment">/* 是否为更新页面 */</span></span></pre><pre class=" CodeMirror-line "
                                                                                 role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-string cm-property">"updated"</span>: <span
                        class="cm-atom">false</span>,</span></pre><pre class=" CodeMirror-line "
                                                                       role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-comment">/* 页面版本号 */</span></span></pre><pre class=" CodeMirror-line "
                                                                               role="presentation"><span
                        role="presentation"
                        style="padding-right: 1px;"><span
                        class="cm-tab" role="presentation">    </span><span class="cm-tab"
                                                                            role="presentation"
                >    </span><span
                        class="cm-string cm-property">"version"</span>: <span class="cm-atom">false</span>,</span></pre><pre
                        class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                            style="padding-right: 1px;"><span
                        class="cm-tab" role="presentation">    </span><span class="cm-tab"
                                                                            role="presentation"
                >    </span><span
                        class="cm-comment">/* 抓取完成时间 */</span></span></pre><pre class=" CodeMirror-line "
                                                                                role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-string cm-property">"finishTime"</span>: <span
                        class="cm-atom">false</span>,</span></pre><pre class=" CodeMirror-line "
                                                                       role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-comment">/* 是否匹配兴趣规则 */</span></span></pre><pre class=" CodeMirror-line "
                                                                                  role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span><span
                        class="cm-tab" role="presentation">    </span><span
                        class="cm-string cm-property">"isRuleMatched"</span>: <span
                        class="cm-atom">true</span>,</span></pre><pre class=" CodeMirror-line "
                                                                      role="presentation"><span
                        role="presentation" style="padding-right: 1px;"><span class="cm-tab" role="presentation"
                >    </span>}</span></pre><pre
                        class=" CodeMirror-line " role="presentation"><span role="presentation"
                                                                            style="padding-right: 1px;">]</span></pre></div></div></div></div></div><div
                        style="position: absolute; height: 0; width: 1px; border-bottom: 0 solid transparent; top: 381px;"></div><div
                        class="CodeMirror-gutters" style="display: none; height: 381px;"></div></div></div>
            </pre>
            <h2><a class="md-header-anchor"></a><span>搜索功能</span></h2>
            <p><span>您可以使用系统提供的搜索功能对已被抓取的页面进行搜索，搜索结果将包括不符合兴趣规则的页面。</span></p>
            <p><img src="../../assets/img/guide/other/1.png" referrerpolicy="no-referrer" alt="搜索"></p>
            <p><span>如果有多个关键词，您可以使用空格进行分隔。</span></p>
            <h2><a class="md-header-anchor"></a><span>消息中心</span></h2>
            <p><span>当系统完成新的一次抓取，并发现有信息更新时，页面右上角的通知图标将会显示一个红点（您无需刷新页面，该信号是实时的）。</span></p>
            <p><img src="../../assets/img/guide/other/2.png" referrerpolicy="no-referrer" alt="红点"></p>
            <p><span>此时，您可以进入消息中心查看页面更新情况。</span></p>
            <p><img src="../../assets/img/guide/other/3.png" referrerpolicy="no-referrer" alt="消息中心"></p></div>
    </div>
</template>

<script>
    export default {
        name: 'Help'
    };
</script>

<style scoped>
    .wholeDoc {
        --bg-color: #ffffff;
        --text-color: #333333;
        --select-text-bg-color: #B5D6FC;
        --select-text-font-color: auto;
        --monospace: "Lucida Console", Consolas, "Courier", monospace;
        font-size: 16px;
        background-color: var(--bg-color);
        color: var(--text-color);
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        padding: 0;
        height: auto;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        line-height: 1.42857;
        overflow-x: hidden;
        tab-size: 4;
    }

    iframe {
        margin: auto;
    }

    a.url {
        word-break: break-all;
    }

    a:active, a:hover {
        outline: 0;
    }

    .in-text-selection, ::selection {
        text-shadow: none;
        background: var(--select-text-bg-color);
        color: var(--select-text-font-color);
    }

    #write {
        margin: 0 auto;
        height: auto;
        width: inherit;
        word-break: normal;
        overflow-wrap: break-word;
        position: relative;
        white-space: normal;
        overflow-x: visible;
        padding-top: 40px;
    }

    #write.first-line-indent p {
        text-indent: 2em;
    }

    #write.first-line-indent li p, #write.first-line-indent p * {
        text-indent: 0;
    }

    #write.first-line-indent li {
        margin-left: 2em;
    }

    .for-image #write {
        padding-left: 8px;
        padding-right: 8px;
    }

    body.typora-export {
        padding-left: 30px;
        padding-right: 30px;
    }

    .typora-export .footnote-line, .typora-export li, .typora-export p {
        white-space: pre-wrap;
    }

    @media screen and (max-width: 500px) {
        body.typora-export {
            padding-left: 0;
            padding-right: 0;
        }

        #write {
            padding-left: 20px;
            padding-right: 20px;
        }

        .CodeMirror-sizer {
            margin-left: 0 !important;
        }

        .CodeMirror-gutters {
            display: none !important;
        }
    }

    #write li > figure:last-child {
        margin-bottom: 0.5rem;
    }

    #write ol, #write ul {
        position: relative;
    }

    img {
        max-width: 100%;
        vertical-align: middle;
    }

    button, input, select, textarea {
        color: inherit;
        font: inherit;
    }

    input[type="checkbox"], input[type="radio"] {
        line-height: normal;
        padding: 0;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }

    #write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p, #write pre {
        width: inherit;
    }

    #write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p {
        position: relative;
    }

    p {
        line-height: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        break-after: avoid-page;
        break-inside: avoid;
        orphans: 2;
    }

    p {
        orphans: 4;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.6rem;
    }

    h4 {
        font-size: 1.4rem;
    }

    h5 {
        font-size: 1.2rem;
    }

    h6 {
        font-size: 1rem;
    }

    .md-math-block, .md-rawblock, h1, h2, h3, h4, h5, h6, p {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .hidden {
        display: none;
    }

    .md-blockmeta {
        color: rgb(204, 204, 204);
        font-weight: 700;
        font-style: italic;
    }

    a {
        cursor: pointer;
    }

    sup.md-footnote {
        padding: 2px 4px;
        background-color: rgba(238, 238, 238, 0.7);
        color: rgb(85, 85, 85);
        border-radius: 4px;
        cursor: pointer;
    }

    sup.md-footnote a, sup.md-footnote a:hover {
        color: inherit;
        text-transform: inherit;
        text-decoration: inherit;
    }

    #write input[type="checkbox"] {
        cursor: pointer;
        width: inherit;
        height: inherit;
    }

    figure {
        overflow-x: auto;
        margin: 1.2em 0;
        max-width: calc(100% + 16px);
        padding: 0;
    }

    figure > table {
        margin: 0 !important;
    }

    tr {
        break-inside: avoid;
        break-after: auto;
    }

    thead {
        display: table-header-group;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        overflow: auto;
        break-inside: auto;
        text-align: left;
    }

    table.md-table td {
        min-width: 32px;
    }

    .CodeMirror-gutters {
        border-right: 0;
        background-color: inherit;
    }

    .CodeMirror-linenumber {
        user-select: none;
    }

    .CodeMirror {
        text-align: left;
    }

    .CodeMirror-placeholder {
        opacity: 0.3;
    }

    .CodeMirror pre {
        padding: 0 4px;
    }

    .CodeMirror-lines {
        padding: 0;
    }

    div.hr:focus {
        cursor: none;
    }

    #write pre {
        white-space: pre-wrap;
    }

    #write.fences-no-line-wrapping pre {
        white-space: pre;
    }

    #write pre.ty-contain-cm {
        white-space: normal;
    }

    .CodeMirror-gutters {
        margin-right: 4px;
    }

    .md-fences {
        font-size: 0.9rem;
        display: block;
        break-inside: avoid;
        text-align: left;
        overflow: visible;
        white-space: pre;
        background: inherit;
        position: relative !important;
    }

    .md-diagram-panel {
        width: 100%;
        margin-top: 10px;
        text-align: center;
        padding-top: 0;
        padding-bottom: 8px;
        overflow-x: auto;
    }

    #write .md-fences.mock-cm {
        white-space: pre-wrap;
    }

    .md-fences.md-fences-with-lineno {
        padding-left: 0;
    }

    #write.fences-no-line-wrapping .md-fences.mock-cm {
        white-space: pre;
        overflow-x: auto;
    }

    .md-fences.mock-cm.md-fences-with-lineno {
        padding-left: 8px;
    }

    .CodeMirror-line {
        break-inside: avoid;
    }

    .footnotes {
        opacity: 0.8;
        font-size: 0.9rem;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .footnotes + .footnotes {
        margin-top: 0;
    }

    .md-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: top;
        background: 0 0;
        text-decoration: none;
        text-shadow: none;
        float: none;
        position: static;
        width: auto;
        height: auto;
        white-space: nowrap;
        cursor: inherit;
        -webkit-tap-highlight-color: transparent;
        line-height: normal;
        font-weight: 400;
        text-align: left;
        box-sizing: content-box;
        direction: ltr;
    }

    li div {
        padding-top: 0;
    }

    blockquote {
        margin: 1rem 0;
    }

    li .mathjax-block, li p {
        margin: 0.5rem 0;
    }

    li {
        margin: 0;
        position: relative;
    }

    blockquote > :last-child {
        margin-bottom: 0;
    }

    blockquote > :first-child, li > :first-child {
        margin-top: 0;
    }

    .footnotes-area {
        color: rgb(136, 136, 136);
        margin-top: 0.714rem;
        padding-bottom: 0.143rem;
        white-space: normal;
    }

    #write .footnote-line {
        white-space: pre-wrap;
    }

    @media print {
        body, html {
            border: 1px solid transparent;
            height: 99%;
            break-after: avoid;
            break-before: avoid;
        }

        #write {
            margin-top: 0;
            padding-top: 0;
            border-color: transparent !important;
        }

        .typora-export * {
            -webkit-print-color-adjust: exact;
        }

        html.blink-to-pdf {
            font-size: 13px;
        }

        .typora-export #write {
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 0;
            break-after: avoid;
        }

        .typora-export #write::after {
            height: 0;
        }
    }

    .footnote-line {
        margin-top: 0.714em;
        font-size: 0.7em;
    }

    a img, img a {
        cursor: pointer;
    }

    pre.md-meta-block {
        font-size: 0.8rem;
        min-height: 0.8rem;
        white-space: pre-wrap;
        background: rgb(204, 204, 204);
        display: block;
        overflow-x: hidden;
    }

    p > .md-image:only-child:not(.md-img-error) img, p > img:only-child {
        display: block;
        margin: auto;
    }

    p > .md-image:only-child {
        display: inline-block;
        width: 100%;
    }

    #write .MathJax_Display {
        margin: 0.8em 0 0;
    }

    .md-math-block {
        width: 100%;
    }

    .md-math-block:not(:empty)::after {
        display: none;
    }

    [contenteditable="true"]:active, [contenteditable="true"]:focus, [contenteditable="false"]:active, [contenteditable="false"]:focus {
        outline: 0;
        box-shadow: none;
    }

    .md-task-list-item {
        position: relative;
        list-style-type: none;
    }

    .task-list-item.md-task-list-item {
        padding-left: 0;
    }

    .md-task-list-item > input {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -1.2em;
        margin-top: calc(1em - 10px);
        border: none;
    }

    .math {
        font-size: 1rem;
    }

    .md-toc {
        min-height: 3.58rem;
        position: relative;
        font-size: 0.9rem;
        border-radius: 10px;
    }

    .md-toc-content {
        position: relative;
        margin-left: 0;
    }

    .md-toc-content::after, .md-toc::after {
        display: none;
    }

    .md-toc-item {
        display: block;
        color: rgb(65, 131, 196);
    }

    .md-toc-item a {
        text-decoration: none;
    }

    .md-toc-inner:hover {
        text-decoration: underline;
    }

    .md-toc-inner {
        display: inline-block;
        cursor: pointer;
    }

    .md-toc-h1 .md-toc-inner {
        margin-left: 0;
        font-weight: 700;
    }

    .md-toc-h2 .md-toc-inner {
        margin-left: 2em;
    }

    .md-toc-h3 .md-toc-inner {
        margin-left: 4em;
    }

    .md-toc-h4 .md-toc-inner {
        margin-left: 6em;
    }

    .md-toc-h5 .md-toc-inner {
        margin-left: 8em;
    }

    .md-toc-h6 .md-toc-inner {
        margin-left: 10em;
    }

    @media screen and (max-width: 48em) {
        .md-toc-h3 .md-toc-inner {
            margin-left: 3.5em;
        }

        .md-toc-h4 .md-toc-inner {
            margin-left: 5em;
        }

        .md-toc-h5 .md-toc-inner {
            margin-left: 6.5em;
        }

        .md-toc-h6 .md-toc-inner {
            margin-left: 8em;
        }
    }

    a.md-toc-inner {
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        line-height: inherit;
    }

    .footnote-line a:not(.reversefootnote) {
        color: inherit;
    }

    .md-attr {
        display: none;
    }

    .md-fn-count::after {
        content: ".";
    }

    code, pre, samp, tt {
        font-family: var(--monospace);
    }

    kbd {
        margin: 0 0.1em;
        padding: 0.1em 0.6em;
        font-size: 0.8em;
        color: rgb(36, 39, 41);
        background: rgb(255, 255, 255);
        border: 1px solid rgb(173, 179, 185);
        border-radius: 3px;
        box-shadow: rgba(12, 13, 14, 0.2) 0 1px 0, rgb(255, 255, 255) 0 0 0 2px inset;
        white-space: nowrap;
        vertical-align: middle;
    }

    .md-comment {
        color: rgb(162, 127, 3);
        opacity: 0.8;
        font-family: var(--monospace);
    }

    code {
        text-align: left;
        vertical-align: initial;
    }

    a.md-print-anchor {
        white-space: pre !important;
        border-width: initial !important;
        border-style: none !important;
        border-color: initial !important;
        display: inline-block !important;
        position: absolute !important;
        width: 1px !important;
        right: 0 !important;
        outline: 0 !important;
        background: 0 0 !important;
        text-decoration: initial !important;
        text-shadow: initial !important;
    }

    .md-inline-math .MathJax_SVG .noError {
        display: none !important;
    }

    .html-for-mac .inline-math-svg .MathJax_SVG {
        vertical-align: 1px;
    }

    .md-math-block .MathJax_SVG_Display {
        text-align: center;
        margin: 0;
        position: relative;
        text-indent: 0;
        max-width: none;
        max-height: none;
        min-height: 0;
        min-width: 100%;
        width: auto;
        overflow-y: hidden;
        display: block !important;
    }

    .MathJax_SVG_Display, .md-inline-math .MathJax_SVG_Display {
        width: auto;
        margin: inherit;
        display: inline-block !important;
    }

    .MathJax_SVG .MJX-monospace {
        font-family: var(--monospace);
    }

    .MathJax_SVG .MJX-sans-serif {
        font-family: sans-serif;
    }

    .MathJax_SVG {
        display: inline;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        zoom: 90%;
        text-indent: 0;
        text-align: left;
        text-transform: none;
        letter-spacing: normal;
        word-spacing: normal;
        overflow-wrap: normal;
        white-space: nowrap;
        float: none;
        direction: ltr;
        max-width: none;
        max-height: none;
        min-width: 0;
        min-height: 0;
        border: 0;
        padding: 0;
        margin: 0;
    }

    .MathJax_SVG * {
        transition: none 0s ease 0s;
    }

    .MathJax_SVG_Display svg {
        vertical-align: middle !important;
        margin-bottom: 0 !important;
        margin-top: 0 !important;
    }

    .os-windows.monocolor-emoji .md-emoji {
        font-family: "Segoe UI Symbol", sans-serif;
    }

    .md-diagram-panel > svg {
        max-width: 100%;
    }

    [lang="flow"] svg, [lang="mermaid"] svg {
        max-width: 100%;
        height: auto;
    }

    [lang="mermaid"] .node text {
        font-size: 1rem;
    }

    table tr th {
        border-bottom: 0;
    }

    video {
        max-width: 100%;
        display: block;
        margin: 0 auto;
    }

    iframe {
        max-width: 100%;
        width: 100%;
        border: none;
    }

    .highlight td, .highlight tr {
        border: 0;
    }

    svg[id^="mermaidChart"] {
        line-height: 1em;
    }

    mark {
        background: rgb(255, 255, 0);
        color: rgb(0, 0, 0);
    }

    .md-html-inline .md-plain, .md-html-inline strong, mark .md-inline-math, mark strong {
        color: inherit;
    }

    mark .md-meta {
        color: rgb(0, 0, 0);
        opacity: 0.3 !important;
    }


    .CodeMirror {
        height: auto;
    }

    .CodeMirror.cm-s-inner {
        background: inherit;
    }

    .CodeMirror-scroll {
        overflow: auto hidden;
        z-index: 3;
    }

    .CodeMirror-gutter-filler, .CodeMirror-scrollbar-filler {
        background-color: rgb(255, 255, 255);
    }

    .CodeMirror-gutters {
        border-right: 1px solid rgb(221, 221, 221);
        background: inherit;
        white-space: nowrap;
    }

    .CodeMirror-linenumber {
        padding: 0 3px 0 5px;
        text-align: right;
        color: rgb(153, 153, 153);
    }

    .cm-s-inner .cm-keyword {
        color: rgb(119, 0, 136);
    }

    .cm-s-inner .cm-atom, .cm-s-inner.cm-atom {
        color: rgb(34, 17, 153);
    }

    .cm-s-inner .cm-number {
        color: rgb(17, 102, 68);
    }

    .cm-s-inner .cm-def {
        color: rgb(0, 0, 255);
    }

    .cm-s-inner .cm-variable {
        color: rgb(0, 0, 0);
    }

    .cm-s-inner .cm-variable-2 {
        color: rgb(0, 85, 170);
    }

    .cm-s-inner .cm-variable-3 {
        color: rgb(0, 136, 85);
    }

    .cm-s-inner .cm-string {
        color: rgb(170, 17, 17);
    }

    .cm-s-inner .cm-property {
        color: rgb(0, 0, 0);
    }

    .cm-s-inner .cm-operator {
        color: rgb(152, 26, 26);
    }

    .cm-s-inner .cm-comment, .cm-s-inner.cm-comment {
        color: rgb(170, 85, 0);
    }

    .cm-s-inner .cm-string-2 {
        color: rgb(255, 85, 0);
    }

    .cm-s-inner .cm-meta {
        color: rgb(85, 85, 85);
    }

    .cm-s-inner .cm-qualifier {
        color: rgb(85, 85, 85);
    }

    .cm-s-inner .cm-builtin {
        color: rgb(51, 0, 170);
    }

    .cm-s-inner .cm-bracket {
        color: rgb(153, 153, 119);
    }

    .cm-s-inner .cm-tag {
        color: rgb(17, 119, 0);
    }

    .cm-s-inner .cm-attribute {
        color: rgb(0, 0, 204);
    }

    .cm-s-inner .cm-header, .cm-s-inner.cm-header {
        color: rgb(0, 0, 255);
    }

    .cm-s-inner .cm-quote, .cm-s-inner.cm-quote {
        color: rgb(0, 153, 0);
    }

    .cm-s-inner .cm-hr, .cm-s-inner.cm-hr {
        color: rgb(153, 153, 153);
    }

    .cm-s-inner .cm-link, .cm-s-inner.cm-link {
        color: rgb(0, 0, 204);
    }

    .cm-negative {
        color: rgb(221, 68, 68);
    }

    .cm-positive {
        color: rgb(34, 153, 34);
    }

    .cm-header, .cm-strong {
        font-weight: 700;
    }

    .cm-del {
        text-decoration: line-through;
    }

    .cm-em {
        font-style: italic;
    }

    .cm-link {
        text-decoration: underline;
    }

    .cm-error {
        color: red;
    }

    .cm-invalidchar {
        color: red;
    }

    .cm-constant {
        color: rgb(38, 139, 210);
    }

    .cm-defined {
        color: rgb(181, 137, 0);
    }

    div.CodeMirror span.CodeMirror-matchingbracket {
        color: rgb(0, 255, 0);
    }

    div.CodeMirror span.CodeMirror-nonmatchingbracket {
        color: rgb(255, 34, 34);
    }

    .cm-s-inner .CodeMirror-activeline-background {
        background: inherit;
    }

    .CodeMirror {
        position: relative;
        overflow: hidden;
    }

    .CodeMirror-scroll {
        height: 100%;
        outline: 0;
        position: relative;
        box-sizing: content-box;
        background: inherit;
    }

    .CodeMirror-sizer {
        position: relative;
    }

    .CodeMirror-gutter-filler, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar {
        position: absolute;
        z-index: 6;
        display: none;
    }

    .CodeMirror-vscrollbar {
        right: 0;
        top: 0;
        overflow: hidden;
    }

    .CodeMirror-hscrollbar {
        bottom: 0;
        left: 0;
        overflow: hidden;
    }

    .CodeMirror-scrollbar-filler {
        right: 0;
        bottom: 0;
    }

    .CodeMirror-gutter-filler {
        left: 0;
        bottom: 0;
    }

    .CodeMirror-gutters {
        position: absolute;
        left: 0;
        top: 0;
        padding-bottom: 30px;
        z-index: 3;
    }

    .CodeMirror-gutter {
        white-space: normal;
        height: 100%;
        box-sizing: content-box;
        padding-bottom: 30px;
        margin-bottom: -32px;
        display: inline-block;
    }

    .CodeMirror-gutter-wrapper {
        position: absolute;
        z-index: 4;
        background: 0 0 !important;
        border: none !important;
    }

    .CodeMirror-gutter-background {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 4;
    }

    .CodeMirror-gutter-elt {
        position: absolute;
        cursor: default;
        z-index: 4;
    }

    .CodeMirror-lines {
        cursor: text;
    }

    .CodeMirror pre {
        border-radius: 0;
        border-width: 0;
        background: 0 0;
        font-family: inherit;
        font-size: inherit;
        margin: 0;
        white-space: pre;
        overflow-wrap: normal;
        color: inherit;
        z-index: 2;
        position: relative;
        overflow: visible;
    }

    .CodeMirror-wrap pre {
        overflow-wrap: break-word;
        white-space: pre-wrap;
        word-break: normal;
    }

    .CodeMirror-code pre {
        border-right: 30px solid transparent;
        width: fit-content;
    }

    .CodeMirror-wrap .CodeMirror-code pre {
        border-right: none;
        width: auto;
    }

    .CodeMirror-linebackground {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 0;
    }

    .CodeMirror-linewidget {
        position: relative;
        z-index: 2;
        overflow: auto;
    }

    .CodeMirror-wrap .CodeMirror-scroll {
        overflow-x: hidden;
    }

    .CodeMirror-measure {
        position: absolute;
        width: 100%;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }

    .CodeMirror-measure pre {
        position: static;
    }

    .CodeMirror div.CodeMirror-cursor {
        position: absolute;
        visibility: hidden;
        border-right: none;
        width: 0;
    }

    .CodeMirror div.CodeMirror-cursor {
        visibility: hidden;
    }

    .CodeMirror-focused div.CodeMirror-cursor {
        visibility: inherit;
    }

    .cm-searching {
        background: rgba(255, 255, 0, 0.4);
    }

    @media print {
        .CodeMirror div.CodeMirror-cursor {
            visibility: hidden;
        }
    }


    :root {
        --side-bar-bg-color: #fafafa;
        --control-text-color: #777;
    }

    /*@include-when-export url(https://fonts.loli.net/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);*/

    html {
        font-size: 16px;
    }

    body {
        font-family: "Open Sans", "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: rgb(51, 51, 51);
        line-height: 1.6;
    }

    #write {
        max-width: 860px;
        margin: 0 auto;
        padding: 30px 30px 100px;
    }

    #write > ul:first-child,
    #write > ol:first-child {
        margin-top: 30px;
    }

    a {
        color: #4183C4;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        position: relative;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: bold;
        line-height: 1.4;
        cursor: text;
    }

    h1:hover a.anchor,
    h2:hover a.anchor,
    h3:hover a.anchor,
    h4:hover a.anchor,
    h5:hover a.anchor,
    h6:hover a.anchor {
        text-decoration: none;
    }

    h1 tt,
    h1 code {
        font-size: inherit;
    }

    h2 tt,
    h2 code {
        font-size: inherit;
    }

    h3 tt,
    h3 code {
        font-size: inherit;
    }

    h4 tt,
    h4 code {
        font-size: inherit;
    }

    h5 tt,
    h5 code {
        font-size: inherit;
    }

    h6 tt,
    h6 code {
        font-size: inherit;
    }

    h1 {
        padding-bottom: .3em;
        font-size: 2.25em;
        line-height: 1.2;
        border-bottom: 1px solid #eee;
    }

    h2 {
        padding-bottom: .3em;
        font-size: 1.75em;
        line-height: 1.225;
        border-bottom: 1px solid #eee;
    }

    h3 {
        font-size: 1.5em;
        line-height: 1.43;
    }

    h4 {
        font-size: 1.25em;
    }

    h5 {
        font-size: 1em;
    }

    h6 {
        font-size: 1em;
        color: #777;
    }

    p,
    blockquote,
    ul,
    ol,
    dl,
    table {
        margin: 0.8em 0;
    }

    li > ol,
    li > ul {
        margin: 0 0;
    }

    hr {
        height: 2px;
        padding: 0;
        margin: 16px 0;
        background-color: #e7e7e7;
        border: 0 none;
        overflow: hidden;
        box-sizing: content-box;
    }

    li p.first {
        display: inline-block;
    }

    ul,
    ol {
        padding-left: 30px;
    }

    ul:first-child,
    ol:first-child {
        margin-top: 0;
    }

    ul:last-child,
    ol:last-child {
        margin-bottom: 0;
    }

    blockquote {
        border-left: 4px solid #dfe2e5;
        padding: 0 15px;
        color: #777777;
    }

    blockquote blockquote {
        padding-right: 0;
    }

    table {
        padding: 0;
        word-break: initial;
    }

    table tr {
        border-top: 1px solid #dfe2e5;
        margin: 0;
        padding: 0;
    }

    table tr:nth-child(2n),
    thead {
        background-color: #f8f8f8;
    }

    table tr th {
        font-weight: bold;
        border: 1px solid #dfe2e5;
        border-bottom: 0;
        margin: 0;
        padding: 6px 13px;
    }

    table tr td {
        border: 1px solid #dfe2e5;
        margin: 0;
        padding: 6px 13px;
    }

    table tr th:first-child,
    table tr td:first-child {
        margin-top: 0;
    }

    table tr th:last-child,
    table tr td:last-child {
        margin-bottom: 0;
    }

    .CodeMirror-lines {
        padding-left: 4px;
    }

    .code-tooltip {
        box-shadow: 0 1px 1px 0 rgba(0, 28, 36, .3);
        border-top: 1px solid #eef2f2;
    }

    .md-fences,
    code,
    tt {
        border: 1px solid #e7eaed;
        background-color: #f8f8f8;
        border-radius: 3px;
        padding: 2px 4px 0 4px;
        font-size: 0.9em;
    }

    code {
        background-color: #f3f4f4;
        padding: 0 2px 0 2px;
    }

    .md-fences {
        margin-bottom: 15px;
        margin-top: 15px;
        padding-top: 8px;
        padding-bottom: 6px;
    }


    .md-task-list-item > input {
        margin-left: -1.3em;
    }

    @media print {
        html {
            font-size: 13px;
        }

        table,
        pre {
            page-break-inside: avoid;
        }

        pre {
            word-wrap: break-word;
        }
    }

    .md-fences {
        background-color: #f8f8f8;
    }

    #write pre.md-meta-block {
        padding: 1rem;
        font-size: 85%;
        line-height: 1.45;
        background-color: #f7f7f7;
        border: 0;
        border-radius: 3px;
        color: #777777;
        margin-top: 0 !important;
    }

    .mathjax-block > .code-tooltip {
        bottom: .375rem;
    }

    .md-mathjax-midline {
        background: #fafafa;
    }

    #write > h3.md-focus:before {
        left: -1.5625rem;
        top: .375rem;
    }

    #write > h4.md-focus:before {
        left: -1.5625rem;
        top: .285714286rem;
    }

    #write > h5.md-focus:before {
        left: -1.5625rem;
        top: .285714286rem;
    }

    #write > h6.md-focus:before {
        left: -1.5625rem;
        top: .285714286rem;
    }

    .md-image > .md-meta {
        /*border: 1px solid #ddd;*/
        border-radius: 3px;
        padding: 2px 0 0 4px;
        font-size: 0.9em;
        color: inherit;
    }

    .md-tag {
        color: #a7a7a7;
        opacity: 1;
    }

    .md-toc {
        margin-top: 20px;
        padding-bottom: 20px;
    }

    .sidebar-tabs {
        border-bottom: none;
    }

    #typora-quick-open {
        border: 1px solid #ddd;
        background-color: #f8f8f8;
    }

    #typora-quick-open-item {
        background-color: #FAFAFA;
        border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
        border-style: solid;
        border-width: 1px;
    }

    /** focus mode */
    .on-focus-mode blockquote {
        border-left-color: rgba(85, 85, 85, 0.12);
    }

    header, .context-menu, .megamenu-content, footer {
        font-family: "Segoe UI", "Arial", sans-serif;
    }

    .file-node-content:hover .file-node-icon,
    .file-node-content:hover .file-node-open-state {
        visibility: visible;
    }

    .mac-seamless-mode #typora-sidebar {
        background-color: var(--side-bar-bg-color);
    }

    .md-lang {
        color: #b4654d;
    }

    .html-for-mac .context-menu {
        --item-hover-bg-color: #E6F0FE;
    }

    #md-notification .btn {
        border: 0;
    }

    .dropdown-menu .divider {
        border-color: #e5e5e5;
    }

    .ty-preferences .window-content {
        background-color: #fafafa;
    }

    .ty-preferences .nav-group-item.active {
        color: white;
        background: #999;
    }

</style>
