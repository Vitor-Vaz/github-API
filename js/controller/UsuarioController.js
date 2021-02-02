class UsuarioController {

    static buscaUsuario(nomeUsuario) {
        let usuario = new UsuarioModel();

        usuario.criaUsuario(nomeUsuario, () => {


            console.log(usuario)
            UsuarioView.mostraUsuario(usuario._nome, usuario._biografia, usuario._profilepic);

            

        })

        usuario.pegaRepositorio(nomeUsuario, () => {

            document.querySelector("#tabela-repositorios").innerHTML = "";
            for (let i = 0; i < usuario._repositorio.length; i++) {
                UsuarioView.mostraRepositorio(usuario._repositorio[i].name, usuario._repositorio[i].html_url, usuario._repositorio[i].language);
            }

            
        });



    }


}

document.getElementById("butaum").addEventListener('click', () => {

    UsuarioController.buscaUsuario(document.getElementById("colonaNome").value);

})