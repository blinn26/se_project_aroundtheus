/* -------------------------------------------------------------------------- */
/*                           IMPORT ALL THE CLASSES                           */
/* -------------------------------------------------------------------------- */
import './index.css'

import { initialCards, selectors } from '../scripts/constants'
import Card from '../scripts/Card'
import FormValidator from '../scripts/FormValidator'
import Section from '../scripts/Section'

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
/* -------------------------------------------------------------------------- */
/*                                ALL THE REST                                */
/* -------------------------------------------------------------------------- */
