
export default function NationForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="pb-7">
                {formData.valMsgs.name && <p id="valType" className="font-sans font-bold tracking-widest text-center text-xl text-rose-500" >{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <h1 className="text-3xl text-center font-bold my-3" >New Nation</h1>

                <form onSubmit={ formSubmition } className="grid grid-cols-1 gap-2 text-lg">
                    <div className="h-7" >{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500">{formData.valMsgs.validationErrors.countryName}</p>} </div>
                    <label htmlFor="countryNameForm" className="form-label fs-4">Country Name:</label>
                    <input name="countryName" type="text" className="border rounded-sm ps-2" id="countryNameForm" onChange={ onFormChange } value={formData.countryName} />

                    <div className="h-7" >{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500">{formData.valMsgs.validationErrors.government}</p>} </div>
                    <label htmlFor="govSelectForm" className="">Government Type:</label>
                    <select name="government" className="border rounded-sm ps-2" id="govSelectForm" onChange={ onFormChange } value={formData.government} >
                        <option value="">Choose...</option>
                        <option value="Democracy" >Democracy</option>
                        <option value="Republic" >Republic</option>
                        <option value="Monarchy" >Monarchy</option>
                        <option value="Theocracy" >Theocracy</option>
                        <option value="Dictatorship" >Dictatorship</option>
                    </select>

                    <div className="h-7" >{formData.valMsgs.name && <p className="font-sans font-bold text-center text-lg tracking-widest text-rose-500">{formData.valMsgs.validationErrors.difficulty}</p>} </div>
                    <label htmlFor="diffSelectForm" className="">Difficulty:</label>
                    <select name="difficulty" className="border rounded-sm ps-2" id="diffSelectForm" onChange={ onFormChange } value={formData.difficulty} >
                        <option value="Random">Random</option>
                        <option value="Developing" >Developing</option>
                        <option value="Industrial" >Industrial</option>
                        <option value="Modern" >Modern</option>
                    </select>

                    <button id="formBtn" type="submit" className="p-2 mt-10 shadow-lg text-xl active:scale-95 transition-colors bg-loginbtn hover:bg-blue-900 border border-blue-950 text-white/90 tracking-widest rounded" >Create</button>
                </form>
            </div>
        </>
    )
}