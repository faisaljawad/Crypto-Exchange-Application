import React, { useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import './blogs.css';
import { useNavigate } from 'react-router-dom';
// Using toast for showing messages as a snackbar
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Blogs({ isLoggedIn }) {
    const [showModal, setShowModal] = useState(false);
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'Blog 1', subtitle: 'Subtitle 1', author: 'Author X' },
        { id: 2, title: 'Blog 2', subtitle: 'Subtitle 2', author: 'Author Y' },
        { id: 3, title: 'Blog 3', subtitle: 'Subtitle 3', author: 'Author Z' },
    ]);
    const [newBlog, setNewBlog] = useState({ title: '', subtitle: '', author: '' });
    const [deletingBlogId, setDeletingBlogId] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const navigate = useNavigate();

    if (!isLoggedIn) {
        return (
            <div className="blogs-container">
                <div className="welcome-message">
                    <h2>Sorry!</h2>
                    <p>You do not have appropriate access to view blogs.</p>
                </div>
            </div>
        );
    }

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCreateBlog = () => {
        const new_id = blogs.length + 1;

        // Create the new blog object
        const new_blog_item = { id: new_id, ...newBlog };

        // Add the new blog to the blogs array
        setBlogs([...blogs, new_blog_item]);

        // Reset the new blog form
        setNewBlog({ title: '', subtitle: '', author: '' });
        setShowModal(false); // Close modal afer creating
        toast.success('Blog successfully created!');
    };

    const handleDeleteConfirmation = (blogId) => {
        setDeletingBlogId(blogId);
        setShowDeleteConfirmation(true);
    };

    const handleDeleteBlog = () => {
        // Filter the blogs array to exclude the blog with the deletingBlogId
        const updatedBlogs = blogs.filter(blog => blog.id !== deletingBlogId);
        setBlogs(updatedBlogs);

        // hide the confirmation dialog
        setShowDeleteConfirmation(false);
    };


    return (
        <div className="blogs-table">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2>Blogs</h2>
                <Button variant="primary" onClick={handleOpenModal}>Add New Blog</Button>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.subtitle}</td>
                            <td>{blog.author}</td>
                            <td>
                                <Button variant="primary">View</Button>{' '}
                                <Button variant="outline-secondary">Edit</Button>{' '}
                                <Button variant="danger" onClick={() => handleDeleteConfirmation(blog.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {showDeleteConfirmation && (
                <div className="confirmation-dialog">
                    <button className="close-button" onClick={() => setShowDeleteConfirmation(false)}>
                        X
                    </button>
                    <br></br>
                    <p>Are you sure you want to delete this blog?</p>
                    <Button variant="danger" onClick={handleDeleteBlog}>Yes</Button>
                    <Button variant="outline-danger" onClick={() => setShowDeleteConfirmation(false)}>No</Button>
                </div>
            )}


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label>Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newBlog.title}
                                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Subtitle</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newBlog.subtitle}
                                onChange={(e) => setNewBlog({ ...newBlog, subtitle: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Author</label>
                            <input
                                type="text"
                                className="form-control"
                                value={newBlog.author}
                                onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleCreateBlog}>Save Blog</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Blogs;
