//Test suite
var expect = require('chai').expect;
describe('checkForShip', function() {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    

    it('should correctly report a ship located at a given coordinate', function() {
        var player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };
        expect(checkForShip(player, [0,0]).status).to.be.true;
    });

    it('should correctly report no ship located at a given coordinate', function() {
        var player = {
            ships: [
                {
                    locations: [[0,0]]
                }
            ]
        };
        expect(checkForShip(player, [9,9]).status).to.be.false;
    });

    it('should correctly handle ships located at more than one coordinate', function() {
        var player = {
            ships: [
                {
                    locations: [[0,0], [0,1]]
                }
            ]
        };
        expect(checkForShip(player, [9,9]).status).to.be.false;
        expect(checkForShip(player, [0,1]).status).to.be.true;
        expect(checkForShip(player, [0,0]).status).to.be.true;
    });

    it('should correctly handle checking multiple ships', function() {
        var player = {
            ships: [
                {
                    locations: [[0,0], [0,1]]
                },
                {
                    locations: [[1,0], [1,1]]
                },
                {
                    locations: [[2,0], [2,1], [2,2], [2,3]]
                }
            ]
        };
        expect(checkForShip(player, [9,9]).status).to.be.false;

        expect(checkForShip(player, [0,0]).status).to.be.true;
        expect(checkForShip(player, [0,1]).status).to.be.true;

        expect(checkForShip(player, [1,0]).status).to.be.true;
        expect(checkForShip(player, [1,1]).status).to.be.true;

        expect(checkForShip(player, [2,2]).status).to.be.true;
        expect(checkForShip(player, [2,3]).status).to.be.true;
    });
})

describe('damageShip', function() {
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function() {
        var ship = {
            locations: [0,0],
            damage: []
        }

        damageShip(ship, [0,0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0,0]);
    })
});

describe('fireOnShip', function() {
    var fireOnShip = require('../game_logic/ship_methods').fireOnShip;
    var player = {
        ships: [
            {
                locations: [[0,0], [0,1]],
                damage:[]
            },
            {
                locations: [[1,0], [1,1]],
                damage:[]
            },
            {
                locations: [[2,0], [2,1], [2,2], [2,3]],
                damage:[]
            }
        ]
    };


    it('should fire on a given ship, point is matched', function() {
   
        fireOnShip(player, [0,0])

        expect(player.ships[0].damage).to.not.be.empty;
        expect(player.ships[0].damage[0]).to.deep.equal([0,0]);
    });

    it('should fire on a given ship, point is not matched', function() {   
        expect(fireOnShip(player, [1,2])).to.be.false;
    })
})