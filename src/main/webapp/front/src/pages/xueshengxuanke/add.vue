<template>
<div :style='{"width":"100%","padding":"30px 7% 40px","margin":"0px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"border":"1px solid #f0f0f0","width":"100%","padding":"30px","position":"relative","background":"#fcfcfc"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="课程名称" prop="kechengmingcheng">
            <el-input  v-model="ruleForm.kechengmingcheng" 
                placeholder="课程名称" clearable :readonly=" false  ||ro.kechengmingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="课程分类" prop="kechengfenlei">
            <el-input  v-model="ruleForm.kechengfenlei" 
                placeholder="课程分类" clearable :readonly=" false  ||ro.kechengfenlei"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="封面" v-if="type!='cross' || (type=='cross' && !ro.fengmian)" prop="fengmian">
            <file-upload
            tip="点击上传封面"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
            @change="fengmianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' class="upload" v-else label="封面" prop="fengmian">
                <img v-if="ruleForm.fengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fengmian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="选课时间" prop="xuankeshijian">
              <el-date-picker
				  :disabled=" false  ||ro.xuankeshijian"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.xuankeshijian" 
                  type="datetime"
                  placeholder="选课时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="教师账号" prop="jiaoshizhanghao">
            <el-input  v-model="ruleForm.jiaoshizhanghao" 
                placeholder="教师账号" clearable :readonly=" false  ||ro.jiaoshizhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="教师姓名" prop="jiaoshixingming">
            <el-input  v-model="ruleForm.jiaoshixingming" 
                placeholder="教师姓名" clearable :readonly=" false  ||ro.jiaoshixingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="学号" prop="xuehao">
            <el-input  v-model="ruleForm.xuehao" 
                placeholder="学号" clearable :readonly=" false  ||ro.xuehao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="姓名" prop="xingming">
            <el-input  v-model="ruleForm.xingming" 
                placeholder="姓名" clearable :readonly=" false  ||ro.xingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"none"}' label="选择原因" prop="xuanzeyuanyin">
            <editor 
                :style='{"minHeight":"250px","padding":"0","margin":"0","borderColor":"#1abc9e30","backgroundColor":"none","borderRadius":"0","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.xuanzeyuanyin" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"0px","background":"#1abc9e","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #eee","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#333","borderRadius":"0px","background":"#fcfcfc","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        baseUrl: '',
        ro:{
            kechengmingcheng : false,
            kechengfenlei : false,
            fengmian : false,
            xuankeshijian : false,
            xuanzeyuanyin : false,
            jiaoshizhanghao : false,
            jiaoshixingming : false,
            xuehao : false,
            xingming : false,
            crossuserid : false,
            crossrefid : false,
            sfsh : false,
            shhf : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          kechengmingcheng: '',
          kechengfenlei: '',
          fengmian: '',
          xuankeshijian: '',
          xuanzeyuanyin: '',
          jiaoshizhanghao: '',
          jiaoshixingming: '',
          xuehao: '',
          xingming: '',
          crossuserid: '',
          crossrefid: '',
        },


        rules: {
          kechengmingcheng: [
          ],
          kechengfenlei: [
          ],
          fengmian: [
          ],
          xuankeshijian: [
          ],
          xuanzeyuanyin: [
            { required: true, message: '选择原因不能为空', trigger: 'blur' },
          ],
          jiaoshizhanghao: [
          ],
          jiaoshixingming: [
          ],
          xuehao: [
          ],
          xingming: [
          ],
          crossuserid: [
          ],
          crossrefid: [
          ],
          sfsh: [
          ],
          shhf: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.xuankeshijian = this.getCurDateTime()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='kechengmingcheng'){
              this.ruleForm.kechengmingcheng = obj[o];
              this.ro.kechengmingcheng = true;
              continue;
            }
            if(o=='kechengfenlei'){
              this.ruleForm.kechengfenlei = obj[o];
              this.ro.kechengfenlei = true;
              continue;
            }
            if(o=='fengmian'){
              this.ruleForm.fengmian = obj[o].split(",")[0];
              this.ro.fengmian = true;
              continue;
            }
            if(o=='xuankeshijian'){
              this.ruleForm.xuankeshijian = obj[o];
              this.ro.xuankeshijian = true;
              continue;
            }
            if(o=='xuanzeyuanyin'){
              this.ruleForm.xuanzeyuanyin = obj[o];
              this.ro.xuanzeyuanyin = true;
              continue;
            }
            if(o=='jiaoshizhanghao'){
              this.ruleForm.jiaoshizhanghao = obj[o];
              this.ro.jiaoshizhanghao = true;
              continue;
            }
            if(o=='jiaoshixingming'){
              this.ruleForm.jiaoshixingming = obj[o];
              this.ro.jiaoshixingming = true;
              continue;
            }
            if(o=='xuehao'){
              this.ruleForm.xuehao = obj[o];
              this.ro.xuehao = true;
              continue;
            }
            if(o=='xingming'){
              this.ruleForm.xingming = obj[o];
              this.ro.xingming = true;
              continue;
            }
            if(o=='crossuserid'){
              this.ruleForm.crossuserid = obj[o];
              this.ro.crossuserid = true;
              continue;
            }
            if(o=='crossrefid'){
              this.ruleForm.crossrefid = obj[o];
              this.ro.crossrefid = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.xuehao!=''&&json.xuehao) || json.xuehao==0){
                this.ruleForm.xuehao = json.xuehao
            }
            if((json.xingming!=''&&json.xingming) || json.xingming==0){
                this.ruleForm.xingming = json.xingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`xueshengxuanke/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

        //更新跨表属性
        var crossuserid;
        var crossrefid;
        var crossoptnum;
        this.$refs["ruleForm"].validate(valid => {
          if(valid) {
            if(this.type=='cross'){
                 var statusColumnName = localStorage.getItem('statusColumnName');
                 var statusColumnValue = localStorage.getItem('statusColumnValue');
                 if(statusColumnName && statusColumnName!='') {
                     var obj = JSON.parse(localStorage.getItem('crossObj'));
                     if(!statusColumnName.startsWith("[")) {
                         for (var o in obj){
                             if(o==statusColumnName){
                                 obj[o] = statusColumnValue;
                             }
                         }
                         var table = localStorage.getItem('crossTable');
                         this.$http.post(table+'/update', obj).then(res => {});
                     } else {
                            crossuserid=Number(localStorage.getItem('userid'));
                            crossrefid=obj['id'];
                            crossoptnum=localStorage.getItem('statusColumnName');
                            crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                     }
                 }
            }
            if(crossrefid && crossuserid) {
                 this.ruleForm.crossuserid=crossuserid;
                 this.ruleForm.crossrefid=crossrefid;
                 var params = {
                     page: 1,
                     limit: 10,
                     crossuserid:crossuserid,
                     crossrefid:crossrefid,
                 }
                 this.$http.get('xueshengxuanke/list', {
                  params: params
                 }).then(res => {
                     if(res.data.data.total>=crossoptnum) {
                         this.$message({
                          message: localStorage.getItem('tips'),
                          type: 'success',
                          duration: 1500,
                         });
                          return false;
                     } else {
                         // 跨表计算


                          this.$http.post(`xueshengxuanke/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                              if (res.data.code == 0) {
                                  this.$message({
                                      message: '操作成功',
                                      type: 'success',
                                      duration: 1500,
                                      onClose: () => {
                                          this.$router.go(-1);
                                      }
                                  });
                              } else {
                                  this.$message({
                                      message: res.data.msg,
                                      type: 'error',
                                      duration: 1500
                                  });
                              }
                          });
                     }
                 });
             } else {


                  this.$http.post(`xueshengxuanke/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
                     if (res.data.code == 0) {
                          this.$message({
                              message: '操作成功',
                              type: 'success',
                              duration: 1500,
                              onClose: () => {
                                  this.$router.go(-1);
                              }
                          });
                      } else {
                          this.$message({
                              message: res.data.msg,
                              type: 'error',
                              duration: 1500
                          });
                      }
                  });
             }
          }
        });
      },
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
      // 返回
      back() {
        this.$router.go(-1);
      },
      fengmianUploadChange(fileUrls) {
          this.ruleForm.fengmian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #ddd;
	  padding: 0 12px;
	  color: #666;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-radius: 0px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  background: none;
	  width: 400px;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px;
	  color: #666;
	  background: none;
	  width: 200px;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border-radius: 0px;
	  padding: 0 10px 0 30px;
	  color: #666;
	  background: none;
	  width: 200px;
	  font-size: 14px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  border-style: solid;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  cursor: pointer;
	  border-radius: 0px;
	  color: #1abc9e60;
	  background: none;
	  width: 200px;
	  font-size: 32px;
	  border-color: #1abc9e30;
	  border-width: 0 0 1px;
	  line-height: 100px;
	  border-style: solid;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #1abc9e30;
	  border-radius: 0px;
	  padding: 12px;
	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  outline: none;
	  color: #666;
	  background: none;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
