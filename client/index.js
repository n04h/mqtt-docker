console.log('start mqtt client');

const mqtt = require("mqtt");
const client = mqtt.connect('mqtt://mosquitto', { username: 'user1', password: 'P@ssw0rd' });

client.on('connect', function () {
  console.log('connect');

  client.subscribe('testtopic/123456789', function (err) {
    if (!err) {
      console.log('subscribed!');
    } else {
      console.error(err);
    }
  });
});

client.on('message', function (topic, message) {
  console.log(topic, message.toString());
  client.unsubscribe(topic);
  client.publish(topic, 'published message!');
  client.end();
});
