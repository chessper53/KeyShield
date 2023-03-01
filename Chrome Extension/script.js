//Gets the Input Element
document.getElementById("pwgenerator").addEventListener("click", generatepassword);

function generatepassword(){
    //Check for the clicked Radio
    if(document.getElementById('compRandom').checked) {
        let result = '';
        let length = 9;
        //Define Range of Characters
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        //Generate the Random Characters
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("resultpassword").value = result;
    }else if(document.getElementById('specialchars').checked) {
        let result = '';
        let length = 9;
        //Define Range of Characters
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$-/%@?!';
        let charactersLength = characters.length;
        //Generate the Random Characters
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        document.getElementById("resultpassword").value = result;
    }
}
