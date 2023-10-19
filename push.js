var push = require('web-push');

let vapidKeys = {
  publicKey: 'BA4R0vZzuZ4u26cXQslBN1d7uiz62w_t8nunfIgE3cKIvT3sYRA14x1UizVJmawjKbV6hmSEtDEaf0otYjvrjQg',
  privateKey: 'JzXE5ZIU1INtCoAucjSAsyVVM57RXiup8mdnNvhDHjc'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/daJM1QMOl3g:APA91bFRJtCFkETwFi0uWO_ESUF9Eprezw7niBLEMSEBArDXQW5lTAwF215VkXS5s2tTF2e8KqXjPnjtzYFXfdY5fCHMQ3PlIH2raTijulE20OtiCE07FvTeQUtfaUpKZr-byfEesSHq","expirationTime":null,"keys":{"p256dh":"BOw5_SOCAPKpiUM6F7wsmZqO7_ccvgvdA7GIOzYaD700y-R0bOaba9hYzhvH0-Myb94PsVT3kISFHhNEruX-cfo","auth":"KcwYQHakk3yYvWeWF_nWaQ"}};

push.sendNotification(sub,'test msg')