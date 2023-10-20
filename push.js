var push = require('web-push');


let vapidKeys = {
  publicKey: 'BBAfZD23_KRFdiGTtD8sW15r2IWqoP5IqPjWVEfWRs2oHSs5yI8Xz5bNdaPqwl51CR4LpP2_WAld3PoO2BxtpuE',
  privateKey: 'XPScJ_gOjoxi3oke0Le3zLtv4TeTdtQoxVyntySvT7Y'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub =  {"endpoint":"https://fcm.googleapis.com/fcm/send/flHjoi8c4yY:APA91bEsmeyzNxuemsOB0m-W7dC7NRCuU5PJxjSw6EGH69iOR-feHOygYgZPZIvVjcBMaDS9Hvn0bbuiL_oZATGysQApx0_14DRybRjOVPkJOw96l5lBsHjzCivwsipFoCo1feWEFvQr","expirationTime":null,"keys":{"p256dh":"BGSkRXERtPqL4EOpGX-jKP8k8nuPyQ2lD-ZpkpKrpVDBqlx1Fq3Ba5Sb1MoosDgcK8EQg1C6N6EoVVNhZn77HWA","auth":"dgqLVh3MCYknx5VATioedg"}}

push.sendNotification(sub,'test msg')