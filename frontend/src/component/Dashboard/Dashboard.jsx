import React, { useState, useContext } from 'react';
import styles from './Dashboard.module.css';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Skeleton from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';
import axios from '../../utils/axios';
import { AuthContext } from '../../utils/AuthContext';

const Dashboard = () => {
  const [uploadFileText, setUploadFileText] = useState("Upload your resume");
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const {userInfo}=useContext(AuthContext);
 
  const [error, setError] = useState("");

  

  

  

  // Handle file input change
  const handleOnChangeFile = (e) => {
   
    setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name);
  };

  // Handle analyze button click
const handleUpload=async()=>{
  setResult(null);


  if(!jobDesc || !resumeFile){
    alert("Please upload resume and provide job description");
  }

  const formData=new FormData();
  formData.append("resume", resumeFile);
  formData.append("job_desc", jobDesc);
  formData.append("user",userInfo._id);

  setLoading(true);

  try {
    const result= await axios.post('/api/resume/addResume',formData);
    setResult(result.data.data);
    
  } catch (err) {
    console.log(err);
    
  }finally{
    setLoading(false);
  }

  

}

  return (
    <div className={styles.Dashboard}>
      {/* Left Section */}
      <div className={styles.DashboardLeft}>
        {/* Header */}
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
          <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score</div>
        </div>

        {/* Alert Info */}
        <div className={styles.alertInfo}>
          <div> 🔔 Important Instructions:</div>
          <div className={styles.dashboardInstruction}>
            <div>🗒️ Paste the complete job description before submitting.</div>
            <div>🔗 Only PDF files (.pdf) are supported</div>
          </div>
        </div>

        {/* Upload Resume */}
        <div className={styles.DashboardUploadResume}>
          <div className={styles.ResumeUploadBlock}>{uploadFileText}</div>
          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeBtn}>
              Upload Resume
            </label>
            <input
              type="file"
              accept=".pdf"
              id="inputField"
              onChange={handleOnChangeFile}
            />
          </div>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>

        {/* Job Description */}
        <div className={styles.jobDesc}>
          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            className={styles.textArea}
            placeholder="Paste your job description here..."
            rows={10}
            cols={50}
          />
          <div className={styles.analyzeBtn} onClick={handleUpload}>
            Analyze
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.DashboardRight}>
        <div className={styles.DashboardRightTopCard}>
          <div>Analyze With AI</div>
          

          
        <img className={styles.profileImg} src={userInfo?.photoUrl}/>


          <h2>{userInfo?.name}</h2>
        </div>

        {loading && (
          <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={260} height={260} />
        )}

        {result && (
          <div className={styles.DashboardRightTopCard}>
            <div>Result</div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <h1>{result?.score}%</h1>
              <CreditScoreIcon sx={{ fontSize: 22 }} />
            </div>
            <div className={styles.feedback}>
              <h3>Feedback</h3>
              <p>{result.feedback}</p>
            </div>
          </div>
        )}
      </div>
    </div>

  

  );
};



export default WithAuthHOC(Dashboard);
