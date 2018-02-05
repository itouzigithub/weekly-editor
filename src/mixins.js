export default {
  data () {
    return {
      showLinkEditor: false,
      url: '',
      $target: null,
      isEdit: true,
      anchors: 0
    }
  },

  methods: {
    bindAnchorClick () {
      var len = $('.js-more').length
      if (len > this.anchors) {
        $('.js-more').unbind('click').click(e => {
          this.$target = $(e.currentTarget);
          var href = this.$target.attr('href');
          if (href) {
            this.url = href
          }
          this.showLinkEditor = true
        })
      }
      this.anchors = len
    },

    setLink () {
      if (this.isEdit) {
        this.$target.attr('href', this.url);
        this.$target.parent().prevAll('h2').first().find('.js-title').attr('href', this.url);
        this.showLinkEditor = false;
        this.url = ''
      }
    },

    upload (e) {
      var file = e.target.files;
      if (file) {
        var fr = new FileReader();
        fr.readAsDataURL(file[0]);
        fr.onload = (e) => {
          this.$target.attr('src', e.target.result)
        }
      }
    },

    copy () {
      var html = this.getHTML();
      var style = this.getStyle();
      this.copy2clipboard(style + html)
    },

    /**
     * 复制代码到剪贴板
     * 首先将模板字符串添加到 textarea 中
     * 再执行 document.execCommand('copy') 方法
     */
    copy2clipboard (output) {
      document.getElementById('copy').value = output;
      document.getElementById('copy').select();
      try {
        if (document.execCommand('copy')) {
          this.$message({
            message: '已复制到剪贴板',
            type: 'success',
            duration: 1500
          })
        } else {
          this.$message.error('复制失败')
        }
      } catch (e) {
        alert(e)
      }
    },

    getHTML () {
      return document.getElementById('app-holder').innerHTML
    }
  }
}