export default defineEventHandler(() => {
  return {
    status: 'ok',
    message: 'Site is active and healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }
})
