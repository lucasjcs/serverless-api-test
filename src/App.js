export class App {
    constructor() {

    }

    getApiResponse(name) {
        let dataRes = fetch('https://functions-doc-tcc.azurewebsites.net/api/hello-world-test?name=' + name)
            .then(response => response.json())
            .then(data => this._datar = data)
            .catch(err => "Ops! Algo deu errado, tente novamente mais tarde!" + err)
        return dataRes
    }
}