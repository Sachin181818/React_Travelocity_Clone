import "./App.css";
import Card from "./paymentpage/Card";
import Email from "./paymentpage/Email";
import Paymentpage from "./paymentpage/Paymentpage";
import SecondDiv from "./paymentpage/SecondDiv";
// import DetailsPage from "./componants/DetailsPage";
// import Photos from "./componants/Photos";
// import Roomdetails from "./componants/RoomDetails";

function App() {
  return (
    <div className="App">
      {/* <Photos /> */}
      {/* <DetailsPage /> */}
      {/* <Roomdetails /> */}
      <Paymentpage />
      <SecondDiv />
      <Card />
      <Email />
    </div>
  );
}

export default App;
