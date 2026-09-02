import Scene01Arrival from "./sections/Scene01Arrival/Scene01Arrival";
import Scene02Leader from "./sections/Scene02Leader/Scene02Leader";
import Scene03Reality from "./sections/Scene03Reality/Scene03Reality";
import Scene04Vision from "./sections/Scene04Vision/Scene04Vision";
import Scene05Work from "./sections/Scene05Work/Scene05Work";
import Scene06People from "./sections/Scene06People/Scene06People";
import Scene07Commitment from "./sections/Scene07Commitment/Scene07Commitment";
import FinalMovement from "./sections/FinalMovement/FinalMovement";

function App() {
  return (
    <main>
      <Scene01Arrival />
      <Scene02Leader />
      <Scene03Reality />
      <Scene04Vision />
      <Scene05Work />
      <Scene06People />
      <Scene07Commitment />
      <FinalMovement />
    </main>
  );
}

export default App;