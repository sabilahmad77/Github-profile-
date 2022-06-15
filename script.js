const APIURL=('https://api.github.com/users/')
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username){
    try{
        const {data} = await axios(APIURL + username);
        createUserCard(data);
        console.log(data);

    }catch(err) {
        if(err.response.status == 404){
            createErrorCard('hey! babe there is no user profile on this name ')
        }
        
    }
}
function createUserCard(user){
    const cardHTML = `               <div class="card"><div>
       <img src="${user.avatar_url}" alt="${user.name}" class="avater"> 
    </div> 
    <div class="info-user"> 
     <h2>${user.name}</h2> 
       <p>${user.bio}</p>
       <ul>
        <li>${user.followers}<strong>followers</strong></li>
      <li>${user.following}<strong>following</strong></li>
       <li>${user.public_repos}<strong>repos</strong></li>
        </ul>
       <div id="repos">
       <a href="" class="repo">Repo 1</a>
       <a href="" class="repo">Repo 1</a>
       <a href="" class="repo">Repo 1</a>
     </div>
     </div>
</div> 
`
main.innerHTML=cardHTML
}

function createErrorCard(msg){
    const cardHTML =` 
    <div class='card'>
    <h1>${msg}</h1>
    
    </div>
    ` 
    main.innerHTML = cardHTML
}

form.addEventListener('submit',(e) => {
    e.preventDefault()

    const user = search.value;

    if(user){
        getUser(user)

        search.value= '';
    }



}

)


