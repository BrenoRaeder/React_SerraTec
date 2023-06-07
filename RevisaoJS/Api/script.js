
let perfis = ['BrenoRaeder', 'weilemann', 'V1nni00'];

window.onload = async function() {

    for await (var perfil of perfis) {
        const data = await fetch(`https://api.github.com/users/${perfil}`);
        const json = await data.json();
        console.log(json);

        const img = document.createElement('img');
        img.setAttribute('src', json.avatar_url);
        const nome = document.createElement('p');
        nome.innerText = json.name;
        const usuario = document.createElement('div');
        usuario.className = 'usuario';
        usuario.appendChild(img);
        usuario.appendChild(nome);

        const container = document.querySelector('.container');
        container.appendChild(usuario);
    }
}


    


