import diagonal from '../../Actions/Actions/diagonal'
import swap from '../../Actions/Actions/swap'
import Card from './Card'

export default class Diagonal extends Card {
  constructor(id) {
    super(id)
    this.content = 'Diago'
    this.actions = [swap, diagonal]
  }
}
