
export default function LoginForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="">
                Login:
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <form onSubmit={ formSubmition } className="border border-dark border-2">

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.email}</p>}
                    <label for="loginEmail1" class="form-label">Email:</label>
                    <input name="email" type="email" class="form-control" id="loginEmail1" onChange={ onFormChange } value={formData.email} />

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.password}</p>}
                    <label for="loginPassword1" class="form-label">Password:</label>
                    <input name="password" type="password" class="form-control" id="loginPassword1" onChange={ onFormChange } value={formData.password} />

                    <button id="formBtn" type="submit" >Login</button>
                </form>
            </div>
        </>
    )
}