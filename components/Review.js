import Link from "next/link";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useRecoilState } from "recoil";
import { downloadStatus } from "./downloadStatusAtom";
import styles from '../styles/Home.module.css'

export default function Review() {
  const [isDownload, setIsDownload] = useRecoilState(downloadStatus);

  const handlePdfDownload = () => {
    setIsDownload("true");
  };

  return (
    <div className={styles.left}>
      <Container>
        <Row>
          <Col style={{ display: "flex", justifyContent: "start" }}>
            <Link href="/page/extra">
              <Button variant="warning"> Back </Button>
            </Link>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary"> Export JSON </Button>
          </Col>
          <Col style={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handlePdfDownload} variant="success">
              {" "}
              Download PDF{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
