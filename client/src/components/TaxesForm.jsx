
export default function TaxesForm( {formData, onFormChange, formSubmition} ){

    return(
        <>
            <div className="border border-dark border 2">
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}

                <form onSubmit={ formSubmition } className="">

                    {formData.valMsgs.incomeTax && <p className="valMsgs">{formData.valMsgs.validationErrors.incomeTax}</p>}
                    <label htmlFor="incomeTaxForm" className="form-label">Income Tax: {(formData.incomeTax * 100).toLocaleString()}%</label>
                    <input name="incomeTax" type="range" className="form-range" min="0" max="1" step="0.01" id="incomeTaxForm" onChange={ onFormChange } value={formData.incomeTax} />

                    {formData.valMsgs.smallBusinessTax && <p className="valMsgs">{formData.valMsgs.validationErrors.smallBusinessTax}</p>}
                    <label htmlFor="smallBusinessTaxForm" className="form-label">Small Business Tax: {(formData.smallBusinessTax * 100).toLocaleString()}%</label>
                    <input name="smallBusinessTax" type="range" className="form-range" min="0" max="1" step="0.01" id="smallBusinessTaxForm" onChange={ onFormChange } value={formData.smallBusinessTax} />
                    
                    {formData.valMsgs.largeCorpoTax && <p className="valMsgs">{formData.valMsgs.validationErrors.largeCorpoTax}</p>}
                    <label htmlFor="largeCorpoTaxForm" className="form-label">Large Corporation Tax: {(formData.largeCorpoTax * 100).toLocaleString()}%</label>
                    <input name="largeCorpoTax" type="range" className="form-range" min="0" max="1" step="0.01" id="largeCorpoTaxForm" onChange={ onFormChange } value={formData.largeCorpoTax} />

                    {formData.valMsgs.salesTax && <p className="valMsgs">{formData.valMsgs.validationErrors.salesTax}</p>}
                    <label htmlFor="salesTaxForm" className="form-label">Sales Tax: {(formData.salesTax * 100).toLocaleString()}%</label>
                    <input name="salesTax" type="range" className="form-range" min="0" max="1" step="0.01" id="salesTaxForm" onChange={ onFormChange } value={formData.salesTax} />

                    {formData.valMsgs.socialSecurityTax && <p className="valMsgs">{formData.valMsgs.validationErrors.socialSecurityTax}</p>}
                    <label htmlFor="socialSecurityTaxForm" className="form-label">Social Security Tax: {(formData.socialSecurityTax * 100).toLocaleString()}%</label>
                    <input name="socialSecurityTax" type="range" className="form-range" min="0" max="1" step="0.01" id="socialSecurityTaxForm" onChange={ onFormChange } value={formData.socialSecurityTax} />

                    <button id="formBtn" type="submit" >Save</button>
                </form>
            </div>
        </>
    )
}