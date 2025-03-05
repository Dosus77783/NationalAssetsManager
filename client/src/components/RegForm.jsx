
export default function RegForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="">
                <h1>New User Registration</h1>
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <form onSubmit={ formSubmition } className="">

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.username}</p>}
                    <label htmlFor="regUsername1" className="form-label">Username:</label>
                    <input name="username" type="text" className="form-control" id="regUsername1" onChange={ onFormChange } value={formData.username} />

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.email}</p>}
                    <label htmlFor="regEmail1" className="form-label">Email:</label>
                    <input name="email" type="email" className="form-control" id="regEmail1" onChange={ onFormChange } value={formData.email} />

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.password}</p>}
                    <label htmlFor="regPassword1" className="form-label">Password:</label>
                    <input name="password" type="password" className="form-control" id="regPassword1" onChange={ onFormChange } value={formData.password} />

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.confirmPassword}</p>}
                    <label htmlFor="regConfirm1" className="form-label">Confirm Password:</label>
                    <input name="confirmPassword" type="password" className="form-control" id="regConfirm1" onChange={ onFormChange } value={formData.confirmPassword} />

                    <button id="formBtn" type="submit" >Register</button>
                </form>
            </div>
        </>
    )
}