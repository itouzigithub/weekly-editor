<template>
  <div class="holder">
    <div id="app-holder" :contenteditable="isEdit">
      <div class="weekly-container">
        <div class="weekly-hd">
          <h4 style="top: 15px">
            <img src="https://itzstatic.b0.upaiyun.com/data/iseefintech/iseefintech.png" class="logo" width="150px" />
            <span>第十期</span>
          </h4>
          <h4 style="top: 48px">2017.12.05</h4>
        </div>

        <div class="box">
          <h3>iNews<img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20170914/broadcast.png" height="20px"  /></h3>

          <div class="mt20 clearfix js-news">
            <h2><a class="js-title" target="_blank" href="http://hy.stock.cnfol.com/hangyezonghe/20171127/25676683.shtml">爱投资为什么不做现金贷</a></h2>
            <p>在现金贷的一片热潮中，有一家公司却“反其道行之”，不断强调自己做的是“实体经济”，这家科技金融公司就是爱投资。</p>
            <p>日前，爱投资高级副总裁韩世琪在出席“2017互联网金融合规与创新论坛”时指出，中国是绝对不会再缺一个做现金贷的平台了，反倒是非常缺少给实体经济输血的平台。</p>
            <p class="link-container">
              <a class="more js-more" target="_blank" href="http://hy.stock.cnfol.com/hangyezonghe/20171127/25676683.shtml">点击查看更多</a>
            </p>
          </div>
          <div class="mt20 clearfix js-news">
            <h2><a class="js-title" target="_blank" href="http://www.p2peye.com/forum.php?mod=viewthread&amp;ordertype=1&amp;tid=1930893">爱投资-iSAFE爱心助农公益活动启动</a></h2>
            <p>十九大报告提出，重点攻克深度贫困地区脱贫任务，确保到二〇二〇年我国现行标准下农村贫困人口实现脱贫，贫困县全部摘帽，解决区域性整体贫困，做到脱真贫、真脱贫。近日，爱投资旗下公益品牌iSAFE启动爱心助农公益活动，通过“互联网+公益助农”的方式在线上传播公益，助力贫困地区三农产业发展。</p>
            <p class="link-container">
              <a class="more js-more" target="_blank" href="http://www.p2peye.com/forum.php?mod=viewthread&amp;ordertype=1&amp;tid=1930893">点击查看更多</a>
            </p>
          </div>     
        </div>
        
        <div class="box">
          <h3>iSee学院<img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20170914/hat.png" height="20px"  /></h3>

          <h2>资产配置浅析（1）</h2>
          <p>各位同事，大家好！</p>
          <p>连续讲了两期新闻解读之后，希望大家和薇薇一样已经开始关注每天的财经新闻了。专业的素养需要不断积累，相信过不了多久伙伴们的财经敏感度会有质的提高。</p>
          <p>言归正传，今天薇薇带大家了解的是金融理财行业里耳熟能详的一个概念“资产配置”。其实对于国内大多数投资者来说，“买房+理财产品”这一投资组合是目前最普遍的投资方式，据中国家庭金融调查（CHFS）显示，中国家庭的房产在总资产中占比高达69%，北上深等地的房地产在家庭资产中占比更高达85%。从中可以看出房产在家庭资产中的占比就已经偏高了。</p>
          <p>在这里薇薇就要说的到另一个关于资产配置中需要注意的地方，那就资产配置要采用 “跨地域、跨行业、跨周期、跨资产大类”的配置方式，以达到分散风险，提升整体收益的目的。跨地域可以简单理解为是在配置国内资产的基础上，要适当配置一些海外资产。</p>
          <p>再来看“跨周期”和“跨行业”，举个例子如房地产。参考美国历史可以知道其房地产周期是18年，而中国目前刚刚经历过房地产的高速增长时期，虽然暂时还无法确定具体周期是多少年，但本着资产配置的理念，如果资产过于集中在相同行业和周期，就要进行相应的调整。</p>
          <p>此外，还有不少人理财时也强调自己是在做“资产配置”，比如一部分钱用买了工商银行的理财，另一部分又去买了招行的理财。其实这本质上并没有起到很好的分散作用，因为他们都属于资产大类（股权、债权等）中的债权类产品，不符合配置中“跨资产大类”的要求。</p>
          <p>而这个时候，应当考虑适当提高如互联网金融产品（债权）、公募以及私募基金（股权）等产品在家庭总资产中的比例。如果是未进行过保险规划的家庭，还应该购买一定量适合家庭情况的商业保险，将家庭资产配置中保障这一环补齐。</p>
          <p>这期就先讲到这里，薇薇和大家下期见。</p>
          
          <div class="img-wrap">
            <img src="data:image/jpg;base64,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" />
            <img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20171116/erweima.jpg" />
          </div>
          <p>每周一更，还不过瘾？关注“iSee态度”，跟院长一起撩财富，涨姿势！理财这件事儿吧，态度它很重要。</p>
        </div>

        <div class="box">
          <h3>爱亲<span style="font-size: 10px;">●</span>说<img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20170914/bubble.png" height="20px"  /></h3>
          <h2>我在爱投资收获希望</h2>

          <p>两年前，我第一次在爱投资投下100元钱，那也是我在P2P第一次试水。在那以后近一个月的日子里，我几乎天天在问自己你这是不是在冒险？回答是问题没那么严重，100元钱权当拿来斗地主。</p>

          <p>那么利息能够按时返还吗?提现是不是像人说的那么简单？转让麻不麻烦，转让不出去怎么办？那些天里你别笑话我，我整个儿的是好奇与兴奋并存，期盼与担心交织，都不知道那些日子是怎么熬过来的。哎，至于吗，不就100元吗？不，不不不，这或许是一个希望的开始，我期盼着它发芽，长叶，开花，结果哩。</p>

          <p>不多不少刚好一个月，付息通知到了，0.85元!</p>

          <p>忘了告诉你朋友，我投的是半年期，百分之十的年息，投100元每月返息是0.85元。</p>

          <p>看到这个回款记录，我兴奋已。朋友你看，爱投资的这个回款记录表里的方格像不像一片广袤的沃土？在这片沃土里，是不是正等待着有人来耕耘，播种，收获希望。</p>

          <p>朋友你再看这0.85，是不是像一棵微不足道的小小秧苗，显得是那么的纤细，那么的稚嫩，甚至有那么一点点的孤单。然而正是这个0.85，它孕育着生机，有着其不同一般的执拗和不屈。</p>
          <p>朋友你知道的，在这以后的日子里，我细心的呵护着这棵幼小的秧苗，每天都要到地里看看，不停的给它浇水，施肥，我把手头一些闲钱，包括在其它地方的一些理财和存款慢慢投放进来。与此同时，我又试了试提现，提现十分简便，点一下鼠标，输入密码，立即就有短信告知提现成功。三个月后我又把这100元再试了试债权转让，当天就转让成功，用不着取号排队，也不再隔着玻璃看别人脸色听别人训斥。</p>
          <p>几个月后，这棵小苗渐渐地长出了新叶，伸出了枝蔓，虽然还是显得有点稚嫩，但再不孤独了，显示出了它特有的勃勃生机。</p>
          <p>接下来我像一个老农民一样对这块土地作了一次茬口布局，播种了两粒希望的种子：希望每月能够在爱投资里收到至少一笔返还本金，这样需要用钱的话就不会抓瞎，不需用钱就再用它去复投：希望每天都有爱投资的利息返现，不在乎返现的钱多钱少，在乎于天天能有爱投资财富相伴。</p>
          <p>再接下来的故事朋友你已经猜着了，一年以后第一个希望圆满实现了，第二个希望在今天这个举国同庆的大喜日子里也圆满的实现了。</p>

          <p style="text-align: right;">（来自爱投资用户）</p>
        </div>

        <div class="box">
          <h3>部门访谈<img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20171026/icon1.png" height="20px"  /></h3>
          <h2>服务通过发酵后带来的隐形价值会转换成更多的财富</h2>

          <p class="bold">本期特约嘉宾：马晋 用户管理中心</p>

          <div style="position: relative;">
           <div>
             <img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20171130/majin.png" class="department_talker" style="width: 300px;" id="interview-photo" />
             <p>本期周刊请来了用户管理中心的马晋。</p>

             <p class="question">问：用户管理中心是包含用户咨询部和用户维护部两部分吗？具体工作都是哪些？</p>
           </div>
          </div>

          <p>答：是的。</p>
          <p>用户咨询的工作比较繁琐，因为他要了解公司所有业务线，从公司战略到每个兄弟部门的动态，因为公司任何一个调整，都会从用户的表现反馈出来。比如出现一个bug，我们要先安抚住用户，给兄弟部门留出时间解决问题，避免用户对公司产生不好的印象。又比如对于我们业务上或者新推出的活动、技术上的改动，部分用户不能理解或不会操作，用户咨询的小伙伴除了需要做基础性解答之外，还需要一步步地教用户操作，有时候一个个案问题需要协调好几个部门。用户咨询可以理解为全技能客服，是一个综合技能非常全的岗位，对于公司所有产品、动态、规划都要有全面了解。我们面临的都是投资的用户，他们的投资知识可能很广泛，这对我们的客服也有很高的要求。每个客服都尽可能地协助用户处理他的问题，不厌其烦地解答。</p>
          <p>公司的每一个岗位都像人身体的零件和部位，用户咨询这个岗位就相当于我们身体里面无处不在的淋巴系统，输出健康的白细胞和抗体，参与免疫反应，是重要的防卫体系。</p>
          <p>用户维护部门是通过主动式的服务方式触达需要进行人工维护的用户。在一家互联网公司，像淘宝，京东，这些龙头互联网企业也在探索如何打通最后1公里。就是因为一定有互联网触及不到的地方。同理互金行业也存在这样的情况，有很多人还不了解这种投资方式或者不了解我们平台。从某些渠道知道了爱投资，看到收益比较高想试一试，但是迟迟没有投资动作，我们会主动致电用户，介绍公司背景、产品、收益情况等，通过进一步的沟通使用户了解平台并且建立初步的信任关系和投资关系。</p>
          <p>用户咨询服务和用户维护服务都是通过与用户直接接触帮助用户解决问题，或者协助用户完成投资动作。这两个部门在一起协同工作，会降低沟通成本，从管理的角度上相对降低公司运营成本。</p>

          <p class="question">问：目前有哪些重点工作？</p>
          <p>答：接下来的重点工作是持续提高部门员工的综合技能和综合素质，提供给用户更专业的服务，从而提升公司口碑。</p>

          <p class="question">问：我注意到用户咨询这边的工作时间是早9晚9，他们的工作是怎么安排的呢？</p>
          <p>答：是的，目前是7*12排班，早班是下午早9点到晚6点，晚班是下午1点到晚9点。之所以这样，是因为我们的用户有一部分白天是要上班的，我们需要早9晚9的安排。</p>
          <p>用户维护部这边是早9晚6，因为晚上的时候减少主动式服务，不去打扰用户。</p>

          <p class="question">问：您觉得什么是服务？</p>
          <p>答：服务其实就是一种产品，区别于实体产品，它是公司的无形资产，决定了企业的竞争力，我们公司各个兄弟部门其实都是在给用户提供服务，产品服务、技术服务、风险保障服务等等，大家都在为公司树立品牌、建立口碑做着努力。</p>

          <p class="question">问：在与用户接触的时候有没有什么比较有意思的事情发生呢?</p>
          <p>答：说不上有什么有意思的事情，但是被用户认可，是我们最大的满足吧。</p>
          <p>有一位海南的用户，了解到互金平台可以进行投资后，致电多家互金平台客服咨询，经过半个多月沟通，这位用户最终选择了爱投资，在客服的指导下操作了第一笔投资5万元，四个月累计来电超过30通，投资金额将近100万元，用户说：“没有你们的服务，我也许不会选择爱投资，更不会如此信任爱投资。”当然，这与我们平台好的产品和投资项目也是密不可分的。</p>
          <p>再比如我们平台刚刚上线的银行存管，我们有一部分用户生活、工作在国外，在对接系统的时候，由于用户自身原因会出现各种各样的问题。有个IBM的高管外派加拿大工作，如果完成不了存管的鉴权，几百万资产就无法操作。由于时差问题，每次与用户的沟通都是在半夜，散落在大洋彼岸各个国家的用户在同一时间出现问题，我们就得随着用户的时间倒时差，就变成了24小时都在与用户沟通。问题解决后，客户不停致谢，还表示回国后会亲自来公司拜访。</p>

          <p class="mt20">在采访的最后，马晋还说到，服务这种产品虽然不是立竿见影的，但是通过发酵后带来的隐形价值会转换成更多的财富。</p>
        </div>

        <div class="box bottom">
          <h3>iSay<img src="https://itzstatic.b0.upaiyun.com/event/izhoukan/20170914/envelope.png" height="20px"  /></h3>
          <span>征稿启事</span>
          <p>内容积极</p>
          <p>体裁不限</p>
          <p>选中即有神秘礼物</p>
          <p>周周有惊喜哦</p>
          <p>投稿邮箱：izhoukan@itouzi.com</p>
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

    $('#interview-photo').click(e => {
      if (this.isEdit) {
        this.$target = $(e.target);
        document.getElementById('uploader').click()
      }
    })

    var length =document.styleSheets.length;
    var sheet = document.styleSheets[length - 1];
    sheet.ownerNode.setAttribute('id', 'style-weekly'); 

    setInterval(this.bindAnchorClick, 500)
  },

  methods: {
    fetch () {
      var html = localStorage.WEEKLY_HTML;
      if (html && html !== 'null') {
        document.getElementById('app-holder').innerHTML = html
      }
    },

    save () {
      if (this.isEdit) {
        this.isEdit = false;

        var html = this.getHTML();
        localStorage.WEEKLY_HTML = html;

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