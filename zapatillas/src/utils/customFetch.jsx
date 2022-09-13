let is_ok = true

let customFetch = (tiempo, array) => {
    return new Promise ( (resolve, reject) => {
        setTimeout (() => {
            if (is_ok) {
                resolve(array)
            } else{
                reject ("Error de carga")
            }
        }, tiempo)
    })
}
      
 

export default customFetch;