import { timestamp } from '../utils'

class Comment {
  constructor (model = {}) {
    this.pid = model.pid
    this.nick = model.nick
    this.mail = model.mail
    this.site = model.site
    this.ua = model.ua
    this.ip = model.ip
    this.master = model.master || false
    this.content = model.content
    this.created = model.created || timestamp()
    this.updated = model.updated || timestamp()
  }
}

export default Comment
