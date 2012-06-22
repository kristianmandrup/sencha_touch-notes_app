// http://indiemaps.com/blog/2010/06/interactive-mapping-with-html5-javascript-and-canvas/

// http://finder.geocommons.com/
$.get( "data/kml/generalized_african_countries.kml", function( xml ) {
    var features = new Array();
    $( xml ).find( 'Placemark' ).each( function() {
        var rings = new Array();
        $( this ).find( 'outerBoundaryIs' ).each( function() {
            var ring = new Array();
            var coordsText = $( this ).find( 'coordinates' ).text();
            var coordStrings = coordsText.split( ' ' );
            for ( var coordText in coordStrings ) {
                var coordinate = new Array();
                var coordSplit = coordStrings[ coordText ].split( ',' );
                for ( var coordInd in coordSplit ) coordinate.push( Number( coordSplit[ coordInd ] ) );
                ring.push( coordinate );
            }
            rings.push( ring );
        } );
        features.push( rings );
    } );
        
    /* feature coordinates all loaded -- now do something with them */
        
} );


Proj4js.defs[ 'albersEqualArea_Africa' ] = '+title= albers_AFR\
                                            +proj=aea\
                                            +lat_1=20\
                                            +lat_2=-23\
                                            +lat_0=0\
                                            +lon_0=25\
                                            +x_0=0\
                                            +y_0=0\
                                            +ellps=WGS84\
                                            +datum=WGS84\
                                            +units=m\
                                            +no_defs';
var source = new Proj4js.Proj( 'WGS:84' );
var dest = new Proj4js.Proj( 'albersEqualArea_Africa' );


// And thereafter you can call

Proj4js.transform( source, dest, pt );

// ...

function drawPolygonFeatures( features, minX, maxX, minY, maxY ) 
{
    var c_canvas = document.getElementById( "map" );
    var context = c_canvas.getContext("2d");
    var multiFactor = Math.min( c_canvas.width / ( maxX - minX ), c_canvas.height / ( maxY - minY ) );
    var x = 0; var y = 0;
    for ( var featureNum in features ) {
        for ( var ringNum in features[ featureNum ] ) {
            var ring = features[ featureNum ][ ringNum ];
            context.moveTo( ( ring[ 0 ][ 0 ] - minX ) * multiFactor, c_canvas.height - ( ring[ 0 ][ 1 ] - minY ) * multiFactor );                  
            for ( var coordNum = 1; coordNum < ring.length; coordNum++ ) {
                x = ( ring[ coordNum ][ 0 ] - minX ) * multiFactor;
                y = c_canvas.height - ( ring[ coordNum ][ 1 ] - minY ) * multiFactor;
                context.lineTo( x, y );
            }
        }
    }
    context.shadowOffsetX = context.shadowOffsetY = 3;
    context.shadowBlur    = 4;
    context.shadowColor   = 'rgba(0, 0, 0, 0.5)';
    context.fillStyle = "#0099cc";
    context.fill();
    context.shadowOffsetX = context.shadowOffsetY = context.shadowBlur = 0;
    context.strokeStyle = "#fff";
    context.stroke();
}