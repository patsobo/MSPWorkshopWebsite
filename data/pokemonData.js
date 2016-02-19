/**
    This is the data source for your application. In the real world, you would either get this data from a database or
    from an API 
**/
exports.pokemonType = {
    fire : 'Fire Type',
    water : 'Water Type',
    grass : 'Grass Type'
}
exports.fire = [
    {
        name: 'Charmander',
        moveset: ["Scratch",
            "Ember",
            "Smokescreen",
            "Fire Spin"
        ],
        photo : 'http://cdn.bulbagarden.net/upload/7/73/004Charmander.png'
    },
    {
        name: 'Cyndaquil',
        moveset: ["Flamethrower",
            "Flame Wheel",
            "Swift",
            "Smokescreen"
        ],
        photo : 'http://cdn.bulbagarden.net/upload/9/9b/155Cyndaquil.png'
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
        photo : 'http://cdn.bulbagarden.net/upload/3/39/007Squirtle.png'
    },
    {
        name: 'Totodile',
        moveset: ["Water Gun",
            "Hydro Pump",
            "Slash",
            "Surf"
        ],
        photo : 'http://cdn.bulbagarden.net/upload/d/df/158Totodile.png'
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
        photo : 'http://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png'
    },
    {
        name: 'Chikorita',
        moveset: ["Synthesis",
            "Razor Leaf",
            "Tackle",
            "Body Slam"
        ],
        photo : 'http://cdn.bulbagarden.net/upload/b/bf/152Chikorita.png'
    }
]