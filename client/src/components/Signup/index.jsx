import React from 'react'
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { firstName, lastName, email, phone, password, confirmPassword } =
            e.target.elements
        let conFom = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
        }
        console.log(conFom)
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-3">Sign up</h2>
                    <p>We would never share your details</p>
                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="firstName"
                                    >
                                        First name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="firstName"
                                        placeholder="First name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="lastName"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="lastName"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                required
                            />
                        </div>
                        <button className="btn btn-danger" type="submit">
                            {formStatus}
                        </button>
                    </form>
                </div>
                <div className="col-md-6 form-right"></div>
            </div>
        </div>
    )
}
export default ContactForm
