export default function formatDuration(duration: string) {
    // Extract hours, minutes, and seconds from the duration string
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    if (!match) {
        // Invalid duration format
        return "Invalid Duration";
    }

    const hours = match[1] ? parseInt(match[1].slice(0, -1), 10) : 0;
    const minutes = match[2] ? parseInt(match[2].slice(0, -1), 10) : 0;
    const seconds = match[3] ? parseInt(match[3].slice(0, -1), 10) : 0;

    // Format the time as "hh:mm:ss"
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    if (hours > 0) {
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
        return `${formattedMinutes}:${formattedSeconds}`;
    }
}