var sni = sni || {};
sni.mm = sni.mm || {};

// A layer connector for Modest Maps conformant to TileJSON
// https://github.com/mapbox/tilejson
sni.mm.connector = function(options) {
    this.options = {
        tiles: options.tiles,
        scheme: options.scheme || 'tms',
        minzoom: options.minzoom || 0,
        maxzoom: options.maxzoom || 22
    };
};

sni.mm.connector.prototype = {
    outerLimits: function() {
        return [
            new com.modestmaps.Coordinate(0,0,0).zoomTo(this.options.minzoom),
            new com.modestmaps.Coordinate(1,1,0).zoomTo(this.options.maxzoom)
        ];
    },
    getTileUrl: function(c) {
        if (!(coord = this.sourceCoordinate(c))) return null;

        coord.row = (this.options.scheme === 'tms') ?
            Math.pow(2, coord.zoom) - coord.row - 1 :
            coord.row;

        return this.options.tiles[parseInt(Math.pow(2, coord.zoom) * coord.row + coord.column, 10) %
            this.options.tiles.length]
            .replace('{z}', coord.zoom.toFixed(0))
            .replace('{x}', coord.column.toFixed(0))
            .replace('{y}', coord.row.toFixed(0));
    }
};

if (com && com.modestmaps) {
    com.modestmaps.extend(sni.mm.connector, com.modestmaps.MapProvider);
}


function long2tileX(lon, zoom) {
	return Math.floor((lon + 180.0) / 360.0 * Math.pow(2.0, zoom)); 
}
 
function lat2tileY(lat, zoom) {
	var googleY = Math.floor((1.0 - Math.log(Math.tan(lat * Math.PI/180.0) + 1.0 / Math.cos(lat * Math.PI/180.0)) / Math.PI) / 2.0 * Math.pow(2.0, zoom));
	var tmsY =  Math.pow(2.0, zoom) - googleY - 1;
	return tmsY;
}

function tms(lat, long, zoom) {
	return { x: long2tileX(long, zoom), y: lat2tileY(lat, zoom), zoom: zoom };
}