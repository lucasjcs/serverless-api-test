import { App } from './App.js'
export class RenderView {
    constructor() {
        this._element = document.getElementById('response')
        this._URL;
        this.render()
    }

    render() {
        let app = new App()

        document.getElementById('form-sub').addEventListener('submit', event => {
            let name = document.getElementById('name').value
            let data
            if(name == "google" || name == "Google") this._URL = 'YOUR_LINK_API'
            if(name == "azure"  || name == "Azure" ) this._URL = 'YOUR_LINK_API'
            app.getApiResponse(this._URL)
                .then(response => {

                    if(name == "google" || name == "Google") data = response.data
                    if(name == "azure"  || name == "Azure" ) data = response

                    this._element.innerHTML = `   
                        <div class="msg">
                            <h1>${data}</h1>
                        </div>
                    `
                })

            event.preventDefault()

        })

    }
}