import { usePatientsContext } from "../context/PatientsContext";

export default function Form( {btnText, onFormChange, formSubmition} ){
    const { formData } = usePatientsContext();
    //min={1} max={140}
    return (
        <>  
            {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
            <form onSubmit={ formSubmition }>
                <label >
                    Age
                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.age}</p>}
                    <input id="ageInp" type="number" name="age" onChange={ onFormChange } value={formData.age}  />
                </label>
                <label >
                    Name
                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.patientName}</p>}
                    <input id="nameInp" type="text" name="patientName" onChange={ onFormChange } value={formData.patientName} />
                </label>
                <label >
                    Symptoms
                    {formData.valMsgs.name && <p className="valMsgs">{formData.valMsgs.validationErrors.symptoms}</p>}
                    <textarea name="symptoms" onChange={ onFormChange } value={formData.symptoms} rows="7" cols="100"/>
                </label>
                <button id="formBtn" type="submit" >{btnText}</button>
            </form>
        </>
    )
}