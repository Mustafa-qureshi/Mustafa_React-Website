import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getProjectsByUserAndStatus, getProjectsByStatus, deleteProject } from '../utils/firestore';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const { currentUser, userData, isAdmin } = useAuth();
    const location = useLocation();

    useEffect(() => {
        fetchProjects();
    }, [currentUser, isAdmin, filter, location.state?.refresh]);

    const fetchProjects = async () => {
        if (!currentUser) return;

        setLoading(true);
        try {
            let projectsData;
            if (isAdmin) {
                // Admin sees all projects
                projectsData = await getProjectsByStatus(filter);
            } else {
                // Regular users can only see their own projects
                projectsData = await getProjectsByUserAndStatus(currentUser.uid, filter);
            }
            setProjects(projectsData);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
        setLoading(false);
    };

    const handleDelete = async (projectId) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        if (!isAdmin && project.userId !== currentUser.uid) {
            alert('You can only delete your own projects.');
            return;
        }

        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const success = await deleteProject(projectId);
            if (success) {
                setProjects(projects.filter(project => project.id !== projectId));
            } else {
                alert('Error deleting project. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Error deleting project. Please try again.');
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed': return 'bg-green-100 text-green-800';
            case 'in-progress': return 'bg-blue-100 text-blue-800';
            case 'planning': return 'bg-yellow-100 text-yellow-800';
            case 'on-hold': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (!currentUser) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Please sign in to view projects</h2>
                        <Link to="/signin" className="btn-primary">Sign In</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="pt-24 pb-12 min-h-screen">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-black text-gray-900 mb-2">
                                {isAdmin ? 'All Projects' : 'My Projects'}
                            </h1>
                            <p className="text-gray-600">
                                {isAdmin ? 'Manage all software development projects' : 'View and manage your projects'}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Status</option>
                                <option value="planning">Planning</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="on-hold">On Hold</option>
                            </select>
                            <Link to="/create-project" className="btn-primary px-6 py-2">
                                + New Project
                            </Link>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading projects...</p>
                        </div>
                    ) : projects.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📋</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600 mb-6">
                                {filter === 'all' ? 'Start by creating your first project.' : `No projects with status "${filter}".`}
                            </p>
                            <Link to="/create-project" className="btn-primary">Create Project</Link>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map(project => (
                                <div key={project.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                                {project.title}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <span className="font-medium">Tech:</span>
                                                <span className="ml-2">{project.technologies}</span>
                                            </div>
                                            {project.client && (
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="font-medium">Client:</span>
                                                    <span className="ml-2">{project.client}</span>
                                                </div>
                                            )}
                                            {project.budget && (
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <span className="font-medium">Budget:</span>
                                                    <span className="ml-2">${project.budget}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-2">
                                            <Link
                                                to={`/project/${project.id}`}
                                                className="btn-secondary flex-1 text-center py-2 text-sm"
                                            >
                                                View Details
                                            </Link>
                                            <Link
                                                to={`/edit-project/${project.id}`}
                                                className="btn-primary flex-1 text-center py-2 text-sm"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}