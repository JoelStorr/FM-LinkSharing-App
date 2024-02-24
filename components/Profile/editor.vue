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
            :placeholder-text="firstName?? 'e.g. John'"
            field-id="firstName"
            @on-value-change="onFirstNameChange"
            :error="isFirstNameError"
          >
            <img />
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
            <img />
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
            <img />
            <template v-slot:error>{{ emailError }}</template>
          </UITextField>
        </label>
      </form>
    </div>
    <div class="mobile-spacer"></div>
    <hr />
    <div class="btn-holder">
      <div class="btn-spacer"></div>
      <UIButtonPrimary class="save-btn" :disabled="true">Save</UIButtonPrimary>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
import { emailRegEx } from "~/components/Helper";

const store = useMainStore();
const { addFristName, addLastName, addEmail } = store;

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
</script>

<style scoped>
#profile-editor {
  position: relative;
  width: 100%;
  background-color: white;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2.5rem;
}

.image-upload-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  border-radius: 2.5rem;
  padding: 2rem;
}

.form-holder {
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 2.5rem;
}

.btn-holder {
  display: flex;
}

.btn-spacer {
  flex: 1;
}

hr {
  min-width: 100%;
  border: none;
  border-top: 1px solid #d9d9d9;
  height: 0;
}

label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

form:last-child {
  margin-bottom: 0rem;
}

.form-spacer {
  width: 500px;
  flex: 1;
}

@media only screen and (max-width: 1025px) {
 
  #profile-editor{
    justify-content: flex-start;
    overflow-x: scroll;
  }
 
  .image-upload-holder {
    margin: 3rem 0 4rem 0;
  }
  .mobile-spacer{
    flex: 1;
  }

  .btn-holder{
    margin: 2rem 0 2rem 0;
  }
}


@media only screen and (max-width: 450px) {
  .image-upload-holder{
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }


  label{
    flex-direction: column;
    align-items: flex-start;
  }


  hr{
    margin-top: 2rem;
  }

  .btn-holder{
    width: 100%;
    display: block;
  }
  .btn-spacer{
    display: none;
  }

  .save-btn{
    width: 100%;
  }

}

</style>
