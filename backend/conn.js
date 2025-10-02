const mongoose=require('mongoose'); 
mongoose.connect('mongodb+srv://rainapushap96_db_user:LNRku9OnkOcS2zRS@cluster0.mjrguyf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log("Database connected successfully");
}).catch(err=>{
    console.log("Error connecting to the database", err);   
});




//LNRku9OnkOcS2zRS
//rainapushap96_db_user
