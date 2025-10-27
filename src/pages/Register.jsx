import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      await register({ nome, email, telefone, password: senha });
      navigate("/dashboard");
    } catch (err) {
      setErro(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto", textAlign: "center" }}>
      <h2>Registro de Aluno</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={{ width: "100%", margin: "10px 0", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px" }}>
          Registrar
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{ width: "100%", padding: "8px", marginTop: 10 }}
        >
          Voltar para Login
        </button>
      </form>
      {erro && <p style={{ color: "red", marginTop: 10 }}>{erro}</p>}
    </div>
  );
};

export default Register;
