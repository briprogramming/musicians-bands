const { db, Sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({
            name: 'B2K',
            genre: 'R&B'
          });
        
          expect(band.name).toBe('B2K');
          expect(band.genre).toBe('R&B');
        });

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band = await Band.create({
            name: 'B2K',
            genre: 'R&B'
          });
        await band.save();
        expect(band.name).toBe('B2K');
        expect(band.genre).toBe('R&B');
    });

    test('can update a Musician', async () => {
        const musician = await Musician.create({
            name: 'Louis Armstrong',
            instrument: 'Trumpet'
          });
        await musician.save();
        expect(musician.name).toBe('Louis Armstrong');
        expect(musician.instrument).toBe('Trumpet');
    });

    test('can delete a Musician', async () => {
        const musician = await Musician.create({
            name: 'Louis Armstrong',
            instrument: 'Trumpet'
          });
        await musician.destroy();
        const foundMusician = await Musician.findByPk(musician.id);
        expect(foundMusician).toBeNull();
    });
    test('can find all Bands', async () =>{
        const bands = await Band.create({
            name: 'B2K'
        });
        const books = await Band.findAll({
            include:{
                model: Musician
            }
        });
    })
});