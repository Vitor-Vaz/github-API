class UsuarioView {

    constructor() {


    }

    static mostraUsuario(nome, biografia, imagem) {

        document.getElementById("profile").src = imagem;
        document.getElementById("nome").textContent = nome;

        if(biografia == null){
            document.getElementById("biografia").textContent = "Sem Descrição..😒😒"
        }else {
            document.getElementById("biografia").textContent = biografia;
        }



    }

    static mostraRepositorio(nome, linkRepo, linguagem) {
        let tabela = document.querySelector("#tabela-repositorios");
        
        let linha = document.createElement("tr"); 
        linha.classList.add("linhaClasse");

        linha.appendChild(UsuarioView.criaTd(nome));
        linha.appendChild(UsuarioView.criaTdLink(linkRepo));
        linha.appendChild(UsuarioView.criaTd(linguagem));


        tabela.appendChild(linha);

    }

    static criaTd(dado){
        var td = document.createElement("td");

        if(dado == null ){
            td.textContent = `Não informado`;
        }else{
            td.textContent = dado;
        }

        td.classList.add("colunaClasse")

        return td;
    }

    

    static criaTdLink(dado){
        var td = document.createElement("td");
        td.classList.add("colunaClasse");
        td.innerHTML = `<a href="${dado}" target="_blank">Clique aqui para acessar</a>`;

        return td;
    }

    static usuarioNaoEncontrado(){
        document.getElementById('profile').src = "assets/img/octocat-sad.png";
        document.getElementById("nome").textContent = "Usuario não encontrado";
        document.getElementById("biografia").textContent = "Sem usuario...sem descrição...";
        document.querySelector("#tabela-repositorios").innerHTML = "";
    }
}
