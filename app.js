ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {

    return React.createElement(
        "div",
        { id: "sections" },
        React.createElement(SectionIntro, null),
        React.createElement(SectionAbout, null),
        React.createElement(SectionSkills, null),
        React.createElement(SectionJobs, null)
    );
}

function SectionIntro() {
    return React.createElement(
        "section",
        { className: "introduction", id: "introduction" },
        React.createElement(
            "span",
            { className: "language" },
            "EN | HU"
        ),
        React.createElement(
            "form",
            null,
            React.createElement(
                "label",
                { className: "switch", id: "switch" },
                React.createElement("input", { id: "isChecked", type: "checkbox" }),
                React.createElement("span", { className: "slider round" })
            )
        ),
        React.createElement(
            "div",
            { className: "fade-up" },
            React.createElement(
                "h1",
                { className: "enText" },
                "Hi, my name is"
            ),
            React.createElement(
                "h1",
                { className: "textHidden", id: "huText" },
                "K\xF6sz\xF6ntelek oldalamon,"
            )
        ),
        React.createElement(
            "div",
            { className: "fade-up" },
            React.createElement(
                "h2",
                { className: "enText" },
                "Bernadett Bal\xE1zs"
            ),
            React.createElement(
                "h2",
                { className: "textHidden" },
                "Bal\xE1zs Bernadett ",
                React.createElement(
                    "small",
                    null,
                    " vagyok."
                )
            )
        ),
        React.createElement(
            "div",
            { className: "fade-up" },
            React.createElement(
                "h3",
                { className: "enText" },
                "Frontend development is what I'm most interested in and like to work with in the future."
            ),
            React.createElement(
                "h3",
                { className: "textHidden" },
                "A FrontEnd fejleszt\xE9s, ami a legink\xE1bb \xE9rdekel, \xE9s amivel a j\xF6v\u0151ben szeretn\xE9k foglalkozni."
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                { className: "enText" },
                "I always wanted a creative job where I can make my ideas real. I believe that the main reason is that front-end development satisfies my need for creativity. It enabled me to easily put my ideas into digital form and get results back really quick. I still remember the first time I created an HTML page and opened it in the browser. A whole new world of possibilities appeared before my eyes."
            ),
            React.createElement(
                "p",
                { className: "textHidden" },
                "Kreat\xEDv emberk\xE9nt mindig is olyan munk\xE1t szerettem volna, ahol megval\xF3s\xEDthatom az \xF6tleteimet. Az egyik ok, ami\xE9rt a FrontEnd fejleszt\xE9st v\xE1lasztottam, hogy itt ki\xE9lhetem a kreativit\xE1s ir\xE1nti ig\xE9nyemet. Eml\xE9kszem, amikor el\u0151sz\xF6r k\xE9sz\xEDtettem egy HTML-oldalt, \xE9s megnyitottam a b\xF6ng\xE9sz\u0151ben. A lehet\u0151s\xE9gek teljesen \xFAj vil\xE1ga t\xE1rult a szemem el\xE9."
            )
        ),
        React.createElement(
            "button",
            { id: "cv", type: "button" },
            React.createElement(
                "a",
                { href: "./img/cv.pdf", download: "resume.pdf", target: "_blank"
                },
                React.createElement("i", { className: "fa-solid fa-download", id: "cvIcon" }),
                " CV"
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement("img", { src: "./img/sec_1.png", className: "sec", alt: "sec_1" }),
            React.createElement("hr", null)
        )
    );
}

function SectionAbout() {
    return React.createElement(
        "section",
        { id: "about", style: { visibility: "hidden" } },
        React.createElement(
            "div",
            { className: "aboutIn" },
            React.createElement(
                "h3",
                { className: "sectionTitle enText" },
                "About Me"
            ),
            React.createElement(
                "h3",
                { className: "sectionTitle textHidden" },
                "R\xF3lam"
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        { className: "enText" },
                        "Currently I'm working for a software development company as a consultant. I decided to change career, more than half a year ago, I consider myself as an enthusiastic and creative person who can adapt to new circumstances easily and I also learnt to think in analytic way during my current job, so becoming a website developer was the perfect choice for me. I believe that a person should work on developing their professional skills and learn new things all the time. ",
                        React.createElement("br", null),
                        " I am attending a React course at the moment and already completed other ones such as PHP, jQuery and JavaScript, so now I am looking for new career opportunities."
                    ),
                    React.createElement(
                        "p",
                        { className: "textHidden" },
                        "Jelenleg egy szoftverfejeszt\u0151 c\xE9gn\xE9l dolgozom, konzulensk\xE9nt. K\xF6zel 10 \xE9v ut\xE1n \xFAgy d\xF6nt\xF6ttem, hogy elj\xF6tt a karrierv\xE1lt\xE1s ideje. Lelkes, kitart\xF3, kreat\xEDv valamint terhelhet\u0151 embernek tartom magam, aki k\xF6nnyen alkalmazkodik. ",
                        React.createElement("br", null),
                        "Szeretn\xE9k j\xF3 szakember lenni, amihez elengedhetetlen\xFCl fontosnak tartom a folyamatos szakmai tov\xE1bbk\xE9pz\xE9st. HTML, CSS, JavaScript, jQuery, PHP tanfolyamokat v\xE9geztem, valamint r\xE9sztvettem egy webdesign alapk\xE9pz\xE9sen is. Jelenleg Reactet tanulok. \xDAj karrierlehet\u0151s\xE9get keresve, a megadott el\xE9rhet\u0151s\xE9gek b\xE1rmelyik\xE9n v\xE1rom az aj\xE1nlatokat."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "imgContent" },
                    React.createElement("img", {
                        src: "./img/pf.jpg",
                        alt: "profle",
                        className: "profile"
                    })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", {
                        className: "sec",
                        src: "./img/3-removebg-preview.png",
                        alt: "sec_2"
                    }),
                    React.createElement("hr", null)
                )
            )
        )
    );
}

function SectionJobs() {
    return React.createElement(
        "section",
        { id: "jobs" },
        React.createElement(
            "div",
            { className: "gallery" },
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    { className: "enText galleryTxt", id: "galleryEn" },
                    "My projects"
                ),
                React.createElement(
                    "h2",
                    { className: "textHidden", id: "galleryHu" },
                    "Munk\xE1im"
                )
            ),
            React.createElement(
                "div",
                { className: "gallery-contanier" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://bbernadett.github.io/exm/", id: "horsePage", target: "_blank" },
                        React.createElement("img", { src: "./img/horse.JPG",
                            alt: "horse",
                            className: "projectPcs picsSec gallery-item gallery-item-1", "data-index": "2" })
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: "#", id: "RestPage", target: "_blank" },
                        React.createElement("img", { src: "./img/rest.jpg",
                            alt: "restaurant",
                            className: "projectPcs picsFourth gallery-item gallery-item-2", "data-index": "5" })
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://bbernadett.github.io/car/", id: "carPage", target: "_blank" },
                        React.createElement("img", { src: "./img/car.JPG",
                            alt: "car", id: "car",
                            className: "projectPcs gallery-item gallery-item-3", "data-index": "1" })
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://bbernadett.github.io/wedding/", id: "weddingPage", target: "_blank" },
                        React.createElement("img", { src: "./img/wedding.JPG",
                            alt: "wedding",
                            className: "projectPcs picsFourth gallery-item gallery-item-4", "data-index": "4" })
                    )
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://bbernadett.github.io/FEblog/inner.html ", id: "travelPage", target: "_blank" },
                        React.createElement("img", { src: "./img/travel.JPG",
                            alt: "travel",
                            className: "projectPcs picsThd gallery-item gallery-item-5", "data-index": "3" })
                    )
                )
            ),
            React.createElement("div", { className: "gallery-controls" })
        )
    );
}

function SectionSkills() {
    return React.createElement(
        "section",
        { id: "skills", className: "skills" },
        React.createElement(
            "div",
            null,
            React.createElement("p", { id: "techs" })
        ),
        React.createElement(
            "div",
            { className: "box" },
            React.createElement(
                "span",
                { className: "i1" },
                React.createElement("img", { src: "./img/html_logo.jpg", alt: "", className: "logos" })
            ),
            React.createElement(
                "span",
                { className: "i2" },
                React.createElement("img", { src: "./img/css_logo.png", alt: "", className: "logos" })
            ),
            React.createElement(
                "span",
                { className: "i3" },
                React.createElement("img", { src: "./img/javascript-logo.png", alt: "", className: "logos" })
            ),
            React.createElement(
                "span",
                { className: "i4" },
                React.createElement("img", { src: "./img/react_logo.png", alt: "", className: "logos" })
            ),
            React.createElement(
                "span",
                { className: "i5" },
                React.createElement("img", { src: "./img/figma.png", alt: "", className: "logos" })
            ),
            React.createElement(
                "span",
                { className: "i6" },
                React.createElement("img", { src: "./img/github.png", alt: "", className: "logos" })
            ),
            React.createElement(
                "span",
                { className: "i7" },
                React.createElement("img", { src: "./img/sql.png", alt: "", className: "logos" })
            )
        )
    );
}