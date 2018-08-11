const fs = require('fs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      const plantJSON = JSON.parse(fs.readFileSync('./src/db/usdaFiltered.json', 'utf-8'))
      const plantSeed = plantJSON.map(plant => {
        return {
          scientific_name: plant['Scientific Name'],
          imageUrl: plant['imageUrl'],
          data: {
            symbol: plant['Accepted Symbol'],
            synSymbol: plant['Synonym Symbol'],
            state: plant['State and Province'],
            category: plant['Category'],
            duration: plant['Duration'],
            habit: plant['Growth Habit'],
            invasive: plant['Invasive'],
            growPeriod: plant['Active Growth Period'],
            flowerColor: plant['Flower Color'],
            flowerConsp: plant['Flower Conspicuous'],
            foliageColor: plant['Foliage Color'],
            coarseSoil: plant['Adapted to Coarse Textured Soils'],
            medSoil: plant['Adapted to Medium Textured Soils'],
            fineSoil: plant['Adapted to Fine Textured Soils'],
            moisture: plant['Moisture Use'],
            shade: plant['Shade Tolerance'],
            tempMin: plant['Temperature, Minimum (°F)'],
            bloomPeriod: plant['Bloom Period'],
            commAvailability: plant['Commercial Availablity']
          }
        }
      })
      // Inserts seed entries
      return knex('plants').insert(plantSeed)
    })
    .then(function () {
      return knex.raw(`SELECT setval('plants_id_seq', (SELECT MAX(id) FROM plants));`)
    })
}
