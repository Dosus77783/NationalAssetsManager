
export default function LoginForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="py-3 text-start fw-bold fs-5">
                {formData.valMsgs.name && <p id="valType" className="text-center text-danger font-monospace">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                Login:
                <form onSubmit={ formSubmition } className="d-flex p-3 border border-dark rounded border-3 bg-secondary bg-opacity-50 bg-gradient ">
                    <div className="d-flex flex-column justify-content-between">
                        {formData.valMsgs.name && <p className="text-danger font-monospace">{formData.valMsgs.validationErrors.email}</p>}
                        <div className="d-flex">
                            <label htmlFor="loginEmail1" className="form-label me-2 ">Email:</label>
                            <input name="email" type="email" className="form-control me-2 " id="loginEmail1" onChange={ onFormChange } value={formData.email} />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        {formData.valMsgs.name && <p className="text-danger font-monospace">{formData.valMsgs.validationErrors.password}</p>}
                        <div className="d-flex">
                            <label htmlFor="loginPassword1" className="form-label me-2 d-inline">Password:</label>
                            <input name="password" type="password" className="form-control me-5 d-inline" id="loginPassword1" onChange={ onFormChange } value={formData.password} />
                        </div>
                    </div>
                    <button id="formBtn" type="submit" className="btn btn-success my-auto shadow-sm">Login</button>
                </form>
            </div>
        </>
    )
}