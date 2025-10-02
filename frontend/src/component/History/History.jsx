import React, { useContext, useState, useEffect } from "react";
import styles from "./History.module.css";
import Skeleton from "@mui/material/Skeleton";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import axios from "../../utils/axios";
import { AuthContext } from "../../utils/AuthContext";

const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userInfo?._id) return; // Prevent request if userInfo not ready
      setLoader(true);
      try {
        const results = await axios.get(`/api/resume/get/${userInfo._id}`);
        setData(results.data.resume || []); // ✅ Use correct key
        console.log("Fetched resume history:", results.data.resume);
      } catch (err) {
        console.error("Error fetching history:", err);
        alert("Something went wrong while fetching history");
      } finally {
        setLoader(false);
      }
    };

    fetchUserData();
  }, [userInfo?._id]);

  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>
        {loader && (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "20px" }}
            width={280}
            height={280}
          />
        )}

        {!loader && data.length === 0 && <p>No resume history found.</p>}

        {!loader &&
          data.map((item) => (
            <div key={item._id} className={styles.HistoryCard}>
              <div className={styles.cardPercentage}>
                {item.score ? `${item.score}%` : "N/A"}
              </div>
              <h2>{item.job_desc.split(",")[0]}</h2>
              <p>Resume Name: {item.resume_name}</p>
              <p>{item.feedback || "No feedback yet."}</p>
              <p>Dated: {new Date(item.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default withAuthHOC(History);
