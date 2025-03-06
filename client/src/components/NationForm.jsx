
export default function NationForm( {formData, onFormChange, formSubmition} ){

    return (
        <>  
            <div className="">
                <h1>New Nation</h1>

                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}

                <form onSubmit={ formSubmition } className="">

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.countryName}</p>}
                    <label htmlFor="countryNameForm" className="form-label">Country Name:</label>
                    <input name="countryName" type="text" className="form-control" id="countryNameForm" onChange={ onFormChange } value={formData.countryName} />

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.government}</p>}
                    <label htmlFor="govSelectForm" className="form-label">Government Type:</label>
                    <select name="government" className="form-select" id="govSelectForm" onChange={ onFormChange } value={formData.government} >
                        <option value="">Choose...</option>
                        <option value="Democracy" >Democracy</option>
                        <option value="Republic" >Republic</option>
                        <option value="Monarchy" >Monarchy</option>
                        <option value="Theocracy" >Theocracy</option>
                        <option value="Fascist" >Fascist</option>
                        <option value="Communist" >Communist</option>
                    </select>

                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.difficulty}</p>}
                    <label htmlFor="diffSelectForm" className="form-label">Difficulty:</label>
                    <select name="difficulty" className="form-select" id="diffSelectForm" onChange={ onFormChange } value={formData.difficulty} >
                        <option value="Random">Random</option>
                        <option value="Developing" >Developing</option>
                        <option value="Industrial" >Industrial</option>
                        <option value="Modern" >Modern</option>
                    </select>

                    <button id="formBtn" type="submit" >Create</button>
                </form>
            </div>
        </>
    )
}