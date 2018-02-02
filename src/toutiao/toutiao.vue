<template>
  <div class="holder">
    <div id="app-holder" :contenteditable="isEdit">
      <div class="toutiao-container">
        <div class="toutiao-hd">
          <h1>头条·第一期</h1>
          <h4 style="top: 90px">聚焦热点资讯，掌握新闻动态</h4>
        </div>

        <div class="toutiao-box">
          <div class="clearfix js-news">
            <h2><a class="js-title" target="_blank" href="http://hy.stock.cnfol.com/hangyezonghe/20171127/25676683.shtml">爱投资为什么不做现金贷</a></h2>
            <p>在现金贷的一片热潮中，有一家公司却“反其道行之”，不断强调自己做的是“实体经济”，这家科技金融公司就是爱投资。</p>
            <p>日前，爱投资高级副总裁韩世琪在出席“2017互联网金融合规与创新论坛”时指出，中国是绝对不会再缺一个做现金贷的平台了，反倒是非常缺少给实体经济输血的平台。</p>
            <p class="toutiao-link-container">
              <a class="more js-more" target="_blank" href="http://hy.stock.cnfol.com/hangyezonghe/20171127/25676683.shtml">点击查看更多</a>
            </p>
          </div>
          <div class="clearfix js-news">
            <h2><a class="js-title" target="_blank" href="http://www.p2peye.com/forum.php?mod=viewthread&amp;ordertype=1&amp;tid=1930893">爱投资-iSAFE爱心助农公益活动启动</a></h2>
            <p>十九大报告提出，重点攻克深度贫困地区脱贫任务，确保到二〇二〇年我国现行标准下农村贫困人口实现脱贫，贫困县全部摘帽，解决区域性整体贫困，做到脱真贫、真脱贫。近日，爱投资旗下公益品牌iSAFE启动爱心助农公益活动，通过“互联网+公益助农”的方式在线上传播公益，助力贫困地区三农产业发展。</p>
            <p class="toutiao-link-container">
              <a class="more js-more" target="_blank" href="http://www.p2peye.com/forum.php?mod=viewthread&amp;ordertype=1&amp;tid=1930893">点击查看更多</a>
            </p>
          </div>     
        </div>
      </div>
    </div>

    <el-dialog
      title="链接"
      :visible.sync="showLinkEditor"
      width="30%">
      <el-input v-model="url" placeholder="请输入 url 链接"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showLinkEditor = false">取 消</el-button>
        <el-button type="primary" @click="setLink">确 定</el-button>
      </span>
    </el-dialog>

    <input type="file" class="uploader" id="uploader" @change="upload">
    
    <button class="btn" @click="save">{{ isEdit ? '保存' : '编辑' }}</button>
    <button class="btn btn-copy" @click="copy">复制</button>

    <textarea id="copy"></textarea>
  </div>
</template>

<script>
import mixin from '../mixins.js'
export default {
  mixins: [mixin],

  mounted () {
    this.fetch();

    var length =document.styleSheets.length;
    var sheet = document.styleSheets[length - 1];
    sheet.ownerNode.setAttribute('id', 'style-toutiao');

    setInterval(this.bindAnchorClick, 500)
  },

  methods: {
    fetch () {
      var html = localStorage.TOUTIAO_HTML;
      if (html && html !== 'null') {
        document.getElementById('app-holder').innerHTML = html
      }
    },

    save () {
      if (this.isEdit) {
        this.isEdit = false;

        var html = this.getHTML();
        localStorage.TOUTIAO_HTML = html;

        this.$message({
          message: '保存成功',
          type: 'success',
          duration: 1500
        })
      } else {
        this.isEdit = true;
      }
    }
  }
}
</script>

<style src="./template.css"></style>