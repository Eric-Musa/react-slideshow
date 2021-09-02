import { Slideshow, getDefaultSlideshowProps } from "./lib/slideshow"

const slideshowProps = getDefaultSlideshowProps()

function App() {
  return (
    <div className="App">
        <Slideshow props={slideshowProps}/>
    </div>
  );
}

export default App;
