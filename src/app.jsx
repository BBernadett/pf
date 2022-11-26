ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {
    
    return <div id="sections">
    <SectionIntro></SectionIntro>
    <SectionAbout></SectionAbout>
    <SectionSkills></SectionSkills>
    <SectionJobs></SectionJobs>
    </div>
}
 

function SectionIntro() {
    return <section className="introduction" id="introduction">
        <span className="language">EN | HU</span>
        <form>
  <label className="switch" id="switch">
    <input id="isChecked" type="checkbox"/>
    <span className="slider round"></span>
  </label>  
</form> 
        <div className="fade-up">
            <h1 className="enText">Hi, my name is</h1>
            <h1 className="textHidden" id="huText">Köszöntelek oldalamon,</h1>
        </div>
        <div className="fade-up">
            <h2 className="enText">Bernadett Balázs</h2>
            <h2 className="textHidden">Balázs Bernadett <small> vagyok.</small></h2>
            
        </div>
        <div className="fade-up">
            <h3 className="enText">Frontend development is what I'm most interested in and like to work with in the future.</h3>
            <h3 className="textHidden">A FrontEnd fejlesztés, ami a leginkább érdekel, és amivel a jövőben szeretnék foglalkozni.</h3>
        </div>
        <div>
            <p className="enText">
            I always wanted a creative job where I can make my ideas real. I believe that the main reason is that front-end development satisfies my need for creativity. It enabled me to easily put my ideas into digital form and get results back really quick. I still remember the first time I created an HTML page and opened it in the browser. A whole new world of possibilities appeared before my eyes.
            </p>
            <p className="textHidden">
            Kreatív emberként mindig is olyan munkát szerettem volna, ahol megvalósíthatom az ötleteimet. Az egyik ok, amiért a FrontEnd fejlesztést választottam, hogy itt kiélhetem a kreativitás iránti igényemet. 
            Emlékszem, amikor először készítettem egy HTML-oldalt, és megnyitottam a böngészőben. A lehetőségek teljesen új világa tárult a szemem elé.
            </p>
        </div>
        <button id="cv" type="button">
                <a href="./img/cv.pdf" download="resume.pdf" target="_blank" 
                    ><i className="fa-solid fa-download" id="cvIcon"></i> CV</a>
            </button>
        <div>
                        <img src="./img/sec_1.png" className="sec" alt="sec_1" />
                        <hr />
                    </div>
    </section>
}

function SectionAbout() {
    return <section id="about" style={{visibility: "hidden"}}>
        <div className="aboutIn">
            <h3 className="sectionTitle enText">About Me</h3>
            <h3 className="sectionTitle textHidden">Rólam</h3>
            <div>
                <div>
                    <p className="enText">
                    Currently I'm working for a software
                                    development company as a consultant. I
                                    decided to change career, more than half a year ago, I
                                    consider myself as an enthusiastic and
                                    creative person who can adapt to new
                                    circumstances easily and I also learnt to
                                    think in analytic way during my current job,
                                    so becoming a website developer was the
                                    perfect choice for me. I believe that a
                                    person should work on developing their
                                    professional skills and learn new things all
                                    the time. <br /> I am attending a React course at the moment and already completed other ones such as PHP, jQuery and JavaScript, so now I am looking for new career opportunities.
                    </p>
                    <p className="textHidden">
                        Jelenleg egy szoftverfejesztő cégnél dolgozom, konzulensként. Közel 10 év után úgy döntöttem, hogy eljött a karrierváltás ideje. 
                        Lelkes, kitartó, kreatív valamint terhelhető embernek tartom magam, aki könnyen alkalmazkodik. <br />
                        Szeretnék jó szakember lenni, amihez elengedhetetlenül fontosnak tartom a folyamatos szakmai továbbképzést. HTML, CSS, JavaScript, jQuery, PHP tanfolyamokat végeztem, valamint résztvettem egy webdesign alapképzésen is. Jelenleg Reactet tanulok.
                        Új karrierlehetőséget keresve, a megadott elérhetőségek bármelyikén várom az ajánlatokat. 
                    </p>
                </div>
                <div className="imgContent">
                                <img
                                    src="./img/pf.jpg"
                                    alt="profle"
                                    className="profile"
                                />
                            </div>
                <div>
                <img
                                    className="sec"
                                    src="./img/3-removebg-preview.png"
                                    alt="sec_2"
                                />
                                <hr />
                </div>
            </div>
        </div>
    </section>
}

function SectionJobs() {
    return <section id="jobs">
    <div className="gallery">
        <div>
            <h2 className="enText galleryTxt" id="galleryEn">My projects</h2>
            <h2 className="textHidden" id="galleryHu">Munkáim</h2>
        </div>
        <div className="gallery-contanier">
        <div>
        <a href="https://bbernadett.github.io/exm/" id="horsePage" target="_blank">
                <img src="./img/horse.JPG"
                                alt="horse"
                                className="projectPcs picsSec gallery-item gallery-item-1" data-index="2" />
            </a>        
        </div>
        <div>
        <a href="#" id="RestPage" target="_blank">
                <img  src="./img/rest.jpg"
                                alt="restaurant"
                                className="projectPcs picsFourth gallery-item gallery-item-2" data-index="5"/>
            </a>

        </div>
        <div>
        <a href="https://bbernadett.github.io/car/" id="carPage" target="_blank">
                <img  src="./img/car.JPG" 
                                alt="car" id="car"
                                className="projectPcs gallery-item gallery-item-3" data-index="1" />
           </a>
            
        </div>
        <div>
            <a href="https://bbernadett.github.io/wedding/" id="weddingPage" target="_blank">
                <img  src="./img/wedding.JPG"
                                alt="wedding"
                                className="projectPcs picsFourth gallery-item gallery-item-4" data-index="4"/>
            </a>
        </div>
        <div>
        <a href="https://bbernadett.github.io/FEblog/inner.html " id="travelPage" target="_blank">
                <img  src="./img/travel.JPG"
                                alt="travel"
                                className="projectPcs picsThd gallery-item gallery-item-5" data-index="3" />
            </a>
        </div>
        
        </div>
        <div className="gallery-controls"></div>
        </div>
    </section>
}

function SectionSkills() {
   return <section id="skills" className="skills" >
        <div>
            <p id="techs"></p>
        </div>
        <div className="box">
                <span className="i1">
                <img src="./img/html_logo.jpg" alt="" className="logos"/>
                </span>
                <span className="i2">
                <img src="./img/css_logo.png" alt="" className="logos"/>
                </span>
                <span className="i3">
                    <img src="./img/javascript-logo.png" alt="" className="logos"/>
                </span>
                <span className="i4">
                    <img src="./img/react_logo.png" alt="" className="logos"/>
                </span>
                <span className="i5">
                    <img src="./img/figma.png" alt="" className="logos"/>
                </span>
                <span className="i6">
                    <img src="./img/github.png" alt="" className="logos"/>
                </span>
                <span className="i7">
                    <img src="./img/sql.png" alt="" className="logos"/>
                </span>
        </div>
    
   </section>

}