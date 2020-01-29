import swap from '../../Actions/Actions/swap'
import Card from './Card'

export default class DefaultCard extends Card {
  constructor(id) {
    super(id)
    this.content = 'Default content'
    this.actions = [swap]
  }
}
