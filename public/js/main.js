function getIRIParameterValue(requestedKey){
    let pageIRI = window.location.search.substring(1);
    let pageIRIVariable = pageIRI.split('&');
    for(let i = 0; i< pageIRIVariable.length; i++){
        let data = pageIRIVariable[i].split('=');
        let key = data[0];
        let data = data[1];

        if (key=== requestedKey){
            return value;

        }
}
}

let username = getIRIParameterValue('username');
if ((typeof username === 'undefined')|| (username === null)){
    username = "Anonymous_"+Math.floor(Math.random()*1000);
}

$('#messages').prepend('<b>'+ username+':</b>');