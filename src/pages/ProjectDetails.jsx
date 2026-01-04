import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getProject, deleteProject } from '../utils/firestore';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const { currentUser, isAdmin } = useAuth();

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            const projectData = await getProject(id);

            if (projectData) {
                // Check if user has permission to view this project
                if (!isAdmin && projectData.userId !== currentUser?.uid) {
                    navigate('/projects');
                    return;
                }

                setProject(projectData);
            } else {
                navigate('/projects');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
            navigate('/projects');
        }
        setLoading(false);
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) return;

        try {
            const success = await deleteProject(id);
            if (success) {
                navigate('/projects');
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
            case 'completed': return 'bg-green-100 text-green-800 border-green-200';
            case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'on-hold': return 'bg-red-100 text-red-800 border-red-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Not set';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!currentUser) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Please sign in to view project details</h2>
                        <Link to="/signin" className="btn-primary">Sign In</Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
                <Footer />
            </>
        );
    }

    if (!project) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
                        <Link to="/projects" className="btn-primary">Back to Projects</Link>
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
                <div className="max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <Link to="/projects" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
                                ← Back to Projects
                            </Link>
                            <h1 className="text-4xl font-black text-gray-900 mb-2">{project.title}</h1>
                            <div className="flex items-center gap-4">
                                <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase border ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    Created: {formatDate(project.createdAt)}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Link
                                to={`/edit-project/${project.id}`}
                                className="btn-primary px-6 py-2"
                            >
                                Edit Project
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Description */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Description</h2>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                    {project.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.split(',').map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Project Info */}
                            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
                                <div className="space-y-4">
                                    {project.client && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Client</label>
                                            <p className="text-gray-900 font-medium">{project.client}</p>
                                        </div>
                                    )}

                                    {project.budget && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Budget</label>
                                            <p className="text-gray-900 font-medium">${project.budget}</p>
                                        </div>
                                    )}

                                    {project.deadline && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Deadline</label>
                                            <p className="text-gray-900 font-medium">{formatDate(project.deadline)}</p>
                                        </div>
                                    )}

                                    {project.startDate && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Start Date</label>
                                            <p className="text-gray-900 font-medium">{formatDate(project.startDate)}</p>
                                        </div>
                                    )}

                                    {project.endDate && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">End Date</label>
                                            <p className="text-gray-900 font-medium">{formatDate(project.endDate)}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Project Owner (for admins) */}
                            {isAdmin && project.userId && (
                                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Project Owner</h3>
                                    <p className="text-gray-600 text-sm">
                                        User ID: {project.userId}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}