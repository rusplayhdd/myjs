let expect = require('chai').expect
require('chai').should()

let data = [{
    "name": "Carl",
    "age": "23",
    "job": "developer",
    "cars": [{
        "ferst": "bmv",
        "secont": "mers",
        "therd": "opel"
    }]
}]
// console.log(data);

describe("Chai testing", () => {
    it("how to work aasertions", () => {

        data[0].cars[0].should.have.property("ferst", "bmv")

        expect(data[0]).has.property("name").and.eql("Carl");

        data[0].should.have.property("job", "developer");
        data[0].should.have.property("name", "Carl");
        data[0].should.have.property("age", "23");


    })
})