
export default function SpendingForm( {formData, onFormChange, formSubmition} ){
    const tRev = formData.treasury ? formData.treasury.taxRevenue.total : 0 ;

    return(
        <>
            <div className="border border-dark border 2">
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}

                <form onSubmit={ formSubmition } className="">

                    {formData.valMsgs.healthcare && <p className="valMsgs">{formData.valMsgs.validationErrors.healthcare}</p>}
                    <label htmlFor="healthcareForm" className="form-label">Healtcare: {formData.healthcare.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</label>
                    <input name="healthcare" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="healthcareForm" onChange={ onFormChange } value={formData.healthcare} />

                    {formData.valMsgs.education && <p className="valMsgs">{formData.valMsgs.validationErrors.education}</p>}
                    <label htmlFor="educationForm" className="form-label">Education: {formData.education.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</label>
                    <input name="education" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="educationForm" onChange={ onFormChange } value={formData.education} />

                    {formData.valMsgs.infrastructure && <p className="valMsgs">{formData.valMsgs.validationErrors.infrastructure}</p>}
                    <label htmlFor="infrastructureForm" className="form-label">Infrasctructure: {formData.infrastructure.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</label>
                    <input name="infrastructure" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="infrastructureForm" onChange={ onFormChange } value={formData.infrastructure} />

                    {formData.valMsgs.familySubsidy && <p className="valMsgs">{formData.valMsgs.validationErrors.familySubsidy}</p>}
                    <label htmlFor="familySubsidyForm" className="form-label">Family Subsidy: {formData.familySubsidy.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</label>
                    <input name="familySubsidy" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="familySubsidyForm" onChange={ onFormChange } value={formData.familySubsidy} />

                    {formData.valMsgs.socialAssistance && <p className="valMsgs">{formData.valMsgs.validationErrors.socialAssistance}</p>}
                    <label htmlFor="socialAssistanceForm" className="form-label">Social Assistance: {formData.socialAssistance.toLocaleString( 'en-US', { maximumFractionDigits: 2 } )}</label>
                    <input name="socialAssistance" type="range" className="form-range" min="0" max={tRev * 1.5} step={(tRev*1.5)/ 1000} id="socialAssistanceForm" onChange={ onFormChange } value={formData.socialAssistance} />

                    <button id="formBtn" type="submit" >Save</button>
                </form>
            </div>
        </>
    )
}