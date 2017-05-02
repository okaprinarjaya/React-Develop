import { connect } from 'react-redux'
import supplyConfigurations from '../supplyConfigurations'
import supplyAnotherThing from '../supplyAnotherThing'
import supplySomeStateAttr from '../supplySomeStateAttr'
import Bar from '../components/Bar'

const config = {
  cool: "Cool is Oka",
  oka: "Oka is cool",
  lalala: "Lalala conf item",
  cacaca: "Cacaca conf item"
}

const anotherThing = {
  canBeAFunction: () => {
    console.log("this is a function")
  },
  justObjectAttr: "Object attribute"
}

const BarComponentSetup = supplySomeStateAttr(supplyAnotherThing(anotherThing, supplyConfigurations(config, Bar)))

const BarContainer = connect(
  (state) => ({locale: state.locale})
)(BarComponentSetup)

export default BarContainer
