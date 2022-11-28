import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="">
          <h1>Testing CSS Plugins</h1>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-secondary">Button</button>
          <button className="btn btn-accent">Button</button>
          <button className="btn btn-info">Button</button>
          <button className="btn btn-success">Button</button>
          <button className="btn btn-warning">Button</button>
          <button className="btn btn-error">Button</button>
          <button className="btn glass">Button</button>
          <button className="btn rounded-full btn-ghost">Button</button>
        </div>

        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
        </div>

        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm i daisyui</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>installing...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>

            <div className="mockup-code">
              <pre data-prefix="1">
                <code>npm i daisyui</code>
              </pre>
              <pre data-prefix="2">
                <code>installing...</code>
              </pre>
              <pre data-prefix="3" className="bg-warning text-warning-content">
                <code>Error!</code>
              </pre>
            </div>
          </pre>
        </div>
        <div>
          <textarea
            className="textarea textarea-primary"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="rating gap-1">
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-red-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-yellow-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-lime-400"
          />
          <input
            type="radio"
            name="rating-3"
            className="mask mask-heart bg-green-400"
          />
        </div>
      </div>
    </>
  );
}

export default App;
