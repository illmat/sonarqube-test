/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://sonarqube.services",
    options: {
      "sonar.sources": "src",
      "sonar.projectKey": "product:sonarqube-test",
      "sonar.exclusions": "node_modules/*",
    },
  },
  () => {}
);
