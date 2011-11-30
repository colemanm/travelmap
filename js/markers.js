MM = com.modestmaps;

var PIN_WIDTH  = 90;
var PIN_HEIGHT = 140;
var CALLOUT_WIDTH = 340;

function MarkerClip(map) {
    this.map = map;

    var theClip = this;

    var markerDiv = document.createElement('div');
    markerDiv.id = map.parent.id + '-markerClip-' + new Date().getTime();
    markerDiv.style.margin = '0';
    markerDiv.style.padding = '0';
    markerDiv.style.position = 'absolute';
    markerDiv.style.top = '0px';
    markerDiv.style.left = '0px';
    markerDiv.style.width = map.dimensions.x+'px';
    markerDiv.style.height = map.dimensions.y+'px';        
    map.parent.appendChild(markerDiv);    
    
    function onMapChange() {
        theClip.updateMarkers();    
    }

    map.addCallback('drawn', onMapChange);

    map.addCallback('resized', function() {
        markerDiv.style.width = map.dimensions.x+'px';
        markerDiv.style.height = map.dimensions.y+'px';        
        theClip.updateMarkers();
    });

    this.updateMarkers = function() {
        for (var i = 0; i < this.markers.length; i++) {
            this.updateMarkerAt(i);
        }
    };
    
    this.markers = [];
    this.markerLocations = [];
    this.markerOffsets = [];
    
    this.addMarker = function(element, location, offset) {
        element.style.position = 'absolute';
        if (!offset) {
            offset = new MM.Point(element.offsetWidth/2, element.offsetHeight/2);
        }
		element.markerLocation = location;
        markerDiv.appendChild(element);
        this.markers.push(element);
        this.markerLocations.push(location);
        this.markerOffsets.push(offset);
        this.updateMarkerAt(this.markers.length-1);
    };
    
    this.updateMarkerAt = function(index) {
        var point = map.locationPoint(this.markerLocations[index]),
            offset = this.markerOffsets[index],
            element = this.markers[index];
        MM.moveElement(element, { 
          x: point.x - offset.x - (PIN_WIDTH  / 2), 
          y: point.y - offset.y - (PIN_HEIGHT / 2),
          scale: 1, width: PIN_WIDTH, height: PIN_HEIGHT});


		if (selectedMarker === element) {
			var height = $(selectedMarker).height();
			$('#callout').css({  
				left: (point.x - (CALLOUT_WIDTH / 2) - 4) + 'px', 
				top: (point.y - 50 - (height + 40)) + 'px' }
			);
		}
    };

    var createdMarkerCount = 0;

    this.createDefaultMarker = function() {
        var marker = document.createElement('div');
        marker.id = map.parent.id+'-marker-'+createdMarkerCount;
        createdMarkerCount++;
        marker.style.width = PIN_WIDTH + 'px';
        marker.style.height = PIN_HEIGHT + 'px';
        marker.style.margin = '0';
        marker.style.padding = '0';
		var img = document.createElement('img');
		img.src = 'icon-pin.png';
		marker.appendChild(img);
        return marker;
    };
}


sni.Datasets = [
	{ name: 'Beijing, China', latitude: 39.92889,   longitude: 116.38833   },
	{ name: 'Greece',         latitude: 37.9833333, longitude: 23.7333333  },
	{ name: 'Saudi Arabia',   latitude: 25,         longitude: 45          },
	{ name: 'Italy',          latitude: 41.9,       longitude: 12.4833333  },
	{ name: 'Panama',         latitude: 8.9666667,  longitude: -79.5333333 },
	{ name: 'Venezuela',      latitude: 10.5,       longitude: -66.9166667 },
	{ name: 'Philippines',    latitude: 13,         longitude: 122         },
	{ name: 'Yemen',          latitude: 15,         longitude: 48          },
	{ name: 'Malaysia',       latitude: 4,          longitude: 102         }
];

var markerClip;
var selectedMarker;


function initMarkers(map) {
    markerClip = new MarkerClip(map);

    for (var i = 0; i < sni.Datasets.length; i++) {
		(function() {
	        var marker = markerClip.createDefaultMarker(),
	            lat = sni.Datasets[i].latitude, 
	            lon = sni.Datasets[i].longitude,
	            location = new MM.Location(lat, lon);
	        marker.title = location.toString();
			marker.location = location;

			var handler = function(el) {
				var position = $(marker).position();
				var height   = $(marker).height();	
				var point = map.locationPoint(this.markerLocation)
			
				$('#callout').css({ 
					opacity : 0.0, 
					left: (point.x - (CALLOUT_WIDTH / 2) - 4) + 'px', 
					top: (point.y - 50) + 'px' }
				);
			
				$("#callout").animate({
					top: '-=' + (height + 40),
					opacity: 0.9
				}, 200, 'swing', function() {
					selectedMarker = marker;
				});
	        }
	
	        $(marker).click(handler);
			$(marker).tap(handler);

	        markerClip.addMarker(marker, location);
		})();
    }
}