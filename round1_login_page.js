var MongoClient=require('mongodb').MongoClient
var url = "mongodb://localhost:27017/newdb"

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    console.log("Database Created")
    var dbo = db.db("newdb")
    dbo.createCollection("users",function(err,res){
        if (err) throw err;
        console.log("collection created")
        
    })
    db.close();
} )


function checkCredentials(form)
  {
      if(form.logid.value=="given" && form.pass.value=="given"){
       alert("Login successful")
      }

      else {
          alert("entered credentials are wrong")
      }
  }