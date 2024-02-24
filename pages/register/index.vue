<template>
  <div id="login-screen">
    <img src="/images/logo-devlinks-large.svg" />

    <div id="login-content-holder">
      <h1>Create account</h1>
      <p>Let's get you started sharing your links!</p>
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
        <label for="confirmPassword" class="g-bodyS">
          Confirm Password <br />
          <UITextField
            :error="isConfirmPasswordError"
            type="password"
            placeholder-text="Confirm your password"
            field-id="confirmPassword"
            @on-value-change="saveConfirmPassword"
          >
            <img src="/images/icon-password.svg" />
            <template v-slot:error>
              {{ confirmPasswordErrorText }}
            </template>
          </UITextField>
        </label>
        <p>Password must contain at least 8 characters</p>
        <UIButtonPrimary type="submit"> Create new Account </UIButtonPrimary>
      </form>

      <p id="form-switch">
        Alredy have an account?

        <NuxtLink to="/login" class="login-link">Login</NuxtLink>
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
const confirmPassword = ref("");

const isEmailError = ref(false);
const isPasswordError = ref(false);
const isConfirmPasswordError = ref(false);

const emailErrorText = ref("");
const passwordErrorText = ref("");
const confirmPasswordErrorText = ref("");

function saveEmail(value) {
  email.value = value;
}

function savePassword(value) {
  password.value = value;
}

function saveConfirmPassword(value) {
  confirmPassword.value = value;
}

function login() {
  isEmailError.value = false;
  isPasswordError.value = false;
  isConfirmPasswordError.value = false;

  if (email.value.length < 4) {
    emailErrorText.value = "Please enter a email adress";
    isEmailError.value = true;
  } else {
    emailErrorText.value = "";
  }
  if (password.value.length < 8) {
    passwordErrorText.value = "Pleas enter a valid password";
    isPasswordError.value = true;
  } else {
    passwordErrorText.value = "";
  }

  if (confirmPassword.value != password.value) {
    confirmPasswordErrorText.value = "Pleas enter a valid password";
    isConfirmPasswordError.value = true;
  } else if (confirmPassword.value.length < 8) {
    confirmPasswordErrorText.value = "Both passwords need to match";
    isConfirmPasswordError.value = true;
  } else {
    confirmPasswordErrorText.value = "";
  }

  if (
    isEmailError.value ||
    isPasswordError.value ||
    isConfirmPasswordError.value
  ) {
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
  #login-content-holder{
    width: 60vw;
  }
}

</style>
