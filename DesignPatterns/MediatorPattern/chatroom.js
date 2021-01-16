function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function (message, toMember) {
        this.chatroom.send(message, this, toMember);
    },
    receive: function (message, fromMember) {
        console.log(`${fromMember.name} to ${this.name} : ${message}`)
    }
}
function ChatRoom() {
    this.members = {};
}
ChatRoom.prototype = {
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
        console.log('Members', this.members);
        console.log('member', member);
    },
    send: function(message, fromMember, toMember){
        toMember.receive(message, fromMember);
    }
}

const chat = new ChatRoom();

const prabu = new Member('Prabu');
const snow = new Member('Snow');
const theoron = new Member('Theoron');

chat.addMember(prabu);
chat.addMember(snow);
chat.addMember(theoron);

prabu.send('Hello', theoron);
snow.send('Hey Prabu', prabu);
theoron.send('Hello', snow);

prabu.receive('fefefe', theoron);