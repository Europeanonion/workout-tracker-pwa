const { execSync } = require('child_process');
const cron = require('node-cron');

function backup() {
    try {
        execSync('git add .');
        execSync('git commit -m "Auto-backup"');
        execSync('git push origin main');
        console.log('Backup completed successfully:', new Date().toISOString());
    } catch (error) {
        console.error('Backup failed:', error.message);
    }
}

const task = cron.schedule('*/30 * * * *', backup);
console.log('Backup scheduler started');

// Handle termination signals
function cleanup() {
    console.log('Stopping backup scheduler...');
    task.stop();
    process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
