var push = require('web-push');


let vapidKeys = {
  publicKey: 'BBAfZD23_KRFdiGTtD8sW15r2IWqoP5IqPjWVEfWRs2oHSs5yI8Xz5bNdaPqwl51CR4LpP2_WAld3PoO2BxtpuE',
  privateKey: 'XPScJ_gOjoxi3oke0Le3zLtv4TeTdtQoxVyntySvT7Y'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {"endpoint":"https://wns2-sg2p.notify.windows.com/w/?token=BQYAAADZf8QLe5cIQ4MSRHH67O6o%2boyvC0BLKc%2bGaXfM5xZXR5y2UzhNA%2fE1VGHVISUp7FHHNXQjcr1TE6KQPm4%2fw9jpxltP9Ulj7WMWJA89DixBHjfLnokQXwvaayk7oJBGO1R77XypwCDFEhXp8m7DvxtmFvX6%2bFxAuYt98aor0%2b%2beffp9J0wXAYxvXXSfmy%2bI6t1Q9pS%2bEEwAMtev%2b1dJaHlTfCN%2fmIOvWYOqtTNEksCMqvry%2fCfD5OMFBtg3GoEwQoheviWkthHwOinwJepB%2fx%2f1raZVy1mZDjgUzHHPrqFj3hADDiUYjjU9xFqfRLMr9TU6z%2bmCMDB9iVIQQbuOahuH5hqSyVjz9BJqTFVysimYBA%3d%3d","expirationTime":null,"keys":{"p256dh":"BFaHfjgWsOkajPojEqZ3V1Yd7QVsiDhsO933rNn23UaYGg22arOrtYon2AaJqd7Jn1Xwwe9c7o6DBUzEmfnlk24","auth":"zeGc5ozzBdJlrkqO-BhY9g"}}

push.sendNotification(sub,'test msg')