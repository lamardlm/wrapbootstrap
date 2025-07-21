import React, { useState } from 'react';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleInitial: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        signature: '',
        coachingCategory: '',
        hasYouthApplicants: false,
        youthApplications: [],
        agreementAccepted: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const coachingCategories = [
        'Track and Field',
        'Speed Improvement (40 Yard Dash)',
        'Bodybuilding Competitions',
        'Archery',
        'Better Health and Wellness',
        'Nutrition Programming',
        'Weight Loss'
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const addYouthApplication = () => {
        setFormData(prev => ({
            ...prev,
            youthApplications: [...prev.youthApplications, {
                firstName: '',
                lastName: '',
                birthDate: ''
            }]
        }));
    };

    const updateYouthApplication = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            youthApplications: prev.youthApplications.map((youth, i) => 
                i === index ? { ...youth, [field]: value } : youth
            )
        }));
    };

    const removeYouthApplication = (index) => {
        setFormData(prev => ({
            ...prev,
            youthApplications: prev.youthApplications.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.agreementAccepted) {
            setError('You must accept the release and hold harmless agreement to proceed.');
            return;
        }

        if (formData.signature.toLowerCase() !== `${formData.firstName} ${formData.lastName}`.toLowerCase()) {
            setError('Signature must match your full name exactly.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const token = localStorage.getItem('access_token');
            if (!token) {
                window.location.href = '/login';
                return;
            }

            const applicationData = {
                first_name: formData.firstName,
                middle_initial: formData.middleInitial,
                last_name: formData.lastName,
                address: formData.address,
                city: formData.city,
                state: formData.state,
                zip_code: formData.zipCode,
                phone: formData.phone,
                signature: formData.signature,
                coaching_category: formData.coachingCategory,
                agreement_accepted: formData.agreementAccepted,
                has_youth_applicants: formData.hasYouthApplicants,
                youth_applications: formData.youthApplications.map(youth => ({
                    first_name: youth.firstName,
                    last_name: youth.lastName,
                    birth_date: youth.birthDate
                }))
            };

            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/applications`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(applicationData)
            });

            if (response.ok) {
                setSuccess(true);
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Application submission failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <section className="application-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form text-center">
                                <h2>Application Submitted Successfully!</h2>
                                <p>Thank you for applying to BeUnBound. We will review your application and contact you soon.</p>
                                <a href="/" className="btn btn-primary">Return to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const releaseAgreementText = `
RELEASE AND HOLD HARMLESS AGREEMENT

I, the undersigned, acknowledge that I am voluntarily participating in athletic coaching and training programs provided by BeUnBound.ai and its affiliated resources, staff, employees, coaches, and facilities (collectively "BeUnBound").

I understand that participation in athletic activities involves inherent risks of injury, including but not limited to serious bodily injury, disability, and death. I voluntarily assume all risks associated with my participation.

In consideration for being permitted to participate in BeUnBound's programs, I hereby:

1. RELEASE, WAIVE, AND DISCHARGE BeUnBound, its employees, staff, coaches, affiliated resources, facilities, and all related parties from any and all claims, demands, or causes of action arising from my participation in the program.

2. AGREE TO HOLD HARMLESS AND INDEMNIFY BeUnBound from any liability, claims, demands, or actions that may arise from my participation or that of any minor for whom I am responsible.

3. ACKNOWLEDGE that this agreement is binding upon my heirs, executors, administrators, and assigns.

I have read this agreement, understand its terms, and sign it voluntarily.
    `;

    return (
        <section className="application-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <div className="text-center mb-4">
                                <h2>BeUnBound Application</h2>
                                <p>Begin your journey toward elite athletic coaching</p>
                            </div>
                            
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="firstName"
                                                className="form-control"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="middleInitial"
                                                className="form-control"
                                                placeholder="Middle Initial"
                                                value={formData.middleInitial}
                                                onChange={handleChange}
                                                maxLength="1"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="lastName"
                                                className="form-control"
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        name="address"
                                        className="form-control"
                                        placeholder="Street Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="city"
                                                className="form-control"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="state"
                                                className="form-control"
                                                placeholder="State"
                                                value={formData.state}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group mb-3">
                                            <input
                                                type="text"
                                                name="zipCode"
                                                className="form-control"
                                                placeholder="ZIP Code"
                                                value={formData.zipCode}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <select
                                        name="coachingCategory"
                                        className="form-control"
                                        value={formData.coachingCategory}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Coaching Category</option>
                                        {coachingCategories.map((category, index) => (
                                            <option key={index} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            name="hasYouthApplicants"
                                            className="form-check-input"
                                            id="hasYouthApplicants"
                                            checked={formData.hasYouthApplicants}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="hasYouthApplicants">
                                            I am signing up youth/children for this program
                                        </label>
                                    </div>
                                </div>

                                {formData.hasYouthApplicants && (
                                    <div className="youth-applications mb-4">
                                        <h4>Youth Applications</h4>
                                        {formData.youthApplications.map((youth, index) => (
                                            <div key={index} className="youth-application-form border p-3 mb-3">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="First Name"
                                                                value={youth.firstName}
                                                                onChange={(e) => updateYouthApplication(index, 'firstName', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Last Name"
                                                                value={youth.lastName}
                                                                onChange={(e) => updateYouthApplication(index, 'lastName', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="form-group mb-3">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                placeholder="Birth Date"
                                                                value={youth.birthDate}
                                                                onChange={(e) => updateYouthApplication(index, 'birthDate', e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger btn-sm"
                                                            onClick={() => removeYouthApplication(index)}
                                                        >
                                                            ×
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            onClick={addYouthApplication}
                                        >
                                            Add Another Youth Application
                                        </button>
                                    </div>
                                )}

                                <div className="form-group mb-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h5>Release and Hold Harmless Agreement</h5>
                                        </div>
                                        <div className="card-body">
                                            <div style={{ height: '200px', overflowY: 'scroll', fontSize: '14px', lineHeight: '1.4' }}>
                                                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                                                    {releaseAgreementText}
                                                </pre>
                                            </div>
                                            <div className="form-check mt-3">
                                                <input
                                                    type="checkbox"
                                                    name="agreementAccepted"
                                                    className="form-check-input"
                                                    id="agreementAccepted"
                                                    checked={formData.agreementAccepted}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-check-label" htmlFor="agreementAccepted">
                                                    I have read and agree to the Release and Hold Harmless Agreement
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        name="signature"
                                        className="form-control"
                                        placeholder="Type your full name as signature"
                                        value={formData.signature}
                                        onChange={handleChange}
                                        required
                                    />
                                    <small className="form-text text-muted">
                                        Your signature must match your first and last name exactly
                                    </small>
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={loading || !formData.agreementAccepted}
                                    >
                                        {loading ? 'Submitting Application...' : 'Submit Application'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
};

export default ApplicationForm;
