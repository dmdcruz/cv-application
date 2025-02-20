function ExperienceForm() {
    return (
        <div className="ExperienceForm">
            <h2 className="heading"> Experience</h2>
            <input 
                type="text"
                className="InputText"
                placeholder="Position"/>
            <input 
                type="text"
                className="InputText"
                placeholder="Company"/>
            <input 
                type="date"
                className="InputDate"
                placeholder="Start date of emploment"/>
            <input 
                type="date"
                className="InputDate"
                placeholder="End date of emploment"/>
            <input 
                type="text"
                className="InputText"
                placeholder="Main responsabilities of your job"/>
            <button className="Btn">
                Add
            </button>
        </div>
    )
}

export default ExperienceForm;