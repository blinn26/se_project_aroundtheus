/* -------------------------------------------------------------------------- */
/*                           IMPORT ALL THE CLASSES                           */
/* -------------------------------------------------------------------------- */
import './index.css'

import { initialCards, selectors } from '../scripts/constants'
import Card from '../components/Card'
import Section from '../components/Section'
import FormValidator from '../components/FormValidator'

/* -------------------------------------------------------------------------- */
/*                        CREATE INSTANCE OF THE CLASS                        */
/* -------------------------------------------------------------------------- */
const CardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = new Card(item, selectors.cardTemplate)
      CardSection.addItem(cardEl.getView())
    },
  },
  selectors.cardSection
)
/* -------------------------------------------------------------------------- */
/*                         INTIALIZE ALL MY INSTANCES                         */
/* -------------------------------------------------------------------------- */
CardSection.renderItems(initialCards)
console.log('test')
/* -------------------------------------------------------------------------- */
/*                                ALL THE REST                                */
/* -------------------------------------------------------------------------- */
