const React = require('react')

class New extends React.Component {
  render(){
    return (
      <div>
        <link rel="stylesheet" href="/css/app.css" />

        <h1> New Plant </h1>
        <form action="/plants" method="POST">
          Name: <input type="text" name="name" /> <br/>
          Type: <input type="text" name="type"/> <br/>
          Care: <input type="text" name="care"/> <br/>
          Image Link: <input type="text" name="img" /> <br/>
          Price: <input type="text" name="price"/> <br/>
          Stock: <input type="text" name="qty"/> <br/>
          Pet Friendly: <input type="checkbox" name="petFriendly"/> <br/>
          <input type="submit" name="" value="Create Plant"/>
        </form>
      </div>
    )
  }
}

module.exports = New