module.exports = {
  apps: [{
    name: 'webapp-dev',
    script: 'npm',
    args: 'run dev',
    cwd: '/home/user/webapp',
    watch: false,
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      PORT: 5173
    }
  }]
};