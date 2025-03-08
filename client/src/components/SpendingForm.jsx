
export default function SpendingForm( {formData, onFormChange, formSubmition} ){
    const tRev = formData.treasury ? formData.treasury.taxRevenue.total : 0 ;

    return(
        <>
            <div className="border border-dark border-4 rounded shadow-lg p-5 bg-primary bg-opacity-50 bg-gradient">
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}

                <form onSubmit={ formSubmition } className="fw-bold fs-4">

                    {formData.valMsgs.healthcare && <p className="valMsgs">{formData.valMsgs.validationErrors.healthcare}</p>}
                    <label htmlFor="healthcareForm" className="form-label me-2">Healtcare: </label>
                    <span className="text-light" >${formData.healthcare.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</span>
                    <input name="healthcare" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="healthcareForm" onChange={ onFormChange } value={formData.healthcare} />

                    {formData.valMsgs.education && <p className="valMsgs">{formData.valMsgs.validationErrors.education}</p>}
                    <label htmlFor="educationForm" className="form-label me-2">Education: </label>
                    <span className="text-light">${formData.education.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</span>
                    <input name="education" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="educationForm" onChange={ onFormChange } value={formData.education} />

                    {formData.valMsgs.infrastructure && <p className="valMsgs">{formData.valMsgs.validationErrors.infrastructure}</p>}
                    <label htmlFor="infrastructureForm" className="form-label me-2">Infrasctructure: </label>
                    <span className="text-light" >${formData.infrastructure.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</span>
                    <input name="infrastructure" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="infrastructureForm" onChange={ onFormChange } value={formData.infrastructure} />

                    {formData.valMsgs.familySubsidy && <p className="valMsgs">{formData.valMsgs.validationErrors.familySubsidy}</p>}
                    <label htmlFor="familySubsidyForm" className="form-label me-2">Family Subsidy: </label>
                    <span className="text-light" >${formData.familySubsidy.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</span>
                    <input name="familySubsidy" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="familySubsidyForm" onChange={ onFormChange } value={formData.familySubsidy} />

                    {formData.valMsgs.socialAssistance && <p className="valMsgs">{formData.valMsgs.validationErrors.socialAssistance}</p>}
                    <label htmlFor="socialAssistanceForm" className="form-label me-2">Social Assistance: </label>
                    <span className="text-light" >${formData.socialAssistance.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</span>
                    <input name="socialAssistance" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="socialAssistanceForm" onChange={ onFormChange } value={formData.socialAssistance} />

                    <button id="formBtn" type="submit" className="mt-2 btn btn-lg btn-success shadow-sm" >Save</button>
                </form>
            </div>
        </>
    )
}