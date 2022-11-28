import { Buttons } from "../components/Buttons";
import "../App.css";

export function Home() {
  return (
    <>
      <div className="container max-w-none">
        <div className="mt-3 text-center text-accent text-5xl">
          <h1>Testing CSS Plugins</h1>
        </div>
        <Buttons />
      </div>
    </>
  );
}
