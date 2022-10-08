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
                password = "Ed@1" + await sha256(await salt(inp, sal));
        }
</script>
<title>EdPass</title>
<div class="box has-text-centered v-centered">
        <h1 class="title">EdPass</h1>
        <input class="input" placeholder="Input" bind:value={inp}>
        <!-- <input type={hidden} class="input" placeholder="Password/Salt" bind:value={sal}>  -->
        <input class="input" placeholder="Password/Salt" { type } { sal } on:input={ updateSal } />
        <button class="button"type="button" on:click="{ () => show_password = !show_password }">{show_password ? 'Hide Password/Salt' : 'Show Password/Salt'}</button>
        <br>
        <button class="button" on:click={hash}>Hash</button>
        <h1 class="subtitle">{password}</h1>
</div>
