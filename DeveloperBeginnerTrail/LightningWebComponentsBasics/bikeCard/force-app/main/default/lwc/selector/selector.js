import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD];
export default class Selector extends LightningElement {
  selectedProductId;
  handleProductSelected(evt) {
    this.selectedProductId = evt.detail;
  }
  userId = Id;
  @wire(getRecord, { recordId: '$userId', fields })
  user;
  get name() {
    return getFieldValue(this.user.data, NAME_FIELD);
  }
}
/*
Line 1 imports the wire service from lwc.
Line 2 imports the adapterId and adapter-modules for getRecord and getFieldValue from lightning/uiRecordApi.
Line 3 imports the current User Id using the @salesforce module.
Line 4 imports the @salesforce schema for User.Name.
Line 12 uses the @wire decorator to use the wire service to call getRecord passing in the userId and getting the fields.
Line 13 sets user as the receiver for the @wire call.
Line 15 sets the name property to the value of the Name field.
*/