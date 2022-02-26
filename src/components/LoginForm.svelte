<script>
    import { UserSessionStore } from "../stores/UserSession";

    let username; 
    let password; 

    function handleLogin() { 
        console.log(username, password); 
        UserSessionStore.set({username: username});
    }
</script>


<div class="login-form">
    <input placeholder="Username" bind:value={ username } />
    <input placeholder="Password" bind:value={ password } />
    <button class="btn-login" on:click={ handleLogin }>Let's Go!</button>
</div>

<style>
    .login-form {
        border: 1px solid #62676d22;
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        font-weight: lighter;
        background-color: #282c34;
        box-shadow: 0px 0px 20px #1d2025;
        margin-top: 30px;
        justify-content: space-between;
        align-items: center;
    }

    .login-form input, input:active {
        display: block;
        flex-basis: 20%;
        margin-bottom: 10px;
        background-color: #282c34;
        color: #dce4ec;
        font-size: smaller;
        padding: 10px;
        border: 1px solid #dce4ec22;
    }

    .login-form .btn-login {
        flex-basis: 20px;
        text-align: right;
        background-color: inherit;
        border: none;
        color: #dce4ec;
        cursor: pointer;
    }
</style>