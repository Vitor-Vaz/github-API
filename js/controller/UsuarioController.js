class UsuarioController {

    static buscaUsuario(nomeUsuario) {
        let usuario = new UsuarioModel();

        usuario.criaUsuario(nomeUsuario, () => {

            UsuarioView.mostraUsuario(usuario._nome, usuario._biografia, usuario._profilepic);
            UsuarioView.criaTabela('divDaTabela');

        })

        usuario.pegaRepositorio(nomeUsuario, () => {

            document.querySelector("#tabela-repositorios").innerHTML = "";

            usuario._repositorio.forEach((valor, indice) => {

                UsuarioView.mostraRepositorio(usuario._repositorio[indice].name, usuario._repositorio[indice].html_url, usuario._repositorio[indice].language);

            })
            
        });



    }


}

document.getElementById("butaum").addEventListener('click', () => {

    UsuarioController.buscaUsuario(document.getElementById("colonaNome").value);

})