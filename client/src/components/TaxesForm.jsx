
export default function TaxesForm( {formData, onFormChange, formSubmition} ){

    return(
        <>
            <div className="border border-dark border-4 rounded shadow-lg p-5 bg-primary bg-opacity-50 bg-gradient">
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}

                <form onSubmit={ formSubmition } className="fw-bold fs-4">

                    {formData.valMsgs.incomeTax && <p className="valMsgs">{formData.valMsgs.validationErrors.incomeTax}</p>}
                    <label htmlFor="incomeTaxForm" className="form-label me-2">Income Tax:</label>
                    <span className="text-light">{(formData.incomeTax * 100).toLocaleString()}%</span>
                    <input name="incomeTax" type="range" className="form-range" min="0" max="1" step="0.01" id="incomeTaxForm" onChange={ onFormChange } value={formData.incomeTax} />

                    {formData.valMsgs.smallBusinessTax && <p className="valMsgs">{formData.valMsgs.validationErrors.smallBusinessTax}</p>}
                    <label htmlFor="smallBusinessTaxForm" className="form-label me-2">Small Business Tax: </label>
                    <span className="text-light">{(formData.smallBusinessTax * 100).toLocaleString()}%</span>
                    <input name="smallBusinessTax" type="range" className="form-range" min="0" max="1" step="0.01" id="smallBusinessTaxForm" onChange={ onFormChange } value={formData.smallBusinessTax} />
                    
                    {formData.valMsgs.largeCorpoTax && <p className="valMsgs">{formData.valMsgs.validationErrors.largeCorpoTax}</p>}
                    <label htmlFor="largeCorpoTaxForm" className="form-label me-2">Large Corporation Tax: </label>
                    <span className="text-light">{(formData.largeCorpoTax * 100).toLocaleString()}%</span>
                    <input name="largeCorpoTax" type="range" className="form-range" min="0" max="1" step="0.01" id="largeCorpoTaxForm" onChange={ onFormChange } value={formData.largeCorpoTax} />

                    {formData.valMsgs.salesTax && <p className="valMsgs">{formData.valMsgs.validationErrors.salesTax}</p>}
                    <label htmlFor="salesTaxForm" className="form-label me-2">Sales Tax: </label>
                    <span className="text-light">{(formData.salesTax * 100).toLocaleString()}%</span>
                    <input name="salesTax" type="range" className="form-range" min="0" max="1" step="0.01" id="salesTaxForm" onChange={ onFormChange } value={formData.salesTax} />

                    {formData.valMsgs.socialSecurityTax && <p className="valMsgs">{formData.valMsgs.validationErrors.socialSecurityTax}</p>}
                    <label htmlFor="socialSecurityTaxForm" className="form-label me-2">Social Security Tax: </label>
                    <span className="text-light">{(formData.socialSecurityTax * 100).toLocaleString()}%</span>
                    <input name="socialSecurityTax" type="range" className="form-range" min="0" max="1" step="0.01" id="socialSecurityTaxForm" onChange={ onFormChange } value={formData.socialSecurityTax} />

                    <button id="formBtn" type="submit" className="mt-2 btn btn-lg btn-success shadow-sm" >Save</button>
                </form>
            </div>
        </>
    )
}