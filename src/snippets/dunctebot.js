export default {
  name: "DuncteBot (JagTag)",
  language: "javascript",

  generateFrom(data) {
    return JSON.stringify(data).replace(/"([a-z0-9]+)":/g, "$1:");
  }
};
