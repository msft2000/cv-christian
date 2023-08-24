/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/imgs/logo512.png";
import hero from "../assets/imgs/hero.png";
import herosvg from "../assets/imgs/hero.svg";
import audit from "../assets/imgs/audit.png";
import about from "../assets/imgs/about.jpeg";
import bancologo from "../assets/imgs/bancologo.png";
import ue from "../assets/imgs/ue.png";
import getintouch from "../assets/imgs/getintouch.png";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import "../scss/LangingPage.scss";
function LangingPage() {
  // const [loadAboutImg, setLoadAboutImg] = React.useState(false);
  return (
    <React.Fragment>
      <div id="hero">
        <div className="hero--container">
          <nav>
            <div className="nav--logo">
              <div className="nav--logo--container">
                <img src={logo} alt="logo" />
                <h1>logo</h1>
              </div>
            </div>
            <div className="links--white">
              <a href="#">Service</a>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Contact Me</a>
            </div>
            <div className="links--black">
              <div className="links--black--container">
                <div className="decoration--container">
                  <a href="#">
                    <ExpandCircleDownRoundedIcon />
                    Let's Connect
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="hero-content--container">
            <div className="rigth">
              <h2>Best option to kepp your telematics safe</h2>
              <p>
                <ExpandCircleDownRoundedIcon /> Contact Us
              </p>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At deserunt
                ullam odio cum praesentium, eius autem incidunt? Omnis impedit dolor
                quae aliquid debitis quasi quam, illum tempora laboriosam
                repellendus, nihil tenetur numquam commodi saepe consequuntur. Odio,
                repellat! Cum nulla architecto assumenda quo minus, corrupti
                quisquam.
              </p>
            </div>
            <div className="left">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="service">
        <h2>How Can I Help? - Services</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cupiditate
          doloribus hic, odit consectetur voluptatibus voluptate perferendis ipsum
          assumenda quam quasi dignissimos error eius fuga ducimus recusandae.
          Possimus ducimus expedita est quae, nobis suscipit ullam? Illo, ducimus
          doloribus.
        </p>
        <div className="services--container">
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={audit} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={hero} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={hero} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={hero} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={hero} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={hero} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={hero} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
          <div className="service--card--container">
            <h3>/01</h3>
            <div className="nohover">
              <img src={herosvg} alt="Audit logo" />
              <h3>External Audit</h3>
            </div>
            <div className="hover">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
                delectus porro molestiae similique nemo eum totam eaque ex ipsam? Sed
                eos eligendi, itaque aut accusantium perferendis nam amet. Pariatur
                quia eos, eaque autem.
              </p>
              <a href="#">
                <ExpandCircleDownRoundedIcon />
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <h2>About Me</h2>
        <hr />
        <div className="info--container">
          <div className="left">
            <img src={about} className="aboutimg" alt="cristian standed up" />
          </div>
          <div className="rigth">
            <h2>Hi, I'm Cristian</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sapiente
              vel ipsam incidunt labore, numquam dolorum dolore aliquid, et commodi
              nisi? Sunt est dicta mollitia saepe deserunt doloremque repellendus
              distinctio omnis aliquam alias nemo temporibus aliquid iste ipsum
              accusantium laudantium quo, laboriosam eum eveniet, ullam ex ratione,
              sequi rem quidem?
            </p>
            <h3>Experiencia</h3>
            <div className="experience--container">
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2020 - 2021</p>
                </div>
              </div>
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Cloud Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2021 - 2023</p>
                </div>
              </div>
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Cloud Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2021 - 2023</p>
                </div>
              </div>
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Cloud Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2021 - 2023</p>
                </div>
              </div>
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Cloud Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2021 - 2023</p>
                </div>
              </div>
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Cloud Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2021 - 2023</p>
                </div>
              </div>
              <div className="experience--card">
                <div className="left">
                  <img src={bancologo} alt="" />
                </div>
                <div className="rigth">
                  <h3>Security Cloud Architect</h3>
                  <p>Empresa: Banco Pichincha</p>
                  <p>2021 - 2023</p>
                </div>
              </div>
            </div>
            <h3>Estudios</h3>
            <div className="estudios--container">
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
              <div className="estudios--card">
                <div className="left">
                  <img src={ue} alt="" />
                </div>
                <div className="rigth">
                  <h3>Seguridad Informatica</h3>
                  <p>Universidad Europea de Madrid</p>
                  <p>2018 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <h2>Contact Me</h2>
        <hr />
        <div className="contact--container">
          <div className="left">
            <h3>Let's Connect</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, voluptates voluptate quod quos
            </p>
            <div className="contact--info">
              <div className="contact--info--card">
                <h3>Phone</h3>
                <p>+593 999 999 999</p>
              </div>
              <div className="contact--info--card">
                <h3>Email</h3>
                <p>chrisft1993@hotmail.com</p>
              </div>
            </div>
            <form action="">
              <div className="form--group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form--group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form--group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </div>
              <div className="form--group">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="rigth">
            <img src={getintouch} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { LangingPage };
