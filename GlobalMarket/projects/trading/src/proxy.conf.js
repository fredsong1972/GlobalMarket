const PROXY_CONFIG = [
  {
    context: [
      "/finance",
    ],
    target: "https://localhost:7152",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
