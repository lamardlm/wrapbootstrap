import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    first_name: formData.first_name,
                    last_name: formData.last_name
                })
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Registration failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <section className="auth-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="contact-form text-center">
                                <h2>Registration Successful!</h2>
                                <p>Your account has been created. Redirecting to login...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="auth-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <div className="text-center mb-4">
                                <h2>Join BeUnBound</h2>
                                <p>Create your account to begin your athletic journey</p>
                            </div>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="first_name"
                                                className="form-control"
                                                placeholder="First Name"
                                                value={formData.first_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="last_name"
                                                className="form-control"
                                                placeholder="Last Name"
                                                value={formData.last_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={loading}
                                    >
                                        {loading ? 'Creating Account...' : 'Create Account'}
                                    </button>
                                </div>
                                
                                <div className="text-center">
                                    <p>
                                        Already have an account? <Link to="/login">Login here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
