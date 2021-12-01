import "./home.css";
import TomatoContainer from "./../../components/TomatoContainer/TomatoContainer";
import Timer from "./../../components/Timer/Timer";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <div className="home__wrapper">
      <h2 className="home__title">Get Ready</h2>

      <TomatoContainer>
        <Timer min={25} sec={0} />
      </TomatoContainer>

      <div className="buttons">
        <Button primary>🞂</Button>
        <Button primary>🗘</Button>
      </div>
    </div>
  );
}

export default Home;
