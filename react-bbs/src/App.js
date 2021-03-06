import BackImg from './z1.jpg';
import './App.css';
import BbsMain from "./main/BBSMain";

function App() {
    const background = {
        backgroundImage: `url(${BackImg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
        backgroundSize: "100wh 50vh",
    }

    return (
        <div className="App">
            <header className="App-header" style={background}>
                <h3>REACT BBS 2020</h3>
                <p>리액트로 구현하는 BBS 프로젝트</p>
            </header>
            <BbsMain/>
            <footer className={"footer"}>
                <address>CopyRight &copy; com.github.sun5066</address>
            </footer>
        </div>
    );
}

export default App;
