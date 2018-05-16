export class App {
    constructor() {

    }
    getApiResponse(URL) {
        let dataRes = fetch(URL)
            .then(response => response.json())
            .then(data => data = data)
        return dataRes
        
    }
}
