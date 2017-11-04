// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { addCard } from '../../actions/cards';


// class NewCardForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       titleInput: '',
//       priorityInput: '',
//       statusInput: '',
//       createdByInput: '',
//       assignedToInput: ''
//     }
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     let newCard = {
//       title: this.state.titleInput,
//       priority: this.state.priorityInput,
//       status: this.state.statusInput,
//       createdBy: this.state.createdByInput,
//       assignedTo: this.state.assignedToInput
//     }

//     this.props.addCard(newCard);

//     this.setState(
//     {
//       cardTitle: '',
//       cardPriority: '',
//       cardStatus: '',
//       cardCreatedBy: '',
//       cardAssignedTo: ''
//     }
//     );
//   }

//   handleChangeTitle(event) {
//     this.setState({
//       titleInput: event.target.value
//     });
//   }

//   handleChangePriority(event) {
//     this.setState({
//       priorityInput: event.target.value
//     });
//   }

//   handleChangeStatus(event) {
//     this.setState({
//       statusInput: event.target.value
//     });
//   }

//   handleChangeCreatedBy(event) {
//     this.setState({
//       createdByInput: event.target.value
//     });
//   }

//   handleChangeAssignedTo(event) {
//     this.setState({
//       assignedToInput: event.target.value
//     })
//   }

//   render() {
//     console.log(this.props);
//     return(
//       <div>
//         <form onSubmit={this.handleSubmit.bind(this)}>
//           <input type="text" placeholder="Title" onChange={this.handleChangeTitle.bind(this)} />
//           <input type="text" placeholder="Priority" onChange={this.handleChangePriority.bind(this)} />
//           <input type="text" placeholder="Status" onChange={this.handleChangeStatus.bind(this)} />
//           <input type="text" placeholder="Created By" onChange={this.handleChangeCreatedBy.bind(this)} />
//           <input type="text" placeholder="Assigned To" onChange={this.handleChangeAssignedTo.bind(this)} />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }


// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     addCard: (card) => {
//       dispatch(addCard(card))
//     }
//   };
// }

// const ConnectedNewCardForm = connect (
//   null,
//   mapDispatchToProps
// )(NewCardForm);

// export default ConnectedNewCardForm;