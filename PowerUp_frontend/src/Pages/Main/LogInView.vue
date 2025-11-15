<template>
  <div class="login">
    <form class="card loginCard m-auto">
        <h2 class="m-auto">Log In</h2>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email"/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="submit" class="btn custom-btn">Log In</button>
        <a href="/signup" class="m-auto mt-3 d-block signup-anchor">Don't have an account? Sign Up</a>
    </form>
  </div>
</template>

<script setup>

</script>

<style scoped>
.login{
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

.login::before{
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

.loginCard{
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