
export default function LoginForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="text-lg">
                <div className="h-7" >{formData.valMsgs.name && <p id="valType" className="font-sans font-bold tracking-widest text-center text-xl text-rose-500">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>} </div>
                <p className="text-3xl text-center font-bold ">Login</p>
                <form onSubmit={ formSubmition } className="grid grid-cols-1 gap-2">
                    <div className="">
                        <div className="h-7">{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500 ">{formData.valMsgs.validationErrors.email}</p>} </div>
                        <div className="flex flex-col">
                            <label htmlFor="loginEmail1" className="">Email:</label>
                            <input name="email" type="email" className="border rounded-sm ps-2 " id="loginEmail1" onChange={ onFormChange } value={formData.email} />
                        </div>
                    </div>
                    <div className="">
                        <div className="h-7">{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500 ">{formData.valMsgs.validationErrors.password}</p>} </div>
                        <div className="flex flex-col">
                            <label htmlFor="loginPassword1" className="">Password:</label>
                            <input name="password" type="password" className="border rounded-sm ps-2 " id="loginPassword1" onChange={ onFormChange } value={formData.password} />
                        </div>
                    </div>
                    <button id="formBtnLogin" type="submit" className="p-2 mt-5 shadow-lg text-xl active:scale-95 transition-colors bg-loginbtn hover:bg-blue-900 border border-blue-950 text-white/90 tracking-widest rounded">Login</button>
                </form>
            </div>
        </>
    )
}