import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [resetToken, setResetToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/auth/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                const data = await response.json();
                setResetToken(data.reset_token);
                setSuccess(true);
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Failed to send reset email');
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
                            <div className="contact-form">
                                <div className="text-center mb-4">
                                    <h2>Reset Token Generated</h2>
                                    <p>Your password reset token:</p>
                                    <div className="alert alert-info">
                                        <strong>{resetToken}</strong>
                                    </div>
                                    <p className="small">In a production environment, this would be sent to your email.</p>
                                </div>
                                
                                <div className="text-center">
                                    <Link to="/reset-password" className="btn btn-primary">
                                        Reset Password
                                    </Link>
                                </div>
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
                                <h2>Forgot Password</h2>
                                <p>Enter your email address to reset your password</p>
                            </div>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={loading}
                                    >
                                        {loading ? 'Sending...' : 'Send Reset Token'}
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

export default ForgotPassword;
