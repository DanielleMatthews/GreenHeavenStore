const React = require('react')

class Show extends React.Component {
  render(){
    const plant = this.props.plant
    return (
        <div id="main">
        <link rel="stylesheet" href="/css/app.css" />
            <h1>{plant.name}</h1>
            <h3 id="showCare"> Care: {plant.care}</h3> 
            <ul>
                <li>
                <div id="info">
                  <p> Type: {plant.type} <br/>
                  Price: ${plant.price.toLocaleString("en-US")} <br/> </p>
                  The {plant.name} is {plant.petFriendly ? ' YES pet friendly!' : ' NOT pet friendly!'} <br/>
                  <br/>
                  There is {plant.qty > 0 ?  plant.qty  : ' NONE ' } in stock
                  <br/>
                  <form action={`/plants/${plant._id}?_method=PATCH`} method="POST">
                    {plant.qty > 0 ? <input id="buy" type="submit" value="BUY"/> : null }
                  </form>
                  <br/>
                  <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                    <input id="delete" type="submit" value="DELETE"/>
                  </form> 
                </div>
                
                <div> 
                  <img id="img" src = {`${plant.img}.jpg`} ></img> 
                </div> <br/>
                <br/> <br/> <br/>
                
                <a href={`/plants/${plant._id}/edit`}> Edit</a>
                <br/> <br/> <br/> <br/>
                <a href ="/plants"> See All Plants </a>
                </li>
            </ul>
        </div>
    )
  }
}

module.exports = Show