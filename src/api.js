

/**
 * Récupère les données de l'endpoint en utilisant les identifiants
 * particuliers developer.marvels.com
 * @param url l'end-point
 * @return {Promise<json>}
 */
export const getData = async (url) => {
    let response = await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey={{publicKey}}&ts={{ts}}&hash={{hash}}")
    if (response.ok) {
        return await response.json()
    } else {
        throw new Error("HTTP-Error: " + response.status)
    }

}

/**
 * Calcul la valeur md5 dans l'ordre : timestamp+privateKey+publicKey
 * cf documentation developer.marvels.com
 * @param publicKey
 * @param privateKey
 * @param timestamp
 * @return {Promise<ArrayBuffer>} en hexadecimal
 */
export const getHash = async (publicKey, privateKey, timestamp) => {
    publicKey = "7622f790bf1f73538ed1a4ec3cf673b9"
    privateKey = "c4b567f595e83993c6652fe38e4e5ba3f061be66"
    timestamp = Date.now()

}