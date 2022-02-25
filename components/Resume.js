import { useContext, useEffect } from "react";
import { FormContext } from "./FormContext";
import avatar from "./avatar.jpg";
import Pdf from "react-to-pdf";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import styles from '../styles/Home.module.css'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRecoilState } from "recoil";
import { downloadStatus } from "./downloadStatusAtom";
import { StylesContext } from "@material-ui/styles";

export default function Resume() {
  const [
    {
      Basics = [],
      Jobs = [
        {
          title: "SDE I",
          employer: "Google USA",
          city: "LA",
          state: "CA",
          start: "2024",
          end: "2035",
        },
      ],
      Edu = [
        {
          institute: "VIT",
          location: "Chennai",
          degree: "B.tech ",
          stream: "CSE",
          start: "2019",
          end: "2023",
        },
      ],
      skills = [],
      Languages = [],
      Interests = [],
      Certificates = [],
      firstName = "Your",
      lastName = "Name",
      profession = "",
      city = "LA",
      state = "CA",
      zip = "11045",
      email = "abc@gmail.com",
      phone = "+1234567890",
      isFilePicked = false,
      about = "",
    },
    setForm,
  ] = useContext(FormContext);
  const contact_info_li = {
    padding: ".1rem 0",
    display: "flex",
    alignItems: "center",
    color: "#718096",
  };
  const main_title = {
    fontSize: "1.4rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#f7f7f7ec",
    paddingTop: ".4rem",
  };
  useEffect(() => {}, []);

  const inputRef = useRef(null);
  const [isDownload, setIsDownload] = useRecoilState(downloadStatus);

  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("Resume.pdf");
    });
  };

  // printDocument();
  useEffect(() => {
    isDownload && printDocument();
    setIsDownload(false);
  }, [isDownload]);

  return (
    <div
      id="divToPrint"
      ref={inputRef}
      className={styles.right}
      style={{
        height: "116.8vh",
        width: "41.29vw",
      }}
    >
      <div
        className={styles.mainContent}
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          padding: "3px",
        }}
      >
        <div
          className={styles.leftSection}
          style={{
            display: "flex",
            flex: "0.3",
            flexDirection: "column",
            alignItems: "stretch",
            backgroundColor: "#00324A",
          }}
        >
          <div className={styles.leftContent} style={{ padding: "1rem 1.4rem" }}>
            {/* <Button className="print-btn" onClick={toPdf} variant='success'> Download PDF </Button> */}
            <div
              style={
                isFilePicked
                  ? { borderBottom: "1px solid #002333", textAlign: "center" }
                  : { textAlign: "center" }
              }
              className={styles.profile}
            >
              {isFilePicked ? (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "10px",
                  }}
                  className={styles.image}
                >
                  <img
                    style={{
                      width: "80%",
                      borderRadius: "50%",
                      border: "8px solid #002333",
                    }}
                    src={localStorage.getItem("recent-image")}
                    alt="Profile"
                  />
                </div>
              ) : (
                <></>
              )}
              <h2
                className={styles.name}
                style={{
                  fontSize: "1.6rem",
                  color: "white",
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  padding: "1.2rem 0",
                }}
              >
                {firstName + " " + lastName}
              </h2>
              <p
                className={styles.career}
                style={{
                  fontSize: "1.2rem",
                  color: "#94D9EA",
                  textAlign: "center",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {profession}
              </p>
            </div>
            {phone || email || city || state || zip ? (
              <div className={styles.contactInfo}>
                <h3 className={styles.mainTitle} style={main_title}>
                  Contact Info
                </h3>
                <ul style={{ paddingTop: "0.6rem" }}>
                  <li style={contact_info_li}>{phone}</li>
                  <li style={contact_info_li}>{email}</li>
                  <li style={contact_info_li}>
                    {city} {state} {zip}{" "}
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
            {skills.length ? (
              <div className={styles.skillsSection}>
                <h3 className={styles.mainTitle} style={main_title}>
                  Skills
                </h3>
                <ul style={{ paddingTop: "0.6rem" }}>
                  {[...skills].map((skill) => (
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                      }}
                      className={styles.skill}
                    >
                      <div>
                        <h4
                          className={styles.skillTitle}
                          style={{
                            textTransform: "uppercase",
                            color: "#f7f7f7",
                            fontSize: "1rem",
                          }}
                        >
                          {skill.skill}
                        </h4>
                      </div>
                      <div>
                        {[...Array(parseInt(skill.rating))].map((_, k) => (
                          <FaStar key={k} size={15} color={"#ffc107"} />
                        ))}
                        {5 - parseInt(skill.rating) > 0 &&
                          [...Array(parseInt(5 - skill.rating))].map((_, k) => (
                            <FaStar key={k} size={20} color={"#e4e5e9"} />
                          ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div style={{ flex: "0.7" }}>
          <div
            className={styles.rightSection}
            style={{
              paddingLeft: "5px",
              height: "100%",
              width: "100%",
              backgroundColor: "#f7f7f7",
            }}
          >
            <div
              className={styles.rightMainContent}
              style={{ padding: "1rem 1.4rem", width: "100%" }}
            >
              {about ? (
                <div className={`${styles.about} ${styles.sect}`}>
                  <h2 className={styles.rightTitle}>About Me</h2>
                  <p className={styles.para}>
                    {/* {[...Summary].map((skill)=>(<span style={{color:'black'}} className="skill-title">{skill}.&nbsp;</span>))} */}
                    <ReactMarkdown children={about} />
                  </p>
                </div>
              ) : (
                <></>
              )}
              <div className={`${styles.experience} ${styles.sect}`}>
                {Jobs.length ? (
                  <h2 className={styles.rightTitle} style={{ width: "100%" }}>
                    Experience
                  </h2>
                ) : (
                  <></>
                )}
                {[...Jobs].map((job) => (
                  <div
                    className={styles.timeline}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <div className={styles.leftTlContent} style={{ flex: "1" }}>
                      <h5 className={styles.tlTitle}>{job.employer}</h5>
                      <p className={styles.para}>
                        {job.start} - {job.end}
                      </p>
                    </div>
                    <div className={styles.rightTlContent} style={{ flex: "1" }}>
                      <div className={styles.tlContent}>
                        <h5 className={styles.tlTitle2}>{job.title}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.education} ${styles.sect}`}>
                {Edu.length ? (
                  <h2 className={styles.rightTitle}>Education</h2>
                ) : (
                  <></>
                )}
                {[...Edu].map((edu) => (
                  <div
                    className={styles.timeline}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <div className={styles.leftTlContent} style={{ flex: "1" }}>
                      <h5 className={styles.tlTitle}>
                        {edu.institute + " " + edu.location}
                      </h5>
                      <p className={styles.para}>
                        {edu.start} - {edu.end}
                      </p>
                    </div>
                    <div className={styles.rightTlContent} style={{ flex: "1" }}>
                      <div className={styles.tlContent}>
                        <h5 className={styles.tlTitle2}>
                          {edu.degree + "" + edu.stream}
                        </h5>
                        {/* <p className="para">
                                                Some Description
                                            </p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {Languages.length === 0 ? (
                <></>
              ) : (
                <>
                  <h2 className={styles.rightTitle}>Languages</h2>
                  {[...Languages].map((lang) => (
                    <h4>{lang.language + " " + lang.proficiency}</h4>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
