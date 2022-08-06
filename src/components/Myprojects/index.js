import "./Project.css";
import "../Home/index.scss";

const Myprojects = () => {

  return (
    <section className="Container">

    <div className="Card">
    <div className="Card-image card-6"></div>
    <h2 className="Title">Covid Screeing App</h2>
    <p className="Text">Web application to keep tack of employees health.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, JavaScript, Nodejs and heroku</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://covid19-screening-app23.herokuapp.com/';  }}>Project</button>
    </div>

    <div className="Card">
    <div className="Card-image card-1"></div>
    <h2 className="Title">Snake Game</h2>
    <p className="Text">Created game which allows user to keep track of the score.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, JavaScript, Netlify</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://fancy-flan-dd63db.netlify.app/';  }}>Project</button>
    <button className="Btn" type="button"onClick={(e) => {  e.preventDefault();  window.location.href='https://github.com/Dhruv0701/Snake-Game/tree/master';  }}>Code</button>
    </div>

    <div className="Card">
    <div className="Card-image card-3"></div>
    <h2 className="Title">Tic Tac Toe</h2>
    <p className="Text">Created a respinsive web application with some animations.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, JavaScript, Netlify</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://dashing-meringue-54580b.netlify.app/';  }}>Project</button>
    <button className="Btn" type="button" onClick={(e) => {  e.preventDefault();  window.location.href='https://github.com/Dhruv0701/Tic-Tac-Toe';  }}>Code</button>
    </div>

    <div className="Card">
    <div className="Card-image card-2"></div>
    <h2 className="Title">Calculator</h2>
    <p className="Text">Created web application which allows user to perform basic calculation.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, JavaScript, Netlify</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://frabjous-fenglisu-c7ef26.netlify.app/';  }}>Project</button>
    <button className="Btn" type="button" onClick={(e) => {  e.preventDefault();  window.location.href='https://github.com/Dhruv0701/MyCalculator';  }}>Code</button>
    </div>

    <div className="Card">
    <div className="Card-image card-5"></div>
    <h2 className="Title">Task Manager</h2>
    <p className="Text">Created web application that manages all task. </p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, JavaScript, Node js, Mongodb, heroku</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://task-manager-30.herokuapp.com/';  }}>Project</button>
    </div>

    <div className="Card">
    <div className="Card-image card-4"></div>
    <h2 className="Title">User Manager</h2>
    <p className="Text">Content management system that allows user to perform CRUD Operation without page refresh.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, JavaScript, pHp, heroku</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://user-manager-3.herokuapp.com/login.php';  }}>Project</button>
    </div>

    <div className="Card">
    <div className="Card-image card-7"></div>
    <h2 className="Title">Game Database</h2>
    <p className="Text">Using Angular CLI and public API generated a game database website.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, API, Angular, Firebase</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://game-database-306.web.app/';  }}>Project</button>
    </div>

    <div className="Card">
    <div className="Card-image card-8"></div>
    <h2 className="Title">Tesla website</h2>
    <p className="Text">An application built using React Js implementing usage of Props, Components and Icons.</p>
    <p className="tech"><b>Technologies: </b>React Js, JavaScript, Firebase</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://tesla-clone-333.web.app/';  }}>Project</button>
    </div>
 
    <div className="Card">
    <div className="Card-image card-9"></div>
    <h2 className="Title">Watch Store</h2>
    <p className="Text">Responsive website to load data dynamically and working search bar.</p>
    <p className="tech"><b>Technologies: </b>HTML, CSS, PHP, SQL, heroku</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://website-e.herokuapp.com/project.php';  }}>Project</button>
    </div>

    <div className="Card">
    <div className="Card-image card-10"></div>
    <h2 className="Title">Soccer News</h2>
    <p className="Text">Created mobile app that provides news, artices related to Soccer Game</p>
    <p className="tech"><b>Technologies: </b>XML, Java, SQlite, AndroidStudio</p>
    <button className="Btn" type="button"    onClick={(e) => {  e.preventDefault();  window.location.href='https://website-e.herokuapp.com/project.php';  }}>Project</button>
    </div>
    
</section>
)
}
export default Myprojects