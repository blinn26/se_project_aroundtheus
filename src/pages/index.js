/* -------------------------------------------------------------------------- */
/*                           IMPORT ALL THE CLASSES                           */
/* -------------------------------------------------------------------------- */
import '../pages/index.css'
import '../scripts/constants.js'
import { initialCards, selectors } from '../scripts/constants.js'
import Section from '../scripts/Section.js'
import FormValidator from '../scripts/FormValidator.js'
import Card from '../scripts/Card.js'
import { openModal, closeModal } from '../scripts/utils.js'

/* -------------------------------------------------------------------------- */
/*                        CREATE INSTANCE OF THE CLASS                        */
/* -------------------------------------------------------------------------- */
const CardSection = new Section({
  renderer: (item) => {
    const cardEl = new Card(item)
    CardSection.addItems(cardEl.getView())
  },
  selector: selectors.cardSection,
})

/* -------------------------------------------------------------------------- */
/*                         INTIALIZE ALL MY INSTANCES                         */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                ALL THE REST                                */
/* -------------------------------------------------------------------------- */
