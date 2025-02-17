import { KeyParams } from '@standardnotes/auth'

export interface AuthHttpServiceInterface {
  getUserKeyParams(dto: { email?: string, uuid?: string, authenticated: boolean }): Promise<KeyParams>
  removeUserMFA(dto: {
    uuid: string,
    userUuid: string,
    updatedAt: number
  }): Promise<void>
  saveUserMFA(dto: {
    uuid: string,
    userUuid: string,
    encodedMfaSecret: string,
    createdAt: number,
    updatedAt: number
  }): Promise<string>
  getUserMFA(userUuid: string, lastSyncTime?: number): Promise<Array<{
    uuid: string,
    name: string,
    value: string | null,
    createdAt: number,
    updatedAt: number
  }>>
}
