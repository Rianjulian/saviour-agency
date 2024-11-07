module.exports = {
  name: "Compro Air Mas 2023",
  exec_mode: "cluster",
  script: "./node_modules/nuxt/bin/nuxt.js",
  args: "start",
  env: {
    APP_HOST: "127.0.0.1",
    APP_PORT: "3009",
  },
};
