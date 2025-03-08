
export default function NationForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="mx-auto fw-bold">
                {formData.valMsgs.name && <p id="valType" className="text-center text-danger font-monospace" >{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <h1 className="display-5 fw-bold mb-5" >New Nation</h1>

                <form onSubmit={ formSubmition } className="">
                    <label htmlFor="countryNameForm" className="form-label fs-4">Country Name:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.countryName}</p>}
                    <input name="countryName" type="text" className="form-control mb-4" id="countryNameForm" onChange={ onFormChange } value={formData.countryName} />

                    <label htmlFor="govSelectForm" className="form-label fs-4">Government Type:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.government}</p>}
                    <select name="government" className="form-select mb-4" id="govSelectForm" onChange={ onFormChange } value={formData.government} >
                        <option value="">Choose...</option>
                        <option value="Democracy" >Democracy</option>
                        <option value="Republic" >Republic</option>
                        <option value="Monarchy" >Monarchy</option>
                        <option value="Theocracy" >Theocracy</option>
                        <option value="Fascist" >Fascist</option>
                        <option value="Communist" >Communist</option>
                    </select>

                    <label htmlFor="diffSelectForm" className="form-label fs-4">Difficulty:</label>
                    {formData.valMsgs.name && <p className="text-center text-danger font-monospace">{formData.valMsgs.validationErrors.difficulty}</p>}
                    <select name="difficulty" className="form-select mb-4" id="diffSelectForm" onChange={ onFormChange } value={formData.difficulty} >
                        <option value="Random">Random</option>
                        <option value="Developing" >Developing</option>
                        <option value="Industrial" >Industrial</option>
                        <option value="Modern" >Modern</option>
                    </select>

                    <button id="formBtn" type="submit" className="btn btn-lg btn-dark shadow" >Create</button>
                </form>
            </div>
        </>
    )
}