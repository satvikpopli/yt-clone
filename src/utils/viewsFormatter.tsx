export default (views: number) => {
    if (views >= 1000000) {
        // hide the decimal if it's 0
        if (views % 1000000 === 0) {
            return `${(views / 1000000).toFixed(0)}M`
        }
        return `${(views / 1000000).toFixed(1)}M`
    }
    if (views >= 1000) {
        // hide the decimal if it's 0
        if (views % 1000 === 0) {
            return `${(views / 1000).toFixed(0)}K`
        }
        return `${(views / 1000).toFixed(1)}K`
    }
    return views
}