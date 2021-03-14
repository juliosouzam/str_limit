function str_limit(str: string, length = 30, ending = "..."): string {
  if (str.length > length) {
    return str.substring(0, length).trim() + ending;
  }

  return str;
}

export { str_limit };
