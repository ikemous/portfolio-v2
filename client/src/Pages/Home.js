import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import PageContainer from "../Components/PageContainer";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <PageContainer>
            <Helmet>
                <title>Ikemous | Home</title>
                <meta name="description" content="Ikemous home page" />
                <meta name="keywords" content="Ike, Barranco, Ikemous, Home Page, Projects, Coding" />
            </Helmet>
            <Row style={{minHeight: "85vh"}} className="justify-content-center align-items-center">
                <Col xs={{span: 12, order: 2}} lg={{span:8, order: 1}} className="d-flex justify-content-center">
                    <code className="code">
                        <span className="code-keywords">const</span> <span className="code-const-variable">name</span> = <span className="code-strings">"Ike Barranco"</span>;<br />
                        <span className="code-keywords">let</span> occupation = <span className="code-strings">"Full Stack Developer"</span>;<br />
                        <span className="code-keywords">let</span> experienceLevel = <span className="code-strings">"Entry Level"</span>;<br />
            
                        <span className="code-keywords">const</span> <span className="code-const-variable">message</span> = <span className="code-strings">`Hello, I'm 
                        </span><span className="code-string-literal"></span> $&#123;name&#125;<span className="code-string-literal"></span><span className="code-strings">! I'm a</span> <span className="code-string-literal"></span>$&#123;experienceLevel&#125;<span className="code-string-literal"></span> <span className="code-string-literal"></span>$&#123;occupation&#125;<span className="code-string-literal"></span><span className="code-strings">`</span>;<br />
                        
                        <span className="code-console">console</span>.<span className="code-log">log</span>(message);<br />
                    </code>
                </Col>
                <Col xs={{span: 12, order: 1}} lg={{span: 4, order: 2}} className="d-flex justify-content-center">
                    <div>
                        <Image src="./Images/050-mouse.png" alt="mouse icon from https://www.flaticon.com" fluid style={{maxHeight: "35vh", maxWidth: "70vw"}}/>
                        <p style={{color: "lightgray", fontSize: ".6rem"}}>Icon from <a style={{color: "lightgray"}} href="https://www.flaticon.com">https://www.flaticon.com</a></p>
                        <h1 className="text-right" style={{color: "white"}}>Ikemous</h1>
                    </div>
                </Col>
            </Row>
        </PageContainer>
    );
};;