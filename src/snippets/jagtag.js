export default {
  name: "DuncteBot (JagTag)",
  language: "javascript",

  generateFrom(data) {
    return JSON.stringify(data).replace(/"embed":/, "embed:");
  }
};
