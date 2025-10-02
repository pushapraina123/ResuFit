import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import Skeleton from "@mui/material/Skeleton";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import axios from "../../utils/axios";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true);
      try {
        const results = await axios.get("/api/resume/get"); // backend route
        console.log(results.data);
        setData(results.data.resume || []);
      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      } finally {
        setLoader(false);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
        {loader && (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "20px" }}
            width={280}
            height={280}
          />
        )}

        {data.map((item) => (
          <div key={item._id} className={styles.AdminCard}>
            <h2>{item.user?.name || "Unknown User"}</h2>
            <p style={{ color: "blue" }}>{item.user?.email || "No Email"}</p>
            <h3>Score: {item.score || "N/A"}%</h3>
            <h3>Resume_name: {item.resume_name || "N/A"}</h3>
            <p>{item.feedback || "No feedback available."}</p>
            <p>Dated: {new Date(item.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuthHOC(Admin);
