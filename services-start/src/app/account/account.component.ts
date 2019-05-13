import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { logWarnings } from 'protractor/built/driverProviders';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // console.log('A server status changed, new status: ' + status);
    // this.loggingService.logStatusChange('A server status changed, new status: ' + status);
    this.accountsService.statusUpdate.emit(status);
  }
}
