<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230930/02567f8bbf29475095a68adeb32aa995.jpg)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center bottom","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"0px solid #f6f6f6","padding":"30px 5% 20px 45%","margin":"50px auto 50px","borderRadius":"0px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230930/f52d5a109d7248d69a33749b059f901d.jpg) no-repeat left center / 50% 101%,#fff","width":"75%","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0px","margin":"0px auto 20px","borderColor":"#eee","color":"#57759b","textAlign":"center","display":"inline-block","background":"#fff","borderWidth":"0px","width":"100%","lineHeight":"40px","fontSize":"24px","borderStyle":"solid","fontWeight":"600"}' class="title">基于SSM框架的课程实验教学项目管理系统的设计与实现注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xuehao')?'required':''">学号：</div>
					<el-input  v-model="ruleForm.xuehao"  autocomplete="off" placeholder="学号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xingming')?'required':''">姓名：</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xueshengxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('shouji')?'required':''">手机：</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xueyuan')?'required':''">学院：</div>
                    <el-select v-model="ruleForm.xueyuan" placeholder="请选择学院" >
                        <el-option
                            v-for="(item,index) in xueshengxueyuanOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xueshengtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiaoshizhanghao')?'required':''">教师账号：</div>
					<el-input  v-model="ruleForm.jiaoshizhanghao"  autocomplete="off" placeholder="教师账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
					<el-input  v-model="ruleForm.jiaoshixingming"  autocomplete="off" placeholder="教师姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiaoshixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('xueyuan')?'required':''">学院：</div>
                    <el-select v-model="ruleForm.xueyuan" placeholder="请选择学院" >
                        <el-option
                            v-for="(item,index) in jiaoshixueyuanOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"100%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#333","textAlign":"right","left":"-150px","display":"inline-block","width":"150px","lineHeight":"40px","fontSize":"14px","position":"absolute","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="jiaoshitouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"2px solid #57759b","cursor":"pointer","padding":"0px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#57759b","display":"inline-block","letterSpacing":"4px","outline":"none","borderRadius":"0px","background":"none","width":"49%","fontSize":"18px","fontWeight":"600","height":"50px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 0px","margin":"10px 0 0","color":"#57759b","textAlign":"right","display":"inline-block","width":"49%","lineHeight":"1","fontSize":"14px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            xueshengxingbieOptions: [],
            xueshengxueyuanOptions: [],
            jiaoshixingbieOptions: [],
            jiaoshixueyuanOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
		if(this.tableName=='xuesheng'){
			this.ruleForm = {
                xuehao: '',
                mima: '',
                xingming: '',
                nianling: '',
                xingbie: '',
                shouji: '',
                xueyuan: '',
                touxiang: '',
			}
		}
		if(this.tableName=='jiaoshi'){
			this.ruleForm = {
                jiaoshizhanghao: '',
                mima: '',
                jiaoshixingming: '',
                nianling: '',
                xingbie: '',
                lianxidianhua: '',
                xueyuan: '',
                touxiang: '',
			}
		}
		if ('xuesheng' == this.tableName) {
			this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
		}
		if ('xuesheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
		}
		if ('xuesheng' == this.tableName) {
			this.rules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }]
		}
		if ('jiaoshi' == this.tableName) {
			this.rules.jiaoshizhanghao = [{ required: true, message: '请输入教师账号', trigger: 'blur' }]
		}
		if ('jiaoshi' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
		}
		if ('jiaoshi' == this.tableName) {
			this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]
		}
        this.xueshengxingbieOptions = "男,女".split(',')
        this.$http({
            url: `option/xueyuanxinxi/xueyuan`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code === 0) {
                this.xueshengxueyuanOptions = data.data;
            } else {
                this.$message.error(data.msg);
            }
        });
        this.jiaoshixingbieOptions = "男,女".split(',')
        this.$http({
            url: `option/xueyuanxinxi/xueyuan`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code === 0) {
                this.jiaoshixueyuanOptions = data.data;
            } else {
                this.$message.error(data.msg);
            }
        });
	},
	created() {},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xueshengtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        jiaoshitouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
						this.$message.error(`学号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xuesheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.xingming) && `xuesheng` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					if(`xuesheng` == this.tableName && this.ruleForm.shouji &&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if((!this.ruleForm.jiaoshizhanghao) && `jiaoshi` == this.tableName){
						this.$message.error(`教师账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiaoshi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
						this.$message.error(`教师姓名不能为空`);
						return
					}
					if(`jiaoshi` == this.tableName && this.ruleForm.lianxidianhua &&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230930/02567f8bbf29475095a68adeb32aa995.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #62779c;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #62779c;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #62779c;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #999;
						background: #fff;
						width: 100%;
						font-size: 14px;
						border-color: #62779c;
						border-width: 0 0 2px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px solid #62779c;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #62779c;
		  		  background: #fff;
		  		  font-weight: 600;
		  		  width: 80px;
		  		  font-size: 20px;
		  		  line-height: 40px;
		  		  text-align: center;
		  		  height: 40px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px solid #62779c;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #62779c;
		  		  background: #fff;
		  		  font-weight: 600;
		  		  width: 80px;
		  		  font-size: 20px;
		  		  line-height: 40px;
		  		  text-align: center;
		  		  height: 40px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px solid #62779c;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #62779c;
		  		  background: #fff;
		  		  font-weight: 600;
		  		  width: 80px;
		  		  font-size: 20px;
		  		  line-height: 40px;
		  		  text-align: center;
		  		  height: 40px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				position: absolute;
				right: 6px;
				content: "*";
				order: 1;
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
