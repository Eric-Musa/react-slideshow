import { Slideshow, getDefaultSlideshowProps } from "./lib"

const slideshowProps = getDefaultSlideshowProps()

function App() {
  return (
    <div className="App">
        <Slideshow props={slideshowProps}/>
    </div>
  );
}

export default App;
