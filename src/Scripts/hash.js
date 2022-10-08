async function sha256(message) {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);                    
    
        // hash the message
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    
        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));
    
        // convert bytes to hex string                  
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join("");
        return hashHex;
}
async function salt(message, salt) {
        console.log(mixString(message, salt));
        return await sha256(mixString(message, salt));
}
const mixString = (s,t,d) => ( d = s.length - t.length
        , String.raw({raw: s},...t) + (d < 0 ? t.slice(d) : "")
        );
export { sha256, salt, mixString };