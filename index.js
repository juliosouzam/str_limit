function str_limit(str = '', length = 30, ending = '...') {
  if (str.length > length) {
    return str.substring(0, length - ending.length).trim() + ending;
  }

  return str;
}

module.exports = { str_limit };
