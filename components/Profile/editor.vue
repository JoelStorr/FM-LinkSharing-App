<template>
    <h2>Profile editor</h2>
    <p>Add your details to create a personal touch to your profile.</p>
    <div>
        <p>Profile Picture</p>
        <div>
            <img src="/images/icon-upload-image.svg" />
            <p>+ Upload Image</p>
        </div>

        <p>Images must be below 1024x1024px. <br/> Use PNG or JPG format.</p>
    </div>
    <div>
        <form action="">
            <label for="firstName">
                First name*
                <input id="firstName" placeholder="e.g John">
            </label>
            <label for="lastName">
                Last name*
                <input id="lastName" placeholder="e.g. Appleseed">
            </label>
            <label for="email">
                Email
                <input id="email" placeholder="e.g. email@example.com" />
            </label>
        </form>
    </div>
    <hr/>
    <button>Save</button>

</template>