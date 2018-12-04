require('should')
const Q571 = require('./data/Q571.json')
const Q22002395 = require('./data/Q22002395.json')

const serialize = require('../lib/helpers/serialize_quickstatements')

describe('serialize.value', function () {
  it('should serialize string', function (done) {
    serialize.value(Q571.claims.P487[0].mainsnak.datavalue).should.equal('"🕮"')
    done()
  })

  it('should serialize wikibase-entityid', function (done) {
    serialize.value(Q571.claims.P186[0].mainsnak.datavalue).should.equal('Q11472')
    done()
  })

  // TODO: time, quantity, globecoordinate
})

describe('serialize.snak', function () {
  it('should serialize value', function (done) {
    serialize.snak(Q571.claims.P186[0].mainsnak).should.equal('P186\tQ11472')
    done()
  })

  it('should serialize somevalue', function (done) {
    serialize.snak(Q22002395.claims.P50[4].mainsnak).should.equal('P50\tsomevalue')
    done()
  })
})
