import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import contacts from "../Contact";
import Avatar from "./Avatar";
import notes from "../Notes";

//Mapping the card
function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

//Mapping hunt title and context
// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       context={noteItem.context}
//     />
//   );
// }

function App() {
  console.log(contacts);
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          context={noteItem.context}
        />
      ))}

      <div className="propsCard">
        <h1 className="heading">My Contacts</h1>
        <Avatar img="https://scontent.fjed6-2.fna.fbcdn.net/v/t39.30808-6/442413524_25482742688041036_6520295334809407634_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hb1msXNXRnEQ7kNvgHtw4PA&_nc_ht=scontent.fjed6-2.fna&oh=00_AYCifB52Nl1W42TwNblxPF1dkWJaB6Wj57r22FrJUtPhVA&oe=6653AD76" />
        {contacts.map(createCard)}

        {/* <Card
          name={contacts[0].name}
          img={contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
        /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
