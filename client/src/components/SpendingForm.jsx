import { numberMagnitude } from '../services/util'

export default function SpendingForm( {formData, onFormChange, formSubmition} ){
    

    const allowedOverBudget = 1.5;
    const tRev = formData.treasury ? formData.treasury.taxRevenue.total : 0 ;
    const tRevOverValue = tRev * allowedOverBudget;


    return(
        <>
            <main className="section-form-header rounded-lg drop-shadow-xl px-5 py-5 my-5 lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-4 col-start-2 col-span-4">
            
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <form onSubmit={ formSubmition } className="input-sliders-form in-sl-spending webkit-moz-slider wk-mz-sl-spending grid px-10 [&>label>span]:text-lg [&>label]:my-5 [&>label]:text-center [&>label>p]:text-xs">

                    {formData.valMsgs.healthcare && <p >{formData.valMsgs.validationErrors.healthcare}</p>}
                    <label htmlFor="healthcareForm" >
                        Healtcare: 
                        <span className="ms-2 font-bold align-middle">
                            ${formData.healthcare.toLocaleString( 'en-US', { maximumFractionDigits:0 } )} {numberMagnitude(formData.healthcare)}
                        </span>
                        <p>Percentage of Total Tax Revenue: {(formData.healthcare/tRev)*100 | 0}% </p>
                    </label>
                    <input name="healthcare" type="range" className="form-range" min="0" id="healthcareForm" 
                        max={tRevOverValue} 
                        step={(tRevOverValue)/ 1000}
                        onChange={ onFormChange } 
                        value={formData.healthcare} 
                        style={ {"--slider-fill-percent": `${(formData.healthcare / (tRevOverValue)) * 100}%`} }
                    />

                    {formData.valMsgs.education && <p >{formData.valMsgs.validationErrors.education}</p>}
                    <label htmlFor="educationForm" >
                        Education: 
                        <span className="ms-2 font-bold align-middle">
                            ${formData.education.toLocaleString( 'en-US', { maximumFractionDigits:0 } )} {numberMagnitude(formData.education)}
                        </span>
                        <p>Percentage of Total Tax Revenue: {(formData.education/tRev)*100 | 0}% </p>
                    </label>
                    <input name="education" type="range" className="form-range" min="0" id="educationForm" 
                        max={tRevOverValue} 
                        step={(tRevOverValue)/ 1000} 
                        onChange={ onFormChange } 
                        value={formData.education} 
                        style={ {"--slider-fill-percent": `${(formData.education / (tRevOverValue)) * 100}%`} }
                    />

                    {formData.valMsgs.infrastructure && <p >{formData.valMsgs.validationErrors.infrastructure}</p>}
                    <label htmlFor="infrastructureForm" >
                        Infrasctructure: 
                        <span className="ms-2 font-bold align-middle">
                            ${formData.infrastructure.toLocaleString( 'en-US', { maximumFractionDigits:0 } )} {numberMagnitude(formData.infrastructure)}
                        </span>
                        <p>Percentage of Total Tax Revenue: {(formData.infrastructure/tRev)*100 | 0}% </p>
                    </label>
                    <input name="infrastructure" type="range" className="form-range" min="0" id="infrastructureForm" 
                        max={tRevOverValue} 
                        step={(tRevOverValue)/ 1000} 
                        onChange={ onFormChange } 
                        value={formData.infrastructure} 
                        style={ {"--slider-fill-percent": `${(formData.infrastructure / (tRevOverValue)) * 100}%`} }
                    />

                    {formData.valMsgs.familySubsidy && <p >{formData.valMsgs.validationErrors.familySubsidy}</p>}
                    <label htmlFor="familySubsidyForm" >
                        Family Subsidy: 
                        <span className="ms-2 font-bold align-middle">
                            ${formData.familySubsidy.toLocaleString( 'en-US', { maximumFractionDigits:0 } )} {numberMagnitude(formData.familySubsidy)}
                        </span>
                        <p>Percentage of Total Tax Revenue: {(formData.familySubsidy/tRev)*100 | 0}% </p>
                    </label>
                    <input name="familySubsidy" type="range" className="form-range" min="0" id="familySubsidyForm" 
                        max={tRevOverValue} 
                        step={(tRevOverValue)/ 1000} 
                        onChange={ onFormChange } 
                        value={formData.familySubsidy} 
                        style={ {"--slider-fill-percent": `${(formData.familySubsidy / (tRevOverValue)) * 100}%`} }
                    />

                    {formData.valMsgs.socialAssistance && <p >{formData.valMsgs.validationErrors.socialAssistance}</p>}
                    <label htmlFor="socialAssistanceForm" >
                        Social Assistance: 
                        <span className="ms-2 font-bold align-middle">
                            ${formData.socialAssistance.toLocaleString( 'en-US', { maximumFractionDigits:0 } )} {numberMagnitude(formData.familySubsidy)}
                        </span>
                        <p>Percentage of Total Tax Revenue: {(formData.socialAssistance/tRev)*100 | 0}% </p>
                    </label>
                    <input name="socialAssistance" type="range" className="form-range" min="0" id="socialAssistanceForm" 
                        max={tRevOverValue} 
                        step={(tRevOverValue)/ 1000} 
                        onChange={ onFormChange } 
                        value={formData.socialAssistance} 
                        style={ {"--slider-fill-percent": `${(formData.socialAssistance / (tRevOverValue)) * 100}%`} }
                    />

                    <button id="formBtn" type="submit" className="text-white/90 w-20 m-auto p-0.5 mt-10 text-lg shadow-lg active:scale-95 rounded bg-btnblack transition-colors hover:bg-slate-700 border border-slate-700 " >Save</button>
                </form>
            </main>
        </>
    )
}