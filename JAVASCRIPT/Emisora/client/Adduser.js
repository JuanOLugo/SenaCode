export function addUserOnList( user, vector = []) {
    if (!user) return "ERROR: No user"
    if (vector.length > 6) return "ERROR: To much clients"
    const verifyUserExist = vector.find(userV => userV.id === user.id)
    if(verifyUserExist) return "ERROR: User already exists"
    vector.push(user)
    console.log(vector)
}


