import "./App.css";
import DetailsPage from "./componants/DetailsPage";
import Photos from "./componants/Photos";
import Roomdetails from "./componants/RoomDetails";

function App() {
  return (
    <div className="App">
      <Photos />
      <DetailsPage />
      <Roomdetails />
    </div>
  );
}

export default App;
