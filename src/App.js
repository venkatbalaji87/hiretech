import "./styles.css";
import Signin from "./hirefrontend/components/connectwithgoogle/googlesignin/siginin";
import Signout from "./hirefrontend/components/connectwithgoogle/googlesignout/signout";

export default function App() {
  return (
    <div className="App">
      <Signin />
      <Signout />
    </div>
  );
}
