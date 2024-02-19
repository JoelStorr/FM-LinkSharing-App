<template>
  <div id="profile-editor">
    <div>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>

    </div>
    <div class="image-upload-holder">
      <p>Profile Picture</p>
      
      <UIImageUpload img-src="https://images.unsplash.com/photo-1708162664567-49732d4b39c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

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
          <UITextField type="text" placeholder-text="e.g. John" field-id="firstName" @on-value-change="onFirstNameChange"></UITextField>
          
        </label>
        <label for="lastName">
          Last name*
          <div class="form-spacer"></div>
        <UITextField type="text" placeholder-text="e.g. Appleseed" field-id="lastName" @on-value-change="onLastNameChange"></UITextField>
        </label>
        <label for="email">
            Email
            <div class="form-spacer">
              

          </div>
          <UITextField type="email" placeholder-text="e.g. email@example.com" field-id="email" @on-value-change="onEmailChange">
            <img />
            <template v-slot:error>This is a error text</template>
        
        </UITextField>
        </label>
      </form>
    </div>
    <hr />
     <div class="btn-holder">
      <div class="btn-spacer"></div>
      <UIButtonPrimary :disabled="true">Save</UIButtonPrimary>
    </div>
  </div>
</template>

<script setup>

    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");

    function onFirstNameChange(value){
        firstName.value = value
    };

    function onLastNameChange(value){
        lastName.value = value
    }

    function onEmailChange(value){
        email.value = value
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
    background-color: #FAFAFA;
    border-radius: 2.5rem;
    padding: 2rem;
}

.form-holder{
    background-color: #FAFAFA;
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

label{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}


form:last-child{
    margin-bottom: 0rem;
}

.form-spacer{
    width: 500px;
    flex: 1;
}

</style>
