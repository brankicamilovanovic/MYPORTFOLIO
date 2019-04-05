function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Talentovana_vestica (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    React.createElement("div", { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement("div", { className: "menu-items" },
    React.createElement("ul", null,
    React.createElement("li", null,
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "POCETAK")),



    React.createElement("li", null,
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "O MENI")),



    React.createElement("li", null,
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")),



    React.createElement("li", null,
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "KONTAKT"))),




    React.createElement(SocialLinks, null))));



};


/***********************
     Nav Component
    ***********************/

const Nav = props => {
  return (
    React.createElement(React.Fragment, null,
    React.createElement("nav", { id: "navbar" },
    React.createElement("div", { className: "nav-wrapper" },
    React.createElement("p", { className: "brand" },

    React.createElement("strong", null, "Talentovana_vestica ")),

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' },

    React.createElement("span", null))))));





};



/***********************
     Header Component
    ***********************/

const Header = props => {
  return (
    React.createElement("header", { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement("div", { className: "container" },
    React.createElement("h1", null,
    React.createElement("span", { className: "line" }, "I do"),
    React.createElement("span", { className: "line" }, "graphic design"),
    React.createElement("span", { className: "line" },
    React.createElement("span", { className: "color" }, "&"), " code.")),


    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: "  https://brankicinekreativneideje.wordpress.com/ " }, "moj blog"),
    React.createElement("a", { href: "  https://brankicinekreativneideje.wordpress.com/saradnja/  ", className: "cta" }, "Saradnja")))));






};


/***********************
     About Component
    ***********************/

const About = props => {
  return (
    React.createElement("section", { id: "about" },
    React.createElement("div", { className: "wrapper" },
    React.createElement("article", null,
    React.createElement("div", { className: "title" },
    React.createElement("h3", null, " o meni "),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc full" },
    React.createElement("h4", { className: "subtitle" }, "Moje ime je Brankica"),
    React.createElement("p", null, "I am a web developer and project menager."),


    React.createElement("p", null)),



    React.createElement("div", { className: "title" },
    React.createElement("h3", null, " o mom obrazvanju..."),
    React.createElement("p", { className: "separator" })),

    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."),
    React.createElement("p", null, "Front-end programer imam za cilj da potpuno kreiram, prilagodim i isprogramiram vizuelni identitet sajta, pripremim slike i tekstove, slo\u017Eim ih na odgovaraju\u0107i na\u010Din, prilagodim potrebama korisnika i tr\u017Ei\u0161ta, i kreiram sajt koji ostavlja potpun efekat kod krajnjeg korisnika. U toku kursa izu\u010Davaju se najpopularniji jezici, tehnologije i njihove primene: HTML, CSS, XML, Java script, Php,Payton,wordpress . Na kraju kursa trebam da ima kreiran kompletan sajt sa najsavremenijim zahtevima i da nau\u010Di postupak postavljanja tog sajta na internet. Posebna pa\u017Enja se posve\u0107uje alatima, trikovima i ve\u0161tinama kako da se kreirani sajt najbolje mogu\u0107e tretira od strane web pretra\u017Eiva\u010Da, i kako da se u postupku pretrage korisniku poka\u017Ee na prvoj stranici Google-a."),


    React.createElement("p", null)),



    React.createElement("div", { className: "desc" },
    React.createElement("h4", { className: "subtitle" }, "Also a designer."),
    React.createElement("p", null, "Radujem se raduju\u0107i sa mnogim Adobe proizvodima. Photoshop, Illustrator, InDesign, Lightroom ili Xd su neka vrsta industrijskih standarda i volim da radim s njima. Nisam ograni\u010Den na njih, iako: Gimp,codepen,canva i itd su tako\u0111e vrlo validne aplikacije sa kojima radim. Korisni\u010Dki interfejsi, bro\u0161ure, knjige, brendiranje logo vizit karte i itd ... Vi to nazivate! Kao \u0161to sam pomenula, stvaranje lepih stvari."),



    React.createElement("p", null))))));







};


/***********************
     Project Component
    ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    React.createElement("div", { className: "project" },
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" },
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })),

    React.createElement("div", { className: "project-details" },
    React.createElement("div", { className: "project-tile" },
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) =>
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children,
    React.createElement("div", { className: "buttons" },
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ",
    React.createElement("i", { className: "fas fa-external-link-alt" })),

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ",
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
     Projects Component
    ***********************/

const Projects = props => {
  return (
    React.createElement("section", { id: "projects" },
    React.createElement("div", { className: "projects-container" },
    React.createElement("div", { className: "heading" },
    React.createElement("h3", { className: "title" }, "My Works"),
    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" },
    React.createElement("u", null),
    React.createElement("a", { href: " https://s.codepen.io/BrankicAmilovanovic/debug/ePKawX/RBAOJNpwbmvr ", target: "_blank", rel: "noopener noreferrer" }))),





    React.createElement("div", { className: "projects-wrapper" },
    React.createElement(Project, {
      title: " STIKERI ZA ZIDOVE",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/img_20181014_010627_922232604477.jpg ',
      tech: "js css react node",
      link: " https://s.codepen.io/BrankicAmilovanovic/debug/ePKawX/RBAOJNpwbmvr ",
      repo: "  https://s.codepen.io/BrankicAmilovanovic/debug/ePKawX/RBAOJNpwbmvr " },

    React.createElement("small", null, "STIKERI ZA ZIDOVE"),


    React.createElement("p", null, "Veliki izbor dekoracije za va\u0161 dom. Niske cene svaki dan. Naru\u010Di u webshopu! Webshop - Svuda u Srbiji.")),



    React.createElement(Project, {
      title: " MY WEB SITE",
      img: '  https://brankicinekreativneideje.files.wordpress.com/2018/10/fb_img_1539609333705437795085.jpg ',
      tech: "js node css",
      link: "https://brankicamilovanovic.github.io/webstudiobranci/ ",
      repo: "https://brankicamilovanovic.github.io/webstudiobranci/ " },

    React.createElement("small", null, "WEB SITE"),


    React.createElement("p", null, "web dizajn agencija koja ima u ponudi kvalitetnu izradu sajta. Usluge web i grafi\u010Dkog dizajna, programiranja i internet marketinga.")),




    React.createElement(Project, {
      title: "DRAWING ART",
      img: ' https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181020-1914541263226385.png?w=1000 ',
      tech: "js node css",
      link: " https://s.codepen.io/BrankicAmilovanovic/debug/EwrJdE/YvMgOnmjgEYM ",
      repo: "https://s.codepen.io/BrankicAmilovanovic/debug/EwrJdE/YvMgOnmjgEYM  " },

    React.createElement("small", null, "  "),
    React.createElement("p", null)),



    React.createElement(Project, {
      title: "CV RESUME",
      img: ' https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181020-174943_1990745395.png ',
      tech: "js node css",
      link: "  https://s.codepen.io/BrankicAmilovanovic/debug/NOzayw/mWkoNxZeBdPA ",
      repo: "   https://s.codepen.io/BrankicAmilovanovic/debug/NOzayw/mWkoNxZeBdPA " },

    React.createElement("small", null, "CV je kratak i precizno napisan tekst kojim se opisuju li\u010Dna dostignu\u0107a na obrazovnom planu, prethodno radno iskustvo, specifi\u010Dna znanja te vje\u0161tine i osobine koje su va\u017Ene prilikom prijave za odre\u0111eno radno mjesto ili ... "),
    React.createElement("p", null)),

    React.createElement(Project, {
      title: "MY GAMES MAC MAC SLAGALICA ",
      img: '  https://brankicinekreativneideje.files.wordpress.com/2017/08/wp-image-2100973441.png ',
      tech: "js node css",
      link: "  https://s.codepen.io/BrankicAmilovanovic/debug/GvProj/bYAdyevjvOBk ",
      repo: "  https://s.codepen.io/BrankicAmilovanovic/debug/GvProj/bYAdyevjvOBk " },

    React.createElement("small", null, " PROGRAMRANJE IGARA"),
    React.createElement("p", null)),



    React.createElement(Project, {
      title: " my games tic tac",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181022-1428351205607978.png?w=1000  ',
      tech: "js node css",
      link: "  https://s.codepen.io/BrankicAmilovanovic/debug/PyByNw/PNAvYGxVnWGr ",
      repo: "   https://s.codepen.io/BrankicAmilovanovic/debug/PyByNw/PNAvYGxVnWGr " },

    React.createElement("small", null),
    React.createElement("p", null)),



    React.createElement(Project, {
      title: "SCTIKERS SOVA .",
      img: ' https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181024-182757462731442.png?w=1000 ',
      tech: "js vue node css",
      link: "  https://s.codepen.io/BrankicAmilovanovic/debug/VEGORJ/xnrabNJxepGA  ",
      repo: "  https://s.codepen.io/BrankicAmilovanovic/debug/VEGORJ/xnrabNJxepGA " },

    React.createElement("small", null, "Built using Node, Express, VueJS + Vue Router and CSS + Bootstrap."),
    React.createElement("p", null, "A service which lets the users save their daily exercise (or anything) into a log for them to check it later.")),




    React.createElement(Project, {
      title: " SOVA MUG - SOLJA",
      img: '     https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181024-1834591673444136.png?w=1000  ',
      tech: "js d3 css",
      link: "     https://s.codepen.io/BrankicAmilovanovic/debug/KGGKqR/PBrNWNpmJLdA ",
      repo: "    https://s.codepen.io/BrankicAmilovanovic/debug/KGGKqR/PBrNWNpmJLdA    " },

    React.createElement("small", null, "."), React.createElement("small", null, " ")),

    React.createElement(Project, {
      title: "ANIMATION VREMENSKA PROGNOZA",
      img: '  https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181022-130509547121026.png?w=1000 ',
      tech: "js d3 css",
      link: " https://s.codepen.io/BrankicAmilovanovic/debug/aRjKaX/RBMOJNpBOqqk ",
      repo: " https://s.codepen.io/BrankicAmilovanovic/debug/aRjKaX/RBMOJNpBOqqk " },

    React.createElement("small", null, "Built using CSS, JS and D3.js."),
    React.createElement("p", null, "A treemap diagram representing groups of pledges and sales from a particular category.")),



    React.createElement(Project, {
      title: "Portfoliodrawing art",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181025-0009561045726730.png?w=1000',
      tech: "js d3 css",
      link: "https://s.codepen.io/BrankicAmilovanovic/debug/pdNmmv/NjMYzqVEGzmr ",
      repo: " https://s.codepen.io/BrankicAmilovanovic/debug/pdNmmv/NjMYzqVEGzmr" },

    React.createElement("small", null, "Built using CSS, JS and D3.js."),
    React.createElement("p", null, "A choropleth map representing the educational attainment by county in the U.S.")),

    React.createElement(Project, {
      title: " Stikeri za spiljunku za vrata",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/img_20181024_174542_47969226755.jpg ',
      tech: "js vue css",
      link: "https://s.codepen.io/BrankicAmilovanovic/debug/rqEXdj/dGrXWdRzjayM ",
      repo: "https://s.codepen.io/BrankicAmilovanovic/debug/rqEXdj/dGrXWdRzjayM " },

    React.createElement("small", null, "Built using VueJS, Axios and CSS + Bootstrap."),
    React.createElement("p", null, "A random quoting app which retrieves pictures and quotes from two different APIs.")),

    React.createElement(Project, {
      title: " unikatne solje by taletovan vestica",
      img: ' https://brankicinekreativneideje.files.wordpress.com/2018/10/img_20181025_171725_9421428758271.jpg ',
      tech: "js react css",
      link: " https://s.codepen.io/BrankicAmilovanovic/debug/wYLLyj/bZMQWNvOGmPA ",
      repo: "  https://s.codepen.io/BrankicAmilovanovic/debug/wYLLyj/bZMQWNvOGmPA " },

    React.createElement("small", null, "Built using React and CSS."),
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")),

    React.createElement(Project, {
      title: " Designer vizit karte .",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181107-1839441826642426.png?w=1000  ',
      tech: "js react css",
      link: "  https://s.codepen.io/BrankicAmilovanovic/debug/gBRzWQ/LQMExKmzRYvk# ",
      repo: "  https://s.codepen.io/BrankicAmilovanovic/debug/gBRzWQ/LQMExKmzRYvk# " },

    React.createElement("small", null, "Built using React, CSS and lots of SVG."),
    React.createElement("p", null, "A cute and animated Pomodoro clock to help the users improve their productivity.")),

    React.createElement(Project, {
      title: "LOGO ",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181107-1852292077355268.png?w=1000  ',
      tech: "js react css",
      link: "https://s.codepen.io/BrankicAmilovanovic/debug/jewxQW/GnrnbNmvKgJr  ",
      repo: "  https://s.codepen.io/BrankicAmilovanovic/debug/jewxQW/GnrnbNmvKgJr " },

    React.createElement("small", null, "Built using React, CSS and SVG."),
    React.createElement("p", null, "A TicTacToe game with a basic AI algorithm made for the legacy front-end projects on FreeCodeCamp.")),




    React.createElement(Project, {
      title: "calculator memory",
      img: 'https://brankicinekreativneideje.files.wordpress.com/2018/10/screenshot_20181107-1906061866098829.png?w=1000  ',
      tech: "js vue sass",
      link: "  https://s.codepen.io/BrankicAmilovanovic/debug/vWBLKN/bZrQWNvRBqmk " },


    React.createElement("small", null, "Built using VueJS, Axios and Scss."),
    React.createElement("p", null, "Simple Twitch clone using the new Twitch Helix API and made for the legacy front-end projects on FreeCodeCamp.")),




    React.createElement(Project, {
      title: "Weather App.",
      img: 'https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Components/Projects/Images/WeatherApp.jpg',
      tech: "js vue css",
      link: " https://s.codepen.io/BrankicAmilovanovic/debug/WYrpqZ/VJMxxVdNyYJM " },


    React.createElement("small", null, "Built using VueJS, Axios and CSS."),
    React.createElement("p", null, "App that present the users with the current local weather for their location.")),

    React.createElement(Project, {
      title: "",
      img: '',
      tech: "js sass",
      link: "",
      repo: "" },

    React.createElement("small", null),
    React.createElement("p", null)),



    React.createElement(Project, {
      title: "",
      img: '',
      tech: "js sass",
      link: "",
      repo: "" },

    React.createElement("small", null),
    React.createElement("p", null)),

    React.createElement(Project, {
      title: "",
      img: '',
      tech: "js sass",
      link: "",
      repo: "" },

    React.createElement("small", null),
    React.createElement("p", null)),

    React.createElement(Project, {
      title: "",
      img: '',
      tech: "js react css",
      link: "",
      repo: "" },

    React.createElement("small", null),
    React.createElement("p", null))))));







};



/***********************
     Contact Component
    ***********************/

const Contact = props => {
  return (
    React.createElement("section", { id: "contact" },
    React.createElement("div", { className: "container" },
    React.createElement("div", { className: "heading-wrapper" },
    React.createElement("div", { className: "heading" },
    React.createElement("p", { className: "title" }, "Nadji me? ",
    React.createElement("br", null)),


    React.createElement("p", { className: "separator" }),
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '',
    React.createElement("span", { className: "mail" }, "web",

    React.createElement("i", { className: "fas fa-at at" }), "talentovana vestica",

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")),





    React.createElement(SocialLinks, null)),

    React.createElement("form", { id: "contact-form", action: "#" },
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }),
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }),
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }),
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
     Footer Component
    ***********************/

const Footer = props => {
  return (
    React.createElement("footer", null,
    React.createElement("div", { className: "wrapper" },
    React.createElement("h3", null, "HVALA STO STE ME POSETILI "),
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Talentovana vestica."),
    React.createElement(SocialLinks, null))));



};




/***********************
     Social Links Component
    ***********************/

const SocialLinks = props => {
  return (
    React.createElement("div", { className: "social" },
    React.createElement("a", {
      href: "https://twitter.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ',
    React.createElement("i", { className: "fab fa-twitter" })),

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-github" })),

    React.createElement("a", {
      href: "https://codepen.io/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ',
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
     Main Component
    ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render(React.createElement(App, null), document.getElementById('app'));