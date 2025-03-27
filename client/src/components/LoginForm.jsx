
export default function LoginForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="col-span-3 w-full text-start font-bold text-lg">
                {formData.valMsgs.name && <p id="valType" className="font-sans font-extrabold tracking-widest text-center text-xl text-rose-500">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                Login:
                <form onSubmit={ formSubmition } className="grid lg:grid-cols-5 grid-cols-1 gap-5 p-2 bg-linear-to-r from-cyan-600/70 via-cyan-600/80 to-cyan-700 rounded-xs">
                    <div className="col-span-2 self-end ">
                        {formData.valMsgs.name && <p className="font-sans font-extrabold text-center text-lg tracking-widest text-rose-500 ">{formData.valMsgs.validationErrors.email}</p>}
                        <div className="flex flex-col w-full">
                            <label htmlFor="loginEmail1" className="">Email:</label>
                            <input name="email" type="email" className="border rounded-lg bg-blue-200 outline-blue-300 ps-2" id="loginEmail1" onChange={ onFormChange } value={formData.email} />
                        </div>
                    </div>
                    <div className="col-span-2 self-end">
                        {formData.valMsgs.name && <p className="font-sans font-extrabold text-center text-lg tracking-widest text-rose-500 ">{formData.valMsgs.validationErrors.password}</p>}
                        <div className="flex flex-col w-full">
                            <label htmlFor="loginPassword1" className="">Password:</label>
                            <input name="password" type="password" className="border rounded-lg bg-blue-200 outline-blue-300 ps-2 " id="loginPassword1" onChange={ onFormChange } value={formData.password} />
                        </div>
                    </div>
                    <button id="formBtn" type="submit" className="col-span-1 self-end lg:mx-0 lg:px-0 mx-auto px-2 shadow-lg text-lg bg-black active:scale-95 transition-colors hover:bg-slate-700 text-white rounded-xs">Login</button>
                </form>
            </div>
        </>
    )
}