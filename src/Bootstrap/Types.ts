const TYPES = {
  DBConnection: Symbol.for('DBConnection'),
  Logger: Symbol.for('Logger'),
  // Repositories
  RevisionRepository: Symbol.for('RevisionRepository'),
  UserRepository: Symbol.for('UserRepository'),
  SessionRepository: Symbol.for('SessionRepository'),
  ItemRepository: Symbol.for('ItemRepository'),
  // Middleware
  AuthMiddleware: Symbol.for('AuthMiddleware'),
  LockMiddleware: Symbol.for('LockMiddleware'),
  SessionMiddleware: Symbol.for('SessionMiddleware'),
  // Projectors
  RevisionProjector: Symbol.for('RevisionProjector'),
  SessionProjector: Symbol.for('SessionProjector'),
  UserProjector: Symbol.for('UserProjector'),
  // env vars
  JWT_SECRET: Symbol.for('JWT_SECRET'),
  LEGACY_JWT_SECRET: Symbol.for('LEGACY_JWT_SECRET'),
  ACCESS_TOKEN_AGE: Symbol.for('ACCESS_TOKEN_AGE'),
  REFRESH_TOKEN_AGE: Symbol.for('REFRESH_TOKEN_AGE'),
  MAX_LOGIN_ATTEMPTS: Symbol.for('MAX_LOGIN_ATTEMPTS'),
  FAILED_LOGIN_LOCKOUT: Symbol.for('FAILED_LOGIN_LOCKOUT'),
  // use cases
  AuthenticateUser: Symbol.for('AuthenticateUser'),
  RefreshSessionToken: Symbol.for('RefreshSessionToken'),
  VerifyMFA: Symbol.for('VerifyMFA'),
  SignIn: Symbol.for('SignIn'),
  ClearLoginAttempts: Symbol.for('ClearLoginAttempts'),
  IncreaseLoginAttempts: Symbol.for('IncreaseLoginAttempts'),
  // Services
  DeviceDetector: Symbol.for('DeviceDetector'),
  SessionService: Symbol.for('SessionService'),
  ContentDecoder: Symbol.for('ContentDecoder'),
  AuthResponseFactory20161215: Symbol.for('AuthResponseFactory20161215'),
  AuthResponseFactory20190520: Symbol.for('AuthResponseFactory20190520'),
  AuthResponseFactory20200115: Symbol.for('AuthResponseFactory20200115'),
  AuthResponseFactoryResolver: Symbol.for('AuthResponseFactoryResolver'),
  KeyParamsFactory: Symbol.for('KeyParamsFactory'),
}

export default TYPES
