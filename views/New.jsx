const React = require('react')

class New extends React.Component {
  render(){
    return (
      <div>
        <link rel="stylesheet" href="/css/app.css" />

        <h1> New Plant </h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /> <br/>
          Type: <inpput type="text" name="type"/> <br/>
          Image Link: <input type="text" name="img" /> <br/>
          Price: <inpput type="text" name="price"/> <br/>
          Stock: <inpput type="text" name="qty"/> <br/>
          Pet Friendly: <inpput type="checkbox" name="petFriendly"/> <br/>
          <input type="submit" name="" value="Create Pokemon"/>
        </form>
      </div>
    )
  }
}

module.exports = New