<template>
  <div class="bodyBox">
    <header>
      <div class="footerBallBG">
        <div class="notStart">未开赛</div>
        <div class="football">
          <img src="../assets/images/ball.png" alt />
        </div>
        <!-- 开球 -->
        <div class="kickOff">
          <div class="kickImg">
            <img src="../assets/images/ball.png" alt />
          </div>
          <div class="shootBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="shootLocal">
              <div class="localtion">开球</div>
              <div class="name">
                <img src="../assets/images/homef.png" alt />
                <span></span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <!-- 进球 -->
        <div class="ballIn">
          <img src="../assets/images/score.gif" alt />
        </div>

        <!-- 替换 -->
        <div class="replace">
          <div class="goOut">
            <div class="goOutTop">
              <div class="goOutName">为是否</div>
              <div class="goOutF"></div>
            </div>
            <div class="goOutBot">
              <span>{{onTime}}</span>
              <span class="gt">左边锋</span>
              <img class="gimg" src="../assets/images/homef.png" alt />
              <span class="gtext">出</span>
            </div>
          </div>
          <div class="text">替换</div>
          <div class="goIn">
            <div class="goInTop">
              <div class="goInF"></div>
              <div class="goInName">鸭子</div>
            </div>
            <div class="goInBot">
              <span class="gtext">入</span>
              <img class="gimg" src="../assets/images/awayf.png" alt />
              <span>21</span>
              <span class="gt">中锋</span>
            </div>
          </div>
        </div>
        <!-- 补水时间 -->
        <div class="Hydrating">双方补水时间</div>
        <!-- 越位 -->
        <div class="offside">
          <div class="dotted">
            <div class="dotted1"></div>
            <div class="dotted2"></div>
          </div>
          <div class="num">{{onTime}}</div>
          <div class="place">
            <div class="text">越位</div>
            <div class="homeF">
              <div class="homeName">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 越位(客) -->
        <div class="offsideAway">
          <div class="dotted">
            <div class="dotted1"></div>
            <div class="dotted2"></div>
          </div>
          <div class="num">{{onTime}}</div>
          <div class="place">
            <div class="text">越位</div>
            <div class="homeF">
              <div class="homeName">
                <img src="../assets/images/awayf.png" alt />
                <span>米兰</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 红牌黄牌 -->
        <div class="redG">
          <div class="colour"></div>
          <div class="whoGet">
            <div class="isWho">红牌</div>
            <div class="name" id="redGName">
              <img src="../assets/images/homef.png" alt />
              <span></span>
            </div>
          </div>
        </div>
        <!-- 射正 -->
        <div class="ontarget">
          <div class="ontargetAnimation">
            <img src="../assets/images/ontarget.gif" alt />
          </div>
          <div class="board">
            <div class="boardNum">{{onTime}}</div>
            <div class="whoGet">
              <div class="localtion">射正</div>
              <div class="name" id="ontargetName">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 射偏 -->
        <div class="shootAside">
          <div class="shootAsideAnimation">
            <img src="../assets/images/shootAside.gif" alt class="shootImg" />
          </div>
          <div class="shootBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="shootLocal">
              <div class="localtion">射偏</div>
              <div class="name" id="shootAsideName">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 中框 -->
        <div class="inBox">
          <div class="inBoxAnimation">
            <img src="../assets/images/inbox.gif" alt class="shootImg" />
          </div>
          <div class="inBoxBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="inBoxLocal">
              <div class="localtion">中框</div>
              <div class="name" id="inBoxName">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 点球 -->
        <div class="Penalties">
          <div class="PenaltiesBgc"></div>
          <div class="PenaltiesImg">
            <img src="../assets/images/ball.png" alt />
          </div>

          <div class="PenaltiesBoard">
            <div class="boardNum">72</div>
            <div class="PenaltiesLocal">
              <div class="localtion">点球</div>
              <div class="name">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 点球(客) -->
        <div class="penaltiesAway">
          <div class="PenaltiesBgc"></div>
          <div class="PenaltiesImg">
            <img src="../assets/images/ball.png" alt />
          </div>

          <div class="PenaltiesBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="PenaltiesLocal">
              <div class="localtion">点球</div>
              <div class="name">
                <img src="../assets/images/homef.png" alt />
                <span>米兰</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 任意球 -->
        <div class="freeKick">
          <div class="freeKickTop">
            <div class="boardNum">{{onTime}}</div>
            <div class="freeLocal">
              <div class="localtion">任意球</div>
              <div class="name" id="freeKickName">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
          <div class="freeKickBom">
            <div class="freetitle">任意球</div>
            <div class="bothName">
              <img :src="homeImg" alt />
              <p>{{homeName}}</p>

              <p>{{awayName}}</p>
              <img :src="awayImg" alt />
            </div>
            <div class="ballNum">
              <p>{{homeScore}}</p>
              <img src="../assets/images/freeball.png" alt />
              <p>{{guestScore}}</p>
            </div>
          </div>
        </div>
        <!-- 受伤 -->
        <div class="bruise">
          <div class="bruiseTop">
            <div class="boardNum">{{onTime}}</div>
            <div class="bruiseLocal">
              <div class="localtion">受伤</div>
              <div class="name">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
          <div class="bruiseBom">
            <div class="bruiseImg">
              <img src="../assets/images/bruise.png" alt />
              <div class="bruiseText">
                <p>偃师号</p>
                <p>15号</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 角球 -->
        <div class="corner">
          <div class="cornerBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="cornerLocal">
              <div class="localtion">角球</div>
              <div class="name" id="cornerName">
                <img src="../assets/images/homef.png" alt />
                <span></span>
              </div>
            </div>
          </div>
          <div class="cornerImg">
            <img src="../assets/images/corner.png" alt />
          </div>
        </div>
        <!-- 进攻(主) -->
        <div class="attack">
          <div class="triangle"></div>
          <div class="offense">
            <div class="localtion">
              <p>安全区域</p>
            </div>
            <div class="offenseText">
              <img :src="homeImg" alt />
              <p>{{homeName}}</p>
            </div>
          </div>
        </div>
        <!-- 进攻(客) -->
        <div class="attackAway">
          <div class="triangle"></div>
          <div class="offense">
            <div class="localtion">
              <p>安全区域</p>
            </div>
            <div class="offenseText">
              <img :src="awayImg" alt />
              <p>{{awayName}}</p>
            </div>
          </div>
        </div>
        <!-- 危险进攻 -->
        <div class="dangerous">
          <div class="triangle"></div>
          <div class="offense">
            <div class="localtion">
              <p>危险进攻</p>
            </div>
            <div class="offenseText">
              <img :src="homeImg" alt />
              <p>{{homeName}}</p>
            </div>
          </div>
        </div>
        <!-- 危险进攻(客) -->
        <div class="dangerousAway">
          <div class="triangle"></div>
          <div class="offense">
            <div class="localtion">
              <p>危险进攻</p>
            </div>
            <div class="offenseText">
              <img :src="awayImg" alt />
              <p>{{awayName}}</p>
            </div>
          </div>
        </div>
        <!-- 球门球 -->
        <div class="goal">
          <div class="goalBgc"></div>
          <div class="goalImg">
            <img src="../assets/images/ball.png" alt />
          </div>

          <div class="PenaltiesBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="PenaltiesLocal">
              <div class="localtion">球门球</div>
              <div class="name">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 球门球(客) -->
        <div class="goalAway">
          <div class="goalAwayBgc"></div>
          <div class="goalImg">
            <img src="../assets/images/ball.png" alt />
          </div>
          <div class="PenaltiesBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="PenaltiesLocal">
              <div class="localtion">球门球</div>
              <div class="name">
                <img src="../assets/images/homef.png" alt />
                <span>广州恒大</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 界外球 -->
        <div class="outdrop">
          <div class="outdropBoard">
            <div class="boardNum">{{onTime}}</div>
            <div class="outdropLocal">
              <div class="localtion">界外球</div>
              <div class="name" id="outdropName">
                <img src="../assets/images/homef.png" alt />
                <span></span>
              </div>
            </div>
            <div class="outDropBall1">
              <img src="../assets/images/outDropBall1.png" alt />
            </div>
            <div class="outDropBall2">
              <img src="../assets/images/outDropBall1.png" alt />
            </div>
            <div class="outDropBall3">
              <img src="../assets/images/outDropBall2.png" alt />
            </div>
            <div class="outDropBall4">
              <img src="../assets/images/outDropBall2.png" alt />
            </div>
          </div>
        </div>
        <div class="ctrlBall"></div>
      </div>
      <div class="competitionTime">
        <!-- 下半场 : 70:30 -->
        <span class="competitionText"></span>
        :
        <span>70:30</span>
      </div>
      <div class="nameAndLogo">
        <div class="homeName">
          <img :src="homeImg" alt />
          <span>{{homeName}}</span>
        </div>
        <div class="scors">{{homeScore}} : {{guestScore}}</div>
        <div class="AwayName">
          <span>{{awayName}}</span>
          <img :src="awayImg" alt />
        </div>
      </div>
    </header>
    <div>
      <button @click="init">初始化</button>
      <button @click="ctrl">控球</button>
      <button @click="attack">进攻(主)</button>
      <button @click="attackAway">进攻(客)</button>
      <button @click="dangerousAttack">危险进攻</button>
      <button @click="dangerousAway">危险进攻(客)</button>
      <button @click="ballIn">进球</button>
      <button @click="autoBall(0)">任意球</button>
      <button @click="DAutoBall">危险任意球</button>
      <button @click="offside">越位</button>
      <button @click="offsideAway">越位(客)</button>
      <button @click="DBallAll(0)">球门球</button>
      <button @click="cornerBall(1)">角球</button>
      <button @click="lineBall(0,4)">界外球</button>
      <button @click="star(1)">开球</button>
      <button @click="defaultInfo">未开赛</button>
      <button @click="showMsg">事件信息</button>
      <button @click="shotIn(0)">射正</button>
      <button @click="stopIt">射门被挡</button>
      <button @click="shotOut(0)">射偏</button>
      <button @click="shotLost(0)">中框</button>
      <button @click="foul('red',1)">红牌黄牌</button>
      <button @click="pointBall">点球</button>
      <button @click="penaltiesAway">点球(客)</button>
      <button @click="ballIn">点球进球</button>
      <button @click="shotOut">失射点球</button>
      <button @click="replace">替换</button>
      <button @click="Hydrating">补水时间</button>
      <button @click="bruise">受伤</button>
    </div>
  </div>
</template>

<script>
import { parseQuery, device } from "../common/utils";
import $axios from "../common/api";
import $ from "jquery";
export default {
  data() {
    return {
      matchID: null, //对阵ID
      // postionID: null, //事件位置ID
      ateamId: null, //主客队标识 [0,1] 对应主队,客队
      homeScore: null, //主队比分
      guestScore: null, //客队比分
      direction: null, // 发球方向 [0,1,2,3,] 对应左上,右上,右下,左下
      cardType: null, //  ["red","yellow"] 对应 红牌,黄牌
      teamName: null, //  队名
      htmlstr: null, // HTML代码或文本
      fbData: {},
      homeName: "", //主队名
      awayName: "", //客队名
      homeImg: null, //主队旗帜
      awayImg: null, //客队旗帜
      homeId: null, //主队id
      awayId: null, //客队id
      onTime: null, //动画发生时间
      widthNum :null,
      heightNum:null,
      imgTop:null,
      imgLeft:null
    };
  },
  created() {
    this.init();
    this.getFbData();
    // var timer = null;
    // timer = setInterval(() => {
    //     this.init()
    //     this.getFbData();
    //   }, 40000);
  },
  methods: {
    getFbData() {
      $axios
        .getRequest("/btAnimation/selectBfAnimation?matchId=1744270")
        .then(res => {
          if (res.status == 200) {
            console.log(res);
            console.log(res.data);
            res.data.forEach(t => {
              this.matchID = t.matchId; //比赛id
              this.homeScore = t.homeScore; //主队比分
              this.guestScore = t.awayScore; //客队比分
              this.homeName = t.homeName; // 主队名
              this.awayName = t.awayName; //客队名
              this.homeImg = t.homeLogo; //主队logo
              this.awayImg = t.awayLogo; //客队logo
              this.homeId = t.homeId; //主队id
              this.awayId = t.awayId; //主队id
              this.ateamId = t.ateamId; //球队情况id
              // this.postionID = t.atype //动画类型
              this.direction = t.local; //动画位置
              this.onTime = t.onTime; //动画发生时间
              //事件信息
              var flashMsg = new Array(39);
              flashMsg[2] = "上半场结束";
              flashMsg[3] = "下半场开始";
              flashMsg[4] = "完场";
              flashMsg[5] = "受伤";
              flashMsg[6] = "加时上半场";
              flashMsg[7] = "加时半场";
              flashMsg[8] = "加时下半场";
              flashMsg[9] = "加时完场";
              flashMsg[10] = "点球决胜";
              flashMsg[30] = "替补";
              flashMsg[36] = "射失点球";
              flashMsg[37] = "犯规";
              flashMsg[38] = "进球无效";

              var teamType = t.ateamId == t.homeId ? 0 : 1;
              var cardType = t.atype == 25 ? "red" : "yellow";
              if (!t.matchId) {
                this.Toast.fail("无法获取比赛ID");
                return;
              }
              //比赛状态
              if (t.status == 0) {
                //未开赛
                this.defaultInfo();
                $(".competitionText").html("未开赛");
              } else if (t.status == 1) {
                //上半场
                $(".competitionText").html("上半场");
              } else if (t.status == 2) {
                //中场
                $(".competitionText").html("中场");
              } else if (t.status == 3) {
                //下半场
                $(".competitionText").html("下半场");
              } else if (t.status == 4) {
                //加时
              } else if (t.status == 5) {
                //点球
              } else if (t.status == -1) {
                //完场
                $(".notStart").html("完场");
                $(".competitionText").html("完场");
                this.defaultInfo();
              } else if (t.status == -10) {
                //取消
                $(".notStart").html("取消");
                $(".competitionText").html("取消");
              } else if (t.status == -11) {
                //待定
              } else if (t.status == -12) {
                //腰斩
              } else if (t.status == -13) {
                //中断
                $(".notStart").html("中断");
                $(".competitionText").html("中断");
              } else if (t.status == -14) {
                //推迟
                $(".notStart").html("推迟");
                $(".competitionText").html("推迟");
              } else {
                //************动画类型**************
              }
              //动画类型
              if (t.atype == 1) {
                //开球
                this.star(teamType);
              } else if (t.atype == 2) {
                //上半场结束
              } else if (t.atype == 3) {
                // 下半场开始
              } else if (t.atype == 4) {
                //完场
              } else if (t.atype == 5) {
                //受伤
                this.bruise();
              } else if (t.atype == 6) {
                //加时上半场
              } else if (t.atype == 7) {
                //加时半场
              } else if (t.atype == 8) {
                //加时下半场
              } else if (t.atype == 9) {
                //加时完场
              } else if (t.atype == 10) {
                //点球决胜
              } else if (t.atype == 20) {
                //危险进攻
                this.dangerousAll(teamType);
              } else if (t.atype == 21) {
                //进攻
                this.attackAll(teamType);
              } else if (t.atype == 22) {
                //控球
              } else if (t.atype == 23) {
                //进球
                this.ballIn();
              } else if (t.atype == 24) {
                //黄牌
                this.foul(cardType, teamType);
              } else if (t.atype == 25) {
                //红牌
                this.foul(cardType, teamType);
              } else if (t.atype == 26) {
                //球门球
                this.DBallAll(teamType);
              } else if (t.atype == 27) {
                //点球
                this.pointBallAll(teamType);
              } else if (t.atype == 28) {
                //射正球门
                this.shotIn(teamType);
              } else if (t.atype == 29) {
                //射偏球门
                this.shotOut(teamType);
              } else if (t.atype == 30) {
                //替补
                this.replace();
              } else if (t.atype == 31) {
                //越位
                this.offsideAll(teamType);
              } else if (t.atype == 32) {
                //任意球
                this.autoBall(teamType);
              } else if (t.atype == 33) {
                //界外球
                this.lineBall(teamType, t.local);
              } else if (t.atype == 34) {
                //角球
                this.cornerBall(teamType);
              } else if (t.atype == 35) {
                //点球进球
                this.ballIn(teamType);
              } else if (t.atype == 36) {
                //失射点球
                this.shotOut(teamType);
              } else if (t.atype == 37) {
                //犯规
                $(".notStart").html("犯规");
              } else if (t.atype == 38) {
                //进球无效
                $(".notStart").html("进球无效");
              } else if (t.atype == 39) {
                //危险任意球
                this.autoBall(teamType);
              } else if (t.atype == 40) {
                //球门被挡
                this.shotIn(teamType);
              } else if (t.atype == 41) {
                //射中门框
                this.shotLost(teamType);
              } else if (t.atype == 42) {
                //伤停补时
                var msg =
                  t.onTime > 0 ? "补时 :" + t.onTime + " 分钟" : "伤停补时";
                showMsg(msg);
              }
            });
          } else {
            this.Toast.fail("数据获取失败");
          }
        });
    },
    //初始化
    init(matchID) {
      //进攻(主)
      $(".attack").fadeOut();
      //进球
      $(".ballIn").fadeOut();
      //进攻(客)
      $(".attackAway").fadeOut();
      //危险进攻(主)
      $(".dangerous").fadeOut();
      //危险进攻(客)
      $(".dangerousAway").fadeOut();
      //任意球
      $(".freeKick").fadeOut();
      //受伤
      $(".bruise").fadeOut();
      //越位(主)
      $(".offside").fadeOut();
      //越位(客)
      $(".offsideAway").fadeOut();
      //角球
      $(".corner").fadeOut();
      //替换
      $(".replace").fadeOut();
      //开球
      $(".kickOff").fadeOut();
      //未开赛
      $(".notStart").fadeOut();
      //补水时间
      $(".Hydrating").fadeOut();
      //射正
      $(".ontarget").fadeOut();
      //射偏
      $(".shootAside").fadeOut();
      //中框
      $(".inBox").fadeOut();
      //红牌黄牌
      $(".redG").fadeOut();
      //点球(主)
      $(".Penalties").fadeOut();
      //点球(客)
      $(".penaltiesAway").fadeOut();
    },
    //控球
    ctrl(matchID, type) {
      this.widthNum = Math.round(
        5 + Math.random() * $(".footerBallBG").width() - 5
      );
      this.heightNum = Math.round(
        5 + Math.random() * $(".footerBallBG").height() - 5
      );
      console.log( this.heightNum,this.widthNum)

      this.imgTop = $(".football img").css("top")
      this.imgLeft =  $(".football img").css("Left") 
      console.log( this.imgTop, this.imgLeft)

     
      $("svg line").css({x1:this.imgTop,y1: this.imgLeft ,x2: this.heightNum , y2:this.widthNum })
      $(".football img").animate({ top: this.heightNum, left: this.widthNum });
    },

    //js直线
    //    drawLine(x1,y1,x2,y2,color,size,style){
    //     //x1=200,x2=500,y1=100,y2=400,color="#000";
    //       var   i;
    //       var   r=Math.floor(Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)));
    //       var   theta=Math.atan((x2-x1)/(y2-y1));
    //       if(((y2-y1) <0&&(x2-x1)> 0)||((y2-y1) <0&&(x2-x1) <0))
    //           theta=Math.PI+theta;
    //       var   dx=Math.sin(theta);//alert(dx)
    //       var   dy=Math.cos(theta);
    //       for(i=0;i <r;i++){
    //           switch(style){
    //               case   0:
    //                   this.drawDot(x1+i*dx,y1+i*dy,color,size);
    //                   break;
    //               case   1:
    //                   i+=size*2;
    //                   this.drawDot(x1+i*dx,y1+i*dy,color,size);
    //                   break;
    //               case   2:
    //                   if(Math.floor(i/4/size)%2==0){
    //                       this.drawDot(x1+i*dx,y1+i*dy,color,size);
    //                   }
    //                   else{
    //                           i+=size*2;
    //                           this.drawDot(x1+i*dx,y1+i*dy,color,size);
    //                   }
    //                   break;
    //               default:
    //                   this.drawDot(x1+i*dx,y1+i*dy,color,size);
    //                   break;
    //           }
    //       }
    //   },

    //  drawDot(x,y,color,size){
    //   $(".football").html( " <table   border= '0 '   cellspacing=0   cellpadding=0> <tr> <td   style= 'position:   absolute;   left:   "+(x)+ ";   top:   "+(y)+ ";background-color:   "+color+ " '   width= "+size+ "   height= "+size+ "> </td> </tr> </table> ")
    // } ,

    //进攻
    attackAll(type) {
      if (type == 0) {
        this.attack();
      } else {
        this.attackAway();
      }
    },
    //进攻(主)
    attack() {
      $(".attack").fadeIn(1000);
    },
    //进攻客
    attackAway() {
      $(".attackAway").fadeIn(1000);
    },
    //危险进攻All
    dangerousAll(type) {
      if (type == 0) {
        this.dangerousAttack();
      } else {
        this.dangerousAway();
      }
    },
    //危险进攻(主)
    dangerousAttack() {
      $(".dangerous").fadeIn(1000);
      setTimeout(() => {
        $(".dangerous").fadeOut(1000);
      }, 2000);
    },
    //危险进攻(客)
    dangerousAway() {
      $(".dangerousAway").fadeIn(1000);
      setTimeout(() => {
        $(".dangerousAway").fadeOut(1000);
      }, 2000);
    },
    //进球
    ballIn() {
      $(".ballIn").fadeIn();
    },
    //任意球
    autoBall(type) {
      if (type == 0) {
        $("#freeKickName img").attr("src", this.homeImg);
        $("#freeKickName span").html(this.homeName);
        $(".freeKick").fadeIn();
      } else {
        $("#freeKickName img").attr("src", this.awayImg);
        $("#freeKickName span").html(this.awayName);
        $(".freeKick").fadeIn();
      }
      $(".freeKick").fadeIn(1000);
      setTimeout(() => {
        $(".freeKick").fadeOut(1000);
      }, 2000);
    },
    //危险任意球
    DAutoBall(matchID, type) {},
    //受伤
    bruise(matchID, type) {
      $(".bruise").fadeIn(1000);
      setTimeout(() => {
        $(".bruise").fadeOut(1000);
      }, 2000);
    },
    //越位All
    offsideAll(type) {
      if (type == 0) {
        this.offside();
      } else {
        this.offsideAway();
      }
    },
    //越位
    offside() {
      $(".offside").fadeIn(1000);
      setTimeout(() => {
        $(".offside").fadeOut(1000);
      }, 2000);
    },
    //越位客
    offsideAway() {
      $(".offsideAway").fadeIn(1000);
      setTimeout(() => {
        $(".offsideAway").fadeOut(1000);
      }, 2000);
    },
    //球门球All
    DBallAll(type) {
      if (type == 0) {
        this.DBall();
      } else {
        this.goalAway();
      }
    },
    //球门球主
    DBall(type) {
      $(".goal").fadeToggle();
    },
    //球门球(客)
    goalAway(type) {
      $(".goalAway").fadeToggle();
    },
    //角球
    cornerBall(teamType) {
      if (teamType == 0) {
        $("#cornerName span").html(this.homeName);
        $("#cornerName img").attr("src", this.homeImg);
        $(".corner").fadeIn();
      } else {
        $("#cornerName span").html(this.awayName);
        $("#cornerName img").attr("src", this.awayImg);
        $(".corner").fadeIn();
      }
    },
    //界外球
    lineBall(teamType, local) {
      if (local == 1) {
        if (teamType == 0) {
          $("#outdropName span").html(this.homeName);
          $("#outdropName img").attr("src", this.homeImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall1").fadeToggle();
        } else {
          $("#outdropName span").html(this.awayName);
          $("#outdropName img").attr("src", this.awayImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall1").fadeToggle();
        }
      } else if (local == 2) {
        if (teamType == 0) {
          $("#outdropName span").html(this.homeName);
          $("#outdropName img").attr("src", this.homeImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall2").fadeToggle();
        } else {
          $("#outdropName span").html(this.awayName);
          $("#outdropName img").attr("src", this.awayImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall2").fadeToggle();
        }
      } else if (local == 3) {
        if (teamType == 0) {
          $("#outdropName span").html(this.homeName);
          $("#outdropName img").attr("src", this.homeImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall3").fadeToggle();
        } else {
          $("#outdropName span").html(this.awayName);
          $("#outdropName img").attr("src", this.awayImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall3").fadeToggle();
        }
      } else if (local == 4) {
        if (teamType == 0) {
          $("#outdropName span").html(this.homeName);
          $("#outdropName img").attr("src", this.homeImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall4").fadeToggle();
        } else {
          $("#outdropName span").html(this.awayName);
          $("#outdropName img").attr("src", this.awayImg);
          $(".outdrop").fadeToggle();
          $(".outDropBall4").fadeToggle();
        }
      }
    },
    //替换
    replace() {
      $(".replace").fadeIn(1000);
      setTimeout(() => {
        $(".replace").fadeOut();
      }, 3000);
    },
    //开球
    star(type) {
      if (type == 0) {
        $(".name img").attr("src", this.homeImg);
        $(".name span").html(this.homeName);
        $(".kickOff").fadeIn(1000);
      } else {
        $(".name img").attr("src", this.awayImg);
        $(".name span").html(this.awayName);
        $(".kickOff").fadeIn(1000);
      }
    },
    //未开赛
    defaultInfo() {
      $(".notStart").fadeIn();
    },
    //补水时间
    Hydrating(matchID) {
      $(".Hydrating").fadeToggle(1000);
    },
    //事件信息
    showMsg(htmlstr) {
      $(".notStart").html(htmlstr);
    },
    //射正
    shotIn(type) {
      if (type == 0) {
        $("#ontargetName span").html(this.homeName);
        $("#ontargetName img").attr("src", this.homeImg);
        $(".ontarget").fadeIn();
      } else {
        $("#ontargetName span").html(this.awayName);
        $("#ontargetName img").attr("src", this.awayImg);
        $(".ontarget").fadeIn();
      }
    },
    //射门被挡
    stopIt(type) {},
    //射偏
    shotOut(type) {
      if (type == 0) {
        $("#shootAsideName span").html(this.homeName);
        $("#shootAsideName img").attr("src", this.homeImg);
        $(".shootAside").fadeIn();
      } else {
        $("#shootAsideName span").html(this.awayName);
        $("#shootAsideName img").attr("src", this.awayImg);
        $(".shootAside").fadeIn();
      }
    },
    //中框
    shotLost(type) {
      if (type == 0) {
        $("#inBoxName span").html(this.homeName);
        $("#inBoxName img").attr("src", this.homeImg);
        $(".inBox").fadeIn();
      } else {
        $("#inBoxName span").html(this.awayName);
        $("#inBoxName img").attr("src", this.awayImg);
        $(".inBox").fadeIn();
      }
    },
    //红牌 黄牌
    foul(cardType, type) {
      if (cardType == "red") {
        if (type == 0) {
          $(".colour").css({ "background-color": "#FF4B1AFF" });
          $(".isWho").html("红牌");
          $("#redGName span").html(this.homeName);
          $("#redGName img").attr("src", this.homeImg);
          $(".redG").fadeIn();
        } else {
          $(".redG").fadeIn(1000);
          $(".colour").css({ "background-color": "#FF4B1AFF" });
          $(".isWho").html("红牌");
          $("#redGName span").html(this.awayName);
          $("#redGName img").attr("src", this.awayImg);
        }
      } else if (cardType == "green") {
        if (type == 0) {
          $(".redG").fadeIn(1000);
          $(".colour").css({ "background-color": "#F5E123FF" });
          $(".isWho").html("黄牌");
          $("#redGName span").html(this.homeName);
          $("#redGName img").attr("src", this.homeImg);
        } else {
          $(".redG").fadeIn(1000);
          $(".colour").css({ "background-color": "#F5E123FF" });
          $(".isWho").html("黄牌");
          $("#redGName span").html(this.awayName);
          $("#redGName img").attr("src", this.awayImg);
        }
      }
    },
    //点球All
    pointBallAll(type) {
      if (type == 0) {
        this.pointBall();
      } else {
        this.penaltiesAway();
      }
    },
    //点球
    pointBall() {
      $(".Penalties").fadeIn(1000);
      setTimeout(() => {
        $(".Penalties").fadeOut(1000);
      }, 2000);
    },
    //点球(客)
    penaltiesAway() {
      $(".penaltiesAway").fadeIn(1000);
      setTimeout(() => {
        $(".penaltiesAway").fadeOut(1000);
      }, 2000);
    },
    //点球进球 注:此方法只适用于显示点球动画后调用.
    pointBallIn(matchID, type, homeScore, guestScore) {},
    //射失点球 注:此方法只适用于显示点球动画后调用.
    showPointBallMsg(matchID, msgString) {}
  }
};
</script>

<style lang="less" scope>
.bodyBox {
  font-size: 0.2rem;
  header {
    background-color: #00b24e;
    padding: 0.2rem 0.7rem 0.3rem 0.7rem;
    margin: 0 auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .footerBallBG {
      margin: 0 auto;
      width: 6.1rem;
      height: 3.64rem;
      background: url("../assets/images/bg2x.png") no-repeat;
      background-size: 6.1rem 3.64rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .football {
        width: 100%;
        height: 100%;
        svg{
          width: 100%;
          height: 100%;
        }
        img {
          width: 0.2rem;
          height: 0.2rem;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      //未开赛
      .notStart {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.68rem;
        line-height: 0.68rem;
        text-align: center;
        background-color: #000;
        color: #fff;
        margin-top: 1.48rem;
        display: none;
      }
      //补水时间
      .Hydrating {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.68rem;
        line-height: 0.68rem;
        text-align: center;
        background-color: #000;
        color: #fff;
        margin-top: 1.48rem;
        display: none;
      }
      //开球
      .kickOff {
        margin-top: 0.6rem;
        display: none;
        .kickImg {
          width: 1.58rem;
          height: 1.1rem;
          margin: auto;
          margin-bottom: 0.2rem;
          img {
            width: 0.4rem;
            height: 0.4rem;
            margin-left: 0.6rem;
            margin-top: 0.5rem;
            position: absolute;
          }
        }
        .shootBoard {
          overflow: hidden;
          background-color: #333333ff;
          padding: 0.05rem;

          img {
            width: 0.16rem;
            height: 0.22rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .shootLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              img {
                margin-left: 0.1rem;
              }
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      .ballIn {
        display: none;
      }
      // 替换
      .replace {
        font-size: 0.24rem;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: space-around;
        justify-content: center;
        display: none;
        .goOut {
          width: 3.62rem;
          height: 0.68rem;
          background: url("../assets/images/goOut.png") no-repeat;
          background-size: contain;
          padding-left: 0.1rem;
          .goOutTop {
            color: #fff;
            font-size: 0.24rem;
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .goOutF {
              width: 0.32rem;
              height: 0.24rem;
              background: url("../assets/images/goout1.png") no-repeat;
              background-size: contain;
              margin-right: 0.5rem;
            }
          }
          .goOutBot {
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            // justify-content: center;
            color: #999999ff;
            line-height: 0.3rem;
            font-size: 0.24rem;
            img {
              width: 0.16rem;
              height: 0.2rem;
              margin-left: 0.2rem;
            }
            .gt {
              margin-left: 0.05rem;
            }
            .gtext {
              margin-left: 1.4rem;
            }
          }
        }
        .goIn {
          width: 3.62rem;
          height: 0.68rem;
          background: url("../assets/images/goOut.png") no-repeat;
          background-size: contain;
          .goInTop {
            color: #fff;
            font-size: 0.24rem;
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-right: 0.1rem;
            .goInF {
              width: 0.32rem;
              height: 0.24rem;
              background: url("../assets/images/goin1.png") no-repeat;
              background-size: contain;
              margin-left: 0.5rem;
            }
          }
          .goInBot {
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            color: #999999ff;
            line-height: 0.3rem;
            font-size: 0.24rem;
            padding-right: 0.05rem;
            img {
              width: 0.16rem;
              height: 0.2rem;
              margin-right: 0.1rem;
            }
            .gt {
              margin-right: 0.05rem;
              margin-left: 0.05rem;
            }
            .gtext {
              margin-right: 1.65rem;
            }
          }
        }
        .text {
          margin-top: 0.8rem;
          width: 100%;
          height: 0.68rem;
          background-color: #333333ff;
          line-height: 0.68rem;
          color: #fff;
          text-align: center;
        }
        .goIn {
          margin-top: 0.8rem;
          margin-left: 2.4rem;
          width: 3.62rem;
          height: 0.68rem;
          background: url("../assets/images/goIN.png") no-repeat;
          background-size: contain;
        }
      }
      //越位(主)
      .offside {
        width: 1.88rem;
        height: 0.68rem;
        background-color: #333333ff;
        color: #fff;
        padding: 0.05rem;
        display: none;
        .dotted {
          position: absolute;
          top: 0;
          right: 0;
          width: 0.7rem;
          height: 3.64rem;
          border-left: 2px solid #f5e123ff;
          // position: relative;
          .dotted1 {
            width: 0.28rem;
            height: 0.28rem;
            background-color: #f5e123ff;
            border-radius: 50%;
            margin-top: 0.54rem;
            margin-left: -0.35rem;
          }
          .dotted2 {
            width: 0.28rem;
            height: 0.28rem;
            background-color: #f5e123ff;
            border-radius: 50%;
            margin-top: 2.1rem;
          }
        }
        img {
          width: 0.16rem;
          height: 0.22rem;
        }
        .num {
          width: 0.45rem;
          height: 0.45rem;
          float: left;
          background-color: #fff;
          color: #000;
          text-align: center;
          line-height: 0.45rem;
          border-radius: 2px;
          font-size: 0.25rem;
          margin-top: 0.1rem;
        }
        .place {
          float: right;
          .text {
            text-align: right;
            font-size: 0.2rem;
          }
          .homeF {
            .homeName {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
              }
            }
          }
        }
      }

      //越位(客)
      .offsideAway {
        width: 1.88rem;
        height: 0.68rem;
        background-color: #333333ff;
        color: #fff;
        padding: 0.05rem;
        display: none;
        .dotted {
          position: absolute;
          top: 0;
          left: 0.75rem;
          width: 0.7rem;
          height: 3.64rem;
          border-left: 2px solid #f5e123ff;
          // position: relative;
          .dotted1 {
            width: 0.28rem;
            height: 0.28rem;
            background-color: #f5e123ff;
            border-radius: 50%;
            margin-top: 0.54rem;
            margin-left: -0.35rem;
          }
          .dotted2 {
            width: 0.28rem;
            height: 0.28rem;
            background-color: #f5e123ff;
            border-radius: 50%;
            margin-top: 2.1rem;
          }
        }
        img {
          width: 0.16rem;
          height: 0.22rem;
        }
        .num {
          width: 0.45rem;
          height: 0.45rem;
          float: left;
          background-color: #fff;
          color: #000;
          text-align: center;
          line-height: 0.45rem;
          border-radius: 2px;
          font-size: 0.25rem;
          margin-top: 0.1rem;
        }
        .place {
          float: right;
          .text {
            text-align: right;
            font-size: 0.2rem;
          }
          .homeF {
            .homeName {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
              }
            }
          }
        }
      }
      //红牌黄牌
      .redG {
        background-color: #333333ff;
        color: #fff;
        padding: 0.05rem;
        display: none;
        img {
          width: 0.16rem;
          height: 0.22rem;
          margin-left: 0.1rem;
        }
        .colour {
          width: 0.45rem;
          height: 0.45rem;
          float: left;
          margin-top: 0.1rem;
          font-size: 0.25rem;
          background-color: #ff4b1aff;
          border-radius: 2px;
        }
        .whoGet {
          float: right;
          .isWho {
            text-align: right;
            font-size: 0.2rem;
          }
          .name {
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            span {
              color: #999;
              margin-left: 0.1rem;
            }
          }
        }
      }
      //射正
      .ontarget {
        margin-top: 1rem;
        display: none;
        .ontargetAnimation {
          width: 1.58rem;
          height: 1.1rem;
          margin: auto;
          margin-bottom: 0.2rem;
          img {
            width: 2rem;
            height: 2rem;
            margin-left: -0.2rem;
            margin-top: -0.8rem;
            position: absolute;
          }
        }
        .board {
          overflow: hidden;
          background-color: #333333ff;
          padding: 0.05rem;
          img {
            width: 0.16rem;
            height: 0.22rem;
            margin-left: 0.1rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .whoGet {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //射偏
      .shootAside {
        margin-top: 1rem;
        display: none;
        .shootAsideAnimation {
          width: 1.58rem;
          height: 1.1rem;
          margin: auto;
          margin-bottom: 0.2rem;
          img {
            width: 2rem;
            height: 2rem;
            margin-left: -0.28rem;
            margin-top: -0.8rem;
            position: absolute;
          }
        }
        .shootBoard {
          overflow: hidden;
          background-color: #333333ff;
          padding: 0.05rem;
          img {
            width: 0.16rem;
            height: 0.22rem;
            margin-left: 0.1rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .shootLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //中框
      .inBox {
        margin-top: 1rem;
        display: none;
        .inBoxAnimation {
          width: 1.58rem;
          height: 1.1rem;
          margin: auto;
          margin-bottom: 0.2rem;
          img {
            width: 2rem;
            height: 2rem;
            margin-left: -0.2rem;
            margin-top: -0.8rem;
            position: absolute;
          }
        }
        .inBoxBoard {
          overflow: hidden;
          background-color: #333333ff;
          padding: 0.05rem;

          img {
            width: 0.16rem;
            height: 0.22rem;
            margin-left: 0.1rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .inBoxLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //点球
      .Penalties {
        display: none;
        margin-left: 2.3rem;
        position: relative;
        .PenaltiesBgc {
          width: 0.35rem;
          height: 0.76rem;
          background-color: #f5e12361;
          position: absolute;
          right: -0.8rem;
          top: 0;
        }
        .PenaltiesImg {
          // width: 1.58rem;
          // height: 1.1rem;
          position: relative;
          img {
            width: 0.18rem;
            height: 0.18rem;
            margin-right: 0rem;
            margin-top: 0rem;
            position: absolute;
            right: -0.35rem;
            top: 0.3rem;
          }
        }
        .PenaltiesBoard {
          width: 1.88rem;
          height: 0.68rem;
          background-color: #333333ff;
          padding: 0.05rem;

          img {
            width: 0.16rem;
            height: 0.22rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .PenaltiesLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //点球(客)
      .penaltiesAway {
        display: none;
        margin-left: -2.3rem;
        position: relative;
        .PenaltiesBgc {
          width: 0.32rem;
          height: 0.76rem;
          background-color: #f5e12361;
          position: absolute;
          right: 2.48rem;
          top: 0;
        }
        .PenaltiesImg {
          // width: 1.58rem;
          // height: 1.1rem;
          position: relative;
          img {
            width: 0.18rem;
            height: 0.18rem;
            margin-right: 0rem;
            margin-top: 0rem;
            position: absolute;
            right: 2.2rem;
            top: 0.3rem;
          }
        }
        .PenaltiesBoard {
          width: 1.88rem;
          height: 0.68rem;
          background-color: #333333ff;
          padding: 0.05rem;

          img {
            width: 0.16rem;
            height: 0.22rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .PenaltiesLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //任意球
      .freeKick {
        // width: 2.2rem;
        // height: 2.2rem;
        padding: 0.1rem;
        background-color: #333333ff;
        display: none;
        .freeKickTop {
          color: #fff;
          overflow: hidden;
          border-bottom: 2px solid #fff;
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
            color: #000;
          }
          .freeLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              img {
                width: 0.16rem;
                height: 0.2rem;
              }
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
        .freeKickBom {
          .freetitle {
            text-align: center;
            color: #999999ff;
          }
          .bothName {
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            color: #fff;
            img {
              width: 0.26rem;
              height: 0.34rem;
            }
            p {
              font-size: 0.1rem;
              margin-left: 0.1rem;
              margin-right: 0.1rem;
            }
          }
          .ballNum {
            display: flex;
            flex: 1;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            color: #fff;
            margin-top: 0.2rem;
            img {
              width: 0.52rem;
              height: 0.52rem;
            }
          }
        }
      }
      //受伤
      .bruise {
        width: 2.2rem;
        height: 2.2rem;
        padding: 0.1rem;
        background-color: #333333ff;
        display: none;
        .bruiseTop {
          color: #fff;
          overflow: hidden;
          border-bottom: 2px solid #fff;
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
            color: #000;
          }
          .bruiseLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              img {
                width: 0.16rem;
                height: 0.2rem;
              }
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
        .bruiseBom {
          .bruiseImg {
            display: flex;
            flex: 1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            margin-top: 0.2rem;
            font-size: 0.2rem;
            img {
              width: 0.4rem;
              height: 0.52rem;
            }
            .bruiseText {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              margin-top: 0.2rem;
              p {
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //角球
      .corner {
        background-color: #00b24e;
        display: none;
        .cornerBoard {
          width: 2.5rem;
          background-color: #333333ff;
          padding: 0.05rem;
          margin-left: -0.5rem;
          display: flex;
          flex: 1;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          img {
            width: 0.16rem;
            height: 0.22rem;
            margin-left: 0.1rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .cornerLocal {
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
        .cornerImg {
          img {
            width: 6.26rem;
            height: 2.82rem;
          }
        }
      }
      //进攻(主)
      .attack {
        width: 3rem;
        height: 3.64rem;
        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0.54) 0%,
          rgba(0, 0, 0, 0.14) 100%
        );
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-left: -2.9rem;
        display: none;
        .triangle {
          border-top: 1.8rem solid transparent;
          border-bottom: 1.8rem solid transparent;
          border-left: 0.3rem solid #0000008a;
          position: absolute;
          top: 0;
          right: 2.7rem;
        }
        .offense {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1.4rem;
          .offenseText {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            img {
              width: 0.3rem;
              height: 0.4rem;
            }
          }
        }
      }
      //进攻(客)
      .attackAway {
        width: 3rem;
        height: 3.64rem;
        background: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0.54) 100%,
          rgba(0, 0, 0, 0.14) 0%
        );
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right: -2.9rem;
        display: none;
        .triangle {
          border-top: 1.8rem solid transparent;
          border-bottom: 1.8rem solid transparent;
          border-right: 0.3rem solid #0000008a;
          position: absolute;
          top: 0;
          right: 3.1rem;
        }
        .offense {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1.4rem;
          .offenseText {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            img {
              width: 0.3rem;
              height: 0.4rem;
            }
          }
        }
      }
      //危险进攻
      .dangerous {
        width: 4.4rem;
        height: 3.64rem;
        background: linear-gradient(
          270deg,
          rgba(245, 225, 35, 0.63) 0%,
          rgba(0, 0, 0, 0.14) 100%
        );
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-left: -1.5rem;
        display: none;
        .triangle {
          border-top: 1.8rem solid transparent;
          border-bottom: 1.8rem solid transparent;
          border-left: 0.3rem solid #f5e123a1;
          position: absolute;
          top: 0;
          right: 1.3rem;
        }
        .offense {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 2.8rem;
          margin-top: 1.4rem;
          .offenseText {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            img {
              width: 0.3rem;
              height: 0.4rem;
            }
          }
        }
      }
      //危险进攻(客)
      .dangerousAway {
        width: 4.4rem;
        height: 3.64rem;
        background: linear-gradient(
          -270deg,
          rgba(245, 225, 35, 0.63) 0%,
          rgba(0, 0, 0, 0.14) 100%
        );
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-left: 1.5rem;
        display: none;
        .triangle {
          border-top: 1.8rem solid transparent;
          border-bottom: 1.8rem solid transparent;
          border-right: 0.3rem solid #f5e123a1;
          position: absolute;
          top: 0;
          right: 4.5rem;
        }
        .offense {
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-right: 2.8rem;
          margin-top: 1.4rem;
          .offenseText {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            img {
              width: 0.3rem;
              height: 0.4rem;
            }
          }
        }
      }
      //球门球
      .goal {
        display: none;
        margin-left: 2.3rem;
        position: relative;
        .goalBgc {
          border-top: 0.15rem solid transparent;
          border-bottom: 0.15rem solid transparent;
          border-left: 1.28rem solid rgba(51, 51, 51, 0.3);
          position: absolute;
          top: 0.25rem;
          right: 1rem;
        }
        .goalImg {
          // width: 1.58rem;
          // height: 1.1rem;
          position: relative;
          img {
            width: 0.18rem;
            height: 0.18rem;
            position: absolute;
            right: 0.9rem;
            top: 0.3rem;
          }
        }
        .PenaltiesBoard {
          width: 1.88rem;
          height: 0.68rem;
          background-color: #333333ff;
          padding: 0.05rem;
          margin-right: 2.5rem;
          img {
            width: 0.16rem;
            height: 0.22rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .PenaltiesLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //球门球(客)
      .goalAway {
        display: none;
        margin-left: 2.5rem;
        position: relative;
        .goalAwayBgc {
          border-top: 0.15rem solid transparent;
          border-bottom: 0.15rem solid transparent;
          border-right: 1.28rem solid rgba(51, 51, 51, 0.3);
          position: absolute;
          top: 0.25rem;
          left: -1.5rem;
        }
        .goalImg {
          // width: 1.58rem;
          // height: 1.1rem;
          position: relative;
          img {
            width: 0.18rem;
            height: 0.18rem;
            position: absolute;
            left: -1.5rem;
            top: 0.3rem;
          }
        }
        .PenaltiesBoard {
          width: 1.88rem;
          height: 0.68rem;
          background-color: #333333ff;
          padding: 0.05rem;
          margin-right: 2.5rem;
          img {
            width: 0.16rem;
            height: 0.22rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .PenaltiesLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
      }
      //界外球
      .outdrop {
        display: none;
        .outdropBoard {
          overflow: hidden;
          background-color: #333333ff;
          padding: 0.05rem;

          img {
            width: 0.16rem;
            height: 0.22rem;
          }
          .boardNum {
            width: 0.45rem;
            height: 0.45rem;
            float: left;
            margin-top: 0.1rem;
            font-size: 0.25rem;
            background-color: #fff;
            border-radius: 2px;
            text-align: center;
            line-height: 0.45rem;
          }
          .outdropLocal {
            float: right;
            .localtion {
              text-align: right;
              font-size: 0.2rem;
              color: #fff;
            }
            .name {
              display: flex;
              flex: 1;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              img {
                margin-left: 0.1rem;
              }
              span {
                color: #999;
                margin-left: 0.1rem;
              }
            }
          }
        }
        .outDropBall1 {
          display: none;
          img {
            width: 0.74rem;
            height: 0.98rem;
          }
          position: absolute;
          top: 0;
          left: 1.34rem;
        }
        .outDropBall2 {
          display: none;
          img {
            width: 0.74rem;
            height: 0.98rem;
          }
          position: absolute;
          top: 0;
          right: 1.34rem;
        }
        .outDropBall3 {
          display: none;
          img {
            width: 0.74rem;
            height: 0.98rem;
          }
          position: absolute;
          bottom: 0;
          right: 1.34rem;
        }
        .outDropBall4 {
          display: none;
          img {
            width: 0.74rem;
            height: 0.98rem;
          }
          position: absolute;
          bottom: 0;
          left: 1.34rem;
        }
      }
    }

    .competitionTime {
      background-color: #2b3534;
      color: #f5e123;
      font-size: 0.2rem;
      margin-top: 0.1rem;
      padding: 0.05rem;
    }
    .nameAndLogo {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      font-size: 0.24rem;
      .scors {
        width: 1rem;
        margin-left: 0.1rem;
        text-align: center;
      }
      img {
        width: 0.3rem;
        height: 0.4rem;
      }
      .homeName {
        width: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-left: 0.1rem;
        span {
          margin-left: 0.1rem;
        }
      }
    }
    .AwayName {
      width: 3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-left: 0.2rem;
      span {
        margin-right: 0.1rem;
      }
    }
  }

  button {
    margin: 10px;
    border: 1px solid #f00;
  }
}
</style>