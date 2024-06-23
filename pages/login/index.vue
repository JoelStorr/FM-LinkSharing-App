<template>
  <div id="login-screen">
    <img src="/images/logo-devlinks-large.svg" class="logo" alt="logo"/>

    <div id="login-content-holder">
      <h1>Login</h1>
      <p>Add your details below to get back inot the app</p>
      <form @submit.prevent="login" id="login-form">
        <label for="email" class="g-bodyS">
          Email address <br />
          <UITextField
            :error="isEmailError"
            type="mail"
            placeholder-text="e.g. alex@email.com"
            field-id="email"
            @on-value-change="saveEmail"
          >
            <img src="/images/icon-email.svg" alt="icon"/>
            <template v-slot:error>
              {{ emailErrorText }}
            </template>
          </UITextField>
        </label>

        <label for="password" class="g-bodyS">
          Password <br />
          <UITextField
            :error="isPasswordError"
            type="password"
            placeholder-text="Enter your password"
            field-id="password"
            @on-value-change="savePassword"
          >
            <img src="/images/icon-password.svg" alt="icon"/>
            <template v-slot:error>
              {{ passwordErrorText }}
            </template>
          </UITextField>
        </label>
        <UIButtonPrimary type="submit"> Login </UIButtonPrimary>
      </form>

      <p id="form-switch">
        Don't have an account?

        <NuxtLink to="/register" class="login-link">Create account</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMainStore } from "~/store/index";
import './login.css'

definePageMeta({
  layout: "noHeader",
});

const store = useMainStore();
const {loginUser} = store;

let token = useCookie('access_token');

// definePageMeta({
//   middleware: [
//     function (to, from) {
      
//       if(!store.token){
//         return navigateTo("/login");
//       }

//     },
//   ],
// });



const email = ref("");
const password = ref("");

const isEmailError = ref(false);
const isPasswordError = ref(false);

const emailErrorText = ref("");
const passwordErrorText = ref("");

function saveEmail(value) {
  email.value = value;
}

function savePassword(value) {
  password.value = value;
}


async function login() {
  isEmailError.value = false;
  isPasswordError.value = false;

  if (email.value.length < 4) {
    emailErrorText.value = "Please enter a email adress";
    isEmailError.value = true;
  } else {
    emailErrorText.value = "";
  }
  if (password.value.length < 8) {
    passwordErrorText.value = "Enter valid Password";
    isPasswordError.value = true;
  } else {
    passwordErrorText.value = "";
  }

  if (isEmailError.value || isPasswordError.value) {
    return;
  }

  let data = await loginUser(email.value, password.value)
  if(data){
    
    token.value = data
    navigateTo("/editor");
    return
  }

}
</script>


