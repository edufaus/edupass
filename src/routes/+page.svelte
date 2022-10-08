<script>
        import { sha256, salt } from "../Scripts/hash.js";
        let inp = "";
        let sal = "";
        let password = "";

        async function hash() {
                password = "Ed@1" + await sha256(await salt(inp, sal));
        }
</script>
<title>EdPass</title>
<div class="box has-text-centered v-centered">
        <h1 class="title">EdPass</h1>
        <input class="input" placeholder="Input" bind:value={inp}>
        <input type="password" class="input" placeholder="Password/Salt" bind:value={sal}> 
        <button class="button" on:click={hash}>Hash</button>
        <h1 class="subtitle">{password}</h1>
</div>
