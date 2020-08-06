var exec = require('cordova/exec');

module.exports = {
  start: function(title, text, importance, notificationId) {
    exec(null, null, "ForegroundPlugin", "start", [title || "", text || "", importance || "1", notificationId || ""]);
  },
  stop: function() {
    exec(null, null, "ForegroundPlugin", "stop", []);
  }
};
