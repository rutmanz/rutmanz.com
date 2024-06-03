module.exports = {
  ci: {
    collect: {
      url: [process.env["DEPLOY_URL"]+'?nomotion'],
      startServerCommand: 'echo ready',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};