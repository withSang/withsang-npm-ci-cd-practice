"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["President"] = 0] = "President";
    Role[Role["VicePresident"] = 1] = "VicePresident";
    Role[Role["ServerAdmin"] = 2] = "ServerAdmin";
    Role[Role["Accountant"] = 3] = "Accountant";
    Role[Role["Member"] = 4] = "Member";
    Role[Role["Unknown"] = 5] = "Unknown";
})(Role || (Role = {}));
let a = Role;
function getRole(nickname) {
    switch (nickname) {
        case "platypus":
            return Role.President;
        case "dora":
            return Role.VicePresident;
        case "night":
            return Role.ServerAdmin;
        case "macintosh":
            return Role.Accountant;
        case "jeuk":
            return Role.Member;
        default:
            return Role.Unknown;
    }
}
exports.default = getRole;
