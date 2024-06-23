<template>
  <div id="profile-editor">
    <div>
      <h1>Profile Details</h1>
      <p>Add your details to create a personal touch to your profile.</p>
    </div>
    <div class="image-upload-holder">
      <p>Profile Picture</p>

      <UIImageUpload
        img-src="https://images.unsplash.com/photo-1708162664567-49732d4b39c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <p>
        Images must be below 1024x1024px. <br />
        Use PNG or JPG format.
      </p>
    </div>
    <div class="form-holder">
      <form action="">
        <label for="firstName">
          First name*
          <div class="form-spacer"></div>
          <UITextField
            type="text"
            :placeholder-text="firstName ?? 'e.g. John'"
            field-id="firstName"
            @on-value-change="onFirstNameChange"
            :error="isFirstNameError"
          >
            <img alt="icon"/>
            <template v-slot:error>{{ firstNameError }}</template>
          </UITextField>
        </label>
        <label for="lastName">
          Last name*
          <div class="form-spacer"></div>
          <UITextField
            type="text"
            :placeholder-text="lastName ?? 'e.g. Appleseed'"
            field-id="lastName"
            @on-value-change="onLastNameChange"
            :error="isLastNameError"
          >
            <img alt="icon"/>
            <template v-slot:error>{{ lastNameError }}</template>
          </UITextField>
        </label>
        <label for="email">
          Email
          <div class="form-spacer"></div>
          <UITextField
            type="email"
            :placeholder-text="email ?? 'e.g. email@example.com'"
            field-id="email"
            @on-value-change="onEmailChange"
            :error="isEmailError"
          >
            <img alt="icon"/>
            <template v-slot:error>{{ emailError }}</template>
          </UITextField>
        </label>
      </form>
    </div>
    <div class="mobile-spacer"></div>
    <hr />
    <div class="btn-holder">
      <div class="btn-spacer"></div>
      <UIButtonPrimary class="save-btn" :disabled="saveButton" @on-click="save">Save</UIButtonPrimary>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
import { emailRegEx } from "~/components/Helper";
import './profile-editor.css';

const store = useMainStore();
const { addFristName, addLastName, addEmail, saveData } = store;

const firstName = ref(store.profile.firstName);
const isFirstNameError = ref(false);
const firstNameError = ref("");
const lastName = ref(store.profile.lastName);
const isLastNameError = ref(false);
const lastNameError = ref("");
const email = ref(store.profile.email);
const isEmailError = ref(false);
const emailError = ref("");

let timerFirst = null;
let timerLast = null;
let timerEmail = null;


const saveButton = computed(()=>{return !store.profileSave})

function onFirstNameChange(value) {
  if (timerFirst != null) {
    clearTimeout(timerFirst);
  }

  timerFirst = setTimeout(() => {
    if (value.length < 2) {
      isFirstNameError.value = true;
      firstNameError.value = "Can't be empty";
    } else {
      addFristName(value);
      isFirstNameError.value = false;
      firstNameError.value = "";
    }
  }, 1000);
}

function onLastNameChange(value) {
  if (timerLast != null) {
    clearTimeout(timerLast);
  }

  timerLast = setTimeout(() => {
    if (value.length < 2) {
      isLastNameError.value = true;
      lastNameError.value = "Can't be empty";
    } else {
      addLastName(value);
      isLastNameError.value = false;
      lastNameError.value = "";
    }
  }, 1000);
}

function onEmailChange(value) {
  if (timerEmail != null) {
    clearTimeout(timerEmail);
  }

  timerEmail = setTimeout(() => {
    if (emailRegEx.test(value)) {
      emailError.value = "";
      isEmailError.value = false;
      addEmail(value);
    } else {
      emailError.value = "Invalid email adress";
      isEmailError.value = true;
    }
  }, 1000);

  email.value = value;
}

function save(){
    saveData();
}


</script>


