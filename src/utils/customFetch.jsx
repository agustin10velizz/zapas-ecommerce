let is_ok = true;

let customFetch = (time, array) => {
    return new Promise ( (resolve, reject) => {
        setTimeout (() => {
            if (is_ok) {
                resolve(array)
            } else{
                reject ("Error de carga")
            }
        }, time);
    })
}
      
 

export default customFetch;