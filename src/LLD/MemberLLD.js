// Members are created using factory Design Pattern
// Admin is created using singletion Design Pattern

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
const memberFac = new MemberFactory();
const members = [];
members.push(memberFac.setMemberDetails("Chesla","cheslakar019@gmail.com","ADMIN").getDetails());
members.push(memberFac.setMemberDetails("Elsa","elsa@gmail.com","VOTER").getDetails());
members.push(memberFac.setMemberDetails("Anna","anna@gmail.com","SPECTATOR").getDetails());
members.push(memberFac.setMemberDetails("Olaf","olaf@gmail.com","ADMIN").getDetails());
console.log("members",members);




