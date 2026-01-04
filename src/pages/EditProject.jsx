import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getProject, updateProject } from '../utils/firestore';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function EditProject() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentUser, isAdmin } = useAuth();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        status: 'planning',
        client: '',
        budget: '',
        deadline: '',
        startDate: '',
        endDate: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            const projectData = await getProject(id);

            if (projectData) {
                // Check if user has permission to edit this project
                if (!isAdmin && projectData.userId !== currentUser?.uid) {
                    navigate('/projects');
                    return;
                }

                setFormData({
                    title: projectData.title || '',
                    description: projectData.description || '',
                    technologies: projectData.technologies || '',
                    status: projectData.status || 'planning',
                    client: projectData.client || '',
                    budget: projectData.budget || '',
                    deadline: projectData.deadline || '',
                    startDate: projectData.startDate || '',
                    endDate: projectData.endDate || ''
                });
            } else {
                navigate('/projects');
            }
        } catch (error) {
            console.error('Error fetching project:', error);
            navigate('/projects');
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Project title is required';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Project description is required';
        }

        if (!formData.technologies.trim()) {
            newErrors.technologies = 'Technologies are required';
        }

        if (formData.budget && (isNaN(formData.budget) || parseFloat(formData.budget) < 0)) {
            newErrors.budget = 'Budget must be a valid positive number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setSaving(true);

        try {
            const updateData = {
                ...formData,
                updatedAt: new Date().toISOString()
            };

            // Remove empty fields
            Object.keys(updateData).forEach(key => {
                if (updateData[key] === '') {
                    delete updateData[key];
                }
            });

            const success = await updateProject(id, updateData);
            if (success) {
                navigate(`/project/${id}`);
            } else {
                alert('Error updating project. Please try again.');
            }
        } catch (error) {
            console.error('Error updating project:', error);
            alert('Error updating project. Please try again.');
        }

        setSaving(false);
    };

    if (!currentUser) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Please sign in to edit projects</h2>
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

    return (
        <>
            <Navbar />
            <main className="pt-24 pb-12 min-h-screen">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="mb-8">
                        <Link to={`/project/${id}`} className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
                            ← Back to Project
                        </Link>
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Edit Project</h1>
                        <p className="text-gray-600">Update project information and details</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <label htmlFor="title" className="block text-sm font-bold text-gray-700 mb-2">
                                    Project Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.title ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Enter project title"
                                />
                                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                            </div>

                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-bold text-gray-700 mb-2">
                                    Project Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.description ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Describe the project in detail"
                                />
                                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                            </div>

                            {/* Technologies */}
                            <div>
                                <label htmlFor="technologies" className="block text-sm font-bold text-gray-700 mb-2">
                                    Technologies Used *
                                </label>
                                <input
                                    type="text"
                                    id="technologies"
                                    name="technologies"
                                    value={formData.technologies}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.technologies ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="e.g., React, Node.js, MongoDB (comma-separated)"
                                />
                                {errors.technologies && <p className="mt-1 text-sm text-red-600">{errors.technologies}</p>}
                            </div>

                            {/* Status */}
                            <div>
                                <label htmlFor="status" className="block text-sm font-bold text-gray-700 mb-2">
                                    Project Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="planning">Planning</option>
                                    <option value="in-progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                    <option value="on-hold">On Hold</option>
                                </select>
                            </div>

                            {/* Client */}
                            <div>
                                <label htmlFor="client" className="block text-sm font-bold text-gray-700 mb-2">
                                    Client Name
                                </label>
                                <input
                                    type="text"
                                    id="client"
                                    name="client"
                                    value={formData.client}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter client name (optional)"
                                />
                            </div>

                            {/* Budget */}
                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
                                    Budget ($)
                                </label>
                                <input
                                    type="number"
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                        errors.budget ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Enter project budget (optional)"
                                />
                                {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget}</p>}
                            </div>

                            {/* Dates */}
                            <div className="grid md:grid-cols-3 gap-4">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-bold text-gray-700 mb-2">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="deadline" className="block text-sm font-bold text-gray-700 mb-2">
                                        Deadline
                                    </label>
                                    <input
                                        type="date"
                                        id="deadline"
                                        name="deadline"
                                        value={formData.deadline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-sm font-bold text-gray-700 mb-2">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex gap-4">
                            <button
                                type="submit"
                                disabled={saving}
                                className="btn-primary flex-1 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {saving ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Updating...
                                    </div>
                                ) : (
                                    'Update Project'
                                )}
                            </button>
                            <Link
                                to={`/project/${id}`}
                                className="btn-secondary flex-1 py-3 text-center"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}