const notifier = require('node-notifier');

// Send a test notification
notifier.notify({
  title: 'Test Notification',
  message: 'If you see this, node-notifier works!',
  sound: true,
});