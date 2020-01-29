import Default from '../../Cards/DefaultCard'
import Diagonal from '../../Cards/Diagonal'

const default1 = new Default()
const default2 = new Default(2)
const diagonal = new Diagonal(1)

export default {
  start: [
    [default1, default1, default1],
    [default2, default1, default1],
    [default1, default1, diagonal]
  ],
  end: [
    [default1, default1, default1],
    [default1, diagonal, default2],
    [default1, default1, default1]
  ]
}
