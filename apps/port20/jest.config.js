module.exports = {
  name: "port20",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/port20/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
