// See for reference <https://www.mediawiki.org/wiki/Wikibase/DataModel/JSON>
// and <https://www.wikidata.org/wiki/Help:QuickStatements>

const dataValueSerializer = {

  'string': value => `"${value}"`,

  'wikibase-entityid': value => value.id,

  'time': value => {
    if (value.calendarmodel === 'http://www.wikidata.org/entity/Q1985727') {
      return `${value.time}/${value.precision}`
    }
  }

  // TODO: quantity, globecoordinate
}

function serializeDataValue (datavalue) {
  const serializer = dataValueSerializer[datavalue.type]

  return (serializer ? serializer(datavalue.value) : undefined)
}

function serializeSnak (snak) {
  const value = snak.snaktype === 'value'
    ? serializeDataValue(snak.datavalue)
    : snak.snaktype

  return `${snak.property}\t${value}`
}

module.exports = {
  value: serializeDataValue,
  snak: serializeSnak
}
