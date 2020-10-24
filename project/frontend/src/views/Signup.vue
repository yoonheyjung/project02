<!-- 회원가입 -->
<template>
  <div class="signup">
    <v-container >
      <div class="top">
          <h1>회원가입 페이지</h1>
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="2">
            <v-subheader>Name </v-subheader>
          </v-col>
          <v-col cols="5" >
            <v-text-field
              label="Legal name"
              v-model="form.name"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- 아이디 -->
        <v-row>
          <v-col cols="2">
            <v-subheader>ID </v-subheader>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="ID"
              v-model="form.id"
              required
            ></v-text-field>
          </v-col>
        </v-row>
          
        <!-- 비밀번호 -->
        <v-row>
          <v-col cols="2">
            <v-subheader>Password* </v-subheader>
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Password"
              type="password"
              v-model="form.pwd"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        
        <!-- 성별 -->
        <v-row>
          <v-col cols="2">
            <v-subheader>Gender* </v-subheader>
          </v-col>
          <v-col cols="10">
            <v-radio-group v-model="form.selected" row>
              <v-radio
                v-for="val in options"
                :key="val"
                :label="`${val.text}`"
                :value="val.value"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <!-- 키,몸무게 -->
        <v-row>
          <v-col cols="2">
            <v-subheader>Height and Weight </v-subheader>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="height"
              v-model="form.height"
              suffix="cm"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              label="weight"
              v-model="form.weight"
              suffix="kg"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- 생년월일 -->
        <v-row>
          <v-col cols="2">
            <v-subheader>Birthdy</v-subheader>
          </v-col>
          <v-col cols="5">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="form.birth"
                    label="Birthday date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  ref="picker"
                  v-model="form.birth"
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
          </v-col>
        </v-row>

        <!-- 이메일 -->
        <v-row>
          <v-col cols="2">
            <v-subheader>E-mail </v-subheader>
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Email*"
              v-model="form.email"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        
        <!-- 전송/ 리셋 버튼 시작 -->
        <v-btn
          color="success"
          class="mr-4"
          @click="onSubmit"
          >
          Submit
        </v-btn>
        <v-btn
          color="error"
          class="mr-4"
          @click="onReset"
          >
          Reset Form
        </v-btn>
        <!-- 전송/ 리셋 버튼 끝 -->
        
      </v-form>
    </v-container>

    <!-- form 들어간거 확인
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          id:'',
          pwd:'',
          email: '',
        },
        options:[
          {text:'여자', value:'w'},
          {text:'남자', value:'m'}
        ],
        value:[],
        menu:false,
        users:[],
      }
    },
    methods: {
      save (date) { //생년월일 저장
        this.$refs.menu.save(date)
      },
      onSubmit(evt) { //회원가입 저장
        evt.preventDefault()

        this.$http.post('/api/member/signUp', { 
          form: this.form
        })
        .then((res) => {
          if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push('/login') 
          }
          if (res.data.success == false) {
            alert(res.data.message);
          }
        })
        
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {  //reset form 
        evt.preventDefault()
        
        this.form = {}
        this.$nextTick(() => {
          this.show = true
        })
      },
    },
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    computed:{
      pwdState(){
        return this.form.pwd.length > 3 ? true : false
      },
      availableOptions() {
        return this.options.filter(opt => this.value.indexOf(opt) === -1)
      }
    },
  }
</script>

<style>

</style>