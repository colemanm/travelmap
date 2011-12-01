# Travel Map 2011
This is a map of trips I took during 2011, represented as [great circle](http://en.wikipedia.org/wiki/Great_circle) route lines. It was a fun experiment with a number of tools and technologies (and some code hacking adventures in which I'm pretty much out of my element, but made it work).

## The process
This originated in a Google Doc spreadsheet I've kept with data about my travels: driving vs. flying, origins, destinations, reasons for traveling, et cetera.

I generated a CSV file of visited cities and geocoded them, which is used to draw the point geometry on the map. The great circle lines started as a CSV file of origins and destinations that I processed through [Dane Springmeyer](http://dbsgeo.com)'s [arc.js](https://github.com/springmeyer/arc.js) node module for outputting great circle routes, which resulted in the GeoJSON file you see on the map.

[TileMill](http://mapbox.com/tilemill) was used to build the map – showing blue lines for flights, orange lines for drives.

![travelmap](http://f.cl.ly/items/1h0O3V091C211p0J3w2f/Screen%20Shot%202011-11-30%20at%206.47.06%20PM.png)

## The tools
The map is hosted on my own [TileStream](https://github.com/mapbox/tilestream) server, and displayed on the web using [Wax](http://mapbox.com/wax/), [Modest Maps](https://github.com/stamen/modestmaps-js) and some Javascript code from [Zac](http://twitter.com/zacmcc). [QGIS](http://www.qgis.org/) was used for some data editing and processing, but not much.

The TileMill project files for the map are in the [carto](https://github.com/colemanm/travelmap/tree/master/carto) directory, if you want to see how the carto stylesheet is built. The source data is in the [carto/data](https://github.com/colemanm/travelmap/tree/master/carto/data) directory, too, but doesn't include the few 1:10m scale [NaturalEarth](http://www.naturalearthdata.com/) boundary files used for [coastline](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/10m-admin-0-countries.zip), [country](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/10m-admin-0-boundary-lines-land.zip), and [state](http://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/cultural/10m-admin-1-states-provinces-lines-shp.zip) borders.