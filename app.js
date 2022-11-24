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
            "div",
            { className: "fade-up" },
            React.createElement(
                "h1",
                null,
                "Hi, my name is"
            )
        ),
        React.createElement(
            "div",
            { className: "fade-up" },
            React.createElement(
                "h2",
                null,
                "Bernadett Bal\xE1zs"
            )
        ),
        React.createElement(
            "div",
            { className: "fade-up" },
            React.createElement(
                "h3",
                null,
                "Frontend development is what I'm most interested in and like to work with in the future."
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "I always wanted a creative job where I can make my ideas real. I believe that the main reason is that front-end development satisfies my need for creativity. It enabled me to easily put my ideas into digital form and get results back really quick. I still remember the first time I created an HTML page and opened it in the browser. A whole new world of possibilities appeared before my eyes."
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
                { className: "sectionTitle" },
                "About Me"
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        "Currently I'm working for a software development company as a consultant. I decided to change career, half a year ago, I consider myself as an enthusiastic and creative person who can adapt to new circumstances easily and I also learnt to think in analytic way during my current job, so becoming a website developer was the perfect choice for me. I believe that a person should work on developing their professional skills and learn new things all the time. I am attending two courses at the moment, one of them will be done soon, therefore I am looking for a new career opportunity."
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
                    null,
                    "My projects"
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