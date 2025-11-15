<template>
  <div class="signup">
    <form class="card signupCard m-auto">
        <h2 class="m-auto">Sign Up</h2>
        <div class="mb-3">
            <label for="first name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="first name" placeholder="Enter first name"/>
            </div>
        <div class="mb-3">
            <label for="last name" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="last name" placeholder="Enter last name"/>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
        <div class="mb-3">
            <label for="confirm password" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="confirm password" placeholder="Confirm Password"/>
        </div>
        <button type="submit" class="btn custom-btn">Sign Up</button>

        <a href="/login" class="m-auto mt-3 d-block signup-anchor">Already have an account? Log In</a>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>
.signup{
    position: relative;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.signup::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/videGamesCasesBackground.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1;
}

.signupCard{
    width: 25rem;
    padding: 20px;
    position: relative;
    z-index: 1;
}
.signup-anchor {
    text-decoration: none;
    color: #FB4A47;
}
</style>