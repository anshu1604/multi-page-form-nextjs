import { useContext } from 'react';
import { FormContext } from './FormContext';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Container,Row,Col} from 'react-bootstrap';
import avatar from './avatar.jpg'
import Pdf from "react-to-pdf";
import styles from '../styles/Home.module.css'

export default function Footer(){
    const navStyle = {
        background:'black',
        color:'white'
        
      };
    const [{
        firstName="First",
        lastName="Last",
        profession="Full Stack Developer",
        city="Faridabad",
        state="Haryana",
        zip="121001",
        email="manishswami.dev@gmail.com",
        phone="+919876543210",
        jobTitle="Open Source Contributor",
        jobEmployer="Github",
        jobCity="remote",
        jobState="",
        jobStart="01-05-2020",
        jobEnd="01-12-2022",
        collegeName="VIT",
        collegeLocation="Chennai",
        degree="B.Tech",
        stream="CSE",
        degreeStart="07-07-2019",
        degreeEnd="15-03-2023",
        skills=[],
        Summary=[]
    },setForm] = useContext(FormContext)
    return(
        <div className={styles.right}>  
            <div className={styles.resume}>
                <section className={styles.leftSection}>
                    <div className={styles.leftContent}>
                        <div className={styles.profile}>
                            <div className={styles.image}>
                                <img src={avatar} alt="" / >
                            </div>
                            <h2 className={styles.name}>{firstName+' '+lastName}</h2>
                            <p className={styles.career}>{profession}</p>
                        </div>
                        <div className={styles.contactInfo}>
                            <h3 className={styles.mainTitle}>Contact Info</h3>
                            <ul>
                                <li>{phone}</li>
                                <li>{email}</li>
                                <li>{city} {state} {zip} </li>
                            </ul>
                        </div>
                        <div className={styles.skillsSection}>
                            <h3 className={styles.mainTitle}>Skills</h3>
                            {[...skills].map((skill)=>(<h3 style={{color:'white'}} className={styles.skillTitle}>{skill.skill}</h3>))}
                        </div>
                    </div>
                </section>
                <section className={styles.rightSection}>
                    <div className={styles.rightMainContent}>
                        <section className={`${styles.about} ${styles.sect}`}>
                            <h2 className={styles.rightTitle}>About Me</h2>
                            <p className={styles.para}>
                                {[...Summary].map((skill)=>(<span style={{color:'black'}} className={styles.skillTitle}>{skill}&nbsp;</span>))}
                            
                            </p>
                        </section>
                        <section className={`${styles.experince} ${styles.sect}`}>
                        <h2 className={styles.rightTitle}>Experience</h2>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>Microsoft</h5>
                                <p className={styles.para}>2017 - 2019</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle-2}>Junior Developer</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>Google Inc</h5>
                                <p className={styles.para}>2019 - 2020</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle2}>Lead Web developer</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>Google Inc</h5>
                                <p className={styles.para}>2019 - 2020</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle2}>Lead Web developer</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>Apple</h5>
                                <p className={styles.para}>2020 - Present</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle-2}>Senior Developer</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section className={`${styles.education} ${styles.sect}`}>
                        <h2 className={styles.rightTitle}>education</h2>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>Cheney School</h5>
                                <p className={styles.para}>2015 - 2016</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle2}>Gcse's</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>Cheney School</h5>
                                <p className={styles.para}>2016 - 2018</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle-2}>A - Levels</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.leftTlContent}>
                                <h5 className={styles.tlTitle}>University of Sussex</h5>
                                <p className={styles.para}>2018 - Present</p>
                            </div>
                            <div className={styles.rightTlContent}>
                                <div className={styles.tlContent}>
                                    <h5 className={styles.tlTitle2}>Computer Science</h5>
                                    <p className={styles.para}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                        voluptatem deleniti, 
                                        laboriosam odio nobis quae fugit facilis quo.
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                <section className={`${styles.awards} ${styles.sect}`}>
                    <h2 className={styles.rightTitle}>Awards</h2>
                    <div className={styles.timeline}>
                        <div className={styles.leftTlContent}>
                            <h5 className={styles.tlTitle}>Microsoft</h5>
                            <p className={styles.para}>June 2016</p>
                        </div>
                        <div className={styles.rightTlContent}>
                            <div className={styles.tlContent}>
                                <h5 className={styles.tlTitle2}>Excellent Work</h5>
                                <p className={styles.para}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                    voluptatem deleniti, 
                                    laboriosam odio nobis quae fugit facilis quo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.leftTlContent}>
                            <h5 className={styles.tlTitle}>Alphabet Inc</h5>
                            <p className={styles.para}>June 2016</p>
                        </div>
                        <div className={styles.rightTlContent}>
                            <div className={styles.tlContent}>
                                <h5 className={styles.tlTitle2}>The Star Employee</h5>
                                <p className={styles.para}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cupiditate vitae 
                                    voluptatem deleniti, 
                                    laboriosam odio nobis quae fugit facilis quo.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                </section>
            </div>          
        </div>
    )
}