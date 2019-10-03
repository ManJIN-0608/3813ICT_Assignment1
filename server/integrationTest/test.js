var assert = require('assert');
var app = require('../server.js');
var chai = require('chai');
var chaihttp = require('chai-http');
var http = require('http');
var except = require('chai').expect;
var should = chai.should();
chai.use(chaihttp);

describe('Server test', function() {
    before(function(){
        console.log("before test");
    });
    after(function() {
        console.log("after test");
    });

    describe('/fetchAllUsers', () => {
        it('it should GET all the users', (done) => {
            chai.request(app)
                .post('/fetchAllUsers')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });
    });

    describe('/fetchAllGroups', () => {
        it('it should GET all the groups', (done) => {
            chai.request(app)
                .post('/fetchAllGroups')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });
    });

    describe('/fetchAllChannels', () => {
        it('it should GET all the channels', (done) => {
            chai.request(app)
                .post('/fetchAllChannels')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                 });
        });
    });

    describe('/addUser', () => {
        it('it should ADD a user', (done) => {
            chai.request(app)
                .post('/addUser')
                .type('form')
                .send({"username":"text","password":"111","email":"111@mail","role":"user"})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/addGroup', () => {
        it('it should ADD a group', (done) => {
            chai.request(app)
                .post('/addGroup')
                .type('form')
                .send({"groupname":"text","users":[]})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/addChannel', () => {
        it('it should ADD a channel', (done) => {
            chai.request(app)
                .post('/addChannel')
                .type('form')
                .send({"channelname":"text","groupname":"text", "users":[]})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/checkUser', () => {
        it('it should CHECK a user', (done) => {
            chai.request(app)
                .post('/checkUser')
                .type('form')
                .send({"username":"super","password":"123"})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/deleteUser', () => {
        it('it should DELETE a user', (done) => {
            chai.request(app)
                .post('/deleteUser')
                .type('form')
                .send({"username":"text"})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/deleteGroup', () => {
        it('it should DELETE a group', (done) => {
            chai.request(app)
                .post('/deleteGroup')
                .type('form')
                .send({"groupname":"text"})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/deleteChannel', () => {
        it('it should DELETE a channel', (done) => {
            chai.request(app)
                .post('/deleteChannel')
                .type('form')
                .send({"channelname":"text"})
                .end((err, res) => {
                    res.should.have.status(404);
                    // res.body.should.be.a('array');
                    done();
                });
        });
    });
})