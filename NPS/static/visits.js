var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});


let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let myLayer = L.tileLayer(mapboxUrl, {id: 'mapbox.outdoors', maxZoom: 20, accessToken: accessToken});
myLayer.addTo(myMap);


function markerSize(average_visits) {
  return average_visits / 75;
}

var parks = [
    {
      park_name: "Blue Ridge Parkway",
      lat: 36.51861,
      long: -80.93578,
      average_visits: 15049331
    },
    {
      park_name: "Golden Gate National Recreation Area",
      lat: 37.78333,
      long: -122.46652,
      average_visits: 14777320
    },
    {
      park_name: "Great Smoky Mountains National Park",
      lat: 35.72715,
      long: -83.16773,
      average_visits: 9951197
    },
    {
      park_name: "Gateway National Recreation Area - Breezy Point",
      lat: 40.5565,
      long: -73.92607,
      average_visits: 7645179
    },
    {
      park_name: "George Washington Memorial Parkway",
      lat: 38.91111,
      long: -77.10217,
      average_visits: 7572115
    },
    {
      park_name: "Lake Mead National Recreation Area",
      lat: 36.4,
      long: -113.69972,
      average_visits: 7067771
    },
    {
      park_name: "Lincoln Memorial",
      lat: 38.8893,
      long: -77.04992,
      average_visits: 6563874
    },
    {
      park_name: "Natchez Trace Trail",
      lat: 34.66772,
      long: -88.08826,
      average_visits: 5878096
    },
    {
      park_name: "Grand Canyon National Park",
      lat: 36.0575,
      long: -112.13745,
      average_visits: 4894769
    },
    {
      park_name: "Vietnam Veterans Memorial",
      lat: 38.8911,
      long: -77.04756,
      average_visits: 4619682
    },
    {
      park_name: "Delaware Water Gap National Recreation Area",
      lat: 41.08232,
      long: -75.01726,
      average_visits: 4528221
    },
    {
      park_name: "Cape Cod National Seashore",
      lat: 42.07389,
      long: -70.20513,
      average_visits: 4475603
    },
    {
      park_name: "Chesapeake and Ohio Canal National Historical Park",
      lat: 38.89972,
      long: -77.05744,
      average_visits: 4410282
    },
    {
      park_name: "Wood Buffalo National Park",
      lat: 59.39083,
      long: -112.98592,
      average_visits: 4311704
    },
    {
      park_name: "Gulf Islands National Seashore",
      lat: 30.36444,
      long: -86.96735,
      average_visits: 4294029
    },
    {
      park_name: "San Francisco Maritime National Historical Park",
      lat: 37.80639,
      long: -122.42332,
      average_visits: 4213719
    },
    {
      park_name: "Independence National Historical Park",
      lat: 39.94778,
      long: -75.14787,
      average_visits: 4033363
    },
    {
      park_name: "Castle Clinton National Monument",
      lat: 40.7036,
      long: -74.01674,
      average_visits: 4023824
    },
    {
      park_name: "Yosemite National Park",
      lat: 37.6379,
      long: -119.69432,
      average_visits: 3996500
    },
    {
      park_name: "Statue Of Liberty National Monument",
      lat: 40.68968,
      long: -74.04477,
      average_visits: 3730235
    },
    {
      park_name: "Yellowstone National Park",
      lat: 44.79573,
      long: -110.61342,
      average_visits: 3601693
    },
    {
      park_name: "Korean War Veterans Memorial",
      lat: 38.88778,
      long: -77.047,
      average_visits: 3547994
    },
    {
      park_name: "Rocky Mountain National Park",
      lat: 40.414,
      long: -105.68962,
      average_visits: 3447870
    },
    {
      park_name: "Colonial National Historical Park",
      lat: 37.21926,
      long: -76.5084,
      average_visits: 3333932
    },
    {
      park_name: "Zion National Park",
      lat: 37.22299,
      long: -112.68142,
      average_visits: 3233651
    },
    {
      park_name: "Martin Luther King Jr National Memorial",
      lat: 38.885926,
      long: -77.045124,
      average_visits: 3207598
    },
    {
      park_name: "Olympic National Park",
      lat: 47.799,
      long: -123.52162,
      average_visits: 3137907
    },
    {
      park_name: "Chattahoochee River National Recreation Area",
      lat: 33.98722,
      long: -84.32454,
      average_visits: 2983479
    },
    {
      park_name: "Franklin Delano Roosevelt Memorial",
      lat: 38.88389,
      long: -77.0443,
      average_visits: 2946022
    },
    {
      park_name: "Grand Teton National Park",
      lat: 43.7403,
      long: -110.78822,
      average_visits: 2824532
    },
    {
      park_name: "Thomas Jefferson Memorial",
      lat: 38.88139,
      long: -77.03647,
      average_visits: 2676724
    },
    {
      park_name: "Acadia National Park",
      lat: 44.454,
      long: -68.04902,
      average_visits: 2605536
    },
    {
      park_name: "Glen Canyon National Recreation Area",
      lat: 36.9936,
      long: -111.48672,
      average_visits: 2503440
    },
    {
      park_name: "Boston National Historical Park",
      lat: 42.36,
      long: -71.05617,
      average_visits: 2462813
    },
    {
      park_name: "Cuyahoga Valley National Park",
      lat: 41.20906,
      long: -81.55677,
      average_visits: 2359884
    },
    {
      park_name: "Point Reyes National Seashore",
      lat: 38.06,
      long: -122.88502,
      average_visits: 2349987
    },
    {
      park_name: "Glacier National Park",
      lat: 48.692,
      long: -113.77572,
      average_visits: 2320217
    },
    {
      park_name: "Cape Hatteras National Seashore",
      lat: 35.30361,
      long: -75.51123,
      average_visits: 2237294
    },
    {
      park_name: "Mount Rushmore National Memorial",
      lat: 43.87895,
      long: -103.45952,
      average_visits: 2225906
    },
    {
      park_name: "Rock Creek Park",
      lat: 38.9575,
      long: -77.04498,
      average_visits: 2190354
    },
    {
      park_name: "Assateague Island National Seashore",
      lat: 38.08332,
      long: -75.20818,
      average_visits: 2162557
    },
    {
      park_name: "Jefferson National Expansion Memorial",
      lat: 38.6246,
      long: -90.18483,
      average_visits: 2006982
    },
    {
      park_name: "Kennesaw Mountain National Battlefield Park",
      lat: 33.98306,
      long: -84.5779,
      average_visits: 1915662
    },
    {
      park_name: "Indiana Dunes National Lakeshore",
      lat: 41.64806,
      long: -87.10791,
      average_visits: 1839036
    },
    {
      park_name: "Valley Forge National Historical Park",
      lat: 40.09693,
      long: -75.43869,
      average_visits: 1777446
    },
    {
      park_name: "Joshua Tree National Park",
      lat: 33.843,
      long: -115.82762,
      average_visits: 1728215
    },
    {
      park_name: "WW II Valor in the Pacific National Monument Atka Island",
      lat: 52.13806,
      long: -174.44522,
      average_visits: 1625110
    },
    {
      park_name: "Hawaii Volcanoes National Park",
      lat: 19.39999,
      long: -155.29962,
      average_visits: 1565752
    },
    {
      park_name: "Bryce Canyon National Park",
      lat: 37.5548,
      long: -112.19632,
      average_visits: 1565676
    },
    {
      park_name: "Fort Point National Historic Site",
      lat: 37.81056,
      long: -122.47692,
      average_visits: 1560779
    },
    {
      park_name: "Amistad National Recreation Area",
      lat: 29.43667,
      long: -101.04972,
      average_visits: 1472473
    },
    {
      park_name: "Sleeping Bear Dunes National Lakeshore",
      lat: 44.91306,
      long: -86.02013,
      average_visits: 1396749
    },
    {
      park_name: "Buffalo National River",
      lat: 36.17806,
      long: -92.42606,
      average_visits: 1393915
    },
    {
      park_name: "Hot Springs National Park",
      lat: 34.52684,
      long: -92.95843,
      average_visits: 1380780
    },
    {
      park_name: "Lake Roosevelt National Recreation Area",
      lat: 47.95611,
      long: -118.98032,
      average_visits: 1351333
    },
    {
      park_name: "Chickasaw National Recreation Area",
      lat: 34.50056,
      long: -96.97204,
      average_visits: 1313787
    },
    {
      park_name: "Ozark National Scenic Riverways",
      lat: 37.1907,
      long: -91.27615,
      average_visits: 1297635
    },
    {
      park_name: "San Juan National Historic Site",
      lat: 18.4675,
      long: -66.11012,
      average_visits: 1270977
    },
    {
      park_name: "John D. Rockefeller Jr. Memorial Parkway",
      lat: 44.10472,
      long: -110.69273,
      average_visits: 1257644
    },
    {
      park_name: "Shenandoah National Park",
      lat: 38.72,
      long: -78.30072,
      average_visits: 1248024
    },
    {
      park_name: "Canaveral National Seashore",
      lat: 28.7675,
      long: -80.77679,
      average_visits: 1246485
    },
    {
      park_name: "Mount Rainier National Park",
      lat: 46.85,
      long: -121.74982,
      average_visits: 1201686
    },
    {
      park_name: "Arches National Park",
      lat: 38.77,
      long: -109.56462,
      average_visits: 1194247
    },
    {
      park_name: "New River Gorge National River",
      lat: 37.96083,
      long: -81.08152,
      average_visits: 1144963
    },
    {
      park_name: "San Antonio Missions National Historical Park",
      lat: 29.36167,
      long: -98.48008,
      average_visits: 1133789
    },
    {
      park_name: "Gettysburg National Military Park",
      lat: 39.81206,
      long: -77.24615,
      average_visits: 1119595
    },
    {
      park_name: "Haleakala National Park",
      lat: 20.71062,
      long: -156.21002,
      average_visits: 1097150
    },
    {
      park_name: "Sequoia National Park",
      lat: 36.36444,
      long: -118.72242,
      average_visits: 1060315
    },
    {
      park_name: "Death Valley National Park",
      lat: 36.524,
      long: -117.09872,
      average_visits: 1041596
    },
    {
      park_name: "Minute Man National Historical Park",
      lat: 42.45306,
      long: -71.29842,
      average_visits: 1028350
    },
    {
      park_name: "Chickamauga and Chattanooga National Military Park",
      lat: 34.94,
      long: -85.25984,
      average_visits: 997475
    },
    {
      park_name: "Everglades National Park",
      lat: 25.36,
      long: -80.79976,
      average_visits: 989970
    },
    {
      park_name: "Muir Woods National Monument",
      lat: 37.89889,
      long: -122.58362,
      average_visits: 961066
    },
    {
      park_name: "Big Cypress National Preserve",
      lat: 25.85889,
      long: -81.0337,
      average_visits: 945345
    },
    {
      park_name: "Curecanti National Recreation Area",
      lat: 38.45472,
      long: -107.32672,
      average_visits: 943146
    },
    {
      park_name: "President's Park (White House)",
      lat: 38.89417,
      long: -77.03674,
      average_visits: 940938
    },
    {
      park_name: "Badlands National Park",
      lat: 43.6504,
      long: -102.43392,
      average_visits: 931199
    },
    {
      park_name: "Klondike Gold Rush National Historical Park",
      lat: 59.45639,
      long: -135.31162,
      average_visits: 901542
    },
    {
      park_name: "Fredericksburg and Spotsylvania National Military Park",
      lat: 38.29305,
      long: -77.46901,
      average_visits: 870581
    },
    {
      park_name: "Fort Vancouver National Historic Site",
      lat: 45.6254,
      long: -122.65792,
      average_visits: 862005
    },
    {
      park_name: "Cabrillo National Monument",
      lat: 32.67352,
      long: -117.24202,
      average_visits: 861590
    },
    {
      park_name: "Lake Meredith National Recreation Area",
      lat: 35.71472,
      long: -101.55252,
      average_visits: 850853
    },
    {
      park_name: "Cumberland Gap National Historical Park",
      lat: 36.60417,
      long: -83.68703,
      average_visits: 837608
    },
    {
      park_name: "Fort Sumter National Monument",
      lat: 32.75222,
      long: -79.87453,
      average_visits: 829734
    },
    {
      park_name: "Canyon de Chelly National Monument",
      lat: 36.1336,
      long: -109.46912,
      average_visits: 826319
    },
    {
      park_name: "Whiskeytown-Shasta-Trinity National Recreation Area",
      lat: 40.73528,
      long: -122.94172,
      average_visits: 807364
    },
    {
      park_name: "Capitol Reef National Park",
      lat: 38.27617,
      long: -111.23862,
      average_visits: 783314
    },
    {
      park_name: "Castillo de San Marcos National Monument",
      lat: 29.89775,
      long: -81.31153,
      average_visits: 755302
    },
    {
      park_name: "Saguaro National Park",
      lat: 32.2432,
      long: -111.13052,
      average_visits: 721678
    },
    {
      park_name: "Santa Monica Mountains National Recreation Area",
      lat: 34.10389,
      long: -118.60222,
      average_visits: 667752
    },
    {
      park_name: "Petrified Forest National Park",
      lat: 35.06274,
      long: -109.78332,
      average_visits: 666467
    },
    {
      park_name: "Ross Lake National Recreation Area",
      lat: 48.67306,
      long: -121.24502,
      average_visits: 656926
    },
    {
      park_name: "Martin Luther King Jr. National Historic Site",
      lat: 33.755,
      long: -84.37211,
      average_visits: 653774
    },
    {
      park_name: "Cedar Breaks National Monument",
      lat: 37.64519,
      long: -112.84612,
      average_visits: 651299
    },
    {
      park_name: "Big South Fork National River and Recreation Area",
      lat: 36.4865,
      long: -84.69835,
      average_visits: 647981
    },
    {
      park_name: "Fort McHenry National Monument and Historic Shrine",
      lat: 39.26306,
      long: -76.57981,
      average_visits: 646930
    },
    {
      park_name: "Arlington House The Robert E. Lee Memorial",
      lat: 38.88275,
      long: -77.07389,
      average_visits: 646323
    },
    {
      park_name: "Ford's Theatre National Historic Site",
      lat: 38.89667,
      long: -77.02563,
      average_visits: 639866
    },
    {
      park_name: "Fort Matanzas National Monument",
      lat: 29.71528,
      long: -81.23898,
      average_visits: 619954
    },
    {
      park_name: "Theodore Roosevelt National Park",
      lat: 47.3352,
      long: -103.24872,
      average_visits: 607803
    },
    {
      park_name: "Padre Island National Seashore",
      lat: 26.98444,
      long: -97.36846,
      average_visits: 596923
    },
    {
      park_name: "Pictured Rocks National Lakeshore",
      lat: 46.56222,
      long: -86.31235,
      average_visits: 588610
    },
    {
      park_name: "Mojave National Preserve",
      lat: 34.88333,
      long: -115.71642,
      average_visits: 582213
    },
    {
      park_name: "Kings Canyon National Park",
      lat: 36.81199,
      long: -118.64062,
      average_visits: 577854
    },
    {
      park_name: "Manassas National Battlefield Park",
      lat: 38.81277,
      long: -77.52151,
      average_visits: 574144
    },
    {
      park_name: "Vicksburg National Military Park",
      lat: 32.34879,
      long: -90.84963,
      average_visits: 573111
    },
    {
      park_name: "Salem Maritime National Historic Site",
      lat: 42.52056,
      long: -70.88706,
      average_visits: 572013
    },
    {
      park_name: "Wind Cave National Park",
      lat: 43.5909,
      long: -103.43302,
      average_visits: 571858
    },
    {
      park_name: "White House",
      lat: 38.89767,
      long: -77.03634,
      average_visits: 566346
    },
    {
      park_name: "Mesa Verde National Park",
      lat: 37.3192,
      long: -108.50862,
      average_visits: 542916
    },
    {
      park_name: "Lowell National Historical Park",
      lat: 42.64667,
      long: -71.31008,
      average_visits: 540651
    },
    {
      park_name: "Canyonlands National Park",
      lat: 38.261,
      long: -109.88072,
      average_visits: 539336
    },
    {
      park_name: "Crater Lake National Park",
      lat: 42.943,
      long: -122.10872,
      average_visits: 532266
    },
    {
      park_name: "Mammoth Cave National Park",
      lat: 37.1841,
      long: -86.11403,
      average_visits: 519706
    },
    {
      park_name: "Biscayne National Park",
      lat: 25.442,
      long: -80.26162,
      average_visits: 504554
    },
    {
      park_name: "White Sands National Monument",
      lat: 32.77971,
      long: -106.17142,
      average_visits: 491688
    },
    {
      park_name: "Saint Croix National Scenic Riverway",
      lat: 45.38917,
      long: -92.65735,
      average_visits: 488946
    },
    {
      park_name: "Denali National Park and Preserve",
      lat: 63.33333,
      long: -150.49972,
      average_visits: 481744
    },
    {
      park_name: "Montezuma Castle National Monument",
      lat: 34.61305,
      long: -111.83972,
      average_visits: 481590
    },
    {
      park_name: "Glacier Bay National Park and Preserve",
      lat: 58.5,
      long: -136.99996,
      average_visits: 480802
    },
    {
      park_name: "Fire Island National Seashore",
      lat: 40.69639,
      long: -72.98263,
      average_visits: 479796
    },
    {
      park_name: "Cape Lookout National Seashore",
      lat: 34.60528,
      long: -76.53624,
      average_visits: 471271
    },
    {
      park_name: "Wright Brothers National Memorial",
      lat: 36.01417,
      long: -75.66792,
      average_visits: 458100
    },
    {
      park_name: "Wolf Trap National Park for the Performing Arts",
      lat: 38.93694,
      long: -77.26184,
      average_visits: 442520
    },
    {
      park_name: "Governors Island National Monument",
      lat: 40.69139,
      long: -74.01589,
      average_visits: 433139
    },
    {
      park_name: "Redwood National Park",
      lat: 41.4771,
      long: -123.94482,
      average_visits: 432380
    },
    {
      park_name: "Virgin Islands National Park",
      lat: 18.33333,
      long: -64.73323,
      average_visits: 432377
    },
    {
      park_name: "Devils Tower National Monument",
      lat: 44.59028,
      long: -104.71502,
      average_visits: 430800
    },
    {
      park_name: "Colorado National Monument",
      lat: 39.04249,
      long: -108.68582,
      average_visits: 429510
    },
    {
      park_name: "Lassen Volcanic National Park",
      lat: 40.48297,
      long: -121.41452,
      average_visits: 425829
    },
    {
      park_name: "Pu'uhonua o Honaunau National Historical Park",
      lat: 19.42194,
      long: -155.91002,
      average_visits: 422964
    },
    {
      park_name: "Carlsbad Caverns National Park",
      lat: 32.1648,
      long: -104.40902,
      average_visits: 422600
    },
    {
      park_name: "Shiloh National Military Park",
      lat: 35.15188,
      long: -88.32981,
      average_visits: 421275
    },
    {
      park_name: "Fort Washington National Park",
      lat: 38.71083,
      long: -77.03304,
      average_visits: 407992
    },
    {
      park_name: "Jean Lafitte National Historical Park and Preserve",
      lat: 29.9425,
      long: -89.99398,
      average_visits: 405233
    },
    {
      park_name: "Vanderbilt Mansion National Historic Site",
      lat: 41.79611,
      long: -73.94174,
      average_visits: 387338
    },
    {
      park_name: "Fort Pulaski National Monument",
      lat: 32.02722,
      long: -80.89008,
      average_visits: 384832
    },
    {
      park_name: "Antietam National Battlefield",
      lat: 39.4803,
      long: -77.73945,
      average_visits: 379489
    },
    {
      park_name: "Boston African American National Historic Site",
      lat: 42.36,
      long: -71.06454,
      average_visits: 373084
    },
    {
      park_name: "Big Bend National Park",
      lat: 29.81874,
      long: -103.06042,
      average_visits: 359403
    },
    {
      park_name: "Washington Monument",
      lat: 38.88947,
      long: -77.03504,
      average_visits: 357525
    },
    {
      park_name: "Prince William Forest Park",
      lat: 38.58528,
      long: -77.3797,
      average_visits: 340156
    },
    {
      park_name: "Guilford Courthouse National Military Park",
      lat: 36.13139,
      long: -79.84623,
      average_visits: 319811
    },
    {
      park_name: "War in the Pacific National Historical Park",
      lat: 13.3,
      long: 144.66694,
      average_visits: 314480
    },
    {
      park_name: "Channel Islands National Park",
      lat: 34.0394,
      long: -119.74212,
      average_visits: 307829
    },
    {
      park_name: "Great Sand Dunes National Park",
      lat: 37.7539,
      long: -105.54172,
      average_visits: 307125
    },
    {
      park_name: "Little Bighorn Battlefield National Monument",
      lat: 45.57028,
      long: -107.42722,
      average_visits: 307006
    },
    {
      park_name: "De Soto National Memorial",
      lat: 27.52389,
      long: -82.64429,
      average_visits: 294802
    },
    {
      park_name: "Kenai Fjords National Park",
      lat: 59.91666,
      long: -149.64982,
      average_visits: 291727
    },
    {
      park_name: "Fort Raleigh National Historic Site",
      lat: 35.93833,
      long: -75.70872,
      average_visits: 290546
    },
    {
      park_name: "Lincoln Home National Historic Site",
      lat: 39.79722,
      long: -89.64484,
      average_visits: 287817
    },
    {
      park_name: "Catoctin Mountain Park",
      lat: 39.64833,
      long: -77.46665,
      average_visits: 287190
    },
    {
      park_name: "Harpers Ferry National Historical Park",
      lat: 39.32278,
      long: -77.72952,
      average_visits: 279452
    },
    {
      park_name: "Fort Caroline National Memorial",
      lat: 30.38694,
      long: -81.50042,
      average_visits: 271737
    },
    {
      park_name: "Morristown National Historical Park",
      lat: 40.76694,
      long: -74.52842,
      average_visits: 267973
    },
    {
      park_name: "Kings Mountain National Military Park",
      lat: 35.13778,
      long: -81.38928,
      average_visits: 265717
    },
    {
      park_name: "San Juan Island National Historical Park",
      lat: 48.45583,
      long: -122.98532,
      average_visits: 265327
    },
    {
      park_name: "Flight 93 National Memorial",
      lat: 40.05615,
      long: -78.9076,
      average_visits: 264334
    },
    {
      park_name: "United States Marine Corps War Memorial",
      lat: 38.89047,
      long: -77.06946,
      average_visits: 259556
    },
    {
      park_name: "Appomattox Court House National Historical Park",
      lat: 37.37845,
      long: -78.80083,
      average_visits: 258617
    },
    {
      park_name: "Dinosaur National Monument",
      lat: 40.53333,
      long: -108.98302,
      average_visits: 255677
    },
    {
      park_name: "Little River Canyon National Preserve",
      lat: 34.44056,
      long: -85.59536,
      average_visits: 249448
    },
    {
      park_name: "Fort Frederica National Monument",
      lat: 31.22389,
      long: -81.39313,
      average_visits: 242284
    },
    {
      park_name: "New Bedford Whaling National Historical Park",
      lat: 41.63556,
      long: -70.92314,
      average_visits: 241203
    },
    {
      park_name: "Organ Pipe Cactus National Park",
      lat: 32.04444,
      long: -112.85752,
      average_visits: 240196
    },
    {
      park_name: "Stones River National Battlefield",
      lat: 35.87629,
      long: -86.43639,
      average_visits: 239662
    },
    {
      park_name: "Fort Donelson National Battlefield",
      lat: 36.48438,
      long: -87.85736,
      average_visits: 239540
    },
    {
      park_name: "Lewis and Clark National and State Historical Parks",
      lat: 46.13361,
      long: -123.87722,
      average_visits: 237531
    },
    {
      park_name: "Nez Perce National Historical Park",
      lat: 46.14194,
      long: -116.35912,
      average_visits: 231855
    },
    {
      park_name: "Pinnacles National Monument",
      lat: 36.48693,
      long: -121.16662,
      average_visits: 229210
    },
    {
      park_name: "Bighorn Canyon National Recreation Area",
      lat: 45.19444,
      long: -108.13032,
      average_visits: 229141
    },
    {
      park_name: "Voyageurs National Park",
      lat: 48.0996,
      long: -93.01663,
      average_visits: 227996
    },
    {
      park_name: "Craters of the Moon National Monument and Preserve",
      lat: 43.41667,
      long: -113.51642,
      average_visits: 223600
    },
    {
      park_name: "Adams National Historical Park",
      lat: 42.25639,
      long: -71.01119,
      average_visits: 222700
    },
    {
      park_name: "Fort Necessity National Battlefield",
      lat: 39.81667,
      long: -79.59956,
      average_visits: 222034
    },
    {
      park_name: "Cowpens National Battlefield",
      lat: 35.13667,
      long: -81.8179,
      average_visits: 219214
    },
    {
      park_name: "Wupatki National Monument",
      lat: 35.56556,
      long: -111.38662,
      average_visits: 217035
    },
    {
      park_name: "Natchez National Historical Park",
      lat: 31.54333,
      long: -91.38287,
      average_visits: 209678
    },
    {
      park_name: "Federal Hall",
      lat: 40.70722,
      long: -74.01014,
      average_visits: 204870
    },
    {
      park_name: "Abraham Lincoln Birthplace National Historical Park",
      lat: 37.5332,
      long: -85.7302,
      average_visits: 200759
    },
    {
      park_name: "Black Canyon of the Gunnison National Park",
      lat: 38.58491,
      long: -107.72792,
      average_visits: 198211
    },
    {
      park_name: "Sitka National Historical Park",
      lat: 57.04694,
      long: -135.31362,
      average_visits: 197510
    },
    {
      park_name: "Piscataway Park",
      lat: 38.67861,
      long: -77.09276,
      average_visits: 190765
    },
    {
      park_name: "Apostle Islands National Lakeshore",
      lat: 46.96528,
      long: -90.66402,
      average_visits: 188797
    },
    {
      park_name: "Petersburg National Battlefield",
      lat: 37.21944,
      long: -77.36123,
      average_visits: 188265
    },
    {
      park_name: "Bandelier National Monument",
      lat: 35.77888,
      long: -106.32082,
      average_visits: 183778
    },
    {
      park_name: "Guadalupe Mountains National Park",
      lat: 31.916,
      long: -104.85962,
      average_visits: 175588
    },
    {
      park_name: "Pennsylvania Avenue National Historic Site",
      lat: 38.89361,
      long: -77.02373,
      average_visits: 169864
    },
    {
      park_name: "Wilson's Creek National Battlefield",
      lat: 37.11556,
      long: -93.41984,
      average_visits: 169159
    },
    {
      park_name: "Greenbelt Park",
      lat: 38.98917,
      long: -76.89831,
      average_visits: 164923
    },
    {
      park_name: "Sunset Crater Volcano National Monument",
      lat: 35.36558,
      long: -111.50042,
      average_visits: 164215
    },
    {
      park_name: "John Day Fossil Beds National Monument",
      lat: 44.54987,
      long: -119.63412,
      average_visits: 163546
    },
    {
      park_name: "Richmond National Battlefield Park",
      lat: 37.42917,
      long: -77.37345,
      average_visits: 163015
    },
    {
      park_name: "Missouri National Recreational River",
      lat: 42.8625,
      long: -97.39263,
      average_visits: 158095
    },
    {
      park_name: "Home of Franklin D. Roosevelt National Historic Site",
      lat: 41.76721,
      long: -73.93539,
      average_visits: 153457
    },
    {
      park_name: "Theodore Roosevelt Island",
      lat: 38.89721,
      long: -77.06402,
      average_visits: 145559
    },
    {
      park_name: "Chamizal National Memorial",
      lat: 31.76778,
      long: -106.45402,
      average_visits: 144522
    },
    {
      park_name: "Allegheny Portage Railroad",
      lat: 40.45417,
      long: -78.5401,
      average_visits: 143806
    },
    {
      park_name: "Herbert Hoover National Historic Site",
      lat: 41.66861,
      long: -91.3479,
      average_visits: 140328
    },
    {
      park_name: "El Malpais National Monument",
      lat: 34.87635,
      long: -107.95752,
      average_visits: 138842
    },
    {
      park_name: "Johnstown Flood National Memorial",
      lat: 40.34556,
      long: -78.77847,
      average_visits: 133246
    },
    {
      park_name: "Big Thicket National Preserve",
      lat: 30.27567,
      long: -94.41082,
      average_visits: 132697
    },
    {
      park_name: "Walnut Canyon National Monument",
      lat: 35.17167,
      long: -111.50942,
      average_visits: 132383
    },
    {
      park_name: "Perry's Victory and International Peace Memorial",
      lat: 41.65417,
      long: -82.81124,
      average_visits: 130931
    },
    {
      park_name: "Lincoln Boyhood National Memorial",
      lat: 38.11833,
      long: -86.9968,
      average_visits: 130328
    },
    {
      park_name: "Lava Beds National Monument",
      lat: 41.71389,
      long: -121.50802,
      average_visits: 130159
    },
    {
      park_name: "Ocmulgee National Monument",
      lat: 32.83667,
      long: -83.60814,
      average_visits: 127877
    },
    {
      park_name: "Andersonville National Historic Site",
      lat: 32.19759,
      long: -84.12686,
      average_visits: 127810
    },
    {
      park_name: "Pu'ukohola Heiau National Historic Site",
      lat: 20.02667,
      long: -155.81972,
      average_visits: 127501
    },
    {
      park_name: "Scotts Bluff National Monument",
      lat: 41.83556,
      long: -103.70052,
      average_visits: 125941
    },
    {
      park_name: "George Washington Birthplace National Monument",
      lat: 38.18611,
      long: -76.93036,
      average_visits: 125351
    },
    {
      park_name: "George Rogers Clark National Historical Park",
      lat: 38.67919,
      long: -87.5354,
      average_visits: 124042
    },
    {
      park_name: "Congaree National Park",
      lat: 33.78333,
      long: -80.78308,
      average_visits: 121036
    },
    {
      park_name: "Coronado National Memorial",
      lat: 31.3455,
      long: -110.25602,
      average_visits: 119639
    },
    {
      park_name: "Petroglyph National Monument",
      lat: 35.13583,
      long: -106.76162,
      average_visits: 118956
    },
    {
      park_name: "Gauley River National Recreation Area",
      lat: 38.22,
      long: -80.88982,
      average_visits: 115039
    },
    {
      park_name: "Christiansted National Historic Site",
      lat: 17.74693,
      long: -64.70204,
      average_visits: 114023
    },
    {
      park_name: "Jewel Cave National Monument",
      lat: 43.72944,
      long: -103.82912,
      average_visits: 112085
    },
    {
      park_name: "Devils Postpile National Monument",
      lat: 37.62444,
      long: -119.08412,
      average_visits: 110111
    },
    {
      park_name: "Lyndon B. Johnson National Historical Park",
      lat: 30.24083,
      long: -98.62398,
      average_visits: 109715
    },
    {
      park_name: "Timpanogos Cave National Monument",
      lat: 40.44056,
      long: -111.70912,
      average_visits: 108120
    },
    {
      park_name: "River Raisin National Battlefield Park",
      lat: 41.91361,
      long: -83.37817,
      average_visits: 107132
    },
    {
      park_name: "Great Basin National Park",
      lat: 38.93873,
      long: -114.26082,
      average_visits: 105880
    },
    {
      park_name: "Pea Ridge National Military Park",
      lat: 36.45444,
      long: -94.03401,
      average_visits: 105365
    },
    {
      park_name: "Fort Stanwix National Monument",
      lat: 43.21056,
      long: -75.45506,
      average_visits: 104364
    },
    {
      park_name: "City of Rocks National Reserve",
      lat: 42.07727,
      long: -113.70366,
      average_visits: 100295
    },
    {
      park_name: "General Grant National Memorial",
      lat: 40.81333,
      long: -73.96285,
      average_visits: 99491
    },
    {
      park_name: "Tuzigoot National Monument",
      lat: 34.77085,
      long: -112.02572,
      average_visits: 98053
    },
    {
      park_name: "Fort Smith National Historic Site",
      lat: 35.34333,
      long: -94.42261,
      average_visits: 95629
    },
    {
      park_name: "Little Rock Central High School National Historic Site",
      lat: 34.73666,
      long: -92.29845,
      average_visits: 93815
    },
    {
      park_name: "Natural Bridges National Monument",
      lat: 37.60138,
      long: -110.01342,
      average_visits: 93326
    },
    {
      park_name: "Grand Portage National Monument",
      lat: 47.98528,
      long: -89.74898,
      average_visits: 91908
    },
    {
      park_name: "Steamtown National Historic Site",
      lat: 41.40733,
      long: -75.67116,
      average_visits: 91780
    },
    {
      park_name: "New Orleans Jazz National Historical Park",
      lat: 29.96306,
      long: -90.06784,
      average_visits: 90495
    },
    {
      park_name: "Rainbow Bridge National Monument",
      lat: 37.07721,
      long: -110.96382,
      average_visits: 87079
    },
    {
      park_name: "Manzanar National Historic Site",
      lat: 36.72833,
      long: -118.15422,
      average_visits: 86691
    },
    {
      park_name: "Homestead National Monument of America",
      lat: 40.28525,
      long: -96.82172,
      average_visits: 81693
    },
    {
      park_name: "Oregon Caves National Monument",
      lat: 42.09806,
      long: -123.40692,
      average_visits: 77062
    },
    {
      park_name: "Carl Sandburg Home National Historic Site",
      lat: 35.26778,
      long: -82.45149,
      average_visits: 76484
    },
    {
      park_name: "Effigy Mounds National Monument",
      lat: 43.08861,
      long: -91.18537,
      average_visits: 76277
    },
    {
      park_name: "Ninety Six National Historic Site",
      lat: 34.14694,
      long: -82.02428,
      average_visits: 76152
    },
    {
      park_name: "Minuteman Missile National Historic Site",
      lat: 43.93111,
      long: -102.16032,
      average_visits: 76120
    },
    {
      park_name: "African Burial Ground National Monument",
      lat: 40.71367,
      long: -73.99364,
      average_visits: 74684
    },
    {
      park_name: "Saratoga National Historical Park",
      lat: 42.99889,
      long: -73.63728,
      average_visits: 74339
    },
    {
      park_name: "Hubbell Trading Post National Historic Site",
      lat: 35.72556,
      long: -109.59312,
      average_visits: 74165
    },
    {
      park_name: "Wrangell-St. Elias National Park and Preserve",
      lat: 61,
      long: -141.99972,
      average_visits: 72362
    },
    {
      park_name: "Moores Creek National Battlefield",
      lat: 34.45806,
      long: -78.10928,
      average_visits: 72316
    },
    {
      park_name: "Casa Grande Ruins National Monument",
      lat: 32.99517,
      long: -111.53162,
      average_visits: 72114
    },
    {
      park_name: "Navajo National Monument",
      lat: 36.68417,
      long: -110.53442,
      average_visits: 71415
    },
    {
      park_name: "Pipestone National Monument",
      lat: 44.01333,
      long: -96.32481,
      average_visits: 70736
    },
    {
      park_name: "Dayton Aviation Heritage National Historical Park",
      lat: 39.79472,
      long: -84.0887,
      average_visits: 69506
    },
    {
      park_name: "Niobrara National Scenic River",
      lat: 42.88333,
      long: -100.31642,
      average_visits: 68787
    },
    {
      park_name: "Horseshoe Bend National Military Park",
      lat: 32.97083,
      long: -85.73817,
      average_visits: 68252
    },
    {
      park_name: "Jimmy Carter National Historic Site",
      lat: 32.03389,
      long: -84.39984,
      average_visits: 67782
    },
    {
      park_name: "Cumberland Island National Seashore",
      lat: 30.83333,
      long: -81.44985,
      average_visits: 67470
    },
    {
      park_name: "Florissant Fossil Beds National Monument",
      lat: 38.91806,
      long: -105.26744,
      average_visits: 64637
    },
    {
      park_name: "Dry Tortugas National Park",
      lat: 24.6384,
      long: -81.7859,
      average_visits: 62764
    },
    {
      park_name: "Kalaupapa Leprosy Settlement and National Historical Park",
      lat: 21.17778,
      long: -156.95972,
      average_visits: 62048
    },
    {
      park_name: "Eisenhower National Historic Site",
      lat: 39.79332,
      long: -77.26316,
      average_visits: 58543
    },
    {
      park_name: "Eleanor Roosevelt National Historic Site",
      lat: 41.78582,
      long: -73.93511,
      average_visits: 56625
    },
    {
      park_name: "Roger Williams National Memorial",
      lat: 41.83038,
      long: -71.41075,
      average_visits: 55823
    },
    {
      park_name: "Fort Laramie National Historic Site",
      lat: 42.20917,
      long: -104.53562,
      average_visits: 54413
    },
    {
      park_name: "Monocacy National Battlefield",
      lat: 39.37115,
      long: -77.39192,
      average_visits: 54286
    },
    {
      park_name: "Whitman Mission National Historic Site",
      lat: 46.04,
      long: -118.46112,
      average_visits: 53649
    },
    {
      park_name: "Andrew Johnson National Historic Site",
      lat: 36.15833,
      long: -82.83482,
      average_visits: 52772
    },
    {
      park_name: "Frederick Douglass National Historic Site",
      lat: 38.86333,
      long: -76.98511,
      average_visits: 51699
    },
    {
      park_name: "Capulin Volcano National Monument",
      lat: 36.78222,
      long: -103.96972,
      average_visits: 51437
    },
    {
      park_name: "Chiricahua National Monument",
      lat: 32.01778,
      long: -109.34802,
      average_visits: 50818
    },
    {
      park_name: "Pipe Spring National Monument",
      lat: 36.86193,
      long: -112.73692,
      average_visits: 50685
    },
    {
      park_name: "Hopewell Furnace National Historic Site",
      lat: 40.19861,
      long: -75.7754,
      average_visits: 50498
    },
    {
      park_name: "El Morro National Monument",
      lat: 35.03833,
      long: -108.35302,
      average_visits: 49326
    },
    {
      park_name: "Fort Davis National Historic Site",
      lat: 30.59583,
      long: -103.92562,
      average_visits: 48861
    },
    {
      park_name: "Golden Spike National Historic Site",
      lat: 41.62048,
      long: -112.54722,
      average_visits: 48716
    },
    {
      park_name: "Longfellow National Historic Site",
      lat: 42.37667,
      long: -71.12623,
      average_visits: 48242
    },
    {
      park_name: "Tonto National Monument",
      lat: 33.65694,
      long: -111.09412,
      average_visits: 48235
    },
    {
      park_name: "Thomas Edison National Historical Park",
      lat: 40.78694,
      long: -74.23759,
      average_visits: 47729
    },
    {
      park_name: "Charles Pinckney National Historic Site",
      lat: 32.84611,
      long: -79.82454,
      average_visits: 47589
    },
    {
      park_name: "Aztec Ruins National Monument",
      lat: 36.83583,
      long: -107.99782,
      average_visits: 44988
    },
    {
      park_name: "Palo Alto Battlefield National Historical Park",
      lat: 26.02139,
      long: -97.48037,
      average_visits: 43977
    },
    {
      park_name: "Ulysses S. Grant National Historic Site",
      lat: 38.55111,
      long: -90.35178,
      average_visits: 42544
    },
    {
      park_name: "Sagamore Hill National Historic Site",
      lat: 40.88556,
      long: -73.49734,
      average_visits: 42154
    },
    {
      park_name: "Big Hole National Battlefield",
      lat: 45.6375,
      long: -113.64332,
      average_visits: 41405
    },
    {
      park_name: "Chaco Culture National Historical Park",
      lat: 36.05833,
      long: -107.95862,
      average_visits: 40364
    },
    {
      park_name: "Hopewell Culture National Historical Park",
      lat: 39.37583,
      long: -83.0062,
      average_visits: 40222
    },
    {
      park_name: "Tumacácori National Historical Park",
      lat: 31.5675,
      long: -111.05052,
      average_visits: 39621
    },
    {
      park_name: "Bluestone National Scenic River",
      lat: 37.54167,
      long: -80.99901,
      average_visits: 38676
    },
    {
      park_name: "John Muir National Historic Site",
      lat: 37.99131,
      long: -122.13302,
      average_visits: 38501
    },
    {
      park_name: "Gila Cliff Dwellings National Monument",
      lat: 33.22722,
      long: -108.27192,
      average_visits: 38448
    },
    {
      park_name: "George Washington Carver National Monument",
      lat: 36.98636,
      long: -94.354,
      average_visits: 38079
    },
    {
      park_name: "Lake Chelan National Recreation Area",
      lat: 48.32194,
      long: -120.67802,
      average_visits: 37244
    },
    {
      park_name: "Pecos National Historical Park",
      lat: 35.54999,
      long: -105.68912,
      average_visits: 37176
    },
    {
      park_name: "Marsh-Billings-Rockefeller National Historical Park",
      lat: 43.63125,
      long: -72.52917,
      average_visits: 37135
    },
    {
      park_name: "Katmai National Park and Preserve",
      lat: 58.5,
      long: -154.99972,
      average_visits: 36825
    },
    {
      park_name: "Arkansas Post National Memorial",
      lat: 34.02361,
      long: -91.34347,
      average_visits: 36331
    },
    {
      park_name: "Buck Island Reef National Monument",
      lat: 17.78694,
      long: -64.61897,
      average_visits: 35675
    },
    {
      park_name: "Saint-Gaudens National Historic Site",
      lat: 43.4959,
      long: -72.36848,
      average_visits: 35647
    },
    {
      park_name: "Tuskegee Airmen National Historic Site",
      lat: 32.45722,
      long: -85.67984,
      average_visits: 34627
    },
    {
      park_name: "Hampton National Historic Site",
      lat: 39.41611,
      long: -76.58734,
      average_visits: 34316
    },
    {
      park_name: "Friendship Hill National Historic Site",
      lat: 39.77778,
      long: -79.92899,
      average_visits: 33957
    },
    {
      park_name: "Women's Rights National Historical Park",
      lat: 42.91083,
      long: -76.8012,
      average_visits: 33441
    },
    {
      park_name: "Harry S. Truman National Historic Site",
      lat: 38.90211,
      long: -94.53209,
      average_visits: 31836
    },
    {
      park_name: "Salinas Pueblo Missions National Monument",
      lat: 34.25972,
      long: -106.09002,
      average_visits: 31366
    },
    {
      park_name: "Hovenweep National Monument",
      lat: 37.38388,
      long: -109.07702,
      average_visits: 30294
    },
    {
      park_name: "James A. Garfield National Historic Site",
      lat: 41.66222,
      long: -81.34706,
      average_visits: 29958
    },
    {
      park_name: "Fort Larned National Historic Site",
      lat: 38.15667,
      long: -99.2265,
      average_visits: 28270
    },
    {
      park_name: "Weir Farm National Historic Site",
      lat: 41.25806,
      long: -73.45455,
      average_visits: 28244
    },
    {
      park_name: "Cane River Creole National Historical Park",
      lat: 31.66684,
      long: -93.00343,
      average_visits: 27482
    },
    {
      park_name: "Hamilton Grange National Memorial",
      lat: 40.82238,
      long: -73.94815,
      average_visits: 27278
    },
    {
      park_name: "Fort Scott National Historic Site",
      lat: 37.84389,
      long: -94.70455,
      average_visits: 26826
    },
    {
      park_name: "Bent's Old Fort National Historic Site",
      lat: 38.04045,
      long: -103.42502,
      average_visits: 26735
    },
    {
      park_name: "Hagerman Fossil Beds National Monument",
      lat: 42.79028,
      long: -114.94502,
      average_visits: 25055
    },
    {
      park_name: "Tuskegee Institute National Historic Site",
      lat: 32.43028,
      long: -85.70762,
      average_visits: 25031
    },
    {
      park_name: "North Cascades National Park",
      lat: 48.70643,
      long: -121.18952,
      average_visits: 24164
    },
    {
      park_name: "Booker T. Washington National Monument",
      lat: 37.12333,
      long: -79.76564,
      average_visits: 23562
    },
    {
      park_name: "William Howard Taft National Historic Site",
      lat: 39.11972,
      long: -84.50845,
      average_visits: 23473
    },
    {
      park_name: "Russell Cave National Monument",
      lat: 34.97417,
      long: -85.80314,
      average_visits: 23295
    },
    {
      park_name: "Tallgrass Prairie National Preserve",
      lat: 38.43278,
      long: -96.55869,
      average_visits: 22626
    },
    {
      park_name: "Brown v. Board of Education National Historic Site",
      lat: 39.03806,
      long: -95.67621,
      average_visits: 21671
    },
    {
      park_name: "Grant-Kohrs Ranch National Historic Site",
      lat: 46.40833,
      long: -112.73922,
      average_visits: 20500
    },
    {
      park_name: "Martin Van Buren National Historic Site",
      lat: 42.36971,
      long: -73.70405,
      average_visits: 20492
    },
    {
      park_name: "John Fitzgerald Kennedy National Historic Site",
      lat: 42.34583,
      long: -71.12428,
      average_visits: 20289
    },
    {
      park_name: "Springfield Armory National Historic Site",
      lat: 42.10806,
      long: -72.58151,
      average_visits: 19290
    },
    {
      park_name: "Theodore Roosevelt Inaugural National Historic Site",
      lat: 42.90148,
      long: -78.87226,
      average_visits: 18995
    },
    {
      park_name: "Fossil Butte National Monument",
      lat: 41.85875,
      long: -110.76762,
      average_visits: 18605
    },
    {
      park_name: "Isle Royale National Park",
      lat: 47.9624,
      long: -88.89144,
      average_visits: 17972
    },
    {
      park_name: "Knife River Indian Villages National Historic Site",
      lat: 47.35417,
      long: -101.38562,
      average_visits: 16952
    },
    {
      park_name: "Saint Paul's Church National Historic Site",
      lat: 40.89278,
      long: -73.82566,
      average_visits: 16612
    },
    {
      park_name: "Keweenaw National Historical Park",
      lat: 47.24667,
      long: -88.4537,
      average_visits: 15546
    },
    {
      park_name: "Theodore Roosevelt Birthplace National Historic Site",
      lat: 40.73889,
      long: -73.98956,
      average_visits: 15037
    },
    {
      park_name: "Agate Fossil Beds National Monument",
      lat: 42.42428,
      long: -103.75492,
      average_visits: 14487
    },
    {
      park_name: "Edgar Allan Poe National Historic Site",
      lat: 39.96167,
      long: -75.15011,
      average_visits: 14398
    },
    {
      park_name: "Fort Union Trading Post National Historic Site",
      lat: 47.99944,
      long: -104.04032,
      average_visits: 13491
    },
    {
      park_name: "Lake Clark National Park and Preserve",
      lat: 60.96667,
      long: -153.41642,
      average_visits: 13402
    },
    {
      park_name: "Clara Barton National Historic Site",
      lat: 38.96694,
      long: -77.14065,
      average_visits: 13029
    },
    {
      park_name: "Saint Croix Island International Historic Site",
      lat: 45.12833,
      long: -67.13317,
      average_visits: 12117
    },
    {
      park_name: "Washita Battlefield National Historic Site",
      lat: 36.6175,
      long: -99.70012,
      average_visits: 11710
    },
    {
      park_name: "Minidoka National Historic Site",
      lat: 42.63694,
      long: -114.23202,
      average_visits: 11622
    },
    {
      park_name: "Mary McLeod Bethune Council House National Historic Site",
      lat: 38.90778,
      long: -77.03012,
      average_visits: 11441
    },
    {
      park_name: "First Ladies National Historic Site",
      lat: 40.79667,
      long: -81.37511,
      average_visits: 11191
    },
    {
      park_name: "Gates of the Arctic National Park and Preserve",
      lat: 67.78333,
      long: -153.29972,
      average_visits: 11038
    },
    {
      park_name: "Saugus Iron Works National Historic Site",
      lat: 42.46778,
      long: -71.00873,
      average_visits: 10855
    },
    {
      park_name: "Fort Union National Monument",
      lat: 35.90722,
      long: -105.01802,
      average_visits: 10492
    },
    {
      park_name: "Noatak National Preserve",
      lat: 68,
      long: -161.19972,
      average_visits: 10151
    },
    {
      park_name: "Kobuk Valley National Park",
      lat: 67.34408,
      long: -159.13662,
      average_visits: 9552
    },
    {
      park_name: "Maggie L. Walker National Historic Site",
      lat: 37.54778,
      long: -77.4379,
      average_visits: 9258
    },
    {
      park_name: "Cape Krusenstern National Monument",
      lat: 67.41333,
      long: -163.50002,
      average_visits: 8775
    },
    {
      park_name: "Fort Bowie National Historic Site",
      lat: 32.14611,
      long: -109.43542,
      average_visits: 8493
    },
    {
      park_name: "Thomas Stone National Historic Site",
      lat: 38.53139,
      long: -77.03595,
      average_visits: 6930
    },
    {
      park_name: "Frederick Law Olmsted National Historic Site",
      lat: 42.325,
      long: -71.13205,
      average_visits: 6898
    },
    {
      park_name: "Salt River Bay National Historical Park",
      lat: 17.77889,
      long: -64.7587,
      average_visits: 5767
    },
    {
      park_name: "Sand Creek Massacre National Historic Site",
      lat: 38.54083,
      long: -102.52832,
      average_visits: 5481
    },
    {
      park_name: "Alibates Flint Quarries National Monument",
      lat: 35.57139,
      long: -101.66722,
      average_visits: 4649
    },
    {
      park_name: "Eugene O'Neill National Historic Site",
      lat: 37.82444,
      long: -122.02942,
      average_visits: 3245
    },
    {
      park_name: "Nicodemus National Historic Site",
      lat: 39.39083,
      long: -99.61734,
      average_visits: 3144
    },
    {
      park_name: "Yukon-Charley Rivers National Preserve",
      lat: 65,
      long: -142.79972,
      average_visits: 3017
    },
    {
      park_name: "Thaddeus Kosciuszko National Memorial",
      lat: 39.94333,
      long: -75.14732,
      average_visits: 2366
    },
    {
      park_name: "Bering Land Bridge National Preserve",
      lat: 66.05595,
      long: -164.80842,
      average_visits: 2245
    },
    {
      park_name: "Carter G. Woodson Home National Historic Site",
      lat: 38.90999,
      long: -77.02399,
      average_visits: 1884
    },
    {
      park_name: "Port Chicago Naval Magazine National Memorial",
      lat: 38.05749,
      long: -122.02952,
      average_visits: 929
    },
    {
      park_name: "Aniakchak National Monument and Preserve",
      lat: 56.9,
      long: -158.14972,
      average_visits: 78
    }
]


for (var i = 0; i < parks.length; i++) {
  L.circle([parks[i].lat, parks[i].long], {
    fillOpacity: 0.75,
    color: "dodgerblue",
    fillColor: "lightblue",
    radius: markerSize(parks[i].average_visits)
  }).bindPopup("<h1>" + parks[i].park_name + "</h1> <hr> <h3>Average Annual Visits: " + parks[i].average_visits + "</h3>").addTo(myMap);
}
