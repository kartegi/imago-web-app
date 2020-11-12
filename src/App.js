import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import SectionBlack from "./Components/SectionBlack/SectionBlack";
import SectionWhite from "./Components/SetctionWhite/SectionWhite";
import Social from "./Components/Social/Social";
import logo2 from "./img/logo2.jpg";

function App() {
    return (
        <div className="App">
            <Nav />
            <Header />
            <SectionWhite
                title="ABOUT"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut vitae nulla id lorem faucibus tincidunt. Ut convallis
                    nulla sem, non tempor nisi ultrices id. Nam mi metus,
                    aliquam mollis venenatis nec, efficitur in dolor.
                    Vestibulum interdum, leo ut scelerisque dapibus, ante
                    massa maximus nunc, faucibus malesuada nisl elit at orci.
                    Duis nec sapien quis mi dapibus vestibulum. Duis tincidunt
                    maximus arcu non semper. Phasellus eu aliquam nisl, nec
                    finibus neque."
                imgSrc={logo2}
            />
            <SectionBlack
                title="TEAM"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut vitae nulla id lorem faucibus tincidunt. Ut convallis
                    nulla sem, non tempor nisi ultrices id. Nam mi metus,
                    aliquam mollis venenatis nec, efficitur in dolor.
                    Vestibulum interdum, leo ut scelerisque dapibus, ante
                    massa maximus nunc, faucibus malesuada nisl elit at orci.
                    Duis nec sapien quis mi dapibus vestibulum. Duis tincidunt
                    maximus arcu non semper. Phasellus eu aliquam nisl, nec
                    finibus neque."
                imgSrc="https://sun9-23.userapi.com/c633828/v633828934/e80e/FuqiSH2h2SU.jpg"
            />
            <Social />
        </div>
    );
}

export default App;
