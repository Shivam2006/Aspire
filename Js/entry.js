class Entry{
constructor(){
    this.Email=null;
}
getEmail(){
    var Emailref=database.ref('Email');
    Emailref.on("value",(data)=>{
        Email=data.val();
    })
}

 static update(){
    database.ref('/').set({
        Email:this.Email
    })
}

}