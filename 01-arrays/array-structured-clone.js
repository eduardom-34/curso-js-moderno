const superHeros = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];

const superHerosCopy = structuredClone(superHeros);
superHerosCopy[0].name = 'Green Latern';

console.table( superHeros );
console.table( superHerosCopy );


