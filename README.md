# Mandi-API

Database used **MongoDB**


### Dependencies

```
body-parser
express
mongoose
nodemon

babel-cli
babel-preset-env
babel-preset-stage-0
```
Tests written for **Postman** for the `GET /reports?reportID=?`

```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Commodity Exists", function(){
    let jsonData = pm.response.json();
    pm.expect(jsonData.cmdtyName).to.be.a('string')
})


pm.test("Price is number", function(){
    let jsonData = pm.response.json();
    pm.expect(jsonData.price).to.be.a('number')
})
```
Tests written for **Postman** for the `POST /reports`

```
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```
