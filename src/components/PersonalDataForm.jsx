function PersonalDataForm() {

    return(
        <div className="PersonalDataForm">
            <h2 className="heading"> Personal Data</h2>
            <input 
                type="text"
                className="InputText"
                placeholder="First Name"/>
            <input 
                type="text"
                className="InputText"
                placeholder="Last Name"/>
            <input 
                type="text"
                className="InputText"
                placeholder="Email"/>
            <input 
                type="text"
                className="InputText"
                placeholder="Phone Number"/>
        </div>
    )
}

export default PersonalDataForm;