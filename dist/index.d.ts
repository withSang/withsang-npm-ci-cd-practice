declare enum Role {
    President = 0,
    VicePresident = 1,
    ServerAdmin = 2,
    Accountant = 3,
    Member = 4,
    Unknown = 5
}
export default function getRole(nickname: string): Role;
export {};
