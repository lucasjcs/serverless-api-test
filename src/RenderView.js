import { App } from './App.js'
export class RenderView {
    constructor() {
        this.render()
    }

    render() {
        let app = new App()

        document.getElementById('form-sub').addEventListener('submit', event =>{
            let name = document.getElementById('name').value
            app.getApiResponse(name)
                .then(response => {
                    this.element.innerHTML = `   
                        <div class="msg">
                            <h1>${response}</h1>
                        </div>
                    `
                })

            event.preventDefault()
        })

    }
}