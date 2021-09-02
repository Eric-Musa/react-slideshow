import Slideshow from "./lib/slideshow"

import flowers1 from "./lib/images/flowers1.jpg"
import flowers2 from "./lib/images/flowers2.jpg"
import flowers3 from "./lib/images/flowers3.jpg"
import flowers4 from "./lib/images/flowers4.jpg"
import goose from "./lib/images/goose.jpg"
import peaches from "./lib/images/peaches.jpg"
import prairiedogs from "./lib/images/prairiedogs.jpg"

const slideshowImNamesAndAltTexts = [
    [flowers1, "Pretty pink and purple flowers."],
    [flowers2, "Pretty orange flowers."],
    [flowers3, "Pretty red flowers."],
    [flowers4, "A pretty pink flower with a butterfly on it."],
    [goose, "A goose spotted along a rocky bank."],
    [peaches, "Some peaches growing on a tree."],
    [prairiedogs, "Two prairie dogs popping out of their burrow."],
];

const slideshowProps = {
    imNamesAndAltTexts: slideshowImNamesAndAltTexts,
    interval: 4000,
    aspectRatio: 16/9,
    heightPercent: "85%",
    maxHeight: 720,
    maxWidth: 1600,
    margin: 20,
    transitionTime: 1.25,
    clickFactor: 1.5,
    initIndex: 'random'
}

function App() {
  return (
    <div className="App">
        <Slideshow props={slideshowProps}/>
    </div>
  );
}

export default App;
