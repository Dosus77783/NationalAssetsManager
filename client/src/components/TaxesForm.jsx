export default function TaxesForm( {formData, onFormChange, formSubmition} ){

    return(
        <>
            <main className="section-form-header rounded-lg drop-shadow-xl px-5 py-5 my-5 lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-4 col-start-2 col-span-4">
                
                {formData.valMsgs.name && <p id="valType">{formData.valMsgs.name} - Status: {formData.valMsgs.statusCode}</p>}
                <form onSubmit={ formSubmition } className="input-sliders-form in-sl-taxes webkit-moz-slider wk-mz-sl-taxes grid gap-4 px-10 [&>label>span]:text-lg [&>label]:mt-5 [&>label]:justify-self-center">

                    {formData.valMsgs.incomeTax && <p className="valMsgs">{formData.valMsgs.validationErrors.incomeTax}</p>}
                    <label htmlFor="incomeTaxForm" >
                        Income Tax:
                        <span className="ms-2 font-bold align-middle">{(formData.incomeTax * 100).toLocaleString()}%</span>
                    </label>
                    <input name="incomeTax" type="range" min="0" max="1" step="0.01" id="incomeTaxForm" 
                        onChange={ onFormChange } 
                        value={formData.incomeTax}
                        style={ {"--slider-fill-percent": `${formData.incomeTax * 100}%`} }
                    />

                    {formData.valMsgs.smallBusinessTax && <p className="valMsgs">{formData.valMsgs.validationErrors.smallBusinessTax}</p>}
                    <label htmlFor="smallBusinessTaxForm" >
                        Small Business Tax: 
                        <span className="ms-2 font-bold align-middle">{(formData.smallBusinessTax * 100).toLocaleString()}%</span>
                    </label>
                    <input name="smallBusinessTax" type="range"  min="0" max="1" step="0.01" id="smallBusinessTaxForm" 
                        onChange={ onFormChange } 
                        value={formData.smallBusinessTax}
                        style={ {"--slider-fill-percent": `${formData.smallBusinessTax * 100}%`} }
                    />
                    
                    {formData.valMsgs.largeCorpoTax && <p className="valMsgs">{formData.valMsgs.validationErrors.largeCorpoTax}</p>}
                    <label htmlFor="largeCorpoTaxForm" >
                        Large Corporation Tax: 
                        <span className="ms-2 font-bold align-middle">{(formData.largeCorpoTax * 100).toLocaleString()}%</span>
                    </label>
                    <input name="largeCorpoTax" type="range"  min="0" max="1" step="0.01" id="largeCorpoTaxForm" 
                        onChange={ onFormChange } 
                        value={formData.largeCorpoTax}
                        style={ {"--slider-fill-percent": `${formData.largeCorpoTax * 100}%`} }
                    />

                    {formData.valMsgs.salesTax && <p className="valMsgs">{formData.valMsgs.validationErrors.salesTax}</p>}
                    <label htmlFor="salesTaxForm" >
                        Sales Tax: 
                        <span className="ms-2 font-bold align-middle">{(formData.salesTax * 100).toLocaleString()}%</span>
                    </label>
                    <input name="salesTax" type="range"  min="0" max="1" step="0.01" id="salesTaxForm" 
                        onChange={ onFormChange } 
                        value={formData.salesTax} 
                        style={ {"--slider-fill-percent": `${formData.salesTax * 100}%`} }
                    />

                    {formData.valMsgs.socialSecurityTax && <p className="valMsgs">{formData.valMsgs.validationErrors.socialSecurityTax}</p>}
                    <label htmlFor="socialSecurityTaxForm" >
                        Social Security Tax: 
                        <span className="ms-2 font-bold align-middle">{(formData.socialSecurityTax * 100).toLocaleString()}%</span>
                    </label>
                    <input name="socialSecurityTax" type="range"  min="0" max="1" step="0.01" id="socialSecurityTaxForm" 
                        onChange={ onFormChange } 
                        value={formData.socialSecurityTax} 
                        style={ {"--slider-fill-percent": `${formData.socialSecurityTax * 100}%`} }
                    />

                    <button id="formBtn" type="submit" className="text-white/90 w-20 m-auto p-0.5 mt-10 text-lg shadow-lg active:scale-95 rounded bg-btnblack transition-colors hover:bg-slate-700 border border-slate-700 " >Save</button>
                </form>
            </main>
        </>
    )
}