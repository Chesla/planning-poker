function Sprint (sprintName, sprintDescription){
    this.sprintName = sprintName;
    this.sprintDescription = sprintDescription;
    this.getDetails = () => {
        return {
            sprintName: this.sprintName,
            sprintDescription: this.sprintDescription
        }
    }
}
const sprint = new Sprint("POKER-SP-1","CREATING LLD FOR PLANNING POKER");
console.log("sprint",sprint.getDetails());