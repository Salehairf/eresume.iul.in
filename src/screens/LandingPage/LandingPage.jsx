import React from "react";
import { Btn } from "../../components/Btn";
import { FacebookNegative } from "../../icons/FacebookNegative";
import { FacebookNegative1 } from "../../icons/FacebookNegative1";
import { InstagramNegative1 } from "../../icons/InstagramNegative1";
import { LinkedinNegative1 } from "../../icons/LinkedinNegative1";
import { TwitterNegative1 } from "../../icons/TwitterNegative1";
import "./style.css";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export const LandingPage = () => {
  return (
    // document.body.style.zoom="25%";
    <div className="landing-page">
      <div className="div">
        <div className="about-me">
          <div className="group">
            <div className="logo">
              <p className="mumair">

                {/* <span className="span">S</span> */}
                <span className="text-wrapper-2">i</span>
                <span className="span">B</span>
                <span className="text-wrapper-2">eg</span>
              </p>


              <img className="subtract" alt="Subtract" src="/img/icon.png" />
            </div>
            <div className="frame">
              {/* <div className="div-wrapper"> */}
              <a href="#home" >

                <Button variant="outline-warning" className="text-wrapper-3" onClick={'#home'}>Home</Button>
              </a>
              {/* </div> */}
              {/* <div className="div-wrapper"> */}
              <a href="#about" >
                <Button variant="outline-warning" className="text-wrapper-3" onClick={'#about'}>About Me</Button>
              </a>
              {/* <div className="text-wrapper-4"><a href="#about">About Me</a></div> */}
              {/* </div> */}
              {/* <div className="div-wrapper"> */}
              <a href="#services" >
                <Button variant="outline-warning" className="text-wrapper-3" onClick={'#services'}>Services</Button>
              </a>
              {/* <div className="text-wrapper-4"><a href="#services">Services</a></div> */}
              {/* </div> */}
              {/* <div className="div-wrapper"> */}
              <a href="#projects" >
                <Button variant="outline-warning" className="text-wrapper-3" onClick={'#projects'}>Projects</Button>
              </a>
              {/* <div className="text-wrapper-4"><a href="#projects">Projects</a></div> */}
              {/* </div> */}
              {/* <div className="div-wrapper"> */}
              <a href="#contact" >
                <Button variant="outline-warning" className="text-wrapper-3" onClick={'#contact'}>Contact</Button>
              </a>
              {/* <div className="text-wrapper-4"><a href="#contact">Contact</a></div> */}
              {/* </div> */}
            </div>
            <div className="overlap-group-wrapper">
              {/* <div className="overlap-group"> */}
              <a href="/img/salehaResume.pdf" download="Saleha's Resume" target='_blank' >
                <Button variant="outline-success" onClick={'#contact'}>Download CV</Button>
              </a>
              {/* <div className="text-wrapper-5"><a href="/img/Aafia_Irfan_Beg(Resume).pdf" download="Aafia's Resume" target='_blank'  >Downlaod CV</a></div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="overlap">
            <div className="group-2">
              <div className="group-3">
                <div className="overlap-group-2">
                  <img className="img" alt="Ellipse" src="/img/ellipse-4-1.svg" />
                  <img className="img" alt="Mask group" src="/img/about.jpg" />
                  {/* <img className="background-copy" alt="Background copy" src="/img/background-copy-2.png" /> */}
                </div>
              </div>
              <p className="p">
                I am a second year CSE student. I have learned many languages and new technologies.
                I am brushing up my skills by participating in hackathons grading up on Hackerrank Leetcode like platforms.
              </p>
              <div className="text-wrapper-6" id="about">About Me</div>
              <div className="group-4">
                <div className="group-5">
                  <div className="text-wrapper-7">UX</div>
                  <div className="group-6">
                    <div className="overlap-group-3">
                      <div className="rectangle" />
                      <div className="rectangle-2" />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-8">Website Design</div>
                <div className="overlap-2">
                  <div className="rectangle" />
                  <div className="rectangle-3" />
                  <div className="ellipse-2" />
                </div>
                <div className="text-wrapper-9">App Design</div>
                <div className="overlap-3">
                  <div className="rectangle" />
                  <div className="rectangle-4" />
                  <div className="ellipse-3" />
                </div>
                <div className="text-wrapper-10">Graphic Design</div>
                <div className="overlap-wrapper">
                  <div className="overlap-group-3">
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                    <div className="ellipse" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="rectangle-5" /> */}
          </div>
        </div>
        <div className="services">
          <div className="group-7">
            <div className="group-8">
              <p className="text-wrapper-11">
                I want to make positive contribution to any organization by utilizing my skills and knowledge in best way.
                I am confidence that together we can develop and achieve great success. 
              </p>
              <div className="text-wrapper-12" id="services">Services</div>
            </div>

            <div className="group-9">
              <div className="group-wrapper">
                <div className="group-10">
                  <div className="text-wrapper-13">Website Design</div>
                  <p className="text-wrapper-14">
                    I am interested in designing and creating new things.
                    I am working on few other website.
                  </p>
                  {/* <div className="overlap-group-4">
                    <img className="vector" alt="Vector" src="/img/vector-11.svg" />
                    <img className="vector-2" alt="Vector" src="/img/vector-10.svg" />
                    <img className="vector-3" alt="Vector" src="/img/vector-9.svg" />
                    <img className="vector-4" alt="Vector" src="/img/vector-8.svg" />
                    <img className="vector-5" alt="Vector" src="/img/vector-7.svg" />
                    <img className="vector-6" alt="Vector" src="/img/vector-6.svg" />
                    <img className="vector-7" alt="Vector" src="/img/vector-5.svg" />
                  </div> */}
                </div>
              </div>
              <div className="overlap-4">
                <div className="text-wrapper-15">Machine Learning</div>
                <p className="text-wrapper-16">
                  I have created few projects during my school time.
                  I craeted a small chicken bulb box model at my home
                </p>
                <img className="layer" alt="Layer" src="/img/layer-1.svg" />
              </div>
              <div className="overlap-5">
                <div className="text-wrapper-15">Editing </div>
                <p className="text-wrapper-16">
                  As a side hustle since school time I have edited many videos photos.
                  I have craeted many vlogs shooted and edited on my own.
                </p>
                <img className="group-11" alt="Group" src="/img/group-18.png" />
              </div>
              <div className="overlap-6">
                <div className="text-wrapper-15">Graphic Design</div>
                <p className="text-wrapper-16">
                  I am a good graphic designer
                </p>
                {/* <div className="overlap-7">
                  <img className="vector-8" alt="Vector" src="/img/vector-3.svg" />
                  <img className="vector-9" alt="Vector" src="/img/vector-2.svg" />
                  <img className="vector-10" alt="Vector" src="/img/vector-1.svg" />
                  <img className="vector-11" alt="Vector" src="/img/vector.svg" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="frame-2">
          
          {/* <p className="text-wrapper-17">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus
            consequat urna tellus
          </p> */}
          <div className="text-wrapper-18" id="projects">My Skills</div>
          <div className="group-12">
            <div className="overlap-group-5">
              <div className="frame-3">
                <div className="text-wrapper-19">Java</div>
              </div>
              {/* <div className="frame-3">
                <div className="text-wrapper-19">UI/UX</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-19">UI/UX</div>
              </div> */}
              <div className="frame-3">
                <div className="text-wrapper-19">React</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-19">Java</div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-19">C/C++</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-19">Aws</div>
            </div>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-19">MySql</div>
          </div>

          {/* <div className="group-13">
            <div className="group-14">
              <div className="overlap-group-6">
                <img className="web-designs" alt="Web designs" src="/img/web-designs-5.png" />
                <img className="web-designs-2" alt="Web designs" src="/img/web-designs-4.png" />
              </div>
            </div>
            <div className="text-wrapper-21">Web Design</div>
            <div className="text-wrapper-22">AirCalling Landing Page Design</div>
          </div>
          <div className="group-15">
            <div className="overlap-8">
              <div className="rectangle-6" />
              <img className="web-designs-3" alt="Web designs" src="/img/web-designs-3.png" />
              <img className="web-designs-4" alt="Web designs" src="/img/web-designs-2.png" />
            </div>
            <div className="text-wrapper-21">Web Design</div>
            <div className="text-wrapper-23">Business Landing Page Design</div>
          </div>
          <div className="group-16">
            <div className="overlap-8">
              <div className="rectangle-6" />
              <img className="web-designs-5" alt="Web designs" src="/img/web-designs-1.png" />
              <img className="web-designs-6" alt="Web designs" src="/img/web-designs.png" />
            </div>
            <div className="text-wrapper-21">Web Design</div>
            <div className="text-wrapper-23">Ecom Web Page Design</div>
          </div> */}
        </div>
        
        <div className="frame-8" id="contact">
          <div className="group-17">
            <p className="text-wrapper-11">
            Mobile number: +91 830345210
            <br></br>
            Email id: swalehairfan321@gmail.com
            </p>
            <div className="text-wrapper-24">Contact Me!</div>
          </div>
          {/* <div className="group-18"> */}
            {/* <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-10.png" />
            <div className="group-19">
              <div className="overlap-9">
                <div className="overlap-group-7"> */}
                  {/* <p className="text-wrapper-25">
                    Mobile number: +91 830345210
                    Email id: swalehairfan321@gmail.com
                  </p> */}
                  {/* <div className="text-wrapper-26">“</div> */}
                {/* </div> */}
                {/* <div className="text-wrapper-27">Name</div> */}
              {/* </div>
              <div className="text-wrapper-28">“</div>
              <div className="text-wrapper-29">CEO</div>
            </div> */}
          {/* </div>
          <div className="group-20">
            <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-11.png" />
            <div className="group-19">
              <div className="overlap-9">
                <div className="overlap-group-7">
                  <p className="text-wrapper-25">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis
                    id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo
                    ultrices.
                  </p>
                  <div className="text-wrapper-26">“</div>
                </div>
                <div className="text-wrapper-27">Name</div>
              </div>
              <div className="text-wrapper-28">“</div>
              <div className="text-wrapper-29">CEO</div>
            </div>
          </div>
          <div className="group-21">
            <div className="ellipse-5" />
            <div className="group-19">
              <div className="overlap-9">
                <div className="overlap-group-7">
                  <p className="text-wrapper-25">
                    Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis
                    id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo
                    ultrices.
                  </p>
                  <div className="text-wrapper-26">“</div>
                </div>
                <div className="text-wrapper-27">Name</div>
              </div>
              <div className="text-wrapper-28">“</div>
              <div className="text-wrapper-29">CEO</div>
            </div>
          </div>
          <div className="group-22">
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
          </div> */}
        </div>


        {/* <div className="frame-9">
          <div className="group-23">
            <p className="text-wrapper-11">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
              convallis pretium
            </p>
            <div className="text-wrapper-30">Lets Design Together</div>
          </div>
          <div className="group-24">
            <div className="overlap-group-8">
              <input type="text" className="text-wrapper-31" placeholder="Enter Your Email" />
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-32" id="contact">Contact Me</div>
            </div>
          </div>
        </div> */}


        <div className="frame-10">
          <div className="element-mumair-all-wrapper">
            <p className="element-mumair-all">
              <span className="text-wrapper-33">© 2023 </span>
              <span className="text-wrapper-34">Saleha </span>
              <span className="text-wrapper-33">All Rights Reserved , Inc.</span>
            </p>
          </div>
          <div className="logo-2">
            <p className="mumair">
              {/* <span className="span">S</span> */}
              <span className="text-wrapper-2">iBeg </span>
            </p>
            <img className="subtract" alt="Subtract" src="/img/icon.png" />
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-3"><a href="#home">Home</a></div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-4"><a href="#about">About Me</a></div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-4"><a href="#services">Services</a></div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-4"><a href="#projects">Projects</a></div>
            </div>
            <div className="frame-12">
              <div className="text-wrapper-4"><a href="#contact">Contact</a></div>
            </div>
          </div>
          <div className="group-25">
            <a href="#" alt="icon"><LinkedinNegative1 className="linkedin-negative" /></a>
            <a href="#" alt="icon"><InstagramNegative1 className="instagram-negative" /></a>
            <a href="#" alt="icon"><TwitterNegative1 className="twitter-negative" /></a>
            <a href="#" alt="icon"><FacebookNegative1 className="facebook-negative" /></a>
          </div>
        </div>
        <div className="frame-13">
          <div className="header">
            <div className="overlap-11">
              <div className="group-26">
                <div className="group-27">
                  <div className="text-wrapper-35" id="home">Hi I am</div>
                  <div className="overlap-group-9">
                    <div className="text-wrapper-36">Saleha Irfan Beg</div>
                    <div className="UI-UX">React</div>
                    <div className="text-wrapper-37">Developer</div>
                  </div>
                </div>
                <p className="text-wrapper-38">
                  I am a self taught front-end developer.
                  I am a second year CSE student and along with my studies I am focusing on building my career.
                </p>
                {/* <a href="https://www.linkedin.com/in/saleha-irfan-beg-1aa454264"><Btn className="btn-instance" /></a> */}
                <div className="group-28">
                  <div className="overlap-12">
                    <img className="ellipse-6" alt="Ellipse" src="/img/ellipse-4.svg" />
                    <img className="mask-group" alt="Mask group" src="/img/saleha2.png" />
                    {/* <img className="layer-copy" alt="Layer copy" src="/img/layer-0-copy-4.png" /> */}
                  </div>
                </div>
              </div>
              {/* <div className="rectangle-11" /> */}
            </div>
          </div>
          <div className="group-29">
            <a href="https://www.linkedin.com/in/saleha-irfan-beg-1aa454264" target="_blank" rel="noopener noreferrer"><LinkedinNegative1 className="linkedin-negative" /></a>
            <a href="#" alt="linkedin"><InstagramNegative1 className="instagram-negative" /></a>
            <a href="#" alt="linkedin"><TwitterNegative1 className="twitter-negative" /></a>
            <a href="#" alt="linkedin"><FacebookNegative className="facebook-negative" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
