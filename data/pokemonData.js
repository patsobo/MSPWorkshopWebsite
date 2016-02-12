/**
    This is the data source for your application. In the real world, you would either get this data from a data base or
    from an API 
**/
exports.pokemonTypeName = {
    fire : 'Fire',
    water : 'Water',
    grass : 'Grass'
}
exports.fire = [
    {
    name: 'Charmander',
    moveset: ["Scratch",
            "Ember",
            "Smokescreen",
            "Fire Spin"
        ],
    photo : 'http://bulbapedia.bulbagarden.net/wiki/File:004Charmander.png'
}
]



exports.water = [
    {
        name: 'Squirtle',
        moveset: ["Bubble",
            "Bite",
            "Water Gun",
            "Withdraw"
        ],
        photo : 'http://bulbapedia.bulbagarden.net/wiki/File:007Squirtle.png'
    }
]


exports.grass = [
    {
        name: 'Bulbasaur',
        moveset: ["Leech Seed",
            "Vine Whip",
            "Razor Leaf",
            "Growl"
        ],
        photo : 'http://bulbapedia.bulbagarden.net/wiki/File:001Bulbasaur.png'
    }
]