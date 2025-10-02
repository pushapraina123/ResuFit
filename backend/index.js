const express=require("express");
const app=express();
const cors=require("cors");
require('./conn');
app.use(express.json());
const path=require('path');
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));




const PORT=4000;

const UserRoutes=require('./Routes/user');
app.use('/api/user',UserRoutes);

const ResumeRoutes=require('./Routes/resume');
app.use('/api/resume',ResumeRoutes);



app.use(express.static(path.join(__dirname,"build")));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"build","index.html"));
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);   
})