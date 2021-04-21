import "./App.css";
import EmailServices from "./components/emailservices";
const App = () => {
  return (
    <div className="App">
      <h1>Welcome to the Email Services App</h1>

      <EmailServices />
    </div>
  );
};

//https://dashboard.emailjs.com/sign-in
//https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/

export default App;
