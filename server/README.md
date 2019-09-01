# Summary
The server files are largely spread out between 15 main files:
* server.js
* data.json
* checkUser.js
* fetchUser.js
* fetchAllUsers.js
* addUser.js
* deleteUser.js
* fetchAllGroups.js
* addGroup.js
* deletegroup.js
* addUsersToGroup.js
* deleteUsersToGroup.js
* fetchAllChannels.js
* addChannel.js
* deleteChannel.js
* addUsersToChannel.js
* deleteUsersToChannel.js

## server.js
**server.js** is the main file that will run the server.

## data.json
This is my data structure:
{
    "users": [
        {
            "username": "super",
            "email": "super@com.au",
            "role": "superadmin"
        },
        {
            "username": "james",
            "email": "james@com.au",
            "role": "superadmin"
        },
        {
            "username": "group",
            "email": "group@com.au",
            "role": "groupadmin"
        },
        {
            "username": "groupass",
            "email": "groupass@com.au",
            "role": "groupassis"
        },
        {
            "username": "member1",
            "email": "member1@com.au",
            "role": "user"
        }
    ],
    "groups": [
        {
            "groupname": "2811ICT",
            "users": [
                "groupass",
                "member1"
            ]
        },
        {
            "groupname": "3811ICT",
            "users": []
        },
        {
            "groupname": "3813ICT",
            "users": []
        }
    ],
    "channels": [
        {
            "channelname": "Lab",
            "groupname": "2811ICT",
            "users": [
                "group"
            ]
        },
        {
            "channelname": "Assignment",
            "groupname": "2811ICT",
            "users": []
        }
    ]
}

## checkUser.js
This route returns **userValid** (true or false) to determine whether the user is in the data.json when the user enters the username.

## fetchUser.js
This route returns the information of the current logged-in **user** (username, email, and role).

## fetchAllUsers.js
This route returns the information for all **users** except the current logged-in user.

## addUser.js
The client user enters the username, email, and role. This route reads and writes data.json file, and checks wheher the user exists. Add the new user to the data.json file and return a **users** list.

## deleteUser.js
## fetchAllGroups.js
## addGroup.js
## deletegroup.js
## addUsersToGroup.js
## deleteUsersToGroup.js
## fetchAllChannels.js
## addChannel.js
## deleteChannel.js
## addUsersToChannel.js
## deleteUsersToChannel.js