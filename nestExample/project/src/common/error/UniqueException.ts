interface UniqueDetail {
    code: number;
    status: number;
    msg: string;
}
export class UniqueException extends Error {
    messageCode: number;
    httpStatus: number;
    errorMsg: string;
    constructor(detail: UniqueDetail) {
        super();
        const { code, status, msg } = detail;
        this.httpStatus = status;
        this.messageCode = code;
        this.errorMsg = msg;
    }
    getMessageCode() {
        return this.messageCode;
    }
    getHttpStatus() {
        return this.httpStatus;
    }
    getErrorMsg() {
        return this.errorMsg;
    }
}
