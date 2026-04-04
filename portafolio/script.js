import { projects } from './projects.js';

function createProjectCard(project) {
    const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <article class="project-card" data-link="${project.link}">
            <div class="project-content">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <div class="tags">
                    <span class="tag tag-week">Week ${project.week}</span>
                    <span class="tag tag-type">${project.type}</span>
                    ${tags}
                </div>
            </div>
            <div class="project-image">
                <img src="${project.image}" alt="${project.title} screenshot" width="500" height="500" />
            </div>
        </article>
    `;
}

function displayProjects(projectList) {
    const container = document.querySelector('.featured-projects');
    
    if (projectList.length === 0) {
        container.innerHTML = '<p class="no-results">No projects found.</p>';
    } else {
        container.innerHTML = projectList.map(createProjectCard).join('');
    }
}

function calculateStats() {
    return projects.reduce((stats, project) => {
        stats.total++;
        if (project.type === 'Prove') {
            stats.prove++;
        } else {
            stats.ponder++;
        }
        return stats;
    }, { total: 0, prove: 0, ponder: 0 });
}

function showStats() {
    const statsBar = document.querySelector('.stats-bar');
    const stats = calculateStats();
    statsBar.innerHTML = `<p>Total: ${stats.total} projects | Prove: ${stats.prove} | Ponder: ${stats.ponder}</p>`;
}

function searchProjects(searchText) {
    const search = searchText.toLowerCase();
    
    if (search === '') {
        const sorted = projects.sort((a, b) => a.week - b.week);
        displayProjects(sorted);
    } else {
        const results = projects.filter(project => {
            return project.title.toLowerCase().includes(search) ||
                   `week ${project.week}`.includes(search) ||
                   project.type.toLowerCase().includes(search) ||
                   project.tags.some(tag => tag.toLowerCase().includes(search));
        });
        
        const sorted = results.sort((a, b) => a.week - b.week);
        displayProjects(sorted);
    }
}

function randomProject() {
    const randomIndex = Math.floor(Math.random() * projects.length);
    const project = projects[randomIndex];
    
    const container = document.querySelector('#random-project');
    container.innerHTML = createProjectCard(project);
}

const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        searchProjects(e.target.value);
    });
}

const projectsContainer = document.querySelector('.featured-projects');
if (projectsContainer) {
    projectsContainer.addEventListener('click', function(e) {
        const tag = e.target.closest('.tag');
        if (tag) {
            searchInput.value = tag.textContent;
            searchProjects(tag.textContent);
            return;
        }
        
        const card = e.target.closest('.project-card');
        if (card && card.dataset.link) {
            window.location.href = card.dataset.link;
        }
    });
}

if (document.querySelector('.projects-page')) {
    const sorted = projects.sort((a, b) => a.week - b.week);
    displayProjects(sorted);
    showStats();
}

if (document.querySelector('.home-page')) {
    randomProject();
}