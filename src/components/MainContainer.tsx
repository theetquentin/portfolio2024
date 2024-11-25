import Competences from "./Competences";
import Formations from "./Formations";
import ProjetList from "./ProjetList";

const MainContainer = () => {
  return (
    <div className="mt-60 space-y-60">
      <Competences />
      <Formations />
      <ProjetList />
    </div>
  );
};

export default MainContainer;
