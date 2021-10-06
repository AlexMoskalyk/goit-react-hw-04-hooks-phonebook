import React from "react";
import Main from "./Components/main/Main";

const App = () => {
  return <Main />;
};

export default App;

// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import ContactList from "./contactList/ContactList";
// import Filter from "./filter/Filter";
// import Form from "./form/Form";
// import Section from "./section/Section";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", contactName: "Rosie Simpson", contactNumber: "459-12-56" },
//       { id: "id-2", contactName: "Hermione Kline", contactNumber: "443-89-12" },
//       { id: "id-3", contactName: "Eden Clements", contactNumber: "645-17-79" },
//       { id: "id-4", contactName: "Annie Copeland", contactNumber: "227-91-26" },
//     ],

//     filter: "",
//   };

//   addContact = (newContact) => {
//     this.setState((prevState) => ({
//       contacts: [
//         ...prevState.contacts,
//         {
//           id: uuidv4(),
//           ...newContact,
//         },
//       ],
//       contactName: "",
//       contactNumber: "",
//     }));
//   };

//   setFilterInState = (e) => {
//     const { value } = e.target;
//     this.setState({ filter: value });
//   };

//   filtredContacts = () =>
//     this.state.contacts.filter((contact) =>
//       contact.contactName
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase())
//     );

//   render() {
//     return (
//       <>
//         <Section title="Add contact">
//           <Form addContact={this.addContact} />
//         </Section>
//         <Section title="Find contact">
//           <Filter
//             setFilterInState={this.setFilterInState}
//             filter={this.state.filter}
//           />
//         </Section>
//         <Section title="Contact list">
//           <ContactList filtredContacts={this.filtredContacts} />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
