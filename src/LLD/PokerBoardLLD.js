function Voter(name, email){
    this.memberName = name;
    this.memberEmail = email;
    this.memberType= "voter";
    this.getDetails = () => {
        return {
            memberName: this.memberName,
            memberEmail: this.memberEmail,
            memberType: this.memberType
        }
    }
}
function Spectator(name, email){
    this.memberName = name;
    this.memberEmail = email;
    this.memberType= "spectator";
    this.getDetails = () => {
        return {
            memberName: this.memberName,
            memberEmail: this.memberEmail,
            memberType: this.memberType
        }
    }
}
function Admin(){
    let admin = null;
    function createAdmin(name, email){
        this.memberName = name;
        this.memberEmail = email;
        this.memberType= "admin";
        this.getDetails = () => {
            return {
                memberName: this.memberName,
                memberEmail: this.memberEmail,
                memberType: this.memberType
            }
        }
    }
    return function(name, email){
        if(!admin){
           admin = new createAdmin(name, email);
           return admin;
        }else{
            return null;
        }
    }
}

function MemberFactory(){
   const admin = Admin();
   this.setMemberDetails = (memberName, memberEmail, memberType ) => {
        switch(memberType){
            case "VOTER" : return new Voter(memberName, memberEmail);
            case "SPECTATOR" : return new Spectator(memberName, memberEmail);
            case "ADMIN" : return admin(memberName, memberEmail);
            default: return  null;
        }
   }
}
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


function PokerBoardService () {
    let pokerBoards = [];
    this.createPokerBoard = (pokerDetails) => {
        pokerBoards.push(pokerDetails);
    }
    this.joinPokerBoard = (pokerId, memberDetails) => {
        let poker = pokerBoards.find((p)=> p.pokerId === pokerId);
        poker.joinPoker(memberDetails);
        return {
            leave: () => {
                poker.leavePoker(memberDetails);
            }
        };
    }
    this.endPoker = (pokerId) => {
        pokerBoards = pokerBoards.filter((p) => p.pokerId !== pokerId);
    }
    this.getPokerBoardDetails = () => {
        return pokerBoards;
    }
}

const pokerBoard = new PokerBoardService();

const memberFac = new MemberFactory();
var member = memberFac.setMemberDetails("Chesla","cheslakar019@gmail.com","ADMIN").getDetails();

const sprintDetails = new Sprint("POKER-SP-1","CREATING LLD FOR PLANNING POKER");
const sprint = sprintDetails.getDetails();

const pokerDetails = new Poker("fibonnaci", sprint, member);
const poker = pokerDetails.getDetails();

pokerBoard.createPokerBoard(pokerDetails);

member = memberFac.setMemberDetails("Elsa","elsa@gmail.com","VOTER").getDetails();
const elsa = pokerBoard.joinPokerBoard( poker.pokerId, member);
console.log("After Elsa joined", pokerDetails.getDetails());
elsa.leave();
console.log("After Elsa left", pokerDetails.getDetails());

member = memberFac.setMemberDetails("Elsa","elsa@gmail.com","VOTER").getDetails();
const elsa1 = pokerBoard.joinPokerBoard( poker.pokerId, member);
member = memberFac.setMemberDetails("Anna","anna@gmail.com","SPECTATOR").getDetails();
const anna = pokerBoard.joinPokerBoard( poker.pokerId, member);
member = memberFac.setMemberDetails("Olaf","olaf@gmail.com","ADMIN") && memberFac.setMemberDetails("Olaf","olaf@gmail.com","ADMIN").getDetails();
const olaf = pokerBoard.joinPokerBoard( poker.pokerId, member);
console.log("Final Members", pokerDetails.getDetails());
console.log("getPokerBoardDetails 3",pokerBoard.getPokerBoardDetails());
