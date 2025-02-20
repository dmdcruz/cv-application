function EducationForm() {
    return(
        <div className="EducationForm">
            <h2 className="heading"> Education</h2>
            <input 
                type="text"
                className="InputText"
                placeholder="School"/>
            <input 
                type="text"
                className="InputText"
                placeholder="Degree"/>
            <button className="Btn">
                Add
            </button>
        </div>
    )
}

export default EducationForm;