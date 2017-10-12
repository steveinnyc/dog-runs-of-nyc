# Dog Parks of New York
*Because Dogs Need to Run*

NYC Open Data has always maintained a list of 134 dog runs in the city, but there's never been a map. Maybe because the address detail is generall a cross street or location description instead of a hard-numbered street address.

Much of the work was cleaning the address data so it could be munged by the Google GeoCoding API, for the latitude and longitude coordinates required for any mapping.

Uploading the GeoJSON file to Mapbox Studio, I was then able to map the dog icon to each point, and even adjust the data typos and point positions manually. Studio also allows you to adjust icon scale to zoom-level.

The single page app's design is loosely modeled on mapbox's Sweetgreen Store Locator tutorial, which gives you all the API knowledge needed for popups, flying to locations, and a refresher on vanilla Javascript DOM manipulation.

## Video Sample

Mapbox was a great choice given the robust API and superior developer experience. I found documentation for everything I needed to do, or pointers on how to do it in JS.

### Deploying a static JS/HTML5/CSS3 site on Heroku (in PHP)

No brainer deployment thanks to wh1tney's guide on deploying a static website to heroku...with PHP.
https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489

### Installing

Just clone the repo, assign your own mapbox API key to the variable in index.js and open home.html.

## Built With

* [Mapbox GL-JS](https://www.mapbox.com/mapbox-gl-js/api/) - Cartography framework
* [Mapbox Studio](https://www.mapbox.com/mapbox-studio/) - GeoJSON shaping and map styling
* [Javascript]- DOM manipulation
* [HTML5]
* [CSS3]


## Authors

* **David Rhodes** - *Initial work* - [dfrho](https://github.com/dfrho)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to NYC OPEN DATA
* Thanks to Mapbox
* Thank you dog lovers of NYC who use and help maintain the many great dog runs in our city.
# dog-parks-of-nyc
