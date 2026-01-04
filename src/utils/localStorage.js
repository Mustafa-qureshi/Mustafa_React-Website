// Local storage utilities to replace Firebase Firestore functionality

const PROJECTS_KEY = 'codecraft_projects';

// Get all projects
export const getProjects = () => {
    try {
        const projects = localStorage.getItem(PROJECTS_KEY);
        return projects ? JSON.parse(projects) : [];
    } catch (error) {
        console.error('Error getting projects:', error);
        return [];
    }
};

// Get projects by user ID
export const getProjectsByUser = (userId) => {
    const allProjects = getProjects();
    return allProjects.filter(project => project.userId === userId);
};

// Get projects by status
export const getProjectsByStatus = (status) => {
    const allProjects = getProjects();
    return status === 'all' ? allProjects : allProjects.filter(project => project.status === status);
};

// Get projects by user and status
export const getProjectsByUserAndStatus = (userId, status) => {
    const userProjects = getProjectsByUser(userId);
    return status === 'all' ? userProjects : userProjects.filter(project => project.status === status);
};

// Get single project by ID
export const getProject = (id) => {
    const projects = getProjects();
    return projects.find(project => project.id === id);
};

// Add new project
export const addProject = (projectData) => {
    try {
        const projects = getProjects();
        const newProject = {
            ...projectData,
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        projects.push(newProject);
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
        return newProject;
    } catch (error) {
        console.error('Error adding project:', error);
        return null;
    }
};

// Update existing project
export const updateProject = (id, updateData) => {
    try {
        const projects = getProjects();
        const index = projects.findIndex(project => project.id === id);
        if (index !== -1) {
            projects[index] = {
                ...projects[index],
                ...updateData,
                updatedAt: new Date().toISOString()
            };
            localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
            return projects[index];
        }
        return null;
    } catch (error) {
        console.error('Error updating project:', error);
        return null;
    }
};

// Delete project
export const deleteProject = (id) => {
    try {
        const projects = getProjects();
        const filteredProjects = projects.filter(project => project.id !== id);
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(filteredProjects));
        return true;
    } catch (error) {
        console.error('Error deleting project:', error);
        return false;
    }
};

// Clear all projects (for testing)
export const clearAllProjects = () => {
    localStorage.removeItem(PROJECTS_KEY);
};