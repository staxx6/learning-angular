import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService {

    constructor(private loggingService: LoggingService) {}

    accounts = [
    {
        name: 'Master Account',
        status: 'active'
    },
    {
        name: 'Testaccount',
        status: 'inactive'
    },
    {
        name: 'Hidden Account',
        status: 'unknown'
    }
    ];

    statusUpdate = new EventEmitter<string>();

    addAccount(name: string, status: string): void {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status + ' lul');
    }

    updateStatus(id: number, status: string): void {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status + ' lul');
    }
}