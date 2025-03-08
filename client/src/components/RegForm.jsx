
export default function RegForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="fw-bold">
                {formData.valMsgs.name && <p id="valType" className="text-center text-danger font-monospace" >{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <h1 className="display-5 fw-bold" >New User Registration</h1>
                <form onSubmit={ formSubmition } className="">

                    <label htmlFor="regUsername1" className="form-label fs-4">Username:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.username}</p>}
                    <input name="username" type="text" className="form-control" id="regUsername1" onChange={ onFormChange } value={formData.username} />

                    <label htmlFor="regEmail1" className="form-label fs-4">Email:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.email}</p>}
                    <input name="email" type="email" className="form-control" id="regEmail1" onChange={ onFormChange } value={formData.email} />

                    <label htmlFor="regPassword1" className="form-label fs-4">Password:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.password}</p>}
                    <input name="password" type="password" className="form-control" id="regPassword1" onChange={ onFormChange } value={formData.password} />

                    <label htmlFor="regConfirm1" className="form-label fs-4">Confirm Password:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.confirmPassword}</p>}
                    <input name="confirmPassword" type="password" className="form-control" id="regConfirm1" onChange={ onFormChange } value={formData.confirmPassword} />

                    <button id="formBtn" type="submit" className="btn btn-lg btn-dark shadow-sm mt-4" >Register</button>
                </form>
            </div>
        </>
    )
}