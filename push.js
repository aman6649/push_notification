var push = require('web-push');

let vapidKeys = {
  publicKey: 'BA4R0vZzuZ4u26cXQslBN1d7uiz62w_t8nunfIgE3cKIvT3sYRA14x1UizVJmawjKbV6hmSEtDEaf0otYjvrjQg',
  privateKey: 'JzXE5ZIU1INtCoAucjSAsyVVM57RXiup8mdnNvhDHjc'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub,'test msg')