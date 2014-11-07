"use strict";

module.exports = function () {
    var self = {};
    var facility = require('./fixtures').facility;

    var ids = {};
    ids._1 = 1;
    ids._2 = 2;

    self.westend1 = facility({
        "id": ids._1,
        "name": "Westend CAR",
        "location": {
            "bbox": [24.807768741075638, 60.16837631366566, 24.80811206382954, 60.16868052638392],
            "type": "Polygon",
            "coordinates": [
                [
                    [24.807768741075638, 60.16866985230115],
                    [24.80781165641989, 60.16837631366566],
                    [24.80811206382954, 60.16839232493162],
                    [24.808069148485306, 60.16868052638392],
                    [24.807768741075638, 60.16866985230115]
                ]
            ]
        },
        "aliases": ["Westend", "Westis"],
        "capacities": {
            "CAR": {
                "built": 100,
                "unavailable": 0
            }
        }
    });

    self.westend2 = facility({
        "id": ids._2,
        "name": "Westend BICYCLE",
        "location": {
            "bbox": [24.805209586446352, 60.16861541831023, 24.805365154569223, 60.16873283322467],
            "type": "Polygon",
            "coordinates": [
                [
                    [24.805209586446352, 60.168727496192155],
                    [24.805247137372564, 60.16861541831023],
                    [24.805365154569223, 60.16861808683568],
                    [24.805316874806948, 60.16873283322467],
                    [24.805209586446352, 60.168727496192155]
                ]
            ]
        },
        "aliases": ["Westis"],
        "capacities": {
            "BICYCLE": {
                "built": 50,
                "unavailable": 0
            }
        }
    });

    self.all = [
        self.westend1,
        self.westend2
    ];

    return self;
};