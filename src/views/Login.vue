
<template>
  <div>
    <div class="header">
      <img :src="kvkLogo" alt="KVK Logo">
    </div>
    <div class="middleDiv">

      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
        <div class="text-subtitle-1 text-medium-emphasis">Prisijungimo vardas</div>
  
        <v-text-field
          density="compact"
          placeholder="El. paštas"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
  
        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Slaptažodis
  
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pamiršai prisijungimą?</a
          >
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Įveskite slaptažodį"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-btn block class="mb-8" color="white" size="large" variant="tonal">
          Prisijungti
        </v-btn>
  
        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Registracija <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-card>
    </div>
    <footer>
        <div class="footerText">
            <h2 class="footerYears">©2023 </h2>
            <a class="footerA" href="https://www.kvk.lt/">Klaipėdos valstybinė kolegija</a>
        </div>
        <img class='footerLogo' :src="kvkLogo" alt="footerLogo">
        </footer>
  </div>
</template>

<script>
import kvkLogo from '@/assets/Photos/KVKlogo.png'; 
export default {
    name: 'UserLogin',
  data() {
    return {
      kvkLogo,
      username: '',
      password: '',
      visible: false,
    };
  },
  methods: {
    // async login() {
    //   try {
    //     const response = await this.$axios.post('http://127.0.0.1:8000/api/LoginCheck', {
    //     username: this.username,
    //     password: this.password
    //     });

    //     localStorage.setItem('userInfo', JSON.stringify(response.data));
    //   this.userInfo = response.data;
    //     if (response.data.message === 'Login successful') {
    //     this.$router.push({ name: 'MainPage', params: { username: this.username } });
    //     } else {
    //     // Handle login error, e.g., showing an error message to the user
    //     }
    //   } catch (error) {
    //     if (error.response && error.response.status === 401) {
    //     // Handle login error, e.g., showing an error message to the user
    //     }
    //   }
      
    // }
  }
}
</script>

<style scoped>
.middleDiv{
margin-top: 3%;

}

.footerYears{
  font-size: 20px;
}
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6rem;
    background: linear-gradient(141deg, #58acfa 0%, #81bef7 51%, #a9d0f5 75%);
}
img {
    width: 10%;
    height: 70%;
    display: block;
    margin: 1% auto;
    min-width: 151px;
}

body {
    font-family: sans-serif;
    line-height: 3;
}


button {
    width: 50%;
    background-color: #58acfa;
    color: #fff;
    float: right;
    padding: 0.5em 1em;
    border: none rgba(0, 0, 0, 0);
    line-height: normal;
}

a {
    display: block;
}
footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 5rem;
    background: linear-gradient(141deg, #58acfa 0%, #81bef7 51%, #a9d0f5 75%);
    width: 100%;
    bottom: 0;
}
.footerLogo {
    position: absolute;
    margin-right: 2%;
    height: 4rem;
    margin: 1% 1%;
    right: 0;
    bottom: -6px;
    width: 10%;
}
.footerText {
    width: 70%;
    display: inline-block;
    text-align: center;
}

h2,
.footerA {
    display: inline;
    color: white;
}

</style>