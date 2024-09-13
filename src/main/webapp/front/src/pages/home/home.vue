<template>
<div class="home-preview" :style='{"margin":"0px auto","flexWrap":"wrap","flexDirection":"column","background":"none","display":"flex","width":"100%","justifyContent":"center"}'>




		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"30px 7% 20px","margin":"0 auto","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20230921/fb83626e10da44a58186d9678cf61522.jpg) no-repeat center top / 100% 100%,#fff","flexDirection":"row-reverse","display":"flex","width":"100%","position":"relative","height":"auto","order":"4"}'>
		  <div :style='{"margin":"10px 0 0","color":"#1abc9e","textAlign":"right","background":"none","width":"100%","lineHeight":"56px","fontSize":"28px","fontWeight":"600"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"width":"100%","margin":"0 0 30px","lineHeight":"1.5","fontSize":"16px","color":"#888","textAlign":"right"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0px","top":"0","flexWrap":"wrap","left":"0","display":"block","width":"48%","position":"absolute","height":"100%","order":"2"}'>
		    <img :style='{"width":"100%","margin":"0 0px","objectFit":"cover","display":"block","height":"100%"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"padding":"0px","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","background":"none","width":"48%","lineHeight":"24px","fontSize":"16px","textIndent":"2em","height":"320px"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"transform":"rotate(180deg)","top":"0","background":"url(http://codegen.caihongy.cn/20230920/8a35b5134ee644b8a9a87ea99a0f1490.png) no-repeat","display":"block","width":"200px","position":"absolute","right":"52%","height":"100%"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","cursor":"pointer","margin":"20px auto","textAlign":"right","background":"none","display":"flex","width":"100%","lineHeight":"40px","justifyContent":"flex-end","order":"8","height":"40px"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"padding":"0 0 0 36px","margin":"0","color":"#f5f5f5","background":"#1abc9e","display":"inline-block","width":"auto","fontSize":"14px","lineHeight":"40px","height":"40px"}'>点击查看</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"padding":"0 36px 0 6px","margin":"0","color":"#f5f5f5","background":"#1abc9e","display":"inline-block","fontSize":"14px","lineHeight":"40px","height":"40px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		


<!-- 商品推荐 -->
<div id="animate_recommendkechengxinxi" class="recommend animate__animated" :style='{"padding":"20px 0","margin":"0 auto","borderColor":"#ddd","background":"url(http://codegen.caihongy.cn/20230921/12de1b225a744f6a8b34b9e1979637b7.jpg),#fff","borderWidth":"1px 0","width":"100%","borderStyle":"solid","order":"3"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"30px auto","lineHeight":"50px","textAlign":"center","background":"none"}'>
		<span :style='{"color":"#333","fontSize":"32px","lineHeight":"40px"}'>课程信息推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	




	<div v-if="kechengxinxiRecommend.length" class="list list13 index-pv1" :style='{"width":"100%","padding":"0 7%","background":"none","height":"auto"}'>
	  <div :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="top">
		<template v-for="item,index in kechengxinxiRecommend">
		<template v-if="index < 5">
		<img @click="toDetail('kechengxinxiDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('kechengxinxiDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div v-if="kechengxinxiRecommend.length > 5" :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="center">
		<template v-for="item,index in kechengxinxiRecommend">
		<template v-if="index > 4 && index < 8">
		<img @click="toDetail('kechengxinxiDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('kechengxinxiDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div v-if="kechengxinxiRecommend.length > 8" :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="bottom">
		<template v-for="item,index in kechengxinxiRecommend">
		<template v-if="index == 8">
		<img @click="toDetail('kechengxinxiDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('kechengxinxiDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	</div>



	
	<div @click="moreBtn('kechengxinxi')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"20px auto","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendkechengziliao" class="recommend animate__animated" :style='{"padding":"20px 0","margin":"0 auto","borderColor":"#ddd","background":"url(http://codegen.caihongy.cn/20230921/12de1b225a744f6a8b34b9e1979637b7.jpg),#fff","borderWidth":"1px 0","width":"100%","borderStyle":"solid","order":"3"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"30px auto","lineHeight":"50px","textAlign":"center","background":"none"}'>
		<span :style='{"color":"#333","fontSize":"32px","lineHeight":"40px"}'>课程资料推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	




	<div v-if="kechengziliaoRecommend.length" class="list list13 index-pv1" :style='{"width":"100%","padding":"0 7%","background":"none","height":"auto"}'>
	  <div :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="top">
		<template v-for="item,index in kechengziliaoRecommend">
		<template v-if="index < 5">
		<img @click="toDetail('kechengziliaoDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('kechengziliaoDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div v-if="kechengziliaoRecommend.length > 5" :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="center">
		<template v-for="item,index in kechengziliaoRecommend">
		<template v-if="index > 4 && index < 8">
		<img @click="toDetail('kechengziliaoDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('kechengziliaoDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div v-if="kechengziliaoRecommend.length > 8" :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="bottom">
		<template v-for="item,index in kechengziliaoRecommend">
		<template v-if="index == 8">
		<img @click="toDetail('kechengziliaoDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('kechengziliaoDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	</div>



	
	<div @click="moreBtn('kechengziliao')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"20px auto","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

<!-- 商品推荐 -->
<div id="animate_recommendshiyanxiangmu" class="recommend animate__animated" :style='{"padding":"20px 0","margin":"0 auto","borderColor":"#ddd","background":"url(http://codegen.caihongy.cn/20230921/12de1b225a744f6a8b34b9e1979637b7.jpg),#fff","borderWidth":"1px 0","width":"100%","borderStyle":"solid","order":"3"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","margin":"30px auto","lineHeight":"50px","textAlign":"center","background":"none"}'>
		<span :style='{"color":"#333","fontSize":"32px","lineHeight":"40px"}'>实验项目推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	




	<div v-if="shiyanxiangmuRecommend.length" class="list list13 index-pv1" :style='{"width":"100%","padding":"0 7%","background":"none","height":"auto"}'>
	  <div :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="top">
		<template v-for="item,index in shiyanxiangmuRecommend">
		<template v-if="index < 5">
		<img @click="toDetail('shiyanxiangmuDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('shiyanxiangmuDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div v-if="shiyanxiangmuRecommend.length > 5" :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="center">
		<template v-for="item,index in shiyanxiangmuRecommend">
		<template v-if="index > 4 && index < 8">
		<img @click="toDetail('shiyanxiangmuDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('shiyanxiangmuDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	  <div v-if="shiyanxiangmuRecommend.length > 8" :style='{"cursor":"pointer","width":"100%","padding":"12px 10px","justifyContent":"center","display":"flex","height":"auto"}' class="bottom">
		<template v-for="item,index in shiyanxiangmuRecommend">
		<template v-if="index == 8">
		<img @click="toDetail('shiyanxiangmuDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
		<img @click="toDetail('shiyanxiangmuDetail', item)" :name="item.id" :style='{"width":"18%","margin":"0 1%","objectFit":"cover","display":"block","clipPath":"polygon(100% 88%, 88% 100%, 0% 100%, 0% 0%, 100% 0%)","height":"200px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
		</template>
		</template>
	  </div>
	</div>



	
	<div @click="moreBtn('shiyanxiangmu')" :style='{"border":"1px solid #ddd","cursor":"pointer","margin":"20px auto","textAlign":"center","background":"#fff","display":"block","width":"120px","lineHeight":"36px"}'>
		<span :style='{"color":"#333","fontSize":"14px"}'>查看更多</span>
		<i :style='{"color":"#333","fontSize":"14px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->

	
	<!-- 在线留言 -->
	<div id="msgs" class="msg animate__animated" :style='{"width":"100%","margin":"0px auto","position":"relative","background":"url(http://codegen.caihongy.cn/20231012/867dedd61f7d48b890dae4c9f2a3d31b.jpg) no-repeat center center / cover,#ededed","order":"11","height":"460px"}'>
	  <img :style='{"width":"100%","objectFit":"cover","display":"none","height":"400px"}' src="https://codegen.caihongy.cn/20220719/a6774084daa04dcdb140ce097ee4e4df.jpg">
	  <div :style='{"padding":"100px  7% 0","top":"0","left":"0","background":"rgba(0,0,0,.0)","display":"flex","width":"100%","position":"absolute","justifyContent":"space-between","height":"100%","zIndex":"1"}'>
	    <div :style='{"width":"48%","padding":"0","order":"2"}'>
	      <div :style='{"margin":"0 0 10px","color":"#333","top":"80px","left":"7%","textAlign":"center","display":"none","width":"86%","fontSize":"14px","lineHeight":"1.5","position":"absolute"}'>MESSAGE</div>
	      <div :style='{"margin":"0 0 10px","color":"#333","top":"20px","left":"7%","textAlign":"center","width":"86%","fontSize":"32px","lineHeight":"60px","position":"absolute"}'>在线留言</div>
	      <div :style='{"margin":"0 0 10px","fontSize":"16px","lineHeight":"1.5","color":"#333"}'>描述1描述1描述1描述1描述1描述1描述1描述1描述1描述1</div>
	      <div :style='{"margin":"0 0 10px","fontSize":"16px","lineHeight":"1.5","color":"#333"}'>描述2描述2描述2</div>
	      <div :style='{"display":"none"}'>
	        <span class="icon iconfont icon-dianpu" :style='{"margin":"0 5px 0","fontSize":"16px","lineHeight":"1.5","color":"#fff"}'></span>
	        <div :style='{"color":"#fff","fontSize":"16px","lineHeight":"1.5"}'>0753-1234567</div>
	      </div>
	    </div>
	    <div :style='{"width":"48%","padding":"0px"}'>
	      <el-form autocomplete="off" :model="messageForm" :style='{"width":"100%","padding":"0","background":"none","height":"100%"}'>
	        <el-form-item class="input" :style='{"width":"100%","margin":"0 0 10px"}'>
	          <el-input type="text" v-model="messageForm.name" placeholder="请输入姓名" />
	        </el-form-item>
	        <el-form-item class="input" :style='{"width":"100%","margin":"0 0 10px"}'>
	          <el-input type="text" v-model="messageForm.email" placeholder="请输入邮箱" />
	        </el-form-item>
	        <el-form-item class="input" :style='{"width":"100%","margin":"0 0 10px"}'>
	          <el-input type="text" v-model="messageForm.mobile" placeholder="请输入电话" />
	        </el-form-item>
	        <el-form-item class="textarea" :style='{"width":"100%","margin":"0 0 10px"}'>
	          <el-input type="textarea" v-model="messageForm.content" placeholder="请输入留言" />
	        </el-form-item>
	        <el-form-item class="btn" :style='{"width":"100%","textAlign":"center","margin":"20px 0 0"}'>
	          <el-button :style='{"cursor":"pointer","border":"0","padding":"0px 10px","margin":"0 auto","outline":"none","color":"#fff","borderRadius":"0px","background":"#1abc9e","width":"140px","fontSize":"14px","lineHeight":"40px","height":"40px"}' @click="messageSave">留言</el-button>
	        </el-form-item>
	      </el-form>
	    </div>
	  </div>
	</div>
	<!-- 在线留言 -->
	<!-- 友链 -->
	<div id="friendly" class="friendly animate__animated" :style='{"padding":"0px 7%","margin":"0px auto 0","borderColor":"#ededed","background":"#fcfcfc","borderWidth":"1px 0 0","width":"100%","borderStyle":"solid","height":"auto","order":"12"}'>
	  <div :style='{"borderColor":"#ddd","margin":"20px auto 0","textAlign":"center","borderWidth":"0 0 0px","width":"100%","borderStyle":"solid","height":"auto"}'>
	    <div :style='{"padding":"0 10px","borderColor":"rgba(64, 158, 255)","margin":"0 0 -1px 0","color":"#333","borderWidth":"0 0 0px","display":"inline-block","lineHeight":"60px","fontSize":"32px","borderStyle":"solid"}'>合作客户</div>
	  </div>
	  <div :style='{"width":"100%","padding":"10px 0","flexWrap":"wrap","justifyContent":"center","display":"flex","height":"auto"}'>
	    <div :style='{"cursor":"pointer","margin":"0 2% 20px 0","alignItems":"center","flexDirection":"column","display":"flex","width":"auto","justifyContent":"center","height":"auto"}' v-for="item in friendLinkList" :key="item.id" @click="friendlinkClick(item.url)">
	      <img :style='{"border":"1px solid #ddd","padding":"10px","margin":"0 auto","objectFit":"contain","borderRadius":"0px","background":"#fff","display":"block","width":"auto","height":"120px"}' :src="item.picture?(baseUrl + item.picture.split(',')[0]): ''" alt="">
	      <div :style='{"overflow":"hidden","whiteSpace":"nowrap","color":"#333","textAlign":"center","width":"100%","lineHeight":"30px","fontSize":"14px","textOverflow":"ellipsis"}'>{{item.name}}</div>
	    </div>
	  </div>
	</div>
	<!-- 友链 -->
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        systemIntroductionDetail: {},
        newsList: [],
        kechengxinxiRecommend: [],
        kechengziliaoRecommend: [],
        shiyanxiangmuRecommend: [],





		friendLinkList: [],
		messageForm: {}
      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getSystemIntroduction();
		this.getList();
		this.getFriendLinkList()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {




























































			setTimeout(()=>{






























			},250)
		},
		messageSave(){
			this.$http.post('onlinemessage/save', this.messageForm).then(res => {
				if(res.data.code == 0) {
					this.$message({
						message: '提交成功',
						type: 'success',
						duration: 1500,
						onClose: () => {
							this.messageForm = {}
							this.$forceUpdate()
						}
					});
				}
			})
		},
		// 获取友链列表
		getFriendLinkList(){
			this.$http.get('friendlink/list', {params:{page: 1,limit: 100}}).then(res => {
			  if(res.data.code == 0) {
			    this.friendLinkList = res.data.data.list
			  }
			})
		},
		// 友链跳转
		friendlinkClick(url){
			if(url){
				window.open(url)
			}
		},

		listIndexClick12(index, name) {
			this['listIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.lists .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.lists .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},

		handleScroll() {
			let arr = [
				{id:'search',css:'animate__fadeInDown'},
				{id:'about',css:'animate__fadeInRight'},
				{id:'system',css:'animate__fadeInRight'},
				{id:'animate_recommendkechengxinxi',css:'animate__fadeInLeft'},
				{id:'animate_recommendkechengziliao',css:'animate__fadeInLeft'},
				{id:'animate_recommendshiyanxiangmu',css:'animate__fadeInLeft'},
				{id:'msgs',css:'animate__fadeInDown'},
				{id:'friendly',css:'animate__fadeInUp'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "kechengxinxi/autoSort";
			data = {
				page: 1,
				limit: 9,
			}
			data['sfsh'] = '是'
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.kechengxinxiRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "kechengziliao/autoSort";
			data = {
				page: 1,
				limit: 9,
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.kechengziliaoRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
          autoSortUrl = "shiyanxiangmu/autoSort";
			data = {
				page: 1,
				limit: 9,
			}
			data['sfsh'] = '是'
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.shiyanxiangmuRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 180px;
			font-size: 14px;
			height: 36px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 480px;
			font-size: 14px;
			height: 36px;
		}
		// -------- search --------
		// 在线留言
		.msg .input /deep/ .el-input__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 100%;
			font-size: 14px;
			height: 40px;
		}
		.msg .el-textarea /deep/ .el-textarea__inner {
			border: 1px solid #ddd;
			border-radius: 4px;
			padding: 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: rgba(64, 158, 255, 1);
			width: 100%;
			font-size: 14px;
			line-height: 1.5;
			height: 100px;
			}
		// 在线留言
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.02) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, -10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	
	.home-preview .news .list12 .left .list .item {
				cursor: pointer;
				padding: 0 0 0 10px;
				width: 100%;
				border-color: #ddd;
				border-width: 0 0 1px;
				position: relative;
				border-style: dashed;
				transition: 0.3s;
				height: auto;
			}
	.home-preview .news .list12 .left .list .item:hover {
				transform: translate3d(10px, 0px, 0px);
			}










	.home-preview .lists .list12 .tab .item {
				cursor: pointer;
				border: 1px solid #eee;
				padding: 0 20px;
				margin: 0 10px;
				color: #333;
				background: #fff;
				width: auto;
				font-size: 16px;
				line-height: 36px;
				height: auto;
			}
	
	.home-preview .lists .list12 .tab .item:hover {
				color: #fff;
				background: #1abc9e;
				border-color: #1abc9e;
				border-width: 1px;
				border-style: solid;
			}
	
	.home-preview .lists .list12 .tab .item.active {
				color: #fff;
				background: #1abc9e;
				border-color: #1abc9e;
				border-width: 1px;
				border-style: solid;
			}
	
	.home-preview .lists .list12 .tab .more {
				cursor: pointer;
				padding: 5px 10px;
				margin: 0 10px;
				color: #666;
				background: #fff;
				display: flex;
				line-height: 36px;
				align-items: center;
				height: 36px;
			}
	
	.home-preview .lists .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .lists .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}
</style>
