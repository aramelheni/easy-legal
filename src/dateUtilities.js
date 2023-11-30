export function formatTime(date) {
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };
    return date.toLocaleTimeString('en-US', options).replace(/([\d]+:[\d]{2})(:[\d]{2})/, "$1");
};
