class UsuarioView {

    constructor() {


    }

    static mostraUsuario(nome, biografia, imagem) {

        document.getElementById("profile").src = imagem;
        document.getElementById("nome").textContent = nome;

        if(biografia == null){
            document.getElementById("biografia").textContent = "Sem Descrição..😒😒"
        }else {
            document.getElementById("biografia").textContent = `"${biografia}"`;
        }



    }

    static mostraRepositorio(nome, linkRepo, linguagem) {
        let tabela = document.querySelector("#tabela-repositorios");
        
        let linha = document.createElement("tr"); 
        linha.classList.add("linhaClasse");

        linha.appendChild(UsuarioView.criaTdLink(linkRepo, nome));
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

    

    static criaTdLink(link, nome){
        var td = document.createElement("td");
        td.classList.add("colunaClasse");
        td.innerHTML = `<a href="${link}" target="_blank"> ${ nome }</a>`;

        return td;
    }

    static usuarioNaoEncontrado(){
        document.getElementById('profile').src = "assets/img/octocat-sad.png";
        document.getElementById("nome").textContent = "Usuario não encontrado";
        document.getElementById("biografia").textContent = "Sem usuario...sem descrição...";
        document.querySelector("#divDaTabela").innerHTML = ""; 
    }


    static criaTabela(elemento){
        document.getElementById(elemento).innerHTML = `    
    <table class="tabela">
            <thead>
                <tr class="linhaClasse" id="linhaHeader">
                    <th class="colunaClasse">Nome</th>
                    <th class="colunaClasse">Linguagem</th>
                </tr>
            </thead>
        <tbody id="tabela-repositorios">

        </tbody>
    </table>`
    }


}
