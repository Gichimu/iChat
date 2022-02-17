const users = [];

function join(id, username){
    const user = {id, username};

    users.push(user);

    return user;
}

module.exports = {join};    