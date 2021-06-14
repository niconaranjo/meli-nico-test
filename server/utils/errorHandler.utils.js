class CustomRequestError extends Error {
  constructor(message, status, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomRequestError)
    }

    this.name = 'CustomRequestError',
    this.message_ = message;
    this.status_ = status;
  }

  get status(){
    return this.status_;
  }

  get message() {
    return this.message_
  }

  get errorObject() {
    return {
      message: this.message_,
      status: this.status_,
    };
  }
}

exports.CustomRequestError = CustomRequestError;