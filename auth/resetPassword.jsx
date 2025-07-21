import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        token: '',
        newPassword: '',
        confirmPassword: ''
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

        if (formData.newPassword !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/auth/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: formData.token,
                    new_password: formData.newPassword
                })
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Password reset failed');
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
                                <h2>Password Reset Successful!</h2>
                                <p>Your password has been updated. Redirecting to login...</p>
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
                                <h2>Reset Password</h2>
                                <p>Enter your reset token and new password</p>
                            </div>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        name="token"
                                        className="form-control"
                                        placeholder="Reset Token"
                                        value={formData.token}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        name="newPassword"
                                        className="form-control"
                                        placeholder="New Password"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm New Password"
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
                                        {loading ? 'Resetting...' : 'Reset Password'}
                                    </button>
                                </div>
                                
                                <div className="text-center">
                                    <p>
                                        Remember your password? <Link to="/login">Login here</Link>
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

export default ResetPassword;
