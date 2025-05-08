
export default function RegForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="pb-7">
                <div className="h-7">{formData.valMsgs.name && <p id="valType" className="font-sans font-bold tracking-widest text-center text-xl text-rose-500" >{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>} </div>
                <h1 className="text-3xl text-center font-bold my-3" >New User Registration</h1>
                <form onSubmit={ formSubmition } className="grid grid-cols-1 gap-2 text-lg">

                    <div className="h-7">{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500">{formData.valMsgs.validationErrors.username}</p>} </div>
                    <label htmlFor="regUsername1" className="">Username:</label>
                    <input name="username" type="text" className="border rounded-sm ps-2 input-text" id="regUsername1" onChange={ onFormChange } value={formData.username} />

                    <div className="h-7">{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500">{formData.valMsgs.validationErrors.email}</p>} </div>
                    <label htmlFor="regEmail1" className="">Email:</label>
                    <input name="email" type="email" className="border rounded-sm ps-2 input-text" id="regEmail1" onChange={ onFormChange } value={formData.email} />

                    <div className="h-7">{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500">{formData.valMsgs.validationErrors.password}</p>} </div>
                    <label htmlFor="regPassword1" className="">Password:</label>
                    <input name="password" type="password" className="border rounded-sm ps-2 input-text" id="regPassword1" onChange={ onFormChange } value={formData.password} />

                    <div className="h-7">{formData.valMsgs.name && <p className="font-sans font-bold text-sm text-center tracking-widest text-rose-500">{formData.valMsgs.validationErrors.confirmPassword}</p>} </div>
                    <label htmlFor="regConfirm1" className="">Confirm Password:</label>
                    <input name="confirmPassword" type="password" className="border rounded-sm ps-2 input-text" id="regConfirm1" onChange={ onFormChange } value={formData.confirmPassword} />

                    <button id="formBtn" type="submit" className="p-2 mt-10 shadow-lg text-xl active:scale-95 transition-colors bg-loginbtn hover:bg-blue-900 border border-blue-950 text-white/90 tracking-widest rounded" >Register</button>
                </form>
            </div>
        </>
    )
}