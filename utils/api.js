export const getIpInfo = async (ipAddress) => {
    const res = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_LT7s00H1PlMRkGXLGgt2fX37Z5Spl&ipAddress=${ipAddress}`)
    const data = await res.json()
    return data
}