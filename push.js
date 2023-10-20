var push = require('web-push');


let vapidKeys = {
  publicKey: 'BA4R0vZzuZ4u26cXQslBN1d7uiz62w_t8nunfIgE3cKIvT3sYRA14x1UizVJmawjKbV6hmSEtDEaf0otYjvrjQg',
  privateKey: 'JzXE5ZIU1INtCoAucjSAsyVVM57RXiup8mdnNvhDHjc'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/flHjoi8c4yY:APA91bEsmeyzNxuemsOB0m-W7dC7NRCuU5PJxjSw6EGH69iOR-feHOygYgZPZIvVjcBMaDS9Hvn0bbuiL_oZATGysQApx0_14DRybRjOVPkJOw96l5lBsHjzCivwsipFoCo1feWEFvQr","expirationTime":null,"keys":{"p256dh":"BGSkRXERtPqL4EOpGX-jKP8k8nuPyQ2lD-ZpkpKrpVDBqlx1Fq3Ba5Sb1MoosDgcK8EQg1C6N6EoVVNhZn77HWA","auth":"dgqLVh3MCYknx5VATioedg"}}

push.sendNotification(sub,'test msg')