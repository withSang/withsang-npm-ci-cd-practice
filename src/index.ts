enum Role {
  President,
  VicePresident,
  ServerAdmin,
  Accountant,
  Member,
  Unknown,
}

export default function getRole(nickname: string): Role {
  switch (nickname) {
    case 'platypus':
      return Role.President;
    case 'dora':
      return Role.VicePresident;
    case 'night':
      return Role.ServerAdmin;
    case 'macintosh':
      return Role.Accountant;
    case 'jeuk':
      return Role.Member;
    default:
      return Role.Unknown;
  }
}
