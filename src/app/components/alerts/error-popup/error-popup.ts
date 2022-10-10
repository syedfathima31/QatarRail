import { Component, ViewEncapsulation, Inject, TemplateRef} from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
 
@Component({
	selector: 'error-popup',
	templateUrl: './error-popup.html',
	styleUrls: ['./error-popup.scss'],
	encapsulation: ViewEncapsulation.None
  })

export class ErrorPopupComponent {
  modalRef?: BsModalRef;
  message?: string;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>,message:string) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }

  showMessage(message:string): void {
    console.log('message',message)
    this.message = message;
  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  closeModal(){
    this.modalService.hide();
  }
}