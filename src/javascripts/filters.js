Vue.filter('truncate', function (value, length, omission) {
  var length = length ? parseInt(length, 10) : 20;
  var ommision = omission ? omission.toString() : '...';

  if (value.length <= length) {
    return value;
  }

  return value.substring(0, length) + ommision;
});
