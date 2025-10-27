import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TrainingList from "../components/TrainingList";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Bem-vindo(a), {user?.nome}</h2>
        <button onClick={logout}>Sair</button>
      </header>
      <hr />
      <TrainingList />
    </div>
  );
};

export default Dashboard;
