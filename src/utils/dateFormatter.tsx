const dateFormatterYT = (date: string) => {
    // input format: 2021-08-10T15:00:11Z
    // output format: X minutes/hours/days/weeks/months/years ago
    const dateObj = new Date(date);
    const currentDate = new Date();
    const diff = currentDate.getTime() - dateObj.getTime();
    const diffDays = Math.floor(diff / (1000 * 3600 * 24));
    const diffWeeks = Math.floor(diff / (1000 * 3600 * 24 * 7));
    const diffMonths = Math.floor(diff / (1000 * 3600 * 24 * 30));
    const diffYears = Math.floor(diff / (1000 * 3600 * 24 * 365));
    if (diff < 60000) {
        if (Math.floor(diff / 1000) === 1) return `${Math.floor(diff / 1000)} second ago`
        return `${Math.floor(diff / 1000)} seconds ago`
    }
    if (diff < 3600000) {
        if (Math.floor(diff / 60000) === 1) return `${Math.floor(diff / 60000)} minute ago`
        return `${Math.floor(diff / 60000)} minutes ago`
    }
    if (diff < 86400000) {
        if (Math.floor(diff / 3600000) === 1) return `${Math.floor(diff / 3600000)} hour ago`
        return `${Math.floor(diff / 3600000)} hours ago`
    }
    if (diffDays < 7) {
        if (diffDays === 1) return `${diffDays} day ago`
        return `${diffDays} days ago`
    }
    if (diffWeeks < 4) {
        if (diffWeeks === 1) return `${diffWeeks} week ago`
        return `${diffWeeks} weeks ago`
    }
    if (diffMonths < 12) {
        if (diffMonths === 1) return `${diffMonths} month ago`
        return `${diffMonths} months ago`
    }
    if (diffYears === 1) return `${diffYears} year ago`
    return `${diffYears} years ago`
}

export default dateFormatterYT;