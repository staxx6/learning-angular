export class LoggingService {
    logStatusChange(status: string) {
        console.log('A servers status changed, new status: ' + status);
    }
}