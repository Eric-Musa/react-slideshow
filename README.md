`<Slideshow props={<slideshowProps>}>` is a *React* component usable as an animated, responsive image carousel. 

There's many possible improvements - any suggestions are welcome!


Usage is as follows within a *React* Component:
```
...
const slideshowProps = getDefaultSlideshowProps()
...
return (
...
    <div>
    <Slideshow props={slideshowProps}>
    <div>
...
)
```


Where getDefaultSlideshowProps() returns:
```
{
    imNamesAndAltTexts: slideshowImNamesAndAltTexts,
    interval: 4000,         // milliseconds between transitions
    aspectRatio: 16/9,      // slideshow aspect ratio
    heightPercent: "85%",   // vertical filling of slideshow within container
    maxHeight: 720,         // maximum height of the slideshow container
    maxWidth: 1600,         // maximum width of an individual slide
    margin: 20,             // left-right margin (padding) between slides and the side of the container
    transitionTime: 1.25,   // CSS animation time
    clickFactor: 1.5,       // factor applied to *interval* to wait longer when a slide is clicked
    initIndex: 'random'     // An integer or 'random' to specify which image is first centered in the slideshow
}
```


`slideshowImNamesAndAltTexts` is, by default, assigned to the included sample_images:
```
import flowers1 from "./sample_images/flowers1.jpg"
import flowers2 from "./sample_images/flowers2.jpg"
import flowers3 from "./sample_images/flowers3.jpg"
import flowers4 from "./sample_images/flowers4.jpg"
import goose from "./sample_images/goose.jpg"
import peaches from "./sample_images/peaches.jpg"
import prairiedogs from "./sample_images/prairiedogs.jpg"

const slideshowImNamesAndAltTexts = [
    [flowers1, "Pretty pink and purple flowers."],
    [flowers2, "Pretty orange flowers."],
    [flowers3, "Pretty red flowers."],
    [flowers4, "A pretty pink flower with a butterfly on it."],
    [goose, "A goose spotted along a rocky bank."],
    [peaches, "Some peaches growing on a tree."],
    [prairiedogs, "Two prairie dogs popping out of their burrow."],
];
```