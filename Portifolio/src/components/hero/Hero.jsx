import { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Hero.css";

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const text = "Karen Valentim";
    const [typedText, setTypedText] = useState("");

    // Efeito de digitação
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setTypedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="hero">

            {/*Shader Hero*/}
            <div className="hero-bg">
                <ShaderGradientCanvas>
                    <ShaderGradient
                        control="query"
                        urlString="https://shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%23606080&color2=%238d7dca&color3=%23fff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.1&uStrength=2.4&uTime=0.2&wireframe=false"
                    />
                </ShaderGradientCanvas>
            </div>

            <div className="hero-content">
                <h1>
                    Hello World, eu sou{" "}
                    <span className="typing-group">
                        <span className="typing">{typedText}</span>
                    </span>
                </h1>

                <p>
                    Estudante do técnico de informática para Internet (Desenvolvedor
                    FullStack e Mobile).
                    <br />
                    Tenho interesse em desenvolvimento web e criação de soluções digitais.
                </p>

                <div className="hero-actions">
                    <div className="social-icons">
                        <a href="https://github.com/Karenvalentim2004" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/karen-valentim2004" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <br />

                    <a href="/Karen Ramos Valentim-TI.pdf" className="btn-cv" download>
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;