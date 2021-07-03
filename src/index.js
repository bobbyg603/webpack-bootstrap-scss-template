import './styles.scss';

function component() {
    const element = document.createElement('div');
    element.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">webpack-bootstrap-scss-template</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h2>Hello world!</h2>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary">Button!</button>
                </div>
            </div>
        </div>
    `;

    return element;
}

document.body.appendChild(component());