<template>
  <div class="holder">
    <div id="app-holder" :contenteditable="isEdit">
      <div class="toutiao-container">
        <div class="toutiao-hd">
          <h1>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA8CAMAAAAjZwjSAAAAulBMVEUAAAD//v798PD86er++vr76en//f3+/Pz86+v76er86er//P3++vv+8/P86+v76en75ub76er/+/v++Pn++fn++Pj99fX98vP98vL88PD97+/98fH87+/87e786+v86+v87e375+j++vr+9/f99vb99PT98vL98fH97u786+v86uv86uv76Oj++/v++/v++/r+9/f99fX98fH98PD87e798fH87Oz76en+9/f87e376ur97/D76Oj///8l58oZAAAAPXRSTlMA/oYW4hP58jMsIvXrm0MpCgTw2dXRvKahiX96c15aTCYH3sbBqpmQZkYwGw/t5+TKt5WMb1pQOc5rVVEe4OMVuQAAAb9JREFUSMeNldeSgkAQRWcEBBQMgCKCYk6Yc5r//62tcrEW6MsW55E6xTDdtxuWQtH8o2max8Wgyf5h0B1b4gOX3VqutvZ3XPyhnhrYq7RFhukaeneRhZeA1zgIirWiYo8LwJl4zbZAdIiojKDYJuKtDEWXiCGHok/EugXFPq1OC3ktiRHmwOML1BiHijOGqO2y75vlhEIbpzwjGMa9iOp6vSINE0UPHDWuUlme659nUuhPDLWqqkbAEki1S2cynhy81+D3EG//ra/dJ/FVlPjbdHMrYuQgYnmsTpuvxqeDPCu6uob4sjkPoTS89WajREZGtWSrve7iugz7j9LcHKeDZGsswYULzsscRMjR021RBWakZVK2xV41ZGneMha7LINu4JEhsViq8GC6fl50tnAeL0isFt0TLqOcgcefQOwA8a5QT9nDvUOp2ODkPtrdoDFbemfcGLkOxCeojv0G4gn1GeV/CkS06JsHtKCQOAFiD4iSDMQrEJccREcD4kNQnDUQfSBOGaAERJMVDNkcXdqBg0q5WQVDtqxS0dJZscmyI9BAF/6z0MAUFLVNQfEoAHKFijsk8pCKgVcieF36xh/I4wwpnMQZQwAAAABJRU5ErkJggg==" width="20px" style="vertical-align: middle">
            <span>头条·第一期</span>
          </h1>
          <h4 style="top: 90px">聚焦热点资讯，掌握新闻动态</h4>
        </div>

        <div class="toutiao-box">
          <div class="clearfix js-news">
            <h2><a class="js-title" target="_blank" href="http://hy.stock.cnfol.com/hangyezonghe/20171127/25676683.shtml">爱投资为什么不做现金贷</a></h2>
            <p>在现金贷的一片热潮中，有一家公司却“反其道行之”，不断强调自己做的是“实体经济”，这家科技金融公司就是爱投资。</p>
            <p>日前，爱投资高级副总裁韩世琪在出席“2017互联网金融合规与创新论坛”时指出，中国是绝对不会再缺一个做现金贷的平台了，反倒是非常缺少给实体经济输血的平台。</p>
            <p class="toutiao-link-container">
              <a class="more js-more" target="_blank" href="http://hy.stock.cnfol.com/hangyezonghe/20171127/25676683.shtml">点击查看更多<span class="toutiao-angle">>>></span></a>
            </p>
          </div>
          <div class="clearfix js-news">
            <h2><a class="js-title" target="_blank" href="http://www.p2peye.com/forum.php?mod=viewthread&amp;ordertype=1&amp;tid=1930893">爱投资-iSAFE爱心助农公益活动启动</a></h2>
            <p>十九大报告提出，重点攻克深度贫困地区脱贫任务，确保到二〇二〇年我国现行标准下农村贫困人口实现脱贫，贫困县全部摘帽，解决区域性整体贫困，做到脱真贫、真脱贫。近日，爱投资旗下公益品牌iSAFE启动爱心助农公益活动，通过“互联网+公益助农”的方式在线上传播公益，助力贫困地区三农产业发展。</p>
            <p class="toutiao-link-container">
              <a class="more js-more" target="_blank" href="http://www.p2peye.com/forum.php?mod=viewthread&amp;ordertype=1&amp;tid=1930893">点击查看更多<span class="toutiao-angle">>>></span></a>
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

    setInterval(this.bindAnchorClick, 600)
  },

  methods: {
    fetch () {
      var html = localStorage.TOUTIAO_HTML;
      if (html && html !== 'null') {
        document.getElementById('app-holder').innerHTML = html
      }
    },

    getStyle () {
      var styleEl = document.getElementById('style-toutiao');
      var sheet = styleEl.sheet || styleEl.styleSheet;
      var rules = sheet.cssRules || sheet.rules;
      var rule = '';
      for (var i = 0; i < rules.length; i++) {
        rule += (rules[i].selectorText + '{' + rules[i].style.cssText + '}')
      }
      return `<style>${rule}</style>`
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