import "./Home.css";
import github from "../assets/images/github-icon.svg";

const Home = () => {
  return (
    <div className="home">
      <main>
        <h2>Secure Encryption & Decryption Dashboard</h2>
        <p>Safeguard your data with cutting-edge algorithms.</p>
        <p>Fast. Reliable. Transparent.</p>
      </main>
      <footer>
        <p>Developed with ♥ by Firas Kahlaoui</p>
        <a
          href="https://github.com/FirasKahlaoui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub Profile" className="github-logo" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
