import { IsNotBlank } from "src/core/pipes/is-not-bank.pipe";

export class GetTokenRequest {
  @IsNotBlank()
  readonly code: string;
}

export class PostAccessTokenRequest {
  @IsNotBlank()
  readonly accessToken: string;
}

export class PostRefreshTokenRequest {
  @IsNotBlank()
  readonly refreshToken: string;
}
