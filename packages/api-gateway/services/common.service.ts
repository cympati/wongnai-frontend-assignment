export const formattedNow = (now: Date) => {
    const formattedNow = ('00' + now.getHours()).slice(-2) + ":" +
        ('00' + now.getMinutes()).slice(-2)
    return formattedNow
}