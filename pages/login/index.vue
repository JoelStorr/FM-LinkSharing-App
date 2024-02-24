<template>
  <div id="login-screen">
    <img src="/images/logo-devlinks-large.svg" class="logo" />

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
            <img src="/images/icon-email.svg" />
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
            <img src="/images/icon-password.svg" />
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

definePageMeta({
  layout: "noHeader",
});

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

function login() {
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

  navigateTo("/editor");
}
</script>

<style scoped>
#login-screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

#login-content-holder {
  overflow: hidden;
  background-color: white;
  width: 30vw;
  padding: 4rem;
  margin-top: 6rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

#login-form {
  position: relative;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
}

#login-form label {
  margin-bottom: 2rem;
}

#form-switch {
  align-self: center;
}

.login-link {
  text-decoration: none;
}

h1 {
  margin: 0;
  padding: 0;
}

@media only screen and (max-width: 1025px) {
  #login-content-holder {
    width: 60vw;
  }
}

@media only screen and (max-width: 450px) {
  #login-screen {
    align-items: flex-start;
    justify-content: flex-start;
    background-color: white;
  }

  #login-content-holder {
    margin-top: 2rem;
    padding: 3rem;
    width: 100vw;
  }

  .logo {
    padding: 4rem 0 2rem 2rem;
  }

  .login-link {
    display: block;
  }

  #form-switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
