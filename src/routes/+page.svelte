<script>
        import { sha256, salt } from "../Scripts/hash.js";
        let inp = "";
        let sal = "";
        let password = "";
        let show_password = true
$: type = show_password ? 'text' : 'password'
	
function updateSal (event) {
	sal = event.target.value
}

        async function hash() {
                password = "Ed@1" + await sha256(await salt(inp.toLocaleLowerCase(), sal));
        }
</script>
<title>EdPass</title>
<div class="box has-text-centered v-centered">
        <h1 class="title is-1">EdPass</h1>
        <h2 class="subtitle is-5">Password Generator</h2>
        <br>
        <!-- <h1 class="subtitle is-5">Only Remember One Password! Use an input such as the name or url of a website ( for example Youtube or youtube.com ).</h1> -->
        <h1 class="subtitle is-5">Only Remember One Password! Use an input such as the name or url of a website ( for example Youtube or youtube.com ). 
                <br> Use the input and your master password to generate the password for an app. <br> The same password will always be generated so as long as you know the input you will never lose your password.</h1>

        <input class="input" placeholder="Input" bind:value={inp}>
        <!-- <input type={hidden} class="input" placeholder="Password/Salt" bind:value={sal}>  -->
        <input class="input" placeholder="Master Password" { type } { sal } on:input={ updateSal } />
        <button class="button"type="button" on:click="{ () => show_password = !show_password }">{show_password ? 'Hide MasterPassword' : 'Show MasterPassword'}</button>
        <br>
        <button class="button" on:click={hash}>Generate Password</button>
        <h1 class="subtitle">{password}</h1>
</div>
