function Poker(){
    this.members = [];
    this.votingTypes = [];
    this.pokerName = "";
    this.votingType = "";

}
// Members are created using factory Design Pattern
// Admin is created using singletion Design Pattern

function Voter(name, email){
    this.memberName = name;
    this.memberEmail = email;
    this.memberType= "voter";
}
function Spectator(name, email){
    this.memberName = name;
    this.memberEmail = email;
    this.memberType= "spectator";

}
function Admin(){
    let admin = null;
    function createAdmin(name, email){
        this.memberName = name;
        this.memberEmail = email;
        this.memberType= "admin";
    }
    return function(name, email){
        if(!admin){
           admin = new createAdmin(name, email);
           return admin;
        }else{
            return admin;
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
const memberFac = new MemberFactory();
const members = [];
members.push(memberFac.setMemberDetails("Chesla","cheslakar019@gmail.com","ADMIN"));
members.push(memberFac.setMemberDetails("Elsa","elsa@gmail.com","VOTER"));
members.push(memberFac.setMemberDetails("Anna","anna@gmail.com","SPECTATOR"));
members.push(memberFac.setMemberDetails("Olaf","olaf@gmail.com","ADMIN"));
console.log("members",members);


