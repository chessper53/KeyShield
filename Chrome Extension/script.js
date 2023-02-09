document.getElementById("pwgenerator").addEventListener("click", generatepassword);

function generatepassword(){

    if(document.getElementById('compRandom').checked) {
        let result = '';
        let length = 9;
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("resultpassword").value = result;
    }else if(document.getElementById('specialchars').checked) {
        let result = '';
        let length = 9;
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-/%@?!';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("resultpassword").value = result;
    }
}