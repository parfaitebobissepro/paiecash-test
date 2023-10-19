import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dailog',
  templateUrl: './confirm-dailog.component.html',
  styleUrls: ['./confirm-dailog.component.scss']
})
export class ConfirmDailogComponent {
  @Input() titleMessage:string = 'Deactivate account';
  @Input() confirmMessage:string = 'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.';
  @Input() actionLabel:string = 'Deactivate';
  @Output() onConfirm = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter<boolean>();

  
  onConfirmClick() {
    this.onConfirm.emit(true);
  }

  onCancelClick() {
    this.onCancel.emit(false);
  }
}
