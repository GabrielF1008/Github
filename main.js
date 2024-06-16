    document.addEventListener('DOMContentLoaded', function() {
        const profileAvatar = document.getElementById('avatar')
        const profileName = document.getElementById('name')
        const profileUsername = document.getElementById('username')
        const profileRepos = document.getElementById('repos')
        const profileFollowers = document.getElementById('followers')
        const profileFollowing = document.getElementById('following')
        const profileLink = document.getElementById('profile-link')

        fetch('https://api.github.com/users/GabrielF1008')
            .then(function(res) {
                return res.json(); // Retorna a promessa resolvida com os dados JSON
            })
            .then(function(json) {
                console.log(json); // Verificar a estrutura do objeto JSON
                // Atualizar os elementos com os dados JSON
                profileAvatar.src = json.avatar_url;  // Para definir a imagem
                profileName.innerText = json.name;
                profileUsername.innerText = json.login;
                profileRepos.innerText = json.public_repos;
                profileFollowers.innerText = json.followers;
                profileFollowing.innerText = json.following;
                profileLink.href = json.html_url;
                profileLink.innerText = json.html_url;
            })
            .catch(function(error){
                alert("O usuário não foi encontrado");
                console.log(error);
            });
        })