// function to fetch info from GitHub API
function fetchData(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(info => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';

            info.forEach(repo => {
                const entry = document.createElement('div');
                entry.classList.add('repo');

                const icon = document.createElement('img');
                icon.src = 'images/github.PNG';

                const name = document.createElement('h2');
                const link = document.createElement('a');
                
                link.textContent = repo.name;
                link.href = repo.html_url;
                link.classList.add('link');

                //pick specific info 
                const description = document.createElement('h4');
                description.textContent = repo.description;

                const created = document.createElement('p');
                created.textContent = `Created: ${new Date(repo.created_at).toLocaleDateString()}`;

                const updated = document.createElement('p');
                updated.textContent = `Updated: ${new Date(repo.updated_at).toLocaleDateString()}`;

                 // Fetch commits
                 fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`)
                 .then(response => response.json())
                 .then(commits => {
                     const commitsCount = commits.length;
                     const commitsNum= document.createElement('p');
                     commitsNum.textContent = `Commits: ${commitsCount}`;
                     entry.appendChild(commitsNum);
                 })
                 .catch(error => console.error('Error fetching commits count:', error));

                const languages = document.createElement('p');
                languages.textContent = `Languages: ${repo.language}`;

                const watchers = document.createElement('p');
                watchers.textContent = `Watchers: ${repo.watchers}`;

                //populate entries
                name.appendChild(icon);
                name.appendChild(link);

                entry.appendChild(name);
                entry.appendChild(description);
                entry.appendChild(updated);
                entry.appendChild(created);
                entry.appendChild(languages);
                entry.appendChild(watchers);

                gallery.appendChild(entry);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

//add event listener to update user
const search = document.querySelector('.searchbar');
search.addEventListener('submit', function (event) {
    event.preventDefault();
    const input = document.getElementById('searchName').value;
    if (input.trim() !== '') {
        fetchData(input);
    }
});

//default user
const username = "Natchapone";

//call fetch
fetchData(username);
