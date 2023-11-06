import Graphic from "https://js.arcgis.com/4.28/@arcgis/core/Graphic.js"
import SimpleFillSymbol from "https://js.arcgis.com/4.28/@arcgis/core/symbols/SimpleFillSymbol.js"

export const graphics = [new Graphic({
    geometry: {
        type: 'polygon',
        rings: [
            [9.064252013837375, 47.0418937977517],
            [9.0637434202483, 47.04172952733248],
            [9.063845510874643, 47.041580591086785],
            [9.064357347976909, 47.0417477079329],
            [9.064252013837375, 47.0418937977517]
        ],
        spatialReference: { wkid: 4326 }
    },
    attributes: { HEIGHT: 15 }
}), new Graphic({
    geometry: {
        type: 'polygon',
        rings: [
            [9.063791835723578, 47.041925556296434],
            [9.063789300520966, 47.0418229942899],
            [9.06390669331924, 47.04182480336618],
            [9.063907671905184, 47.04192685713022],
            [9.063791835723578, 47.041925556296434]
        ],
        spatialReference: { wkid: 4326 }
    },
    attributes: { HEIGHT: 22 }
}), new Graphic({
    geometry: {
        type: 'polygon',
        rings: [
            [9.064357848912579, 47.04174636736141],
            [9.064148934343876, 47.04167815598646],
            [9.064264027395865, 47.041514455477255],
            [9.064473622467943, 47.041582889249156],
            [9.064357848912579, 47.04174636736141]
        ],
        spatialReference: { wkid: 4326 }
    },
    attributes: { HEIGHT: 10 }
})]

export const simpleRenderer = {
    type: 'simple',
    symbol: new SimpleFillSymbol({
        color: [45, 12, 98, 0.8],
        outline: {
            color: [200, 200, 200, 1],
            width: 1
        }
    })
}

export const extrudeSymbol = {
    type: "polygon-3d",
    symbolLayers: [
        {
            type: "extrude",
            material: {
                color: [45, 12, 98, 0.5]
            },
            edges: {
                type: "solid",
                color: "#999",
                size: 0.5
            }
        }
    ]
}