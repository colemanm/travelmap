# Travel Map 2011
This is a map of trips I took during 2011, represented as [great circle](http://en.wikipedia.org/wiki/Great_circle) route lines. It was a fun experiment with a number of tools and technologies (and some code hacking adventures in which I'm pretty much out of my element, but made it work).

## The process
This originated in a Google Doc spreadsheet I've kept with data about my travels: driving vs. flying, origins, destinations, reasons for traveling, et cetera.

I generated a CSV file of visited cities, which is used to draw the point geometry on the map. The great circle lines started as a CSV file of origins and destinations that I processed through [Dane Springmeyer](http://dbsgeo.com)'s [arc.js](https://github.com/springmeyer/arc.js) node module for outputting great circle routes, which resulted in the GeoJSON file you see on the map.

TileMill was used to build the map -- showing blue lines for flights, orange lines for drives.

## The tools
The map is hosted on my own [TileStream](https://github.com/mapbox/tilestream) server, and displayed on the web using [Wax](http://mapbox.com/wax/). [QGIS](http://www.qgis.org/) was used for some data editing and processing, but not much.