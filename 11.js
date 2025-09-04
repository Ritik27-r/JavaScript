
document.getElementById("search").addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("user").value;
    if (userName) {
        fetchUserInfo(userName)
        fetchRepo(userName, 1)
    }
})

async function fetchUserInfo(userName) {
    var dataRaw = fetch(`https://api.github.com/users/${userName}`)
    var dataNow = await dataRaw;
    var data = await dataNow.json()
    document.getElementById("result").innerHTML = `
            <div>
            <img width="50px" height="50px" src="${data.avatar_url}">
            <h2>${data.login}</h2>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
            <p>Public Repositories: ${data.public_repos}</p>
            </div>
        `
}

// function fetchUserInfo(userName) {
//     fetch(`https://api.github.com/users/${userName}`)
//         .then(response => response.json())
//         .then((data) => {
//             document.getElementById("result").innerHTML = `
//             <div>
//             <img width="50px" height="50px" src="${data.avatar_url}">
//             <h2>${data.login}</h2>
//             <p>Followers: ${data.followers}</p>
//             <p>Following: ${data.following}</p>
//             <p>Public Repositories: ${data.public_repos}</p>
//             </div>
//         `
//         })
// }

async function fetchRepo(userName, page) {
    let data = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&page=${page}`)
    let result = await data.json()
    let repoList = result.map((repo) => `
        <div>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>Description: ${repo.description || "no description available"}</p>
        </div>
    `).join(" ")
    console.log(repoList)
    document.getElementById("repos").innerHTML = repoList;
    setPagination(userName,page)
}

async function setPagination(userName, page) {
    let totalReposJson = await (await fetch(`https://api.github.com/users/${userName}`)).json()
    let totalRepos = totalReposJson.public_repos
    let pagination = document.getElementById("pagination");
    pagination.innerHTML = "";
    var totalPage = Math.ceil(totalRepos / 5)

    const createBtn = (text, currentPage) => {
        let button = document.createElement("button");
        button.textContent = text;
        button.onclick = function () {
            console.log("Ritik")
            console.log(currentPage)
            fetchRepo(userName, currentPage)
        }
        return button
    }

    let prevBtn = createBtn("prev", page - 1);
    prevBtn.disabled = page === 1;
    pagination.appendChild(prevBtn);

    let start = Math.max(1, page - Math.floor(totalPage / 2))
    let end = Math.min(totalPage, start + totalPage - 1)
    for (let i = start; i <= end; i++) {
        let button = createBtn(i, i);
        button.disabled = i === page;
        pagination.appendChild(button)
    }

    let nextBtn = createBtn("Next", page + 1);
    nextBtn.disabled = page === totalPage;
    pagination.appendChild(nextBtn)

    // let prevBtn = document.createElement("button")
    // prevBtn.textContent = "prev"
    // prevBtn.onclick= function(){
    //     fetchRepo(userName,page-1)
    // }
    // prevBtn.disabled = 
    // pagination.appendChild(prevBtn)

    // for(let i =1; i <=btnCount;i++){
    //     let btn = document.createElement("button")
    //     btn.textContent =i;
    //     btn.onclick= function(){
    //         fetchRepo(userName,i)
    //     }
    //     pagination.appendChild(btn)
    // }
    // let nextBtn = document.createElement("button")
    // nextBtn.textContent = "Next";
    // nextBtn.onclick=function(){
    //     fetchRepo(userName,page+1)
    // }
    // pagination.appendChild(nextBtn)
}