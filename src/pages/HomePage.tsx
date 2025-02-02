import { useState } from "react";
import AboutMeButton from "../components/ui/buttons/AboutMeButton";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AboutMeButton />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default HomePage;
