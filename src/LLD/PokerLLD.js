const votingTypes = ["fibonnaci"];
let pokerCount = 1;
function Poker (votingType, sprintDetails, memberDetails){
    this.votingTypes = votingTypes;
    this.votingType = votingType;
    this.pokerId = `POKER-${pokerCount++}`;
    let members = [memberDetails];
    let sprint = sprintDetails;
    this.joinPoker = (memberDetails) => {
        members.push(memberDetails);
    }
    this.leavePoker = (memberDetails) => {
        members =  members.filter((m) => m.memberEmail !== memberDetails.memberEmail)
    }
    this.getDetails = () => {
        return {
            pokerId: this.pokerId,
            votingType: this.votingType,
            members,
            sprint
        }
    }
}