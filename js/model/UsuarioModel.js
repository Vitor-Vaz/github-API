class UsuarioModel {

    constructor() {
        this._nome = "";
        this._biografia = "";
        this._profilepic = "";
        this._repositorio = [];
        this._tecnologias = [];
    }

    criaUsuario(user, callback) {  

        let request = new XMLHttpRequest();

        request.open("GET", `https://api.github.com/users/${user}`);

        request.addEventListener('load', () => {

            if (request.status == 200) {

                let response = JSON.parse(request.responseText);

                this._nome = response.name;
                this._biografia = response.bio;
                this._profilepic = response.avatar_url;

                callback();
            } else {
                console.log("Um código inesperado foi retornado!");
            }
        });

        request.send();

        
    }

    pegaRepositorio(user, callback) {

        let request = new XMLHttpRequest();

        request.open("GET", `https://api.github.com/users/${user}/repos`);

        request.addEventListener('load', () => {

            if (request.status == 200) {

                let response = JSON.parse(request.responseText);

                this._repositorio = response;

                callback()

            } else {
                console.log("Um código inesperado foi retornado!");
            }
        });

        request.send();
    }

    pegaTecnologias(url, callback) {

        let request = new XMLHttpRequest();

        request.open("GET", url);

        request.addEventListener('load', () => {

            if (request.status == 200) {

                let response = JSON.parse(request.responseText);

                this._tecnologias.push(response);

                callback();

            } else {
                console.log("Um código inesperado foi retornado!");
            }
        });

        request.send();
    }
}