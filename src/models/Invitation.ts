export class Invitation {
  id: string;
  
  playerId: string;
  
  structureId: string;
  
  status: InvitationStatus;
  
  type: InvitationType;
  
  constructor(id: string, playerId: string, structureId: string, status: InvitationStatus, type: InvitationType) {
    this.id = id;
    this.playerId = playerId;
    this.structureId = structureId;
    this.status = status;
    this.type = type;
  }
}

enum InvitationStatus {
  PENDING,
  ACCEPTED,
  REFUSED
}

enum InvitationType {
  JOIN_TEAM,
  RECRUIT_PLAYER
}