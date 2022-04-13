export interface IJWT_PAYLOAD {
  userId: string;
  hubId: string;
  userType: string;
  roleAccessId: string;
  isDevice?: boolean;
}

export interface IJWT_PAYLOAD_REFRESH {
  userId: string;
}
