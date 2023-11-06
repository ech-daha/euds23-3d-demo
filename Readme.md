# Demo steps

## Setup SceneView
- Import the Maps SDKs style
- Insert a script Tag
- Import Map.js and create a Map
- Basemap satellite
- How to display the Scene: SceneView. Therefore create a new div, where the view is attached
- Import SceneView and instantiate
- Map: map and div: 'viewDiv'
- Set center of [9.074, 47.041] and zoom: 14

Show the App and where we are. Show how to tilt the scene. No topography...

## Add Data
- Add the ground: 'world-elevation' to the map
Show in the App
- Go to Living Atlas and Show Swissbuildings (https://tiles.arcgis.com/tiles/oPre3pOfRfefL8y0/arcgis/rest/services/swissbuildings3D/SceneServer)
- Import SceneLayer
- Instantiate SceneLayer with URL from Living Atlas
Show Buildings on the map
Click on Building and show popup
- Change highlight color to [88, 249, 160]
Show on Map
Explain, that the data permeates the ground
It's not possible to see that, because by default, the Scene is above-ground only. This can be changed.
- map.ground.navigationConstraint = 'none'

## Add Functionailty
- Add ShadowCast Widget
Select 21 December and explain areas in shadow for more than (hours)
- Change the color of shadowCastWidget.viewModel.thresholdOptions.color to [88, 249, 160, 0.5]

## Add 2D data
We have added 3D data from Living Atlas. Now we want to add our own data.
In this case, we have a fictional footprint of a planned block of buildings.
These are client side Graphics and are added as aFeatureLayer and rendered using a SimpleFillSymbol.
- Add the featurelayer to the map