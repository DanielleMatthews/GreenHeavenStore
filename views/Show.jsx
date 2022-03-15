const React = require('react')

class Show extends React.Component {
  render(){
    const plant = this.props.plant
    return (
        <div id="main">
        <link rel="stylesheet" href="/css/app.css" />
            <h1>{plant.name}</h1>
            <ul>
                <li>
                <h3> Care: {plant.care}</h3> 
                <div id="info">
                <p> Type: {plant.type} <br></br>
                Price: ${plant.price} <br/> </p>
                The {plant.name} is {plant.petSafe ? ' YES pet friendly!' : ' NOT pet friendly!'} <br/>
                <br/>
                There are {plant.qty} in stock!! 
                <br/>
                <form action={`/plants/${plant._id}?_method=PATCH`} method="POST">
                  {plant.qty > 0 ? <input id="buy" type="submit" value="BUY"/> : null }
                </form>
                <br/>
                <form action={`/plants/${plant._id}?_method=DELETE`} method="POST">
                  <input id="delete" type="submit" value="DELETE"/>
                </form> 
                </div>

                <div id="img"> 
                <img src = {`${plant.img}.jpg`} height = "250px" width = "250px"></img> 
                </div> <br></br>
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