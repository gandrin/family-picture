export default class Card {
  constructor(id) {
    if (Number.isInteger(id)) {
      if (!id) throw new Error('Expected Card id to be > 0')
      this.id = id
    }
  }
}
