import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    where,
    deleteDoc,
    doc,
    updateDoc,
    orderBy
} from 'firebase/firestore';

export default function FormPage() {
    const { currentUser, userData, isAdmin } = useAuth();
    const [formData, setFormData] = useState({
        shoeName: '',
        brand: '',
        category: 'running',
        price: '',
        size: '',
        description: ''
    });
    const [records, setRecords] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch records from Firestore
    useEffect(() => {
        if (!currentUser) {
            setRecords([]);
            return;
        }

        let unsubscribe;
        try {
            // Collection specialized for "shoes"
            const recordsRef = collection(db, 'shoes');

            // NOTE: where() + orderBy() requires a composite index in Firestore.
            // If the query fails, it's likely due to missing indexes.
            const q = isAdmin
                ? query(recordsRef, orderBy('createdAt', 'desc'))
                : query(recordsRef, where('userId', '==', currentUser.uid), orderBy('createdAt', 'desc'));

            unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedRecords = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRecords(fetchedRecords);
            }, (error) => {
                console.error("Firestore subscription error:", error);

                // Fallback: If index is missing, try query without orderBy to at least show data
                if (error.code === 'failed-precondition') {
                    console.warn("Missing index detected. Falling back to unordered query.");
                    const fallbackQ = isAdmin
                        ? query(recordsRef)
                        : query(recordsRef, where('userId', '==', currentUser.uid));

                    onSnapshot(fallbackQ, (snapshot) => {
                        const fetchedRecords = snapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        // Sort client-side instead
                        setRecords(fetchedRecords.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)));
                    });
                }
            });
        } catch (err) {
            console.error("Setup error:", err);
        }

        return () => unsubscribe && unsubscribe();
    }, [currentUser, isAdmin]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            alert('Please sign in to add shoe data.');
            return;
        }

        setIsSubmitting(true);
        try {
            if (editingId) {
                // Update
                const docRef = doc(db, 'shoes', editingId);
                await updateDoc(docRef, {
                    ...formData,
                    updatedAt: new Date()
                });
                setEditingId(null);
            } else {
                // Create
                await addDoc(collection(db, 'shoes'), {
                    ...formData,
                    userId: currentUser.uid,
                    addedBy: userData?.fullname || 'User',
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            setFormData({
                shoeName: '',
                brand: '',
                category: 'running',
                price: '',
                size: '',
                description: ''
            });
            alert(editingId ? 'Shoe data updated!' : 'Shoe added successfully!');
        } catch (error) {
            console.error("Error saving document: ", error);
            alert("Error: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (record) => {
        setFormData({
            shoeName: record.shoeName,
            brand: record.brand,
            category: record.category,
            price: record.price,
            size: record.size,
            description: record.description
        });
        setEditingId(record.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this shoe record?')) {
            try {
                await deleteDoc(doc(db, 'shoes', id));
                alert('Record deleted!');
            } catch (error) {
                alert("Error: " + error.message);
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50/50">
            <Navbar />
            <main className="pt-32 pb-24 flex-1 relative overflow-hidden">
                <div className="blob -top-24 -left-24 opacity-20"></div>
                <div className="blob bottom-0 -right-24 opacity-20"></div>

                <div className="max-w-5xl mx-auto px-4 relative">
                    <div className="text-center mb-16">
                        <span className="badge-gradient mb-4">Management</span>
                        <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            {editingId ? (
                                <>Edit <span className="gradient-text">Shoe Details</span></>
                            ) : (
                                <>Add <span className="gradient-text">New Shoe</span></>
                            )}
                        </h1>
                        <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                            {currentUser ? 'Fill in the information below to keep your StrideGear catalog polished and up to date.' : 'Please sign in to manage your collection.'}
                        </p>
                    </div>

                    {currentUser && (
                        <div className="card !p-12 mb-20 border-white shadow-soft-2xl relative group overflow-hidden bg-white/80 backdrop-blur-md">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:w-40 group-hover:h-40 transition-all"></div>

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="shoeName" className="text-sm font-black text-gray-700 uppercase tracking-widest ml-1">Model Name</label>
                                        <input
                                            type="text"
                                            id="shoeName"
                                            name="shoeName"
                                            value={formData.shoeName}
                                            onChange={handleChange}
                                            className="w-full !rounded-[1.5rem]"
                                            placeholder="e.g. Air Max 2024"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="brand" className="text-sm font-black text-gray-700 uppercase tracking-widest ml-1">Brand</label>
                                        <input
                                            type="text"
                                            id="brand"
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className="w-full !rounded-[1.5rem]"
                                            placeholder="e.g. Nike"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="space-y-3">
                                        <label htmlFor="category" className="text-sm font-black text-gray-700 uppercase tracking-widest ml-1">Category</label>
                                        <select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full !rounded-[1.5rem]"
                                        >
                                            <option value="running">Running</option>
                                            <option value="training">Training</option>
                                            <option value="lifestyle">Lifestyle</option>
                                            <option value="basketball">Basketball</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="price" className="text-sm font-black text-gray-700 uppercase tracking-widest ml-1">Price ($)</label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="w-full !rounded-[1.5rem]"
                                            placeholder="129.99"
                                            step="0.01"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="size" className="text-sm font-black text-gray-700 uppercase tracking-widest ml-1">Size (US)</label>
                                        <input
                                            type="text"
                                            id="size"
                                            name="size"
                                            value={formData.size}
                                            onChange={handleChange}
                                            className="w-full !rounded-[1.5rem]"
                                            placeholder="e.g. 10.5"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="description" className="text-sm font-black text-gray-700 uppercase tracking-widest ml-1">Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full !rounded-[1.5rem] resize-none"
                                        placeholder="Add some details about the sneaker..."
                                    ></textarea>
                                </div>

                                <div className="flex gap-6 pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 btn-primary py-5 text-xl uppercase tracking-wider font-black"
                                    >
                                        <div className="flex items-center justify-center gap-3">
                                            {isSubmitting ? (
                                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                </svg>
                                            )}
                                            {editingId ? 'Update Shoe' : 'Add to Collection'}
                                        </div>
                                    </button>
                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingId(null);
                                                setFormData({ shoeName: '', brand: '', category: 'running', price: '', size: '', description: '' });
                                            }}
                                            className="btn-secondary !px-10 py-5 text-xl font-black uppercase tracking-wider"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Records List */}
                    <div className="mt-20">
                        <div className="flex items-center justify-between mb-12 border-b-4 border-purple-50 pb-6">
                            <h2 className="text-4xl font-black text-gray-900 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2x bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-3xl shadow-lg relative">
                                    👟
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                                </div>
                                {isAdmin ? (
                                    <>Global <span className="gradient-text">Catalog</span></>
                                ) : (
                                    <>My <span className="gradient-text">Collection</span></>
                                )}
                            </h2>
                            <span className="px-6 py-2 bg-purple-50 text-purple-600 text-lg font-black rounded-[1.25rem] border border-purple-100 uppercase tracking-widest">
                                {records.length} Items
                            </span>
                        </div>

                        {records.length > 0 ? (
                            <div className="grid gap-8 md:grid-cols-2">
                                {records.map((record) => (
                                    <div key={record.id} className="card !p-8 border-white shadow-soft-xl hover:scale-[1.02] bg-white relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 flex gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                                            <button
                                                onClick={() => handleEdit(record)}
                                                className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(record.id)}
                                                className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors shadow-sm"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="flex-1 mb-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                                                    {record.category}
                                                </span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                                                    {record.brand}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors">
                                                {record.shoeName}
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-50">
                                            <div className="bg-gray-50/50 p-4 rounded-3xl group-hover:bg-purple-50 transition-colors">
                                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Price</p>
                                                <p className="text-2xl font-black text-gray-900">${parseFloat(record.price).toFixed(2)}</p>
                                            </div>
                                            <div className="bg-gray-50/50 p-4 rounded-3xl group-hover:bg-pink-50 transition-colors">
                                                <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Size</p>
                                                <p className="text-2xl font-black text-gray-900">{record.size || 'Unk'}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm font-medium text-gray-500 line-clamp-2 italic leading-relaxed mb-6 h-10">
                                            {record.description ? `"${record.description}"` : 'No description provided.'}
                                        </p>

                                        <div className="flex justify-between items-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {record.createdAt?.toDate ? record.createdAt.toDate().toLocaleDateString() : 'Live'}
                                            </div>
                                            {isAdmin && (
                                                <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                                                    <span className="w-2 h-2 rounded-full bg-purple-600 group-hover:bg-white animate-pulse"></span>
                                                    <span className="text-[9px] font-black text-purple-600 group-hover:text-white uppercase tracking-tighter">
                                                        Added By: {record.addedBy || 'User'}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-32 card border-2 border-dashed border-gray-200 shadow-none bg-transparent">
                                <div className="text-7xl mb-8 animate-bounce">📦</div>
                                <h3 className="text-3xl font-black text-gray-900 mb-4">Inventory Empty</h3>
                                <p className="text-xl text-gray-500 font-medium">Time to add some heat to your warehouse!</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
