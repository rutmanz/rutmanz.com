module.exports = {
  ci: {
    collect: {
      url: [process.env["DEPLOY_URL"]+'?nomotion'],
      startServerCommand: 'echo started',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};